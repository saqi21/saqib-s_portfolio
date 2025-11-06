import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { getAssetPath } from '../../utils/assets';
import './CaseStudies.css';

const CaseStudyDetail: React.FC<{ caseStudyId?: string }> = ({ caseStudyId }) => {
  const { id } = useParams<{ id: string }>();
  const studyId = caseStudyId || id;
  const caseStudy = caseStudies.find(cs => cs.id === studyId);

  if (!caseStudy) {
    return (
      <section className="section case-study-detail">
        <div className="container">
          <div className="error-message">
            <h2>Case Study Not Found</h2>
            <p>The case study you're looking for doesn't exist.</p>
            <Link to="/case-studies" className="btn btn-primary">Back to Case Studies</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section case-study-detail" id="case-study-detail">
      <div className="container" style={{ paddingTop: '1rem' }}>
        <Link to="/case-studies" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Case Studies
        </Link>

        <div className="case-study-hero">
          <div className="case-study-hero-image">
            {caseStudy.image ? (
              <img 
                src={getAssetPath(caseStudy.image)} 
                alt={caseStudy.title}
                className={`case-study-hero-img ${caseStudy.image.endsWith('.svg') ? 'logo-img' : 'screenshot-img'}`}
                onError={(e) => {
                  // Fallback to gradient background if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <div className="case-study-hero-placeholder">
                <i className="fas fa-project-diagram"></i>
              </div>
            )}
            <div className="case-study-category-badge">{caseStudy.category}</div>
          </div>
          <div className="case-study-hero-content">
            <h1 className="case-study-hero-title">{caseStudy.title}</h1>
            <p className="case-study-hero-client">Client: {caseStudy.client}</p>
            {caseStudy.duration && (
              <p className="case-study-meta">Duration: {caseStudy.duration}</p>
            )}
            {caseStudy.teamSize && (
              <p className="case-study-meta">Team Size: {caseStudy.teamSize}</p>
            )}
          </div>
        </div>

        <div className="case-study-body">
          <div className="case-study-section">
            <h2 className="section-heading">📘 Project Overview</h2>
            <p className="case-study-text">{caseStudy.summary}</p>
            {caseStudy.detailedSummary && (
              <p className="case-study-text" style={{ marginTop: '1rem' }}>{caseStudy.detailedSummary}</p>
            )}
          </div>

          {caseStudy.role && (
            <div className="case-study-section">
              <h2 className="section-heading">🎯 My Role</h2>
              <p className="case-study-text">{caseStudy.role}</p>
            </div>
          )}

          {caseStudy.keyContributions && caseStudy.keyContributions.length > 0 && (
            <div className="case-study-section">
              <h2 className="section-heading">🧠 My Key Contributions</h2>
              {caseStudy.keyContributions.map((contribution, index) => (
                <div key={index} className="contribution-item">
                  <h3 className="contribution-title">{index + 1}. {contribution.title}</h3>
                  <p className="case-study-text">{contribution.description}</p>
                  {contribution.highlights && contribution.highlights.length > 0 && (
                    <ul className="case-study-list contribution-highlights">
                      {contribution.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  {contribution.example && (
                    <div className="contribution-example">
                      <strong>Example:</strong>
                      <p className="case-study-text">{contribution.example}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="case-study-section">
            <h2 className="section-heading">⚙️ Tech Stack</h2>
            {caseStudy.techStackDetails && caseStudy.techStackDetails.length > 0 ? (
              <div className="tech-stack-table">
                {caseStudy.techStackDetails.map((stack, index) => (
                  <div key={index} className="tech-stack-row">
                    <div className="tech-stack-category">{stack.category}</div>
                    <div className="tech-stack-tools">
                      {stack.tools.map((tool, tIndex) => (
                        <span key={tIndex} className="tech-badge">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="case-study-tech-list">
                {caseStudy.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            )}
          </div>

          {caseStudy.challenges && caseStudy.challenges.length > 0 && (
            <div className="case-study-section">
              <h2 className="section-heading">💡 Key Challenges and Solutions</h2>
              <div className="challenges-container">
                {caseStudy.challenges.map((challenge, index) => {
                  // Parse challenge text to extract challenge and solution
                  const parts = challenge.split('✅ Solution:');
                  const challengeText = parts[0].replace(/^Challenge \d+:\s*/i, '').trim();
                  const solutionText = parts[1] ? parts[1].trim() : '';
                  
                  return (
                    <div key={index} className="challenge-solution-card">
                      <div className="challenge-part">
                        <div className="challenge-label">
                          <i className="fas fa-exclamation-triangle"></i>
                          Challenge {index + 1}
                        </div>
                        <p className="challenge-text">{challengeText}</p>
                      </div>
                      {solutionText && (
                        <div className="solution-part">
                          <div className="solution-label">
                            <i className="fas fa-check-circle"></i>
                            Solution
                          </div>
                          <p className="solution-text">{solutionText}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {caseStudy.achievements && caseStudy.achievements.length > 0 && (
            <div className="case-study-section">
              <h2 className="section-heading">🚀 Achievements</h2>
              <ul className="case-study-list case-study-results">
                {caseStudy.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.impactSummary && caseStudy.impactSummary.length > 0 && (
            <div className="case-study-section">
              <h2 className="section-heading">📈 Impact Summary</h2>
              <div className="impact-summary-table">
                <div className="impact-table-header">
                  <div className="impact-metric">Metric</div>
                  <div className="impact-before">Before Implementation</div>
                  <div className="impact-after">After Implementation</div>
                </div>
                {caseStudy.impactSummary.map((impact, index) => (
                  <div key={index} className="impact-table-row">
                    <div className="impact-metric">{impact.metric}</div>
                    <div className="impact-before">{impact.before}</div>
                    <div className="impact-after">{impact.after}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {caseStudy.leadership && (
            <div className="case-study-section">
              <h2 className="section-heading">🧩 Leadership & Collaboration</h2>
              <p className="case-study-text">{caseStudy.leadership}</p>
            </div>
          )}

          {caseStudy.keyTakeaways && caseStudy.keyTakeaways.length > 0 && (
            <div className="case-study-section">
              <h2 className="section-heading">✨ Key Takeaways</h2>
              <ul className="case-study-list">
                {caseStudy.keyTakeaways.map((takeaway, index) => (
                  <li key={index}>{takeaway}</li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.results && caseStudy.results.length > 0 && (
            <div className="case-study-section">
              <h2 className="section-heading">Results</h2>
              <ul className="case-study-list case-study-results">
                {caseStudy.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="case-study-section">
            <h2 className="section-heading">🧾 Summary</h2>
            <p className="case-study-text">
              {caseStudy.id === 'beambox' 
                ? "Through Beambox, I demonstrated the ability to architect and lead a complete QA transformation — introducing automation from scratch, optimizing pipelines, mentoring QA engineers, and ensuring seamless, confident releases in a Ruby on Rails environment. My technical depth in Cypress automation, CI/CD pipelines, and structured QA processes directly enhanced Beambox's stability, efficiency, and release velocity."
                : caseStudy.id === 'lumimeds'
                ? "Working on Lumimeds wasn't just another QA project — it was my personal mission to build confidence in a healthcare system that serves people when they need it most. Every bug fixed, every edge case handled, every workflow refined — it all added up to something meaningful: a product that users can trust with their health and their data. Lumimeds taught me that QA is not just about finding bugs — it's about ensuring trust. When users are dealing with their health, reliability is non-negotiable. This project refined my technical depth, sharpened my communication skills, and strengthened my belief that quality engineering can truly elevate a product from good to great."
                : "This case study demonstrates comprehensive quality assurance and testing expertise."
              }
            </p>
          </div>

          <div className="case-study-actions">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fas fa-external-link-alt"></i> View Live Project
              </a>
            )}
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fab fa-github"></i> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetail;

