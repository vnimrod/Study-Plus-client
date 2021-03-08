import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../../shared/form-elements/Button';
import CourseItem from './CourseItem';
import { deleteCourse } from '../../../store/actions/courses';
import NavigationItem from '../../../shared/navigation/NavigationItem';
import './StaticCourse.css';

const StaticCourse = ({ deleteCourse, cid, courseName, courseInfo, color }) => {
  const [editCourse, setEditCourse] = useState(false);
  const [isEditColor, setIsEditColor] = useState(true);
  const [showStaticOnUpdatePressed, setShowStaticOnUpdatePressed] = useState(
    false
  );

  const deleteCourseHandler = () => {
    deleteCourse(cid);
  };

  const editCourseHandler = () => {
    setEditCourse(true);
    setShowStaticOnUpdatePressed(true);
  };

  return (
    <Fragment>
      <div
        className="StaticCourse"
        style={{
          background: color,
          display: /* showStaticOnUpdatePressed ?*/ editCourse
            ? 'none'
            : 'inherit',
        }}
      >
        <NavigationItem to={`/dashboard/course/${courseName}/subjects`}>
          <div className="StaticCourse__span-title">
            <span id="title">Course:</span>
            <span>{courseName}</span>
          </div>
          <div className="StaticCourse__span-title">
            <span id="title">About:</span>
            <span>{courseInfo}</span>
          </div>
        </NavigationItem>
        
        <div className="StaticCourse__button">
          <Button onClick={editCourseHandler} type="button">
            edit
          </Button>
          <Button onClick={deleteCourseHandler} type="button">
            X
          </Button>
        </div>
      </div>
      <div
        className="StaticCourse__edit"
        style={{ display: editCourse ? 'inherit' : 'none' }}
      >
        <CourseItem
          setShowStaticOnUpdatePressed={setShowStaticOnUpdatePressed}
          editCourse={editCourse}
          course={courseName}
          Info={courseInfo}
          backgroundColor={color}
          isEditColor={isEditColor}
          setIsEditColor={setIsEditColor}
          cid={cid}
        />
      </div>
    </Fragment>
  );
};

export default connect(null, { deleteCourse })(StaticCourse);
