import React, { useState } from 'react';
import styles from './Moments.module.css';

const Moments = () => {
  const images = ['/public/Moments/1.jpg', '/public/Moments/2.jpg', '/public/Moments/3.jpg',"/public/Moments/4.jpg"]; // Add paths to your images here
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.momentsContainer}>
      {/* Background image */}
      <div className={styles.backgroundImage}></div>

      {/* Arrows for navigation */}
      <div className={styles.arrowContainer}>
        <button onClick={prevImage} className={styles.arrowBtn}>⟵</button>
        <button onClick={nextImage} className={styles.arrowBtn}>⟶</button>
      </div>

      {/* Frame content */}
      <div className={styles.content}>
        <div className={styles.frames}>
          <img src={images[currentIndex]} alt="Moment" className={styles.frame} />
          <img src={images[(currentIndex + 1) % images.length]} alt="Moment" className={styles.frame} />
        </div>
      </div>
    </div>
  );
};

export default Moments;