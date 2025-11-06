import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { getAssetPath } from '../../utils/assets';
import './CaseStudies.css';

const CaseStudiesPreview: React.FC = () => {
  const featuredCaseStudies = caseStudies.slice(0, 2);

  return (
    <section className="section case-studies-preview" id="case-studies-preview">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="section-subtitle">
            Detailed insights into my problem-solving approach and project outcomes
          </p>
        </div>

        <div className="case-studies-preview-grid">
          {featuredCaseStudies.map((caseStudy) => (
            <Link 
              key={caseStudy.id} 
              to={`/case-studies/${caseStudy.id}`} 
              className="case-study-preview-card"
            >
              <div className="preview-card-image">
                {caseStudy.image ? (
                  <img 
                    src={getAssetPath(caseStudy.image)} 
                    alt={caseStudy.title}
                    className={`preview-img ${caseStudy.image.endsWith('.svg') ? 'logo-img' : 'screenshot-img'}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="preview-placeholder">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                )}
                <div className="preview-overlay">
                  <div className="preview-overlay-content">
                    <i className="fas fa-arrow-right"></i>
                    <span>View Details</span>
                  </div>
                </div>
                <div className="preview-category-badge">{caseStudy.category}</div>
              </div>
              <div className="preview-card-content">
                <h3 className="preview-title">{caseStudy.title}</h3>
                <p className="preview-client">{caseStudy.client}</p>
                <p className="preview-summary">{caseStudy.summary.substring(0, 120)}...</p>
                <div className="preview-stats">
                  <div className="preview-stat">
                    <i className="fas fa-check-circle"></i>
                    <span>Success Story</span>
                  </div>
                  <div className="preview-stat">
                    <i className="fas fa-chart-line"></i>
                    <span>Impact Driven</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/case-studies" className="btn btn-primary">
            View All Case Studies
            <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;

