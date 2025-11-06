import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { getAssetPath } from '../../utils/assets';
import './CaseStudies.css';

const CaseStudiesFull: React.FC = () => {
  return (
    <section className="section case-studies-full" id="case-studies">
      <div className="container" style={{ paddingTop: '1rem' }}>
        <div className="section-header">
          <h2 className="section-title">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="section-subtitle">
            Detailed insights into my problem-solving approach and project outcomes
          </p>
        </div>

        <div className="case-studies-grid-full">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="case-study-card-full">
              <div className="case-study-image">
                {caseStudy.image ? (
                  <img 
                    src={getAssetPath(caseStudy.image)} 
                    alt={caseStudy.title}
                    className={`case-study-img ${caseStudy.image.endsWith('.svg') ? 'logo-img' : 'screenshot-img'}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="case-study-placeholder">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                )}
                <div className="case-study-overlay">
                  <Link to={`/case-studies/${caseStudy.id}`} className="case-study-link">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="case-study-category">{caseStudy.category}</div>
              </div>
              <div className="case-study-content">
                <h3 className="case-study-title">{caseStudy.title}</h3>
                <p className="case-study-client">Client: {caseStudy.client}</p>
                <p className="case-study-summary">{caseStudy.summary}</p>
                {caseStudy.detailedSummary && (
                  <p className="case-study-detailed-summary">{caseStudy.detailedSummary}</p>
                )}
                <div className="case-study-tech">
                  {caseStudy.technologies.slice(0, 6).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {caseStudy.technologies.length > 6 && (
                    <span className="tech-tag">+{caseStudy.technologies.length - 6} more</span>
                  )}
                </div>
                {caseStudy.achievements && caseStudy.achievements.length > 0 && (
                  <div className="case-study-highlights">
                    <h4 className="highlights-title">
                      <i className="fas fa-star"></i> Key Achievements
                    </h4>
                    <ul className="highlights-list">
                      {caseStudy.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index}>{achievement.replace(/^[🚀🧾🔁🧠💬📊]\s*/, '')}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link to={`/case-studies/${caseStudy.id}`} className="case-study-btn">
                  Read Full Case Study <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesFull;

