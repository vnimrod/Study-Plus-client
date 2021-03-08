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
      <span>{subjectName}</span>
      <Button type="button">Upload</Button>
      <Button onClick={() => deleteSubjectHandler(sid)} type="button">
        X
      </Button>
    </div>
  );
};

export default connect(null, { deleteSubject })(StaticSubject);
