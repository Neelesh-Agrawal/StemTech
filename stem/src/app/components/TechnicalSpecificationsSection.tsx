import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const TechnicalSpecificationsSection: React.FC = () => {
  return (
    <>
      <b className={styles.technicalSpecifications}>Technical Specifications</b>
      <div className={styles.ourFlagshipStemtecX1}>
        Our flagship STEMTEC-X1 robot combines cutting-edge technology with robust design for educational excellence.
      </div>
      <div className={styles.rectangleParent8}>
        <div className={styles.groupChild9} />
        <Image className={`${styles.vectorIcon8} ${styles.greenIcon}`} width={17} height={25} alt="" src="/thunder.svg" />
        <b className={styles.power}>Power</b>
        <div className={styles.vDc2a}>12V DC, 2A max current draw</div>
      </div>
      <div className={styles.rectangleParent9}>
        <div className={styles.groupChild9} />
        <Image className={`${styles.vectorIcon9} ${styles.greenIcon}`} width={36} height={37} alt="" src="/embedded.svg" />
        <b className={styles.processor}>Processor</b>
        <div className={styles.vDc2a}>Dual-core ARM Cortex-A53, 1.2GHz</div>
      </div>
      <div className={styles.rectangleParent10}>
        <div className={styles.groupChild9} />
        <Image className={`${styles.groupIcon} ${styles.greenIcon}`} width={40} height={25} alt="" src="/battery.svg" />
        <b className={styles.batteryLife}>Battery Life</b>
        <div className={styles.vDc2a}>Up to 8 hours continuous operation</div>
      </div>
      <div className={styles.rectangleParent11}>
        <div className={styles.groupChild9} />
        <Image className={`${styles.vectorIcon10} ${styles.greenIcon}`} width={34} height={30} alt="" src="/rectangle-dashed.svg" />
        <b className={styles.dimensions}>Dimensions</b>
        <div className={styles.vDc2a}>180 × 120 × 80 mm (W×D×H)</div>
      </div>
      <div className={styles.rectangleParent12}>
        <div className={styles.groupChild9} />
        <Image className={`${styles.vectorIcon11} ${styles.greenIcon}`} width={35} height={31} alt="" src="/wifi.svg" />
        <b className={styles.dimensions}>Connectivity</b>
        <div className={styles.vDc2a}>Wi-Fi 802.11ac, Bluetooth 5.0, USB-C</div>
      </div>
      <div className={styles.rectangleParent13}>
        <div className={styles.groupChild9} />
        <Image className={`${styles.groupIcon1} ${styles.greenIcon}`} width={28} height={25} alt="" src="/arrow-spin.svg" />
        <b className={styles.motorControl}>Motor Control</b>
        <div className={styles.vDc2a}>Precision servo motors with 0.1° accuracy</div>
      </div>
    </>
  );
};

export default TechnicalSpecificationsSection;
