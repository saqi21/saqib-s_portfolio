import React from 'react';
import { PersonalInfo } from '../../types';
import './Header.css';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="modern-header">
      {/* Background Elements */}
      <div className="header-bg">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-brand">
              <div className="brand-avatar">
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/avatar.jpg`} alt="Saqib Zafar" />
              </div>
              <div className="brand-text">
                <h4>Saqib Zafar</h4>
                <span>Frontend & QA Engineer</span>
              </div>
            </div>
            
            <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#resume" className="nav-link">Resume</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#articles" className="nav-link">Articles</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-greeting">
                <span className="greeting-text">Hello, I'm</span>
                <div className="greeting-line"></div>
              </div>
              
              <h1 className="hero-title">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              
              <h2 className="hero-subtitle">
                {personalInfo.title}
              </h2>
              
              <p className="hero-description">
                Passionate about creating exceptional user experiences through 
                frontend development and ensuring software quality through 
                comprehensive testing strategies.
              </p>
              
              <div className="hero-actions">
                <a 
                  href={`${process.env.PUBLIC_URL}/resume/Saqib_Zafar_Resume.pdf`} 
                  className="btn btn-primary"
                  target="_blank"
                  download="Saqib_Zafar_Resume.pdf"
                >
                  <i className="fas fa-download"></i>
                  Download Resume
                </a>
                <a href="#contact" className="btn btn-outline">
                  <i className="fas fa-envelope"></i>
                  Get In Touch
                </a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="hero-image-container">
                <div className="hero-image">
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/header.jpg`} alt="Saqib Zafar" />
                </div>
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <i className="fas fa-code"></i>
                    <span>Frontend Dev</span>
                  </div>
                  <div className="floating-card card-2">
                    <i className="fas fa-bug"></i>
                    <span>QA Testing</span>
                  </div>
                  <div className="floating-card card-3">
                    <i className="fas fa-rocket"></i>
                    <span>Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="hero-social">
            <div className="social-links">
              {personalInfo.socialLinks.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.platform}
                >
                  <i className={`fab fa-${link.platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </header>
  );
};

export default Header;
