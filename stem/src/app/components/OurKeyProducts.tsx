import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const OurKeyProducts = () => {
  return (
    <div>
      <b className={styles.ourKeyProducts}>Our Key Products</b>
      <div className={styles.innovativeSolutionsDesigned}>
        Innovative solutions designed for the next generation of engineers, researchers, and educators.
      </div>

      <div className={styles.rectangleParent5}>
        <div className={styles.groupChild6} />
        <Image className={`${styles.vectorIcon5} ${styles.greenIcon}`} width={36} height={37} alt="Embedded Systems" src="/embedded.svg" />
        <b className={styles.iotDevelopmentBoards}>IoT Development Boards</b>
        <div className={styles.versatileBoardsFor}>
          Versatile boards for IoT and smart device prototyping, built for engineers and students alike.
        </div>
      </div>

      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild7} />
        <Image className={`${styles.vectorIcon6} ${styles.greenIcon}`} width={32} height={39} alt="Microscope" src="/microscope.svg" />
        <b className={styles.academicResearchKits}>Academic Research Kits</b>
        <div className={styles.industry40Training}>
          Industry 4.0 training labs and robot development platforms tailored for university research and teaching.
        </div>
      </div>

      <div className={styles.rectangleParent7}>
        <div className={styles.groupChild7} />
        <Image className={`${styles.vectorIcon7} ${styles.greenIcon}`} width={38} height={30} alt="Frame" src="/frame.svg" />
        <b className={styles.stemLearningRobots}>STEM Learning Robots</b>
        <div className={styles.interactiveRobotsDesigned}>
          Interactive robots designed for hands-on STEM education from school to university level.
        </div>
      </div>
    </div>
  );
};

export default OurKeyProducts;
