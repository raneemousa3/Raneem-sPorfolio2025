import React, { useState, useRef, useEffect } from 'react';
import styles from './CutoutHero.module.css';
import Image from 'next/image';
import StarryBackground from './StarryBackground';

const CutoutHero: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('/images/RaneemBigSmile.png');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [isSegmentationSupported, setIsSegmentationSupported] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if the API key is available
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_REMOVE_BG_API_KEY;
    if (!apiKey || apiKey === 'your-api-key-here') {
      setIsSegmentationSupported(false);
      setError('Background removal is not available. Please set up your API key in .env.local');
    }
  }, []);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setError('');

    try {
      if (isSegmentationSupported) {
        // Create FormData
        const formData = new FormData();
        formData.append('image_file', file);
        formData.append('size', 'auto');
        formData.append('format', 'png');

        // Call remove.bg API
        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
          method: 'POST',
          headers: {
            'X-Api-Key': process.env.NEXT_PUBLIC_REMOVE_BG_API_KEY || '',
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to remove background: ${response.statusText}`);
        }

        // Convert response to blob
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } else {
        // Fallback to standard image display
        const url = URL.createObjectURL(file);
        setImageUrl(url);
      }
    } catch (err) {
      console.error('Error processing image:', err);
      setError('Failed to process image. Please try again.');
      
      // Fallback to standard image display on error
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    } finally {
      setIsProcessing(false);
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 100; // Account for fixed header
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <StarryBackground />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Raneem Mousa</h1>
        <h2 className={styles.role}>Full Stack Developer</h2>
        <p className={styles.description}>
          I build beautiful, responsive, and user-friendly web applications using modern technologies.
          Passionate about creating intuitive user experiences and clean, maintainable code.
        </p>
        <div className={styles.cta}>
          <button onClick={scrollToProjects} className={styles.primaryButton}>
            View Projects
          </button>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.cutoutWrapper}>
          <Image
            src={imageUrl}
            alt="Raneem Mousa"
            width={650}
            height={650}
            className={styles.profileImage}
            priority
          />
          <div className={styles.uploadOverlay}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className={styles.fileInput}
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className={styles.uploadLabel}>
              {isProcessing ? (
                <span>Processing...</span>
              ) : (
                <span>Change Photo</span>
              )}
            </label>
          </div>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {!isSegmentationSupported && (
          <p className={styles.warning}>
            Background removal is not available. Please set up your API key in .env.local
          </p>
        )}
      </div>
    </section>
  );
};

export default CutoutHero; 