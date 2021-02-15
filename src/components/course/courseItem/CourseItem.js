import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import {connect } from 'react-redux';

import Input from '../../../shared/form-elements/Input';
import Button from '../../../shared/form-elements/Button';
import {createCourse} from '../../../store/actions/courses';
import {updateCourse} from '../../../store/actions/courses'
import './CourseItem.css';

const CourseItem = ({ createCourse, updateCourse, cid, editCourse, course, Info, backgroundColor, isEditColor, setIsEditColor, setShowStaticOnUpdatePressed}) => {

  const [formData, setFormData] = useState({
    courseName: '',
    courseInfo: '',
    color: '#FFFFFF',
  });

  //First get inputs field when edit course pressed only
  useEffect(() => {
    editCourse && setFormData({...formData, courseName: course, courseInfo:Info, color:backgroundColor})
  },[editCourse])

  const [background, setBackground] = useState('#FFFFFF');
  const [isClicked, setIsClicked] = useState(false);
  const [isCreateCourse, setIsCreateCourse] = useState(false)
  
  // const { courseName, courseInfo } = formData;

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsCreateCourse(!isCreateCourse);
    createCourse(formData);
    
  };


  const colorHandler = (color, e) => {
    setBackground(color.hex);
    setFormData({ ...formData, color: background });
    if(isEditColor) {
      setIsEditColor(false)
    }
  };

  const colorClickedHandler = () => {
    setIsClicked(!isClicked);
  };

  const updateCourseHandler = (e) => {
    updateCourse(cid, formData)
    setIsCreateCourse(!isCreateCourse)
    setShowStaticOnUpdatePressed(false)
  }



  return (
    <form style={{ display: isCreateCourse ? 'none' : 'inherit' }} autoComplete="off" className="CourseItem" onSubmit={formSubmitHandler}>
      <div className="CourseItem__container" style={{ background: isEditColor ? backgroundColor : background }}>
          <label>Course:</label>
          <Input
            id="courseName"
            element="input"
            type="text"
            // value={courseName}
            defaultValue={course}
            onChange={formChangeHandler}
            placeholder="Course Name"
            required
            maxlength="40"
          />
          <label>About:</label>
          <Input
            id="courseInfo"
            element="input"
            type="text"
            // value={courseInfo}
            defaultValue={Info}
            onChange={formChangeHandler}
            placeholder="Course information"
            maxlength="40"
          />
          <div className="CourseItem__container__button">
            <Button type="button" onClick={colorClickedHandler}>
              Color
            </Button>
            {
              editCourse ? <Button onClick={updateCourseHandler} type="button">Update</Button> :<Button type="submit">✓</Button>
            }
            
          </div>
      </div>
  
      <div className="CourseItem__container__input"></div>
      <div className="CourseItem__color-picker">
        {isClicked ? (
          <ChromePicker disableAlpha={true} color={isEditColor ? backgroundColor : background} onChange={colorHandler} />
        ) : null}
      </div>
    </form>
  );
};

export default connect(null, {createCourse, updateCourse})(CourseItem);
