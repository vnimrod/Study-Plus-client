import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from '../../../shared/form-elements/Input';
import Button from '../../../shared/form-elements/Button';

import { login } from '../../../store/actions/auth';

import './Login.css';
import { Redirect } from 'react-router-dom';

const Login = ({ login, isAuth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    login({email, password});
  };

  if(isAuth){
    return <Redirect to="/dashboard"/>
  }
  return (
    <form className="Login" onSubmit={formSubmitHandler}>
      <div className="Login__container">
        <div className="Login__container__input">
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
        </div>
        <div className="Login__container__button">
          <Button>Login</Button>
        </div>
        <div className="Login__container__signup">
          <span>Not registered?</span>
          <Button to="/register" exact="true" link>
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
