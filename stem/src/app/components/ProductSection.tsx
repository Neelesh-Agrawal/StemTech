import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import InquireWhatsAppButton from './InquireWhatsAppButton';

const ProductsSection: React.FC = () => {
  return (
    <>
      <b className={styles.ourProducts}>Our Products</b>
      <div className={styles.exploreOurCuttingEdge}>
        Explore our cutting-edge robotics and IoT solutions designed for the next generation of engineers and educators.
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <InquireWhatsAppButton text="Inquire on WhatsApp" />
          <Image className={styles.vectorIcon2} width={17} height={18} alt="" src="/whatsapp.svg" />
        </div>
        <b className={styles.embeddedControlSystem}>Embedded Control System</b>
        <div className={styles.advancedControlSystems}>Advanced control systems for automation</div>
        <Image className={styles.pic1RemovebgPreview1Icon} width={417} height={301} alt="" src="/robo1.png" />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupInner} />
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <InquireWhatsAppButton text="Inquire on WhatsApp" />
          <Image className={styles.vectorIcon3} width={17} height={18} alt="" src="/whatsapp.svg" />
        </div>
        <b className={styles.embeddedControlSystem}>STEMTEC IoT Development Kit</b>
        <div className={styles.advancedControlSystems}>Advanced control systems for automation</div>
        <Image className={styles.boardRemovebgPreview1Icon} width={417} height={302} alt="" src="/board.png" />
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupInner} />
        <div className={styles.groupDiv}>
          <div className={styles.groupChild1} />
          <InquireWhatsAppButton text="Inquire on WhatsApp" />
          <Image className={styles.vectorIcon3} width={17} height={18} alt="" src="/whatsapp.svg" />
        </div>
        <b className={styles.stemtecIotDevelopment1}>STEMTEC IoT Development Kit</b>
        <div className={styles.advancedControlSystems}>Advanced control systems for automation</div>
        <Image className={styles.roboThumbnail1Icon} width={303} height={301} alt="" src="/robo2.png" />
      </div>
    </>
  );
};

export default ProductsSection;
