import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import EditorialCoverHero from '../components/EditorialCoverHero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raneem Mousa | Portfolio</title>
        <meta name="description" content="Portfolio of Raneem Mousa, Math and Computer Engineering Student" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <EditorialCoverHero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
} 