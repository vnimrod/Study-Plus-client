import React, { useEffect } from 'react';

import StaticSubject from '../subjectItem/StaticSubject';
import './SubjectList.css';

const SubjectList = ({ subjects }) => {
  return (
    <div className="SubjectList">
      {subjects.map((subject) => {
        return (
          <StaticSubject
            key={subject._id}
            sid={subject._id}
            subjectName={subject.subjectName}
          />
        );
      })}
    </div>
  );
};

export default SubjectList;
