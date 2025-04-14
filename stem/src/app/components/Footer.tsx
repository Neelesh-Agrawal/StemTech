import React from 'react';
import styles from '../styles/index.module.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <b className={styles.stemtchAi}>{`STEMTCH AI & Robotics`}</b>
      <div className={styles.leadingTheFuture}>
        Leading the future of automation with innovative robotics solutions.
      </div>
      <b className={styles.quickLinks}>Quick Links</b>
      <div className={styles.home1}>Home</div>
      <div className={styles.about1}>About</div>
      <div className={styles.products1}>Products</div>
      <div className={styles.solutions1}>Solutions</div>
      <b className={styles.products2}>Products</b>
      <div className={styles.industrialRobots}>Industrial Robots</div>
      <div className={styles.embeddedSystems1}>Embedded Systems</div>
      <div className={styles.controlUnits}>Control Units</div>
      <div className={styles.customSolutions}>Custom Solutions</div>
      <b className={styles.newsletter}>Newsletter</b>
      <div className={styles.subscribeToOur}>
        Subscribe to our newsletter for updates
      </div>
      <div className={styles.input2}>
        <div className={styles.yourEmail}>Your email</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.subscribe}>Subscribe</div>
      </div>
      <div className={styles.stemtecAi1}>
        {`© 2025 STEMTEC AI & Robotics. All rights reserved.`}
      </div>
    </footer>
  );
};

export default Footer;
