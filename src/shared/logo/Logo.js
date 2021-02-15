import React from 'react';
import { Link } from 'react-router-dom';

import SLogo from '../../assets/study-plus__logo.PNG';
import './Logo.css';

const Logo = ({ width, height }) => {
  return (
    <Link to="/">
      <img className="Logo" src={SLogo} style={{ width, height }} />
    </Link>
  );
};

export default Logo;
