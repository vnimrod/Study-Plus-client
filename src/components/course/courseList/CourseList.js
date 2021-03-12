import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { getCourses } from '../../../store/actions/courses';
import StaticCourse from '../courseItem/StaticCourse';
import Spinner from '../../../shared/spinner/Spinner';
import './CourseList.css';

const CourseList = ({ getCourses, courses: { courses, loading } }) => {
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="CourseList">
      {!loading ? (
        courses.map((course) => {
          return (
            <StaticCourse
              key={course._id}
              cid={course._id}
              courseName={course.courseName}
              courseInfo={course.courseInfo}
              color={course.color}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

export default connect(mapStateToProps, { getCourses })(CourseList);
