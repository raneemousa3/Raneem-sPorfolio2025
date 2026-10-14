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
          <h2 className={styles.portfolio}>COMPUTER ENGINEERING AND MATHEMATICS STUDENT</h2>
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
          Hey! I’m Raneem, a computer engineering student at Washington University in St. Louis with a prior degree in mathematics. I build AI-powered and human-centered software. Recently, I’ve been building StillHere, an early disaster-recovery prototype with private household cases, structured needs intake, auditable updates, and transparent financial scenarios.

I also co-founded Yoink!, a student rental marketplace, and have contributed to WashU Robotics and WashU Satellites across autonomy and embedded systems. I’m interested in applying AI and computer vision to thoughtful products, from FashionTech to disaster recovery. I’m always glad to connect about new ideas and collaborations.
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