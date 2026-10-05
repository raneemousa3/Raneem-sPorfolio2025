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
          <h2 className={styles.portfolio}>COMPUTER ENGINEERING · APPLIED AI · ROBOTICS</h2>
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
          <div className={styles.midLeft}>Curious about intelligence in motion.</div>
          <div className={styles.bottomRight}>
          Hey! I’m Raneem, a computer engineering and AI engineering student at Washington University in St. Louis, with a mathematics degree from Simmons.
          <br /><br />
          I build AI tools at WashU’s DI2 Accelerator and work on sensor integration for our robotics team’s autonomous submarine. I’m especially interested in safe autonomous systems and embodied AI.
          <br /><br />
          I also co-founded Yoink! and explore computer vision through Fitted, my virtual fitting room project. I love bringing technical ideas into everyday life, from robotics to fashion technology.
          <br /><br />
          Always up for a thoughtful conversation or a new collaboration.

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