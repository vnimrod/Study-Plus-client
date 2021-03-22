import React from 'react';

import StaticSubject from '../subjectItem/StaticSubject';
import './SubjectList.css';

const SubjectList = ({ subjects, cid, color }) => {
  return (
    <div className="SubjectList">
      {subjects !== null
        ? subjects.map((subject) => {
            return (
              <StaticSubject
                key={subject._id}
                cid={cid}
                sid={subject._id}
                subjectName={subject.subjectName}
                color={color}
                files={subject.files}
              />
            );
          })
        : null}
    </div>
  );
};

export default SubjectList;
