"use client";

import React, { useEffect, useState } from 'react';
import styles from './StarryBackground.module.css';

const StarryBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      const numStars = 200; // Increased number of stars
      
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Random x position (percentage)
          y: Math.random() * 100, // Random y position (percentage)
          size: Math.random() * 4 + 2, // Larger stars (2-6px)
          opacity: Math.random() * 0.8 + 0.2 // Random opacity between 0.2-1
        });
      }
      
      setStars(newStars);
      console.log('Stars generated:', newStars.length);
    };

    generateStars();
    
    // Optional: Add twinkling effect
    const twinkleInterval = setInterval(() => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          opacity: Math.random() * 0.8 + 0.2
        }))
      );
    }, 3000); // Twinkle every 3 seconds
    
    return () => clearInterval(twinkleInterval);
  }, []);

  return (
    <div className={styles.starryBackground}>
      {stars.map(star => (
        <div 
          key={star.id}
          className={styles.star}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground; 