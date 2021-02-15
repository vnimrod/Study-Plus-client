import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../store/actions/auth';
import { validatorTypeAlert } from '../../../store/actions/validators';

import Input from '../../../shared/form-elements/Input';
import Button from '../../../shared/form-elements/Button';
import './Register.css';
import { Redirect } from 'react-router-dom';

const Register = ({ register, validatorTypeAlert, isAuth }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      validatorTypeAlert('Please check you passwords: They dont match', "error");
    } else {
      register({ name, email, password });
    }
  };

  if(isAuth) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <form className="Register" onSubmit={formSubmitHandler}>
      <div className="Register__container">
        <div className="Register__container__input">
          <Input
            id="name"
            element="input"
            type="text"
            value={name}
            onChange={formChangeHandler}
            placeholder="User Name"
          />
          <Input
            id="email"
            element="input"
            type="text"
            value={email}
            onChange={formChangeHandler}
            placeholder="Email Address"
          />
          <Input
            id="password"
            element="input"
            value={password}
            onChange={formChangeHandler}
            type="password"
            placeholder="Password"
          />
          <Input
            id="password2"
            element="input"
            value={password2}
            onChange={formChangeHandler}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="Register__container__button">
          <Button>Sign Up</Button>
        </div>
        <div className="Register__container__signin">
          <span>Have an account?</span>
          <Button to="/login" exact="true" link>
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { register, validatorTypeAlert })(Register);
