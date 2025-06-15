import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const TechnicalSpecificationsSection: React.FC = () => {
  return (
    <section id="technicalSpecification" className={styles.technicalSpecificationsSection}>
      <h2 className={styles.technicalSpecifications}>Technical Specifications</h2>
      <p className={styles.ourFlagshipStemtecX1}>
        Our flagship STEMTEC-X1 robot combines cutting-edge technology with robust design for educational excellence.
      </p>

      <div className={styles.specsGridContainer}>
        <div className={styles.specCard}>
          <Image className={`${styles.specIcon} ${styles.greenIcon}`} width={36} height={37} alt="Processor Icon" src="/embedded.svg" />
          <h3 className={styles.specTitle}>Processor</h3>
          <p className={styles.specDescription}>Dual-core ARM Cortex-A53, 1.2GHz</p>
        </div>

        <div className={styles.specCard}>
          <Image className={`${styles.specIcon} ${styles.greenIcon}`} width={40} height={25} alt="Battery Life Icon" src="/battery.svg" />
          <h3 className={styles.specTitle}>Battery Life</h3>
          <p className={styles.specDescription}>Up to 8 hours continuous operation</p>
        </div>

        <div className={styles.specCard}>
          <Image className={`${styles.specIcon} ${styles.greenIcon}`} width={35} height={31} alt="Connectivity Icon" src="/wifi.svg" />
          <h3 className={styles.specTitle}>Connectivity</h3>
          <p className={styles.specDescription}>Wi-Fi 802.11ac, Bluetooth 5.0, USB-C</p>
        </div>

        <div className={styles.specCard}>
          <Image className={`${styles.specIcon} ${styles.greenIcon}`} width={17} height={25} alt="Power Icon" src="/thunder.svg" />
          <h3 className={styles.specTitle}>Power</h3>
          <p className={styles.specDescription}>12V DC, 2A max current draw</p>
        </div>

        <div className={styles.specCard}>
          <Image className={`${styles.specIcon} ${styles.greenIcon}`} width={34} height={30} alt="Dimensions Icon" src="/rectangle-dashed.svg" />
          <h3 className={styles.specTitle}>Dimensions</h3>
          <p className={styles.specDescription}>180 × 120 × 80 mm (W×D×H)</p>
        </div>

        <div className={styles.specCard}>
          <Image className={`${styles.specIcon} ${styles.greenIcon}`} width={28} height={25} alt="Motor Control Icon" src="/arrow-spin.svg" />
          <h3 className={styles.specTitle}>Motor Control</h3>
          <p className={styles.specDescription}>Precision servo motors with 0.1° accuracy</p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecificationsSection;
