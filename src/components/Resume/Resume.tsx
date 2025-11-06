import React from 'react';
import { Experience, Education, Skill, Language, Statistics } from '../../types';
import './Resume.css';

interface ResumeProps {
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  statistics: Statistics;
}

const Resume: React.FC<ResumeProps> = ({ experiences, education, skills, languages, statistics }) => {
  return (
    <>
      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">
              My <span className="gradient-text">Resume</span>
            </h2>
            <p className="section-subtitle">
              A journey of growth, learning, and professional excellence
            </p>
          </div>

          <div className="resume-content">
            {/* Top Row: Experience and Education */}
            <div className="resume-top-row">
              {/* Experience Timeline */}
              <div className="experience-section">
                <div className="section-header-small">
                  <div className="section-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3>Professional Experience</h3>
                </div>

                <div className="timeline">
                  {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker">
                        <div className="marker-dot"></div>
                        <div className="marker-line"></div>
                      </div>
                      <div className="timeline-content">
                        <div className="experience-card">
                          <div className="experience-header">
                            <div className="experience-title">
                              <h4>{exp.title}</h4>
                              <span className="company">{exp.company}</span>
                            </div>
                            <div className="experience-meta">
                              <div className="experience-period">
                                <i className="fas fa-calendar"></i>
                                <span>{exp.period}</span>
                              </div>
                              <div className="experience-location">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="experience-description">
                            <p>{exp.description}</p>
                          </div>
                          <div className="experience-tags">
                            <span className="tag">Full-time</span>
                            <span className="tag">Remote/Hybrid</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="languages-subsection">
                <div className="section-header-small">
                  <div className="section-icon">
                    <i className="fas fa-language"></i>
                  </div>
                  <h3>Languages</h3>
                </div>

                <div className="languages-grid">
                  {languages.map((lang, index) => (
                    <div key={index} className="language-card">
                      <div className="language-flag">
                        <i className={`fas fa-flag${lang.name === 'Urdu' ? '' : '-usa'}`}></i>
                      </div>
                      <div className="language-info">
                        <h4>{lang.name}</h4>
                        <div className="language-level">
                          <div className="level-bar">
                            <div 
                              className="level-progress" 
                              style={{ width: `${lang.level}%` }}
                            ></div>
                          </div>
                          <span className="level-text">
                            {lang.level === 100 ? 'Native' : lang.level === 90 ? 'Fluent' : 'Intermediate'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>

              {/* Education Section */}
              <div className="education-section">
                <div className="section-header-small">
                  <div className="section-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>Education</h3>
                </div>

                <div className="education-grid">
                  {education.map((edu, index) => (
                    <div key={index} className="education-card">
                      <div className="education-header">
                        <div className="education-icon">
                          <i className="fas fa-university"></i>
                        </div>
                        <div className="education-info">
                          <h4>{edu.degree}</h4>
                          <span className="institution">{edu.institution}</span>
                        </div>
                      </div>
                      <div className="education-meta">
                        <div className="education-period">
                          <i className="fas fa-calendar"></i>
                          <span>{edu.period}</span>
                        </div>
                        <div className="education-location">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="education-description">
                        <p>{edu.description}</p>
                      </div>
                      <div className="education-badge">
                        <i className="fas fa-certificate"></i>
                        <span>Completed</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Skills and Languages */}
            {/* <div className="skills-languages-section">
              <div className="skills-subsection">
                <div className="section-header-small">
                  <div className="section-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3>Technical Skills</h3>
                </div>
                
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-icon">
                          <i className={skill.icon}></i>
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar-container">
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-content">
            <div className="stats-header">
              <h3>Professional Milestones</h3>
              <p>Numbers that reflect my dedication and expertise</p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">{statistics.hoursPerDay}</div>
                  <div className="stat-label">Hours Worked/Day</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">{statistics.projectsFinished}</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-smile"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">{statistics.happyClients}</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-coffee"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">{statistics.coffeeDrinked}</div>
                  <div className="stat-label">Coffee Cups</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

