import React, { useState } from 'react';
import styles from './Courses.module.css';

const Courses = () => {
  const [activePlan, setActivePlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: 'BASIC PLAN',
      price: '₹999',
      discountedPrice: '₹500',
    },
    {
      id: 2,
      name: 'STANDARD PLAN',
      price: '₹6999',
      discountedPrice: '₹1500',
    },
    {
      id: 3,
      name: 'PREMIUM PLAN',
      price: '₹2999',
      discountedPrice: '₹2500',
    },
  ];

  const toggleDetails = (planId) => {
    setActivePlan(activePlan === planId ? null : planId);
  };

  return (
    <div className={styles.coursesSection}>
      <div className={styles.introText}>
        <span style={{ color: 'black', fontSize: '44px' }}>Our</span>
        <span style={{ color: '#8bc34a', fontSize: '44px' }}> Programs</span>
      </div>
      
      {/* Add some margin or padding here if needed */}
      <div className={styles.coursesContainer} style={{ marginTop: '40px' }}> 
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${styles.planCard} ${activePlan === plan.id ? styles.active : ''}`}
          >
            <div className={styles.planName}>{plan.name}</div>
            <div
              className={styles.arrowButton}
              onClick={() => toggleDetails(plan.id)}
            >
              <div className={`${styles.circle} ${activePlan === plan.id ? styles.rotate : ''}`}>
                <div className={styles.triangle} />
              </div>
            </div>
            <div className={`${styles.planDetails} ${activePlan === plan.id ? styles.visibleDetails : ''}`}>
              <div className={styles.whiteSheet}>
                <div className={styles.closeButton} onClick={() => toggleDetails(plan.id)}>
                  <div className={`${styles.circle} ${activePlan === plan.id ? styles.rotate : ''}`}>
                    <div className={styles.triangle} style={{ transform: 'rotate(180deg)' }} />
                  </div>
                </div>
                <p>Price: <s>{plan.price}</s></p>
                <p>{plan.discountedPrice}</p>
                <div className={styles.buttons}>
                  <button className={styles.brochureButton}>Brochure</button>
                  <button className={styles.viewButton}>View Program</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
