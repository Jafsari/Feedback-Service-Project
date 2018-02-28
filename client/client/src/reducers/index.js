import { combineReducers } from 'redux';
import auth from './authReducer'
import { reducer as form} from 'redux-form'
import surveyReducers from './surveysReducer'
export default combineReducers({
  auth,
  form,
  surveys:surveyReducers
});