import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createSubject } from '../../../store/actions/courses';
import Input from '../../../shared/form-elements/Input';
import Button from '../../../shared/form-elements/Button';
import './SubjectItem.css';

const SubjectItem = ({ createSubject }) => {
  const [subject, setSubject] = useState({
    subjectName: '',
  });
  const [staticSubject, setStaticSubject] = useState(false);
  const { cid } = useParams();

  const subjectHandler = (e) => {
    setSubject({ ...subject, subjectName: e.target.value });
  };

  const formSubmitHandler = (e, cid) => {
    e.preventDefault();
    setStaticSubject(!staticSubject);
    createSubject(subject, cid);
  };

  return (
    <Fragment>
      {!staticSubject ? (
        <div className="SubjectItem">
          <form
            className="SubjectItem__form"
            onSubmit={(e) => formSubmitHandler(e, cid)}
          >
            <div className="SubjectItem__form__input">
              <Input
                onChange={subjectHandler}
                element="input"
                placeholder="Subject..."
                maxLength="40"
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
