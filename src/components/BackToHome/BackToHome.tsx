import React from 'react';
import { Link } from 'react-router-dom';
import './BackToHome.css';

const BackToHome: React.FC = () => {
  return (
    <Link to="/" className="back-to-home-btn">
      <i className="fas fa-home"></i>
      <span>Back to Home</span>
    </Link>
  );
};

export default BackToHome;

