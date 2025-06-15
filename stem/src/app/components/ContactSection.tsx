'use client';

import React, { useState } from 'react';
import Image from 'next/image';
// import emailjs from 'emailjs-com'; // Uncomment and configure if using EmailJS
import styles from '../styles/index.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending message...');

    // For demonstration, log the form data.
    // In a real application, you would send this to your backend or EmailJS.
    console.log('Form Data:', formData);

    // Simulate API call
    try {
      // Replace with actual EmailJS send or backend API call
      // await emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
      setStatus('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactUs}>Contact Us</h2>
      <div className={styles.contactContent}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3 className={styles.getInTouch}>Get in Touch</h3>

          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
            />
          </div>

          <button className={styles.sendMessageButton} type="submit">
            Send Message
          </button>
          {status && <p className={styles.formStatus}>{status}</p>}
        </form>

        <div className={styles.contactInfo}>
          <h3 className={styles.contactInformation}>Contact Information</h3>
          <div className={styles.infoItem}>
            <Image className={`${styles.infoIcon} ${styles.greenIcon}`} width={20} height={20} alt="Location Icon" src="/location.svg" />
            <p className={styles.infoText}>
              VIT Chennai, Kelambakkam - Vandalur Rd, Rajan Nagar, Chennai, Tamil Nadu
            </p>
          </div>
          <div className={styles.infoItem}>
            <Image className={`${styles.infoIcon} ${styles.greenIcon}`} width={20} height={20} alt="Phone Icon" src="/call.svg" />
            <p className={styles.infoText}>+91 9025116554</p>
          </div>
          <div className={styles.infoItem}>
            <Image className={`${styles.infoIcon} ${styles.greenIcon}`} width={20} height={20} alt="Email Icon" src="/mail.svg" />
            <p className={styles.infoText}>admin@stemtech.in</p>
          </div>

          <h3 className={styles.followUs}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/company/stemtec-ai-robotics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image className={`${styles.socialIcon} ${styles.greenIcon}`} width={24} height={24} alt="LinkedIn Icon" src="/linkedin.svg" />
            </a>
            {/* Add more social media icons here as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
