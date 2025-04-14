import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const NavigationBar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.stemtecAiRoboticsParent}>
      <b className={styles.stemtecAi}>STEMTEC AI & Robotics</b>
      <Image
        className={styles.stemtechLogoRemovebgPreviewIcon}
        width={63}
        height={63}
        alt="STEMTEC Logo"
        src="/stemtech_logo-removebg-preview.png"
      />
      <div className={styles.productsParent}>
        <div onClick={() => scrollToSection('products')} className={styles.products}>Products</div>
        <div onClick={() => scrollToSection('home')} className={styles.home}>Home</div>
        <div onClick={() => scrollToSection('about')} className={styles.about}>About</div>
        <div onClick={() => scrollToSection('solutions')} className={styles.solutions}>Solutions</div>
        <div onClick={() => scrollToSection('contact')} className={styles.contact}>Contact</div>
        <div onClick={() => scrollToSection('keyProduct')} className={styles.keyProduct}>Key Product</div>
        <div onClick={() => scrollToSection('technicalSpecification')} className={styles.technicalSpecification}>Technical Specification</div>
      </div>
    </div>
  );
};

export default NavigationBar;
