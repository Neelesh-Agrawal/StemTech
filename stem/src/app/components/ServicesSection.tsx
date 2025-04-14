import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const ServicesSection: React.FC = () => {
  return (
    <>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <Image className={`${styles.vectorIcon} ${styles.greenIcon}`} width={38} height={31} alt="" src="/frame.svg" />
        <b className={styles.advancedRobotics}>Advanced Robotics</b>
        <div className={styles.stateOfTheArtRoboticSolut}>State-of-the-art robotic solutions</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <Image className={`${styles.vectorIcon1} ${styles.greenIcon}`} width={30} height={31} alt="" src="/embedded.svg" />
        <b className={styles.embeddedSystems}>Embedded Systems</b>
        <div className={styles.customEmbeddedSolutions}>Custom embedded solutions</div>
      </div>
    </>
  );
};

export default ServicesSection;
