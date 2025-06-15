import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const navbarHeight = 89; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* These divs are kept from your original layout, consider if they are still needed or can be refactored */}
      <div className={styles.desktop11Child} />
      <div className={styles.desktop11Item} />
      <div className={styles.desktop11Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.desktop11Child1} />
      <div className={styles.desktop11Child2} />

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.empoweringFutureInnovators}>Empowering Future Innovators</h1>
          <p className={styles.weBuildIntelligent}>
            We build intelligent robots, IoT systems, and academic development platforms for Industry 4.0 and STEM education.
          </p>
          <button className={styles.exploreProductsButton} onClick={scrollToProducts}>
            Explore Products
          </button>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            className={styles.backgroundRemovebgPreviewPiIcon}
            width={1500}
            height={924}
            alt="STEMTEC Robot"
            src="/Background-removebg-preview-Picsart-AiImageEnhancer.png"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
