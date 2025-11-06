import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { PersonalInfo, ContactFormData } from '../../types';
import './Contact.css';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'warning'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<ContactFormData>();

  // Auto-hide messages after specified time
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    } else if (submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 7000);
      return () => clearTimeout(timer);
    } else if (submitStatus === 'warning') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Contact form template
      const autoReplyTemplateId = process.env.REACT_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID; // Auto-reply template
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Validate configuration
      if (!serviceId || !templateId || !publicKey) {
        setStatusMessage('EmailJS configuration is missing. Please check your .env file.');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }
      
      // Prepare template parameters for contact form submission
      const contactFormParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        reply_to: data.email, // This allows you to reply directly to the sender
      };
      
      // Send contact form submission email to saqibmehar41@gmail.com
      const contactResponse = await emailjs.send(
        serviceId,
        templateId,
        contactFormParams,
        publicKey
      );
      
      console.log('Contact form email sent successfully:', contactResponse);
      
      // Send auto-reply email to the person who submitted the form
      let autoReplyFailed = false;
      if (autoReplyTemplateId) {
        // Use the same variable names as contact form template if using same template
        // OR use name/email if you have a separate auto-reply template
        const autoReplyParams = {
          from_name: data.name,  // Match contact form template variable names
          from_email: data.email,
          message: 'Thank you for contacting me! I have received your message and will get back to you soon.', // Optional thank you message
        };
        
        try {
          const autoReplyResponse = await emailjs.send(
            serviceId,
            autoReplyTemplateId,
            autoReplyParams,
            publicKey
          );
          console.log('Auto-reply email sent successfully:', autoReplyResponse);
        } catch (autoReplyError: any) {
          // Don't fail the whole form if auto-reply fails, but show warning
          console.warn('Auto-reply email failed, but contact form was sent:', autoReplyError);
          autoReplyFailed = true;
        }
      }
      
      // Set success or warning status based on auto-reply result
      if (autoReplyFailed) {
        setStatusMessage('Message sent, but auto-reply failed. The contact will not receive a confirmation email.');
        setSubmitStatus('warning');
      } else {
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setSubmitStatus('success');
      }
      reset();
    } catch (error: any) {
      console.error('Email sending error:', error);
      // Log more details for debugging
      if (error.text) {
        console.error('Error details:', error.text);
      }
      if (error.status) {
        console.error('Error status:', error.status);
      }
      // Show more specific error message
      console.error('Full error object:', JSON.stringify(error, null, 2));

      // Set user-friendly error message
      let errorMessage = 'Failed to send message. Please try again.';
      if (error.text) {
        try {
          const errorData = JSON.parse(error.text);
          if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch {
          // If parsing fails, use default message
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      setStatusMessage(errorMessage);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      {/* Toast Notifications - Fixed at top-right */}
      <div className="toast-container">
        {submitStatus === 'success' && (
          <div className="toast toast-success" role="alert">
            <div className="toast-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="toast-message">
              {statusMessage || 'Message sent successfully! I\'ll get back to you soon.'}
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="toast toast-error" role="alert">
            <div className="toast-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <div className="toast-message">
              {statusMessage || 'Failed to send message. Please try again.'}
            </div>
          </div>
        )}

        {submitStatus === 'warning' && (
          <div className="toast toast-warning" role="alert">
            <div className="toast-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="toast-message">
              {statusMessage || 'Warning: Something went wrong.'}
            </div>
          </div>
        )}
      </div>

      <div className="section contact my-5" id="contact">
        <div id="map" className="map"></div>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-form-card">
                <div className="contact-header-section">
                  <div className="contact-title-wrapper">
                    <i className="fas fa-envelope-open-text contact-title-icon"></i>
                    <h4 className="contact-title">Send a message</h4>
                  </div>
                  <p className="contact-subtitle">Fill out the form below and I'll get back to you as soon as possible</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        <i className="fas fa-user form-label-icon"></i>
                        Name *
                      </label>
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
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name.message}
                        </div>
                      )}
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">
                        <i className="fas fa-envelope form-label-icon"></i>
                        Email *
                      </label>
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
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group form-group--full">
                    <label className="form-label">
                      <i className="fas fa-comment-alt form-label-icon"></i>
                      Message *
                    </label>
                    <textarea
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                      className={`form-control contact-textarea ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <div className="invalid-feedback">
                        {errors.message.message}
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group form-group--full d-flex align-items-center justify-content-center mt-4">
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
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              
                <div className="contact-form-footer">
                  <div className="form-footer-info">
                    <div className="footer-info-item">
                      <div className="footer-icon-wrapper">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="footer-text-wrapper">
                        <span className="footer-item-title">Secure & Private</span>
                        <span className="footer-item-desc">Your data is protected</span>
                      </div>
                    </div>
                    <div className="footer-info-item">
                      <div className="footer-icon-wrapper">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="footer-text-wrapper">
                        <span className="footer-item-title">Quick Response</span>
                        <span className="footer-item-desc">Within 24 hours</span>
                      </div>
                    </div>
                    <div className="footer-info-item">
                      <div className="footer-icon-wrapper">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <div className="footer-text-wrapper">
                        <span className="footer-item-title">100% Reliable</span>
                        <span className="footer-item-desc">Guaranteed delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          <div>
            <div className="contact-info-card contact-infor-card-flex">
              <div className="contact-header-section">
                <h4 className="contact-title">Get in touch</h4>
                <p className="contact-subtitle">Let's discuss your project and bring your ideas to life</p>
              </div>
              
              <div className="contact-info-section">
                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <div className="info-icon"><i className="fas fa-phone"></i></div>
                  </div>
                  <div className="info-text">
                    <div className="info-label">Phone</div>
                    <div className="info-value">
                      <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="info-link">
                        {personalInfo.phone}
                      </a>
                    </div>
                    <div className="info-note">Available Mon-Fri, 9AM-6PM PKT</div>
                  </div>
                </div>
                
                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                  </div>
                  <div className="info-text">
                    <div className="info-label">Address</div>
                    <div className="info-value">{personalInfo.address}</div>
                    <div className="info-note">Open to remote collaboration worldwide</div>
                  </div>
                </div>
                
                <div className="info-row">
                  <div className="info-icon-wrapper">
                    <div className="info-icon"><i className="fa fa-envelope"></i></div>
                  </div>
                  <div className="info-text">
                    <div className="info-label">Email</div>
                    <div className="info-value">
                      <a href={`mailto:${personalInfo.email}`} className="info-link">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="info-note">Response within 24 hours</div>
                  </div>
                </div>
              </div>
              
              <div className="contact-availability">
                <div className="availability-badge">
                  <span className="availability-dot"></span>
                  <span className="availability-text">Available for new projects</span>
                </div>
              </div>
              
              <div className="contact-social-section">
                <div className="social-section-title">Connect with me</div>
                <ul className="social-icons">
                  {personalInfo.socialLinks.map((link) => (
                    <li key={link.platform} className="social-item">
                      <a 
                        className="social-link" 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.platform}
                        title={link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
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
      </div>
    </React.Fragment>
  );
};

export default Contact;
