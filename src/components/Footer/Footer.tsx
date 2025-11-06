import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-copyright">
              &copy; {currentYear} <span className="footer-name">Saqib Zafar</span>. All rights reserved.
            </p>
            <p className="footer-credits">
              Made with <i className="fas fa-heart footer-heart"></i> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
