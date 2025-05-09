import React, { useRef, useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLElement>(null);
  
  // Initialize Formspree with the correct form ID
  const [state, handleSubmit] = useForm("mldbdbrj");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={contactRef}
      className={`${styles.contact} ${isVisible ? styles.visible : ''}`}
      id="contact"
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.sectionDescription}>
          Let's connect and discuss how we can work together.
        </p>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>Email</h3>
              <a href="mailto:raneemousa3@yahoo.com" className={styles.contactValue}>
                raneemousa3@yahoo.com
              </a>
            </div>
            
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>Location</h3>
              <p className={styles.contactValue}>Boston, MA</p>
            </div>
            
            <div className={styles.contactItem}>
              <h3 className={styles.contactLabel}>Social</h3>
              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/raneem-mousa-373367263/" className={styles.socialLink}>LinkedIn</a>
                <a href="https://github.com/raneemousa3" className={styles.socialLink}>GitHub</a>
              </div>
            </div>
          </div>
          
          {state.succeeded ? (
            <div className={`${styles.submitStatus} ${styles.success}`}>
              Message sent successfully! I will get back to you soon.
            </div>
          ) : (
            <form 
              className={styles.contactForm} 
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className={styles.formInput} 
                  required 
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className={styles.validationError}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className={styles.formInput} 
                  required 
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className={styles.validationError}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  className={styles.formTextarea} 
                  rows={5} 
                  required 
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className={styles.validationError}
                />
              </div>
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {state.errors && (
                <div className={`${styles.submitStatus} ${styles.error}`}>
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact; 