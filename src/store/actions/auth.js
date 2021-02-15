import axios from 'axios';

import * as actionTypes from './actionTypes';
import { validatorTypeAlert } from './validators';
import authContext from '../../shared/utils/helpers/authContext';

export const authStart = () => {
  return async (dispatch) => {
    if (localStorage.token) {
      authContext(localStorage.token);
    }
    try {
      const res = await axios.get(process.env.REACT_APP_BACKEND_URL + '/user/me');

      dispatch({
        type: actionTypes.AUTH_START,
        payload: res.data, //the user
      });
    } catch (err) {
      dispatch({
        type: actionTypes.AUTH_FAIL,
      });
    }
  };
};


export const register = ({ name, email, password }) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + '/user/signup',
        body,
        config
      );
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(authStart());
    } catch (err) {
      const errors = err.response.data.errors; // error arr
      if (errors) {
        errors.forEach((err) => dispatch(validatorTypeAlert(err.msg, 'error')));
      }
      dispatch({
        type: actionTypes.REGISTER_FAIL,
      });
    }
  };
};

export const login = ({ email, password }) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + '/user/login',
        body,
        config
      );
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(authStart());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((err) => dispatch(validatorTypeAlert(err.msg, 'error')));
      }
      dispatch({
        type: actionTypes.LOGIN_FAIL,
      });
    }
  };
};
