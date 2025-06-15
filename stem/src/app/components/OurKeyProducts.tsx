import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const OurKeyProducts = () => {
  return (
    <section id="keyProduct" className={styles.keyProductsSection}>
      <h2 className={styles.ourKeyProducts}>Our Key Products</h2>
      <p className={styles.innovativeSolutionsDesigned}>
        Innovative solutions designed for the next generation of engineers, researchers, and educators.
      </p>

      <div className={styles.keyProductCardsContainer}>
        <div className={styles.keyProductCard}>
          <Image className={`${styles.keyProductIcon} ${styles.greenIcon}`} width={36} height={37} alt="STEM Learning Robots Icon" src="/frame.svg" />
          <h3 className={styles.keyProductCardTitle}>STEM Learning Robots</h3>
          <p className={styles.keyProductCardDescription}>
            Interactive robots designed for hands-on STEM education from school to university level.
          </p>
        </div>

        <div className={styles.keyProductCard}>
          <Image className={`${styles.keyProductIcon} ${styles.greenIcon}`} width={36} height={37} alt="IoT Development Boards Icon" src="/embedded.svg" />
          <h3 className={styles.keyProductCardTitle}>IoT Development Boards</h3>
          <p className={styles.keyProductCardDescription}>
            Versatile boards for IoT and smart device prototyping, built for engineers and students alike.
          </p>
        </div>

        <div className={styles.keyProductCard}>
          <Image className={`${styles.keyProductIcon} ${styles.greenIcon}`} width={32} height={39} alt="Academic Research Kits Icon" src="/microscope.svg" />
          <h3 className={styles.keyProductCardTitle}>Academic Research Kits</h3>
          <p className={styles.keyProductCardDescription}>
            Industry 4.0 training labs and robot development platforms tailored for university research and teaching.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurKeyProducts;
