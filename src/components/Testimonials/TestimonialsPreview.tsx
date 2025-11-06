import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const TestimonialsPreview: React.FC = () => {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="section testimonials-preview" id="testimonials-preview">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What clients say about working with me
          </p>
        </div>

        <div className="testimonials-grid">
          {featuredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                {testimonial.project && (
                  <span className="testimonial-project">{testimonial.project}</span>
                )}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/testimonials" className="btn btn-primary">
            View All Testimonials
            <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;

