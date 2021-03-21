import React, { useState } from 'react';

import Button from '../../../shared/form-elements/Button';
import './SubjectSummary.css';

const SubjectSummary = ({ setClicked }) => {
  const [roll, setRoll] = useState('rollIn');

  const rollOutHandler = () => {
    setRoll('rollOut');
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <div className={`SubjectSummary ${roll}`}>
      <div className="SubjectSummary__items">
        <Button onClick={rollOutHandler}>X</Button>
        <div className="SubjectSummary__items__title">
          <span>Summary</span>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SubjectSummary;
