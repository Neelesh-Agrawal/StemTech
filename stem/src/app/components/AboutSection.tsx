import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.aboutUs}>About Us</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <Image
            className={styles.imgIcon}
            width={592}
            height={592}
            alt="About STEMTEC"
            src="/img2.png"
            priority
          />
        </div>
        <div className={styles.aboutText}>
          <h3 className={styles.leadingInnovationIn}>Leading Innovation in Robotics</h3>
          <div className={styles.foundedIn2020Container}>
            <p>
              Founded in 2020, STEMTEC AI & Robotics is dedicated to bridging the gap between academic learning and practical industry applications in the fields of robotics, AI, and IoT.
            </p>
            <p>
              Our team of engineers, educators, and industry experts work together to create innovative solutions that prepare students and professionals for the technological challenges of tomorrow.
            </p>
            <p>
              We partner with educational institutions, research facilities, and industry leaders to ensure our products meet the highest standards of quality and relevance.
            </p>
          </div>
          <div className={styles.aboutCardsContainer}>
            <div className={styles.aboutCard}>
              <div className={styles.cardHeader}>
                <Image src="/icon-robotics.svg" alt="Advanced Robotics Icon" width={40} height={40} className={styles.cardIcon} />
                <h4 className={styles.cardTitle}>Advanced Robotics</h4>
              </div>
              <p className={styles.cardDescription}>State-of-the-art robotic solutions</p>
            </div>
            <div className={styles.aboutCard}>
              <div className={styles.cardHeader}>
                <Image src="/icon-embedded-systems.svg" alt="Embedded Systems Icon" width={40} height={40} className={styles.cardIcon} />
                <h4 className={styles.cardTitle}>Embedded Systems</h4>
              </div>
              <p className={styles.cardDescription}>Custom embedded solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
