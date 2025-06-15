import React from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

interface WhatsAppProps {
  text: string;
}

const InquireWhatsAppButton: React.FC<WhatsAppProps> = ({ text }) => {
  const handleClick = () => {
    // Replace the number with your own WhatsApp number.
    window.open(
      'https://wa.me/+9025116554?text=Hello%20STEMTEC,%20I%20have%20a%20query.',
      '_blank'
    );
  };

  return (
    <button onClick={handleClick} className={styles.inquireWhatsAppButton}>
      <Image src="/whatsapp.svg" alt="WhatsApp Icon" width={20} height={20} className={styles.whatsappIcon} />
      {text}
    </button>
  );
};

export default InquireWhatsAppButton;
