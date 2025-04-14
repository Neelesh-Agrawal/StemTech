import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* These divs are kept from your original layout */}
      <div className={styles.desktop11Child} />
      <div className={styles.desktop11Item} />
      <div className={styles.desktop11Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop11Child1} />
      <div className={styles.desktop11Child2} />

      <Image
        className={styles.backgroundRemovebgPreviewPiIcon}
        width={1224}
        height={754}
        alt=""
        src="/Background-removebg-preview-Picsart-AiImageEnhancer.png"
      />
      <div className={styles.weBuildIntelligent}>
        {`We build intelligent robots, IoT systems, and academic development platforms for Industry 4.0 and STEM education. `}
      </div>
      <div className={styles.empoweringFutureInnovators}>Empowering Future Innovators</div>
      <div className={styles.button}>
        <b className={styles.exploreProducts}>Explore Products</b>
      </div>
    </>
  );
};

export default HeroSection;
