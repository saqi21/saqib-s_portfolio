import React, { useState } from 'react';
import { faqItems } from '../../data/faq';
import './FAQ.css';

const FAQFull: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section faq-full" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about working with me
          </p>
        </div>

        <div className="faq-accordion">
          {faqItems.map((faq) => (
            <div key={faq.id} className={`faq-item ${openId === faq.id ? 'active' : ''}`}>
              <button
                className="faq-question-btn"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span className="faq-question-text">{faq.question}</span>
                <i className={`fas fa-chevron-${openId === faq.id ? 'up' : 'down'}`}></i>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQFull;

