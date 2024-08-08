import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../css/baseLayout.css';
import logo from '../assets/images/profile.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content-wrapper">
        <div className="left-column">
          <img src={logo} alt="Profile" className="logo" />
          <h1 className="name">Jay Karavadra</h1>
          <h2 className="position">Jr. Node.js Developer</h2>
          <div className="cta-container">
            <Link to="/" className="cta-button">About Me</Link>
            <Link to="/my-work" className="cta-button">View My Work</Link>
            <Link to="/contact-me" className="cta-button secondary">Contact Me</Link>
          </div>
        </div>
        <div className="right-column">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;