import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { createSubject } from '../../../store/actions/subjects';
import Input from '../../../shared/form-elements/Input';
import Button from '../../../shared/form-elements/Button';
import './SubjectItem.css';

const SubjectItem = ({ createSubject }) => {
  const [subject, setSubject] = useState({
    subjectName: '',
  });
  const [staticSubject, setStaticSubject] = useState(false);

  const subjectHandler = (e) => {
    setSubject({ ...subject, subjectName: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setStaticSubject(!staticSubject);
    createSubject(subject);
  };

  return (
    <Fragment>
      {!staticSubject ? (
        <div className="SubjectItem">
          <form className="SubjectItem__form" onSubmit={formSubmitHandler}>
            <div className="SubjectItem__form__input">
              <Input
                onChange={subjectHandler}
                element="input"
                placeholder="Subject..."
                required
              />
              <Button type="submit">✔</Button>
            </div>
          </form>
        </div>
      ) : null}
    </Fragment>
  );
};

export default connect(null, { createSubject })(SubjectItem);
