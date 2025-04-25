import React, { useRef, useEffect, useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input 
                type="text" 
                id="name" 
                className={styles.formInput} 
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input 
                type="email" 
                id="email" 
                className={styles.formInput} 
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea 
                id="message" 
                className={styles.formTextarea} 
                rows={5} 
                required 
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 