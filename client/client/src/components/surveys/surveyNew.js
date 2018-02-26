import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form'

class SurveyNew extends Component {
	//Adding another way of navigation from survey form to survey form review

  constructor(){
    super()
      this.state = {
        showReview: false
      }
  }
  renderContent(){
    if (this.state.showReview){
      return <SurveyFormReview
      onCancel = {() => this.setState({showReview: false})} // So user can go back 
      />
    }
    return  <SurveyForm 
      onSurveySubmit={() => this.setState({showReview: true})} // passing this down to survey form
    />
      
  }

  render(){
		return(
			<div>
      {this.renderContent()}
       </div>
			)
	}
}

export default reduxForm({
  form:'surveyForm'
})(SurveyNew)