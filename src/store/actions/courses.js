import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getCourse = (cid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/dashboard/course/${cid}/subjects`
      );
      dispatch({
        type: actionTypes.GET_COURSE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.COURSE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};

export const getCourses = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `/dashboard`
      );
      dispatch({
        type: actionTypes.GET_COURSES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.COURSE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};

export const createCourse = (formData) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + '/dashboard',
        formData,
        config
      );

      dispatch({
        type: actionTypes.CREATE_COURSE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.COURSE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};

export const deleteCourse = (cid) => {
  return async (dispatch) => {
    if (window.confirm('This action will delete this course. are you sure?')) {
      try {
        await axios.delete(
          process.env.REACT_APP_BACKEND_URL + `/dashboard/${cid}`
        );

        dispatch({
          type: actionTypes.DELETE_COURSE,
          payload: cid,
        });
      } catch (err) {
        dispatch({
          type: actionTypes.COURSE_ERROR,
          payload: {
            msg: err.response.statusText,
            status: err.response.status,
          },
        });
      }
    }
  };
};

export const updateCourse = (cid, formData) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.patch(
        process.env.REACT_APP_BACKEND_URL + `/dashboard/${cid}`,
        formData,
        config
      );

      dispatch({
        type: actionTypes.UPDATE_COURSE,
        // payload: { cid, course: res.data}
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.COURSE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};

export const getSubjects = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_URL + '/dashboard/course/subjects'
      );

      dispatch({
        type: actionTypes.GET_SUBJECTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SUBJECT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};

export const createSubject = (subjectName, cid) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + `/dashboard/course/${cid}/subjects`,
        subjectName,
        config
      );

      dispatch({
        type: actionTypes.CREATE_SUBJECT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SUBJECT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
};

export const deleteSubject = (cid, sid) => {
  return async (dispatch) => {
    if (window.confirm('This action will delete this subject. are you sure?')) {
      try {
        await axios.delete(
          process.env.REACT_APP_BACKEND_URL +
            `/dashboard/course/subjects/${cid}/${sid}`
        );
        dispatch({
          type: actionTypes.DELETE_SUBJECT,
          payload: sid,
        });
      } catch (err) {}
    }
  };
};

// Handle files

export const uploadFile = (formData, fileName, sid) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + `/dashboard/upload`,
        formData,
        config
      );

      dispatch({
        type: actionTypes.UPLOAD_FILE,
        payload: { file: { fid: res.data.id, fileName }, sid },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
