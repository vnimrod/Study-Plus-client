import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCourses } from '../../../store/actions/courses';
import StaticCourse from '../courseItem/StaticCourse';
import './CourseList.css';

const CourseList = ({ getCourses, auth, courses: { courses, loading } }) => {

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="CourseList">
      {courses.map((course) => {
        return (
          <StaticCourse
            cid = {course._id}
            courseName={course.courseName}
            courseInfo={course.courseInfo}
            color={course.color}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.courses,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCourses })(CourseList);
