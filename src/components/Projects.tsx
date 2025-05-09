import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Virtual Fitting Room',
      description: 'An AI-powered virtual fitting room that allows users to try on clothes virtually. Built with computer vision and machine learning to provide a realistic and interactive shopping experience. Features include real-time body measurements, clothing visualization, and personalized recommendations.',
      image: '/images/VFR.jpeg',
      tags: ['AI', 'Computer Vision', 'React', 'Python', 'TensorFlow', '3D Modeling'],
      link: 'https://github.com/raneemousa3/Virtual-Fitting-room'
    },
    {
      id: 2,
      title: 'Route N Roam',
      description: 'A Java-powered, location-based recommendation engine that blends Tinder-style swiping with Yelp review data and a Pinterest-style feed—letting users discover local restaurants, activities, and self-care spots, save favorites to a wishlist, schedule visits, read reviews, and find and connect with others planning to go to the same place at the same time—all within one intuitive interface.',
      image: '/images/C.png',
      tags: ['Java', 'Location-Based', 'Recommendation', 'Swipe UI', 'Yelp API','MongoDB'],
      link: 'https://github.com/pefflerm/CS-335-Project'
    },
    {
      id: 3,
      title: 'ProfBotix: Math and Programming Tutor Chatbot',
      description: 'Flask web app for math and CS tutoring with step-by-step solutions, practice quizzes, OCR-based problem parsing, and OpenAI-powered contextual explanations.',
      image: '/images/STEMTutorBot.jpeg',
      tags: ['Web App', 'Flask', 'openai', 'Pillow','pytesseract'],
      link: 'https://github.com/raneemousa3/TutorBOTProfbotix'
    },
    {
      id: 4,
      title: 'Online Dresses Shopping Cart & Wishlist',
      description: 'A C++ console-based application simulating an online fashion boutique. Users can add dresses, skirts, tops, and accessories to a shopping cart or wishlist, adjust quantities, and view real-time total cost calculations. The implementation showcases robust object-oriented design—utilizing inheritance and polymorphism—and includes a custom linked-list for dynamic item management.',
      image: '/images/MM.png',
      tags: ['C++17', 'OOP', 'Linked List', 'Inheritance', 'Polymorphism'],
      link: 'https://github.com/raneemousa3/Online-Dresses-shop-Shopping-Cart-and-Wishlist'
    },
    {
      id: 5,
      title: 'Spotify Top Songs Analysis',
      description: 'A Streamlit-powered web app that taps into the Spotify API (via Spotipy) to pull in your most-played tracks and surface their audio features—danceability, energy, valence, and more—through interactive charts. Analyze your listening habits at a glance and get AI-driven song and artist recommendations tailored to your personal taste.',
      image: '/images/SpotifyPersonalRec.png',
      tags: ['Python', 'Spotipy', 'Streamlit', 'Pandas', 'API Integration'],
      link: 'https://github.com/raneemousa3/spotify-top-songs-analysis'
    },
    {
      id: 6,
      title: 'NdLinear vs nn.Linear Performance Comparison',
      description: 'Implemented a "NdLinear" layer to preserve multi-D input structure (text & video) and compared it with a conventional flatten+`nn.Linear` on AG News (text) and UCF-101 (video). Across both tasks—even when integrated with a frozen ResNet-18 backbone—NdLinear achieved lower validation loss and higher accuracy without adding parameters or slowing down training.',
      image: '/images/graphND.jpeg',
      tags: ['PyTorch',  'NDLinear', 'NLP', 'Computer Vision', 'Resnet18'],
      link: 'https://github.com/raneemousa3/ndlinear-vs-nnlinear'
    },
    
    

    

  ];

  return (
    <section 
      ref={projectsRef}
      className={`${styles.projects} ${isVisible ? styles.visible : ''}`}
      id="projects"
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionDescription}>
          A collection of my recent work in AI, software development, and engineering.
        </p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <a href={project.link} className={styles.projectLink}>
                    View Project
                  </a>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 