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
          Hey! I’m Raneem, a senior studying computer engineering at Washington University in St. Louis. I also hold a degree in mathematics.

I build AI tools at WashU’s DI2 Accelerator and lead sensor integration for our robotics team’s autonomous submarine. I’m especially interested in safe autonomous systems, embodied AI, and building machines that work reliably in the real world.

I also co-founded Yoink!, a campus rental marketplace, and explore the intersection of computer vision and fashion through Fitted, my virtual fitting room project.

Always happy to exchange ideas, talk through a problem, or build something together.
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