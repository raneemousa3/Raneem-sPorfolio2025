import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';
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
      { threshold: 0 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);



  return (
    <section 
      ref={projectsRef}
      className={`${styles.projects} ${isVisible ? styles.visible : ''}`}
      id="projects"
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionDescription}>
          Current work in applied AI, robotics, and safe autonomy, alongside the software and creative projects that brought me here.
        </p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                {project.image ? (
                  <Image src={project.image} alt={project.title} width={400} height={300}
                    className={styles.projectImage} unoptimized />
                ) : (
                  <div className={styles.editorialCover} aria-hidden="true">
                    <span className={styles.coverEyebrow}>{project.eyebrow}</span>
                    <span className={styles.coverTitle}>{project.cover}</span>
                  </div>
                )}
                <div className={styles.projectOverlay}>
                  <Link href={project.link} className={styles.projectLink} tabIndex={-1} aria-hidden="true">
                    {project.slug ? 'Read project notes' : 'View Project'}
                  </Link>
                </div>
              </div>
              <div className={styles.projectContent}>
                {project.status && <p className={styles.projectStatus}>{project.status}</p>}
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={project.link} className={styles.detailLink}>
                  {project.slug ? 'Read project notes' : 'View project'} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 