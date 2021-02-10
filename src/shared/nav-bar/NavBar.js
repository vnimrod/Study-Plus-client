import React from 'react';

import NavigationItem from '../navigation/NavigationItem';
import Logo from '../logo/Logo';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="NavBarItem right">
          <Logo width="9vw" height="6vw"/>
        </div>
        <div className="NavBarItem middle">
          <span>Hello Guest</span>
        </div>
        <div className="NavBarItem left">
          {/* <span>Account</span> */}

          <NavigationItem offset={-10} type="scroll-link">
            About
          </NavigationItem>

          <NavigationItem type="link" to="/login">
            Login
          </NavigationItem>
          <NavigationItem type="link" to="/register">
            Register
          </NavigationItem>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
