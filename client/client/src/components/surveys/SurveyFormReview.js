import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom'
// Need to DRY this code
const surveyFormReview = ({ onCancel,formValues,submitSurvey, history }) => {
  
  
  return (
      <div>
          <h5>Lets review your form</h5>
          <div> 
            <div> 
              <label>Survey Title </label>
             <div> {formValues.title}</div>
            </div>
            <div> 
              <label>Subject Line </label>
             <div> {formValues.subject}</div>
            </div>
            <div> 
              <label>Email Body</label>
              <div> {formValues.body}</div>
            </div>
            <div> 
              <label>Recipient</label>
              <div> {formValues.recipients}</div>
            </div>
          </div>

          
          <button
          className = "yellow darken-3 btn-flat white-text" 
          onClick = {onCancel}
          >
           Back
          </button>

          <button 
          onClick = {() => submitSurvey(formValues,history)}
          className ="blue btn-flat right white-text">
          Send Survey
          <i className = "material-icons right email"> email </i>
          </button>
      </div>
    )
}

function mapStateToProps({ form }){
 return {formValues: form.surveyForm.values}
}

export default connect(mapStateToProps,actions)(withRouter(surveyFormReview))