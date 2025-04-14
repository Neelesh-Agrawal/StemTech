import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <b className={styles.aboutUs}>About Us</b>
      <Image
        className={styles.imgIcon}
        width={592}
        height={592}
        alt=""
        src="/img2.png"
      />
      <b className={styles.leadingInnovationIn}>Leading Innovation in Robotics</b>
      <div className={styles.foundedIn2020Container}>
        <p className={styles.blankLine}>
          {`Founded in 2020, STEMTEC AI & Robotics is dedicated to bridging the gap between academic learning and practical industry applications in the fields of robotics, AI, and IoT.`}
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Our team of engineers, educators, and industry experts work together to create innovative solutions that prepare students and professionals for the technological challenges of tomorrow.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          We partner with educational institutions, research facilities, and industry leaders to ensure our products meet the highest standards of quality and relevance.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
