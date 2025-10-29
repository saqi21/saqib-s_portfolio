import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-center align-items-center">
        <p className="small mb-0 text-light">
          &copy; {currentYear} <span className="gradient-text">Saqib Zafar</span> — Design-driven. Quality-focused.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
