import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PersonalInfo, ContactFormData } from '../../types';
import './Contact.css';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section contact my-5" id="contact">
      <div id="map" className="map"></div>
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="contact-form-card">
              <h4 className="contact-title">Send a message</h4>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success" role="alert">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-danger" role="alert">
                  Failed to send message. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <input
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    })}
                    className={`form-control contact-input ${errors.name ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Name *"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                
                <div className="form-group">
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`form-control contact-input ${errors.email ? 'is-invalid' : ''}`}
                    type="email"
                    placeholder="Email *"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                
                <div className="form-group form-group--full">
                  <textarea
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters'
                      }
                    })}
                    className={`form-control contact-textarea ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="Message *"
                    rows={7}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message.message}
                    </div>
                  )}
                </div>
                
                <div className="form-group form-group--full">
                  <button 
                    type="submit" 
                    className="form-control btn btn-danger w-100 contact-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div>
            <div className="contact-info-card contact-infor-card-flex">
              <h4 className="contact-title">Get in touch</h4>
              
              <div className="info-row">
                <div className="info-icon"><i className="fas fa-phone"></i></div>
                <div className="info-text">
                  <div className="info-label">Phone</div>
                  <div className="info-value">{personalInfo.phone}</div>
                </div>
              </div>
              
              <div className="info-row">
                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="info-text">
                  <div className="info-label">Address</div>
                  <div className="info-value">{personalInfo.address}</div>
                </div>
              </div>
              
              <div className="info-row">
                <div className="info-icon"><i className="fa fa-envelope"></i></div>
                <div className="info-text">
                  <div className="info-label">Email</div>
                  <div className="info-value">{personalInfo.email}</div>
                </div>
              </div>
              
              <ul className="social-icons pt-3">
                {personalInfo.socialLinks.map((link) => (
                  <li key={link.platform} className="social-item">
                    <a 
                      className="social-link" 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                    >
                      <i className={`fab fa-${link.platform}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
