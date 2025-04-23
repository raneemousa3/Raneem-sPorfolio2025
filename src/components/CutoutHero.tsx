"use client";

import React, { useState, useRef } from 'react';
import styles from './CutoutHero.module.css';

const CutoutHero: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('/images/RaneemPhoto.jpeg');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Raneem Mousa</h1>
        <p className={styles.role}>Software Engineer & AI Researcher</p>
        <p className={styles.description}>
          Passionate about building innovative solutions using AI and machine learning.
          Currently exploring computer vision and natural language processing.
        </p>
        <div className={styles.cta}>
          <a 
            href="/projects" 
            className={styles.primaryButton} 
            style={{
              display: 'inline-block',
              background: '#228be6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt="Raneem Mousa"
          width={400}
          height={500}
          className={styles.profileImage}
        />
        <div className={styles.uploadOverlay}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <button onClick={() => fileInputRef.current?.click()}>
            Change Photo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CutoutHero; 