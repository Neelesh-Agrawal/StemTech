import React from 'react';
import styles from '../styles/index.module.css';

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className={styles.solutionsSection}>
      <h2 className={styles.ourSolutions}>Our Solutions</h2>
      <p className={styles.comprehensiveSolutionsTailor}>
        Comprehensive solutions tailored to meet the needs of educational institutions and industry partners.
      </p>

      <div className={styles.solutionsCardsContainer}>
        <div className={styles.solutionCard}>
          <h3 className={styles.solutionCardTitle}>Education Solutions</h3>
          <ul className={styles.solutionList}>
            <li>Complete STEM curriculum packages</li>
            <li>Teacher training and support</li>
            <li>Classroom robotics labs</li>
            <li>Competition preparation resources</li>
          </ul>
        </div>

        <div className={styles.solutionCard}>
          <h3 className={styles.solutionCardTitle}>Industry Solutions</h3>
          <ul className={styles.solutionList}>
            <li>Industry 4.0 training systems</li>
            <li>Custom IoT development</li>
            <li>Robotics research partnerships</li>
            <li>Workforce development programs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
