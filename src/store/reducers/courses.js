import * as actionTypes from '../actions/actionTypes';

const initialState = {
  courses: [],
  loading: true,
  error: {},
};

const course = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CREATE_COURSE:
    case actionTypes.UPDATE_COURSE:
      return {
        ...state,
        courses: [...state.courses, payload],
        loading: false,
      };
    case actionTypes.GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false,
      };
    case actionTypes.COURSE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case actionTypes.DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter((course) => course._id !== payload),
        loading: false,
      };

    default:
      return state;
  }
};

export default course;
