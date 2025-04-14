'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
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

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'your_service_id',
        'your_template_id',
        templateParams,
        'your_user_id'
      );
      setStatus('Message Sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error. Please try again.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section id="contact">
      <b className={styles.contactUs}>Contact Us</b>
      <form className={styles.rectangleParent16} onSubmit={handleSubmit}>
        <div className={styles.groupChild17} />
        <b className={styles.getInTouch}>Get in Touch</b>

        <label className={styles.name}>Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className={styles.email}>Email</label>
        <input
          className={styles.input1}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className={styles.message}>Message</label>
        <textarea
          className={styles.textarea}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className={styles.rectangleParent17} type="submit">
          <div className={styles.groupChild18} />
          <div className={styles.sendMessage}>Send Message</div>
        </button>
        {status && <p>{status}</p>}
      </form>

      <div className={styles.rectangleParent18}>
        <div className={styles.groupChild17} />
        <b className={styles.contactInformation}>Contact Information</b>
        <Image className={`${styles.vectorIcon12} ${styles.greenIcon}`} width={18} height={25} alt="" src="/location.svg" />
        <div className={styles.vitChennaiKelambakkam}>
          VIT Chennai, Kelambakkam - Vandalur Rd, Rajan Nagar, Chennai, Tamil Nadu
        </div>
        <Image className={`${styles.vectorIcon13} ${styles.greenIcon}`} width={16} height={16} alt="" src="/call.svg" />
        <div className={styles.div}>+91 1234567890</div>
        <Image className={`${styles.vectorIcon14} ${styles.greenIcon}`} width={16} height={12} alt="" src="/mail.svg" />
        <div className={styles.adminstemtechin}>admin@stemtech.in</div>
        <b className={styles.followUs}>Follow Us</b>
        <Image className={`${styles.vectorIcon15} ${styles.greenIcon}`}  width={21} height={22} alt="" src="/linkedin.svg" />
      </div>
    </section>
  );
};

export default ContactSection;
