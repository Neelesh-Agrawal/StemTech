import React from 'react';
import styles from '../styles/index.module.css';

const SolutionsSection: React.FC = () => {
  return (
    <>
      <b className={styles.ourSolutions}>Our Solutions</b>
      <div className={styles.comprehensiveSolutionsTailor}>
        Comprehensive solutions tailored to meet the needs of educational institutions and industry partners.
      </div>
      <div className={styles.rectangleParent14}>
        <div className={styles.groupChild15} />
        <div className={styles.completeStemCurriculumContainer}>
          <ul className={styles.completeStemCurriculumPacka}>
            <li className={styles.completeStemCurriculum}>Complete STEM curriculum packages</li>
            <li className={styles.completeStemCurriculum}>Teacher training and support</li>
            <li className={styles.completeStemCurriculum}>Classroom robotics labs</li>
            <li>Competition preparation resources</li>
          </ul>
        </div>
        <b className={styles.educationSolutions}>Education Solutions</b>
      </div>
      <div className={styles.rectangleParent15}>
        <div className={styles.groupChild15} />
        <b className={styles.industrySolutions}>Industry Solutions</b>
        <div className={styles.industry40TrainingContainer}>
          <ul className={styles.completeStemCurriculumPacka}>
            <li className={styles.completeStemCurriculum}>Industry 4.0 training systems</li>
            <li className={styles.completeStemCurriculum}>Custom IoT development</li>
            <li className={styles.completeStemCurriculum}>Robotics research partnerships</li>
            <li>Workforce development programs</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SolutionsSection;
