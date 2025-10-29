import React from 'react';
import { Service } from '../../types';
import './Services.css';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <>
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle">What I can help you build and deliver</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">
                  {service.icon && service.icon.startsWith('ti-') ? (
                    <i className={service.icon} aria-hidden="true"></i>
                  ) : (
                    <img src={`/assets/imgs/${service.icon}`} alt={service.title} width={26} height={26} />
                  )}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-meta">
                  <span className="service-chip">Consulting</span>
                  <span className="service-chip">Development</span>
                  <span className="service-chip">QA</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Open to Freelance Work</h2>
            <a
              href="https://www.fiverr.com/saqibzafar021?up_rollout=true"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
