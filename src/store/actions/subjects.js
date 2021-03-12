// import axios from 'axios';
// import * as actionTypes from './actionTypes';

// export const getSubjects = () => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get(
//         process.env.REACT_APP_BACKEND_URL + '/dashboard/course/subjects'
//       );

//       dispatch({
//         type: actionTypes.GET_SUBJECTS,
//         payload: res.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: actionTypes.SUBJECT_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status },
//       });
//     }
//   };
// };

// export const createSubject = (subjectName, cid) => {
//   return async (dispatch) => {
//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };
      
//       const res = await axios.post(
//         process.env.REACT_APP_BACKEND_URL + `/dashboard/course/${cid}/subjects`,
//         subjectName,
//         config
//       );
 
//       dispatch({
//         type: actionTypes.CREATE_SUBJECT,
//         payload: res.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: actionTypes.SUBJECT_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status },
//       });
//     }
//   };
// };

// export const deleteSubject = (cid, sid) => {
//   return async (dispatch) => {
//     if (window.confirm('This action will delete this subject. are you sure?')) {
//       try {
//         await axios.delete(
//           process.env.REACT_APP_BACKEND_URL + `/dashboard/course/subjects/${cid}/${sid}`
//         );
//         dispatch({
//           type: actionTypes.DELETE_SUBJECT,
//           payload: sid,
//         });
//       } catch (err) {}
//     }
//   };
// };
