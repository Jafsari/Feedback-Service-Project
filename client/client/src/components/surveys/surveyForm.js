import React, { Component } from 'react';
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'

const FIELDS = [
{label: 'Survey Title', name:'Title'},
{label: 'Subject Line', name:'Line'},
{label: 'Email Body', name:'Body'},
{label: 'Recipient List', name:'Emails'}
];

class SurveyForm extends Component {

  renderFields() {
    return _.map(FIELDS,({ label, name }) => { // iterating through the FIELDS array to render the inputs
      return <Field key={name} component={SurveyField} type ="text" label={label} name ={name} />
    })
  }
  render(){
		return(
			<div>
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
      {this.renderFields()}
        <button type="submit"> Submit </button>
        </form>
       </div>
			)
	}
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)