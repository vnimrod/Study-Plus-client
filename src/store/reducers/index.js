import { combineReducers } from 'redux';

import auth from './auth';
import validators from './validators'
import courses from './courses'

export default combineReducers({
  auth,
  validators,
  courses
});
