import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './EditorialCoverHero.module.css';

interface EditorialCoverHeroProps {
  imageUrl?: string;
  isVisible?: boolean;
  isProcessing?: boolean;
  handleImageUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef?: React.RefObject<HTMLInputElement>;
  error?: string;
}

const EditorialCoverHero = ({ 
  imageUrl = '/images/RaneemBigSmile.png', 
  isVisible = true, 
  isProcessing = false, 
  handleImageUpload, 
  fileInputRef,
  error 
}: EditorialCoverHeroProps) => {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className={`${styles.hero} ${isVisible ? styles.visible : ''}`}
      id="home"
    >
      <div className={styles.heroFrame}>
        <div className={styles.masthead}>
          <div className={styles.issueLine}>commit #1024</div>
          <h1 className={styles.name}>RANEEM MOUSA</h1>
          <h2 className={styles.portfolio}>MATH AND COMPUTER ENGINEERING STUDENT</h2>
        </div>

        <div className={styles.portraitContainer}>
          <div className={styles.portraitWrapper}>
            <Image
              src={imageUrl}
              alt="Raneem Mousa"
              width={500}
              height={500}
              className={styles.portrait}
              priority
            />
          </div>
        </div>

        <div className={styles.coverLines}>
          <div className={styles.topRight}></div>
          <div className={styles.midLeft}>AI Enthusiast</div>
          <div className={styles.bottomRight}>
            Hey! I'm Raneem, a rising junior in computer engineering at Washington University in St. Louis with degrees in Math and Computer Science. I build AI-powered tools as an AI software engineer intern. I co-founded Engineering Liaison (treasurer) and lead the Math & CS Club at Simmons. I also co-directed SharkHack 2024 and led SharkHack 2025. I love AI, math, and fashion. Right now I'm solo building virtual fitting rooms and the Route N Roam app with my team. I'm always up for new ideas and collaborations so reach out!
          </div>
        </div>
        
        <div className={styles.links}>
          <button onClick={scrollToProjects} className={styles.projectLink}>
            → VIEW PROJECTS
          </button>
          <button onClick={scrollToContact} className={styles.contactLink}>
            → CONTACT
          </button>
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </section>
  );
};

export default EditorialCoverHero; 