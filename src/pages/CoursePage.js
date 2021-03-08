import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getSubjects } from '../store/actions/subjects';
import Button from '../shared/form-elements/Button';
import SubjectItem from '../components/subject/subjectItem/SubjectItem';
import SubjectList from '../components/subject/subjectList/SubjectList';
import Spinner from '../shared/spinner/Spinner';
import './CoursePage.css';

const CoursePage = ({ getSubjects, subjects: { subjects, loading } }) => {
  useEffect(() => {
    getSubjects();
  },[]);

  const { coursename } = useParams();
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
      <div className="CoursePage__new-subject">
        <div>{newSubject}</div>
        {!loading ? <SubjectList subjects={subjects} /> : <Spinner />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  subjects: state.subjects,
});

export default connect(mapStateToProps, { getSubjects })(CoursePage);
