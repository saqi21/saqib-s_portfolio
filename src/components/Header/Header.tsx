import React, { useState, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { PersonalInfo } from '../../types';
import { getAssetPath } from '../../utils/assets';
import './Header.css';

interface HeaderProps {
  personalInfo: PersonalInfo;
  showHero?: boolean; // New prop to control hero visibility
}

const Header: React.FC<HeaderProps> = ({ personalInfo, showHero = true }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const dropdownMenuRef = React.useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    // On mobile, toggle on click instead of hover
    if (isMobile) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  // Update dropdown position synchronously before paint to prevent sliding
  useLayoutEffect(() => {
    if (isDropdownOpen && dropdownRef.current && dropdownMenuRef.current) {
      const trigger = dropdownRef.current;
      const menu = dropdownMenuRef.current;
      const rect = trigger.getBoundingClientRect();
      const leftPosition = rect.left + rect.width / 2;
      menu.style.top = `${rect.bottom + 4}px`;
      menu.style.left = `${leftPosition}px`;
      menu.style.transform = 'translateX(-50%)';
    }
  }, [isDropdownOpen]);

  // Update dropdown position on scroll/resize
  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current && dropdownMenuRef.current) {
      const updatePosition = () => {
        const trigger = dropdownRef.current;
        const menu = dropdownMenuRef.current;
        if (trigger && menu) {
          const rect = trigger.getBoundingClientRect();
          const leftPosition = rect.left + rect.width / 2;
          menu.style.top = `${rect.bottom + 4}px`;
          menu.style.left = `${leftPosition}px`;
          menu.style.transform = 'translateX(-50%)';
        }
      };
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isDropdownOpen]);

  return (
    <header className={`modern-header ${!showHero ? 'compact-header' : ''}`}>
      {/* Background Elements - Only show on home page */}
      {showHero && (
        <div className="header-bg">
          <div className="gradient-overlay"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="header-nav">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-brand-link">
              <div className="nav-brand">
                <div className="brand-avatar">
                  <img src={getAssetPath('/assets/imgs/avatar.jpg')} alt="Saqib Zafar" />
                </div>
                <div className="brand-text">
                  <h4>Saqib Zafar</h4>
                  <span>Frontend & QA Engineer</span>
                </div>
              </div>
            </Link>

            {isMobileMenuOpen && isMobile && typeof document !== 'undefined' && createPortal(
              <>
                <div 
                  className="mobile-menu-backdrop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-hidden="true"
                ></div>
                <div className={`nav-links mobile-open`}>
                  <Link to="/about" className={`nav-link ${location.pathname === '/about' || location.pathname === '/saqib-s_portfolio/about' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                  <Link to="/resume" className={`nav-link ${location.pathname === '/resume' || location.pathname === '/saqib-s_portfolio/resume' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Resume</Link>
                  <div className="nav-dropdown" ref={dropdownRef}>
                    <span 
                      className={`nav-link dropdown-toggle ${isDropdownOpen ? 'open' : ''} ${location.pathname === '/services' || location.pathname === '/saqib-s_portfolio/services' || location.pathname === '/case-studies' || location.pathname === '/saqib-s_portfolio/case-studies' || location.pathname.startsWith('/case-studies/') || location.pathname.startsWith('/saqib-s_portfolio/case-studies/') ? 'active' : ''}`}
                      onClick={handleDropdownClick}
                    >
                      Work
                      <i className="fas fa-chevron-down dropdown-arrow"></i>
                    </span>
                    {isDropdownOpen && (
                      <div className="dropdown-menu mobile-dropdown show">
                        <Link to="/services" className={`dropdown-item ${location.pathname === '/services' || location.pathname === '/saqib-s_portfolio/services' ? 'active' : ''}`} onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>
                          <i className="fas fa-briefcase"></i> Services
                        </Link>
                        <Link to="/case-studies" className={`dropdown-item ${location.pathname === '/case-studies' || location.pathname === '/saqib-s_portfolio/case-studies' || location.pathname.startsWith('/case-studies/') || location.pathname.startsWith('/saqib-s_portfolio/case-studies/') ? 'active' : ''}`} onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>
                          <i className="fas fa-project-diagram"></i> Case Studies
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link to="/articles" className={`nav-link ${location.pathname === '/articles' || location.pathname === '/saqib-s_portfolio/articles' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Articles</Link>
                  <Link to="/faq" className={`nav-link ${location.pathname === '/faq' || location.pathname === '/saqib-s_portfolio/faq' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                </div>
              </>,
              document.body
            )}
            {!isMobile && (
              <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <Link to="/about" className={`nav-link ${location.pathname === '/about' || location.pathname === '/saqib-s_portfolio/about' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link to="/resume" className={`nav-link ${location.pathname === '/resume' || location.pathname === '/saqib-s_portfolio/resume' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Resume</Link>
                <div className="nav-dropdown" ref={dropdownRef} onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                  <span 
                    className={`nav-link dropdown-toggle ${isDropdownOpen ? 'open' : ''} ${location.pathname === '/services' || location.pathname === '/saqib-s_portfolio/services' || location.pathname === '/case-studies' || location.pathname === '/saqib-s_portfolio/case-studies' || location.pathname.startsWith('/case-studies/') || location.pathname.startsWith('/saqib-s_portfolio/case-studies/') || location.pathname === '/testimonials' || location.pathname === '/saqib-s_portfolio/testimonials' ? 'active' : ''}`}
                    onClick={handleDropdownClick}
                  >
                    Work
                    <i className="fas fa-chevron-down dropdown-arrow"></i>
                  </span>
                  {isDropdownOpen && (
                    <>
                      {!isMobile && typeof document !== 'undefined' ? (
                        createPortal(
                          <div ref={dropdownMenuRef} className="dropdown-menu show" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                            <Link to="/services" className={`dropdown-item ${location.pathname === '/services' || location.pathname === '/saqib-s_portfolio/services' ? 'active' : ''}`} onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>
                              <i className="fas fa-briefcase"></i> Services
                            </Link>
                            <Link to="/case-studies" className={`dropdown-item ${location.pathname === '/case-studies' || location.pathname === '/saqib-s_portfolio/case-studies' || location.pathname.startsWith('/case-studies/') || location.pathname.startsWith('/saqib-s_portfolio/case-studies/') ? 'active' : ''}`} onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}>
                              <i className="fas fa-project-diagram"></i> Case Studies
                            </Link>
                          </div>,
                          document.body
                        )
                      ) : null}
                    </>
                  )}
                </div>
                <Link to="/articles" className={`nav-link ${location.pathname === '/articles' || location.pathname === '/saqib-s_portfolio/articles' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Articles</Link>
                <Link to="/faq" className={`nav-link ${location.pathname === '/faq' || location.pathname === '/saqib-s_portfolio/faq' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              </div>
            )}
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Only show on home page */}
      {showHero && (
        <>
          <div className="hero-section">
            <div className="container">
              <div className="hero-content">
                <div className="hero-text">
                  <div className="hero-availability-top">
                    <div className="availability-badge">
                      <div className="availability-dot-wrapper">
                        <span className="availability-dot"></span>
                        <span className="availability-ring"></span>
                      </div>
                      <span className="availability-text">Open for new opportunities</span>
                    </div>
                  </div>

                  <div className="hero-welcome">
                    <div className="welcome-badge">
                      <div className="welcome-icon-wrapper">
                        <span className="welcome-icon">👋</span>
                      </div>
                      <div className="welcome-content">
                        <span className="welcome-text">Hey I'm</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-title-wrapper">
                    <h1 className="hero-title">
                      <span className="gradient-text hero-name-main">{personalInfo.name}</span>
                      <span className="country-flag" title="Pakistan">🇵🇰</span>
                    </h1>
                  </div>

                  <h2 className="hero-subtitle">
                    {personalInfo.title}
                  </h2>

                  <p className="hero-description">
                    Welcome to my portfolio! I'm thrilled you're here. I'm a passionate developer 
                    dedicated to crafting exceptional user experiences and ensuring software quality. 
                    Let's build something amazing together! 🚀
                  </p>

                  <div className="hero-actions">
                    <a 
                      href={getAssetPath('/resume/Saqib_Zafar_Resume.pdf')} 
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Saqib_Zafar_Resume.pdf"
                    >
                      <i className="fas fa-download"></i>
                      Download Resume
                    </a>
                    <Link 
                      to="/contact" 
                      className="btn btn-outline"
                    >
                      <i className="fas fa-envelope"></i>
                      Get In Touch
                    </Link>
                  </div>
                </div>

                <div className="hero-visual">
                  <div className="hero-image-container">
                    <div className="hero-image">
                      <img src={getAssetPath('/assets/imgs/header.jpg')} alt="Saqib Zafar" />
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
        </>
      )}
    </header>
  );
};

export default Header;
