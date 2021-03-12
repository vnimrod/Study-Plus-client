import React from 'react';
import { connect } from 'react-redux';

import { deleteSubject } from '../../../store/actions/courses';
import Button from '../../../shared/form-elements/Button';
import './StaticSubject.css';

const StaticSubject = ({ subjectName, cid, sid, deleteSubject }) => {
  const deleteSubjectHandler = (cid, sid) => {
    deleteSubject(cid, sid);
  };
  
  return (
    <div className="StaticSubject">
      <div className="StaticSubject__items">
        <span className="StaticSubject__items__title">{subjectName}<hr/></span>
        <ul>
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
        </ul>
        <div className="StaticSubject__button">
          <Button type="button">Upload</Button>
          <Button onClick={() => deleteSubjectHandler(cid, sid)} type="button">
            X
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteSubject })(StaticSubject);
