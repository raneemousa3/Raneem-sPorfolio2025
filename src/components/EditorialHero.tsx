"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './EditorialHero.module.css';
import Image from 'next/image';

const EditorialHero = () => {
  const [imageUrl, setImageUrl] = useState('/images/RaneemBigSmile.png');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observerRef.current.observe(contentRef.current);
    }
    if (imageRef.current) {
      observerRef.current.observe(imageRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position relative to center of screen
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      setMousePosition({ x, y });
      
      // Calculate parallax offset with dampening
      setParallaxOffset({
        x: x * 10, // Reduced for subtler effect
        y: y * 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset states
    setError(null);
    setWarning(null);

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('image_file', file);

      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_REMOVE_BG_API_KEY || '',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to remove background');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (err) {
      setError('Failed to process image. Please try again.');
      console.error('Error processing image:', err);
    } finally {
      setIsLoading(false);
    }
  };

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
    <section className={styles.hero}>
      <div className={styles.heroBackground} />
      <div className={styles.heroBackgroundOverlay} />
      
      <div 
        ref={contentRef}
        className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span className={styles.titleHighlight}>RANEEM</span> <span className={styles.titleRegular}>MOUSA</span>
          </h1>
          
          <div 
            ref={imageRef}
            className={`${styles.imageContainer} ${isVisible ? styles.visible : ''}`}
          >
            <div 
              className={styles.cutoutWrapper}
              style={{
                transform: `perspective(1000px) rotateX(${parallaxOffset.y}deg) rotateY(${-parallaxOffset.x}deg)`
              }}
            >
              <div className={styles.imageFrame}>
                <Image
                  src={imageUrl}
                  alt="Raneem Mousa"
                  width={650}
                  height={650}
                  className={styles.profileImage}
                  priority
                />
                <div className={styles.imageShadow} />
              </div>
              
              <div className={styles.uploadOverlay}>
                <input
                  type="file"
                  id="imageUpload"
                  className={styles.fileInput}
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isLoading}
                />
                <label htmlFor="imageUpload" className={styles.uploadLabel}>
                  {isLoading ? 'Processing...' : 'Upload Photo'}
                </label>
              </div>
            </div>
            
            <div className={styles.handwrittenNote}>
              "Less is more"
            </div>
          </div>
          
          <p className={styles.role}>FULL STACK DEVELOPER</p>
          <p className={styles.description}>
            Hey! I'm Raneem, a rising junior in computer engineering at Columbia University with degrees in Math and Computer Science. I build AI-powered tools as an AI software engineer intern. I co-founded Engineering Liaison (treasurer) and lead the Math & CS Club at Simmons. I also co-directed SharkHack 2024 and led SharkHack 2025. I love AI, math, and fashion. Right now I'm solo building virtual fitting rooms and the Route N Roam app with my team. I'm always up for new ideas and collaborations so reach out!
          </p>
          <div className={styles.cta}>
            <button 
              className={styles.primaryButton}
              onClick={scrollToProjects}
            >
              <span className={styles.buttonText}>PROJECTS</span>
              <span className={styles.buttonIcon}>→</span>
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={scrollToContact}
            >
              <span className={styles.buttonText}>CONTACT</span>
              <span className={styles.buttonIcon}>→</span>
            </button>
          </div>
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {warning && <div className={styles.warning}>{warning}</div>}
    </section>
  );
};

export default EditorialHero; 