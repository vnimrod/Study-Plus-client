import React, {useState} from 'react';

import Button from '../../../shared/form-elements/Button'
import './SubjectSummary.css';

const SubjectSummary = ({setClicked}) => {

  const [roll, setRoll] = useState("rollIn");
  
  const rollOutHandler = () => {
    setRoll("rollOut")
    setTimeout(()=>{
      setClicked(false);
    },1000)
  }

  return (
    <div className={`animated ${roll}`}>
      <p>על הקורס</p>
      <Button onClick={rollOutHandler}>X</Button>
    </div>
  );
};

export default SubjectSummary;
