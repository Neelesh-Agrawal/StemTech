import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 89; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'keyProduct', 'technicalSpecification', 'solutions', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer} onClick={() => scrollToSection('home')}>
          <Image
            className={styles.stemtechLogo}
            width={63}
            height={63}
            alt="STEMTEC Logo"
            src="/stemtech_logo-removebg-preview.png"
            priority
          />
          <b className={styles.stemtecAi}>STEMTEC AI & Robotics</b>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <div 
            onClick={() => scrollToSection('home')} 
            className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
          >
            Home
          </div>
          <div 
            onClick={() => scrollToSection('about')} 
            className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
          >
            About
          </div>
          <div 
            onClick={() => scrollToSection('products')} 
            className={`${styles.navLink} ${activeSection === 'products' ? styles.active : ''}`}
          >
            Products
          </div>
          <div 
            onClick={() => scrollToSection('keyProduct')} 
            className={`${styles.navLink} ${activeSection === 'keyProduct' ? styles.active : ''}`}
          >
            Key Product
          </div>
          <div 
            onClick={() => scrollToSection('technicalSpecification')} 
            className={`${styles.navLink} ${activeSection === 'technicalSpecification' ? styles.active : ''}`}
          >
            Technical Specs
          </div>
          <div 
            onClick={() => scrollToSection('solutions')} 
            className={`${styles.navLink} ${activeSection === 'solutions' ? styles.active : ''}`}
          >
            Solutions
          </div>
          <div 
            onClick={() => scrollToSection('contact')} 
            className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
          >
            Contact
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
