import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCourse } from '../store/actions/courses';
import Button from '../shared/form-elements/Button';
import SubjectItem from '../components/subject/subjectItem/SubjectItem';
import SubjectList from '../components/subject/subjectList/SubjectList';
import Spinner from '../shared/spinner/Spinner';
import './CoursePage.css';

const CoursePage = ({ getCourse, courses }) => {
  const { coursename, cid } = useParams();

  useEffect(() => {
    getCourse(cid);
  }, []);

  const [newSubject, setNewSubject] = useState([]);

  const newCourseHandler = () => {
    setNewSubject([...newSubject, <SubjectItem key={newSubject.length} />]);
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
        {courses.loading ? (
          <Spinner />
        ) : (
          <SubjectList
            color={courses.course !== null ? courses.course.color : null}
            subjects={courses.course !== null ? courses.course.subjects : null}
            cid={cid}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  subjects: state.subjects,
  courses: state.courses,
});

export default connect(mapStateToProps, { getCourse })(CoursePage);
