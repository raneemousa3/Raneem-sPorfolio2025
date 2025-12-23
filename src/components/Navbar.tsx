import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset to account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>Lookbook</a>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <a 
              href="#home" 
              className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`} 
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`} 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 