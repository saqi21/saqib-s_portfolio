import React from 'react';
import { PersonalInfo, Skill } from '../../types';
import { getAssetPath } from '../../utils/assets';
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
                    I'm <strong>Saqib Zafar</strong>, a dedicated Front-End Developer and Software Quality Assurance Engineer 
                    with a Bachelor's degree in Computer Science from GIFT University. I combine technical expertise with 
                    a passion for delivering exceptional digital experiences.
                  </p>
                  
                  <p>
                    I specialize in building responsive, user-friendly interfaces using modern technologies including 
                    <strong> JavaScript, React, Ruby on Rails, Selenium WebDriver, and Cypress</strong>. My focus is on creating 
                    seamless user experiences while ensuring the highest standards of software quality through rigorous testing.
                  </p>
                  
                  <p>
                    With expertise in both <strong>Manual Testing</strong> and <strong>Automation Testing</strong>, I help businesses 
                    deliver reliable, bug-free software solutions. My collaborative approach and attention to detail ensure 
                    projects are completed on time and exceed expectations.
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
                      <img src={getAssetPath(`/assets/imgs/${skill.icon}`)} alt={skill.name} width={22} height={22} />
                    )}
                  </div>
                  <div className="skill-info width-50">
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
