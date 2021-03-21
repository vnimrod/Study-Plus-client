import * as actionTypes from '../actions/actionTypes';

const initialState = {
  courses: [],
  course: null,
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
    case actionTypes.GET_COURSE:
      return {
        ...state,
        course: payload,
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
    case actionTypes.CREATE_SUBJECT:
      return {
        ...state,
        course: { ...state.course, subjects: payload },
        loading: false,
      };
    case actionTypes.DELETE_SUBJECT:
      return {
        ...state,
        course: {...state.course, subjects: state.course.subjects.filter((subject) => subject._id !== payload)},
        loading: false,
      };
    case actionTypes.UPLOAD_FILE:
      return{
        ...state,
        course: {...state.course, subjects: state.course.subjects.map((subject)=>
          subject._id === payload.sid ? {...subject, files: payload.file} : subject
        )}
      }
    default:
      return state;
  }
};

export default course;
