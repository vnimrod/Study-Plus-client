import React from 'react';
import { connect } from 'react-redux';

import { deleteSubject } from '../../../store/actions/subjects';
import Button from '../../../shared/form-elements/Button';
import './StaticSubject.css';

const StaticSubject = ({ subjectName, sid, deleteSubject }) => {
  const deleteSubjectHandler = (sid) => {
    deleteSubject(sid);
  };

  return (
    <div className="StaticSubject">
      <div className="StaticSubject__items">
        <span>{subjectName}</span>
        <div className="StaticSubject__button">
          <Button type="button">Upload</Button>
          <Button onClick={() => deleteSubjectHandler(sid)} type="button">
            X
          </Button>
        </div>
      </div>

      <ul>
        <li>קובץ 1</li>
        <li>קובץ 2</li>
        <li>3 קובץ</li>
      </ul>
    </div>
  );
};

export default connect(null, { deleteSubject })(StaticSubject);
