import React from 'react';
import styles from '../styles/index.module.css';

interface WhatsAppProps {
  text: string;
}

const InquireWhatsAppButton: React.FC<WhatsAppProps> = ({ text }) => {
  const handleClick = () => {
    // Replace the number with your own WhatsApp number.
    window.open(
      'https://wa.me/+1234567890?text=Hello%20STEMTEC,%20I%20have%20a%20query.',
      '_blank'
    );
  };

  return (
    <div onClick={handleClick} className={styles.inquireOnWhatsapp}>
      {text}
    </div>
  );
};

export default InquireWhatsAppButton;
