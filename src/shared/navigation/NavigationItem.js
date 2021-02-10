import React from 'react';

import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const NavigationItem = ({ type, children, offset, to, exact, onClick }) => {
  return type === 'scroll-link' ? (
    <ScrollLink offset={offset} to="about" spy={true} smooth={true}>
      {children}
    </ScrollLink>
  ) : (
    <Link onClick={onClick} to={to} exact={exact}>
      {children}
    </Link>
  );
};

export default NavigationItem;
