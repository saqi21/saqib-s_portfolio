import React from 'react';
import { Link } from 'react-router-dom';
import { faqItems } from '../../data/faq';
import './FAQ.css';

const FAQPreview: React.FC = () => {
  const featuredFAQs = faqItems.slice(0, 3);

  return (
    <section className="section faq-preview" id="faq-preview">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Common questions about my services and process
          </p>
        </div>

        <div className="faq-preview-list">
          {featuredFAQs.map((faq) => (
            <div key={faq.id} className="faq-item-preview">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer-preview">{faq.answer.substring(0, 150)}...</p>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/faq" className="btn btn-primary">
            View All FAQs
            <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;

