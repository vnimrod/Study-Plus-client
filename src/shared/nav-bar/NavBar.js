import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavigationItem from '../navigation/NavigationItem';
import Logo from '../logo/Logo';
import './NavBar.css';

const NavBar = ({ auth: { isAuth, user } }) => {
  return (
    <nav>
      <div className="NavBarItem right">
        <Logo width="6vw" height="3.5vw" />
      </div>
      <div className="NavBarItem middle">
        <span className="NavBarItem__user-name"> Hello {isAuth ? user.name : 'Guest'} :)</span>
      </div>
      <div className="NavBarItem left">
        {!isAuth ? (
          <Fragment>
            <NavigationItem type="link" to="/login">
              Login
            </NavigationItem>
            <NavigationItem type="link" to="/register">
              Register
            </NavigationItem>
          </Fragment>
        ) : (
          <NavigationItem type="link" to="/dashboard">
            Dashboard
          </NavigationItem>
        )}
        <NavigationItem offset={-10} type="scroll-link">
          About
        </NavigationItem>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(NavBar);
