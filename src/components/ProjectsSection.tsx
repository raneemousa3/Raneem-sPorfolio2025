"use client";

import React, { useEffect } from 'react';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Log when the component mounts to verify it's being rendered
  useEffect(() => {
    console.log('ProjectsSection mounted');
    // Log the position of the projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      console.log('Projects section position:', rect);
    }
  }, []);

  return (
    <section 
      id="projects" 
      className={styles.projects} 
      style={{ 
        borderTop: '5px solid #228be6',
        marginTop: '50px',
        paddingTop: '50px',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 10
      }}
    >
      <h2 style={{ 
        fontSize: '2.5rem', 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#228be6'
      }}>Projects</h2>
      <div className={styles.projectsGrid}>
        <div 
          className={styles.projectCard}
          onClick={() => handleProjectClick('https://github.com/raneemmousa/VirtualFittingRoom')}
        >
          <h3>Virtual Fitting Room</h3>
          <p>An AI-powered virtual fitting room that allows users to try on clothes virtually using their webcam.</p>
          <a href="https://github.com/raneemmousa/VirtualFittingRoom" target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </div>
        <div 
          className={styles.projectCard}
          onClick={() => handleProjectClick('https://github.com/raneemmousa/RouteNRoam')}
        >
          <h3>Route N Roam</h3>
          <p>A travel planning application that helps users discover and plan their perfect road trip routes.</p>
          <a href="https://github.com/raneemmousa/RouteNRoam" target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </div>
        <div 
          className={styles.projectCard}
          onClick={() => handleProjectClick('https://github.com/raneemmousa/TutorBot')}
        >
          <h3>Math & CS TutorBot</h3>
          <p>An AI-powered tutoring bot that helps students with mathematics and computer science concepts.</p>
          <a href="https://github.com/raneemmousa/TutorBot" target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </div>
        <div 
          className={styles.projectCard}
          onClick={() => handleProjectClick('https://github.com/raneemmousa/SpotifyRecommender')}
        >
          <h3>Spotify Music Recommendation & Analysis</h3>
          <p>A music recommendation system that analyzes user preferences and suggests personalized playlists.</p>
          <a href="https://github.com/raneemmousa/SpotifyRecommender" target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </div>
        <div 
          className={styles.projectCard}
          onClick={() => handleProjectClick('https://github.com/raneemmousa/ResNetComparison')}
        >
          <h3>NdLinear vs nn.Linear on ResNet-18 (UCF-101)</h3>
          <p>A comparative study of different linear layer implementations in PyTorch for video classification.</p>
          <a href="https://github.com/raneemmousa/ResNetComparison" target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 