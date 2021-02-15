import * as actionTypes from './actionTypes';
import { v4 as uuid } from 'uuid';

export const validatorTypeAlert = (alertMsg, alertType) => {
  return async (dispatch) => {
    const id = uuid();
    dispatch({
      type: actionTypes.VALIDATOR_TYPE_ALERT,
      payload: { alertMsg, alertType, id },
    });

    setTimeout(
      () => dispatch({ type: actionTypes.VALIDATOR_TYPE_REMOVE, payload: id }),
      5000
    );
  };
};
