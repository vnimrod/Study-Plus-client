import { combineReducers } from 'redux';

import auth from './auth';
import validators from './validators'
import courses from './courses'
import subjects from './subjects'

export default combineReducers({
  auth,
  validators,
  courses,
  subjects
});
