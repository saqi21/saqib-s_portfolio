import React from 'react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const TestimonialsFull: React.FC = () => {
  return (
    <section className="section testimonials-full" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            Real feedback from clients I've worked with
          </p>
        </div>

        <div className="testimonials-grid-full">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card-full">
              <div className="testimonial-header">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                {testimonial.project && (
                  <span className="testimonial-project">{testimonial.project}</span>
                )}
                {testimonial.date && (
                  <span className="testimonial-date">{testimonial.date}</span>
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
      </div>
    </section>
  );
};

export default TestimonialsFull;

