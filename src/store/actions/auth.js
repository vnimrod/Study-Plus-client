import axios from 'axios';

import * as actionTypes from './actionTypes';

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
    } catch (err) {
      console.log(err);
      dispatch({
        type: actionTypes.REGISTER_FAIL,
      });
    }
  };
};
