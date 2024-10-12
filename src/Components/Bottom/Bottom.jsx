import React from 'react';
import styles from './Bottom.module.css';

const Bottom = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.locationContainer}>
        <div className={styles.locationText}>
          <div className={styles.locationIcon}>📍</div> {/* Location Icon */}
          <div className={styles.address}>
            <h3>Our Location</h3>
            <p>3rd Floor,</p>
            <p>Above Indian Bank,</p>
            <p>MR-4 Road, Vijay Nagar,</p>
            <p>Jabalpur</p>
          </div>
        </div>
        <div className={styles.mapPlaceholder}></div> {/* Placeholder for the map */}
      </div>

      <div className={styles.footerLinks}>
        <a href="/contact">Contact Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Condition</a>
      </div>

      <div className={styles.socialMedia}>
        <h3>Connect With Us</h3>
        <div className={styles.icons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./public/images/facebookicon.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./public/images/instaicon.png" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="./public/images/linkedinicon.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
