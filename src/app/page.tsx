"use client";

import { useEffect } from 'react';
import CutoutHero from '@/components/CutoutHero';
import ProjectsSection from '@/components/ProjectsSection';
import Navbar from '@/components/Navbar';
import StarryBackground from '@/components/StarryBackground';

export default function Home() {
  // Log when the page loads to verify components are being rendered
  useEffect(() => {
    console.log('Home page loaded');
    // Check if projects section exists
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      console.log('Projects section found in DOM');
    } else {
      console.error('Projects section NOT found in DOM');
    }
  }, []);

  return (
    <>
      <StarryBackground />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <CutoutHero />
        <div style={{ 
          height: '100vh', 
          padding: '2rem', 
          background: 'rgba(248, 249, 250, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ProjectsSection />
        </div>
        <div style={{ height: '100vh', padding: '2rem', background: 'rgba(248, 249, 250, 0.9)' }}>
          <h2 style={{ textAlign: 'center' }}>About Section</h2>
          <p style={{ textAlign: 'center' }}>This is a placeholder for the About section.</p>
        </div>
        <div id="contact" style={{ height: '100vh', padding: '2rem', background: 'rgba(233, 236, 239, 0.9)' }}>
          <h2 style={{ textAlign: 'center' }}>Contact Section</h2>
          <p style={{ textAlign: 'center' }}>This is a placeholder for the Contact section.</p>
        </div>
      </main>
    </>
  );
} 