import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const validators = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.VALIDATOR_TYPE_ALERT:
      return [
        ...state,
        payload,
      ];
    case actionTypes.VALIDATOR_TYPE_REMOVE:
      return state.filter((alertMsg) => alertMsg.id !== payload);
    default:
      return state;
  }
};

export default validators;