import React, { useEffect } from 'react';

import StaticSubject from '../subjectItem/StaticSubject';
import './SubjectList.css';

const SubjectList = ({ subjects, cid, courses }) => {
  console.log(subjects)
  return (
    <div className="SubjectList">
      {subjects !== undefined ? subjects.map((subject) => {
        return (
          <StaticSubject
            key={subject._id}
            cid={cid}
            sid={subject._id}
            subjectName={subject.subjectName}
          />
        );
      }): null}
    </div>
  );
};

export default SubjectList;
