import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import InquireWhatsAppButton from './InquireWhatsAppButton';

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className={styles.productsSection}>
      <h2 className={styles.ourProducts}>Our Products</h2>
      <p className={styles.exploreOurCuttingEdge}>
        Explore our cutting-edge robotics and IoT solutions designed for the next generation of engineers and educators.
      </p>

      <div className={styles.productCardsContainer}>
        <div className={styles.productCard}>
          <div className={styles.productImageContainer}>
            <Image 
              className={styles.productImage}
              width={417}
              height={301}
              alt="Embedded Control System"
              src="/robo1.png"
              quality={100}
              priority
            />
          </div>
          <h3 className={styles.productTitle}>Embedded Control System</h3>
          <p className={styles.productDescription}>Advanced control systems for automation</p>
          <InquireWhatsAppButton text="Inquire on WhatsApp" />
        </div>

        <div className={styles.productCard}>
          <div className={styles.productImageContainer}>
            <Image 
              className={styles.productImage}
              width={417}
              height={302}
              alt="STEMTEC IoT Development Kit"
              src="/board.png"
              quality={100}
              priority
            />
          </div>
          <h3 className={styles.productTitle}>STEMTEC IoT Development Kit</h3>
          <p className={styles.productDescription}>Advanced control systems for automation</p>
          <InquireWhatsAppButton text="Inquire on WhatsApp" />
        </div>

        <div className={styles.productCard}>
          <div className={styles.productImageContainer}>
            <Image 
              className={styles.productImage}
              width={303}
              height={301}
              alt="STEMTEC IoT Development Kit 2"
              src="/robo2.png"
              quality={100}
              priority
            />
          </div>
          <h3 className={styles.productTitle}>STEMTEC IoT Development Kit</h3>
          <p className={styles.productDescription}>Advanced control systems for automation</p>
          <InquireWhatsAppButton text="Inquire on WhatsApp" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
