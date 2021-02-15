import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={
          !props.classNameNull
            ? `button ${props.inverse && 'button--inverse'} ${
                props.danger && 'button--danger'
              }`
            : null
        }
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        onClick={props.onClick}
        className={`button button--${props.inverse && 'button--inverse'} ${
          props.danger && 'button--danger'
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      style={props.style}
      className={`button button--${props.inverse && 'button--inverse'} ${
        props.danger && 'button--danger'
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
