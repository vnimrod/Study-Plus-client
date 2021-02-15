import React, { useState } from 'react';

import CourseItem from '../course/courseItem/CourseItem';
import Button from '../../shared/form-elements/Button';
import CourseList from '../course/courseList/CourseList';
import './Dashboard.css';

const Dashboard = () => {
  const [newCourse, setNewCourse] = useState([]);

  const newCourseHandler = () => {
    setNewCourse([...newCourse, <CourseItem />]);
  };

  return (
    <div className="Dashboard">
      <div className="Dashboard__button">
        <Button type="button" onClick={newCourseHandler}>
          Create New Course
        </Button>
      </div>

      <div className="Dashboard__new-course-arr">{newCourse}</div>
      <CourseList />
    </div>
  );
};

export default Dashboard;
