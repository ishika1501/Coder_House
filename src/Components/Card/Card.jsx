import React from 'react';
import styles from './Card.module.css';
import cardImage from '/images/Card1.png'; // Import the default image
import hoverCardImage from '/images/Card2.png'; // Import the hover image

const cardData = [
  {
    title: 'EXCELLENT INFRASTRUCTURE',
    features: [
      'Modern, tech-enabled classrooms and labs.',
      'High-speed internet for uninterrupted learning.',
      'Collaborative spaces to foster creativity.',
    ],
  },
  {
    title: 'EXPERT MENTOR TEAM',
    features: [
      'Learn from top industry professionals.',
      'Personalized mentorship and real-world insights.',
      'Guidance from IIT, NIT, and MNC experts.',
    ],
  },
  {
    title: 'GROWTH-CENTERED SPACE',
    features: [
      'Curriculum focused on rapid skill development.',
      'Regular workshops and hackathons.',
      'Supportive, collaborative learning atmosphere.',
    ],
  },
];

const Card = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.titleContainer}>
        <div className={styles.subtitle}>What We Offer</div>
        <h1 className={styles.mainTitle}>Key Features Of <p1>CODER HOUSE</p1></h1>
      </div>
      <div className={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === 1 ? styles.middleCard : ''}`}
            style={{
              backgroundImage: `url(${cardImage})`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${hoverCardImage})`)}  // Change image on hover
            onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${cardImage})`)} // Revert image on hover-out
          >
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.description}>{card.description}</p>
            <ul className={styles.features}>
              {card.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
