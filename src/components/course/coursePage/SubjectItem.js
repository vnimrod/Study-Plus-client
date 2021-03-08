import React, { Fragment, useState } from 'react';

import Input from '../../../shared/form-elements/Input';
import Button from '../../../shared/form-elements/Button';
import './SubjectItem.css';

const SubjectItem = () => {
  const [subject, setSubject] = useState('');
  const [staticSubject, setStaticSubject] = useState(false);

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setStaticSubject(!staticSubject);
  };

  return (
    <div className="SubjectItem">
      <form className="SubjectItem__form" onSubmit={formSubmitHandler}>
        <div className="SubjectItem__form__input">
          {!staticSubject ? (
            <Fragment>
              <Input
                onChange={subjectHandler}
                element="input"
                placeholder="Subject..."
                required
              />
              <Button type="submit">✔</Button>
            </Fragment>
          ) : (
            <Fragment>
              <span>{subject}</span>
              <Button type="button">Upload</Button>
              <Button type="button">X</Button>
            </Fragment>
          )}
        </div>
      </form>
    </div>
  );
};

export default SubjectItem;
