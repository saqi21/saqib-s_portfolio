import React from 'react';
import { PersonalInfo } from '../../types';
import './Navigation.css';

interface NavigationProps {
  personalInfo: PersonalInfo;
}

const Navigation: React.FC<NavigationProps> = ({ personalInfo }) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
      <div className="container">
        <button 
          className="navbar-toggler ml-auto" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">Resume</a>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            <img src="/assets/imgs/avatar.jpg" alt="Saqib Zafar" className="brand-img" />
            <li className="brand-txt">
              <h5 className="brand-title">Saqib Zafar</h5>
              <div className="brand-subtitle">Front End & Software Quality Assurance Engineer</div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#service" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link">Articles</a>
            </li>
            <li className="nav-item last-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
