import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmail'
import FIELDS from './formFields'


class SurveyForm extends Component {

  renderFields() {
    return FIELDS.map(({ label, name }) => { // iterating through the FIELDS array to render the inputs
      return <Field key={name} component={SurveyField} type ="text" label={label} name ={name} />
    })
  }
  render(){
		return(
			<div>
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
      {this.renderFields()}
      <Link  to="/surveys" className ="blue btn-flat left white-text">
        Cancel
      </Link>
        <button 
        className ="blue btn-flat right white-text" 
        type="submit"> Next 
        <i className = "material-icons right">arrow_forward</i>
        </button>
        </form>
       </div>
			)
	}
}

function validate(values) {
  const errors = {};
  FIELDS.forEach(({ name }) => {
      if (!values[name]){
        errors[name] = " Please provide a value"
      }
  });

  errors.recipients = validateEmails(values.recipients || '')

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm)