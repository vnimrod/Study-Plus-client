import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteSubject } from '../../../store/actions/courses';
import reminder__icon from '../../../assets/about__icon.PNG';
import Button from '../../../shared/form-elements/Button';
import SubjectSummary from '../subjectSummary/SubjectSummary';
import './StaticSubject.css';

const StaticSubject = ({ subjectName, cid, sid, deleteSubject, color }) => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  const deleteSubjectHandler = (cid, sid) => {
    deleteSubject(cid, sid);
  };
console.log(clicked)
  return (
    <div style={{ backgroundColor: color }} className="StaticSubject">
      {clicked ? <SubjectSummary setClicked={setClicked}/> : null}
      <div className="StaticSubject__items">
        <div className="StaticSubject__items__header">
          <img onClick={onClick} src={reminder__icon}></img>

          <div className="StaticSubject__items__title">
            <span>
              {subjectName}
              <hr />
            </span>
          </div>
        </div>

        <ul>
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
          <li>קובץ 1</li>
          <li>קובץ 2</li>
          <li>3 קובץ</li>
        </ul>
        <div className="StaticSubject__button">
          <Button type="button">Upload</Button>
          <Button onClick={() => deleteSubjectHandler(cid, sid)} type="button">
            X
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteSubject })(StaticSubject);
