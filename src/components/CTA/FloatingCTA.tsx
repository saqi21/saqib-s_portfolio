import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingCTA.css';

const FloatingCTA: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <div className="floating-cta">
      <a href="/contact" className="floating-cta-button" onClick={handleClick}>
        <i className="fas fa-comments"></i>
        <span>Hire Me</span>
      </a>
    </div>
  );
};

export default FloatingCTA;

