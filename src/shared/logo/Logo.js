import React from 'react';

import SLogo from '../../assets/study-plus__logo.PNG';
import './Logo.css';

const Logo = ({width, height}) => {
  return (
      <img className="Logo" src={SLogo} style={{ width, height}} />
  );
};

export default Logo;
