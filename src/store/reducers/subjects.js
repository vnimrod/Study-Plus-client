// import * as actionTypes from '../actions/actionTypes';

// const initialState = {
//   subjects: [],
//   loading: true,
//   error: {},
// };

// const subject = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
    // case actionTypes.CREATE_SUBJECT:
    //   return {
    //     ...state,
    //     subjects: [...state.subjects, payload],
    //     loading: false,
    //   };
    // case actionTypes.GET_SUBJECTS:
    //   return {
    //     ...state,
    //     subjects: payload,
    //     loading: false
    //   }
//     case actionTypes.DELETE_SUBJECT:
//       return {
//         ...state,
//         subjects: state.subjects.filter((subject) => subject._id !== payload),
//         loading:false,
//       }
//     default:
//       return state;
//   }
// };

// export default subject;