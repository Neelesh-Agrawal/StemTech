'use client';

import type { NextPage } from 'next';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import OurKeyProducts from './OurKeyProducts';
import ProductsSection from './ProductSection';
import TechnicalSpecificationsSection from './TechnicalSpecificationsSection';
import SolutionsSection from './SolutionsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import styles from '../styles/index.module.css';

const Desktop: NextPage = () => {
  return (
    <div className={styles.desktop11}>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <OurKeyProducts />
      <TechnicalSpecificationsSection />
      <SolutionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Desktop;
