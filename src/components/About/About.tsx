import React from 'react';
import { PersonalInfo, Skill } from '../../types';
import './About.css';

interface AboutProps {
  personalInfo: PersonalInfo;
  skills?: Skill[];
}

const About: React.FC<AboutProps> = ({ personalInfo, skills = [] }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about my journey and expertise
          </p>
        </div>

        <div className="about-content">
          <div>
            {/* Main About Card */}
            <div className="about-main">
              <div className="about-card">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <h3>Who I Am</h3>
                </div>
                <div className="card-content">
                  <p className="about-intro">
                    Hi there! I'm <strong>Saqib Zafar</strong>, a passionate Front-End Developer 
                    and Software Quality Assurance Engineer with a Bachelor's degree in Computer Science 
                    from GIFT University.
                  </p>
                  
                  <p>
                    I specialize in creating exceptional user experiences through modern frontend technologies 
                    and ensuring software quality through comprehensive testing strategies. My expertise spans 
                    across <strong>JavaScript, React, Ruby on Rails, Selenium WebDriver, and Cypress</strong>.
                  </p>
                  
                  <p>
                    With a meticulous eye for detail and a collaborative approach, I excel in both 
                    <strong> Manual Testing</strong> and <strong>Automation Testing</strong>, helping teams 
                    deliver robust, bug-free software solutions.
                  </p>
                  
                  <div className="about-stats">
                    <div className="stat-item">
                      <div className="stat-number">3+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">15+</div>
                      <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">8+</div>
                      <div className="stat-label">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info">
            <div className="contact-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-address-card"></i>
                </div>
                <h3>Get In Touch</h3>
              </div>
              <div className="card-content">
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">{personalInfo.email}</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">{personalInfo.phone}</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Location</span>
                      <span className="contact-value">{personalInfo.address}</span>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
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
            </div>
          </div>

          {/* Right column: compact skills showcase */}
          <aside className="skills-section">
            <div className="skills-header">
              <h3>Core Skills</h3>
              <p>A snapshot of tools and technologies I use</p>
            </div>
            <div className="skills-grid">
              {(skills || []).slice(0, 8).map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">
                    {skill.icon && skill.icon.startsWith('ti-') ? (
                      <i className={skill.icon}></i>
                    ) : (
                      <img src={`/assets/imgs/${skill.icon}`} alt={skill.name} width={22} height={22} />
                    )}
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
