import React, { useState } from 'react';

import CourseItem from '../course/courseItem/CourseItem';
import Button from '../../shared/form-elements/Button';
import CourseList from '../course/courseList/CourseList';
import Logo from '../../shared/logo/Logo';
import './Dashboard.css';

const Dashboard = () => {
  const [newCourse, setNewCourse] = useState([]);

  const newCourseHandler = () => {
    setNewCourse([...newCourse, <CourseItem />]);
  };

  return (
    <div className="Dashboard">
      <div className="Dashboard__header">
        <div className="Dashboard__button">
          <Logo width="6vw" height="3.5vw" />
          <Button type="button" onClick={newCourseHandler}>
            New Course
          </Button>
        </div>
      </div>

      <div className="Dashboard__courses">
        <div className="Dashboard__new-course-arr">{newCourse}</div>
        <CourseList />
      </div>
    </div>
  );
};

export default Dashboard;
