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
          Hey! I’m Raneem, a junior in computer engineering at Washington University in St. Louis with a previous degree in math. I build AI-powered tools as an AI software engineer intern and co-founded Yoink!, an AI-powered rental platform for college students.

I work as a software developer with WashU Robotics and WashU Satellites, focusing on autonomy, embedded systems, and real-world engineering challenges. I’m especially interested in FashionTech at the intersection of AI, computer vision, virtual fitting rooms, sustainability, and product-driven fashion technology.

I’m always excited about new ideas and collaborations, so feel free to reach out.
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