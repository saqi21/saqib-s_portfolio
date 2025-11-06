import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-3">
      <div className="container d-flex justify-content-center align-items-center">
        <p className="small mb-0 text-light">
          &copy; {currentYear} Created With <i className="ti-heart text-danger"></i> By
          <a href="https://saqi21.github.io/saqib-s_portfolio/">
            <span className="text-danger" title="Bootstrap 4 Themes and Dashboards">SaQiB</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
