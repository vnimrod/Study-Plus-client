import React from 'react';

import NavBar from '../shared/nav-bar/NavBar'
import BackgroundSlice from '../shared/background-slice/BackgroundSlice';
import About from '../components/about/About'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <NavBar />
      <BackgroundSlice />
      <About />
    </div>
  );
};

export default LandingPage;
