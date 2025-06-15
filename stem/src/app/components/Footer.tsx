import React from 'react';
import styles from '../styles/index.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <b className={styles.stemtecAiFooter}>STEMTEC AI & Robotics</b>
          <p className={styles.leadingTheFuture}>
            Leading the future of automation with innovative robotics solutions.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3 className={styles.quickLinks}>Quick Links</h3>
          <ul className={styles.footerList}>
            <li><a href="#home" className={styles.footerLink}>Home</a></li>
            <li><a href="#about" className={styles.footerLink}>About</a></li>
            <li><a href="#products" className={styles.footerLink}>Products</a></li>
            <li><a href="#solutions" className={styles.footerLink}>Solutions</a></li>
          </ul>
        </div>

        <div className={styles.footerProducts}>
          <h3 className={styles.productsFooter}>Products</h3>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>Industrial Robots</a></li>
            <li><a href="#" className={styles.footerLink}>Embedded Systems</a></li>
            <li><a href="#" className={styles.footerLink}>Control Units</a></li>
            <li><a href="#" className={styles.footerLink}>Custom Solutions</a></li>
          </ul>
        </div>

        <div className={styles.footerNewsletter}>
          <h3 className={styles.newsletter}>Newsletter</h3>
          <p className={styles.subscribeToOur}>
            Subscribe to our newsletter for updates
          </p>
          <div className={styles.newsletterInputContainer}>
            <input type="email" placeholder="Your email" className={styles.newsletterInput} />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p className={styles.stemtecAiCopyright}>
          © 2025 STEMTEC AI & Robotics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
