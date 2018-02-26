import React from 'react'
import { connect } from 'react-redux'
import FIELDS from './formFields'

const surveyReview = ({ onCancel, formValues }) => {
  
  return (
      <div>
          <h5>Lets review your form</h5>
          <div> 
            <div> 
              <label>Survey Title </label>
              hello
            </div>
          </div>

          
          <button
          className = "yellow darken-3 btn-flat" 
          onClick = {onCancel}
          >
           Cancel
          </button>
      </div>
    )
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values } // grabbing our "surveyForm" state from redux-form
}

export default connect()(surveyReview)