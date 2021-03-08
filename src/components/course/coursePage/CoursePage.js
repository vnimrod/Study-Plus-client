import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../../shared/form-elements/Button';
import SubjectItem from './SubjectItem';
import './CoursePage.css';

const CoursePage = () => {
  const { cid, coursename } = useParams();
  const [newSubject, setNewSubject] = useState([]);

  const newCourseHandler = () => {
    setNewSubject([...newSubject, <SubjectItem />]);
  };

  return (
    <div className="CoursePage">
      <div className="CoursePage__header">
        <Button to="/dashboard">🡸</Button>
        <Button onClick={newCourseHandler} type="button">
          ✚
        </Button>
        <span>{coursename}</span>
      </div>
      <div className="CoursePage__new-subject">{newSubject}</div>
    </div>
  );
};

export default CoursePage;
