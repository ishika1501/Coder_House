import React, { useState, useEffect } from 'react';
import styles from './Review.module.css';

const reviews = [
    {
        name: "Shailesh Gupta",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard ever since the 1500s.",
        rating: 5
    },
    {
        name: "Anjali Sharma",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
        rating: 4
    },
    {
        name: "Ravi Kumar",
        text: "This is a great service. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        rating: 5
    },
    {
        name: "Priya Singh",
        text: "Lorem Ipsum is simply dummy text of the printing industry. It is a long-established fact that a reader will be distracted by the readable content.",
        rating: 4
    },
    {
        name: "Amit Verma",
        text: "Wonderful experience. Lorem Ipsum has been the industry's standard dummy text for years.",
        rating: 5
    }
];

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000); // Slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const stars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? styles.filledStar : styles.emptyStar}>★</span>
        ));
    };

    return (
        <div className={styles.reviewContainer}>
            {/* Title with colored text */}
            <div className={styles.title}>
                <span>Our </span><span className={styles.highlight}>Reviews</span>
            </div>

            {/* Review card */}
            <div className={styles.review}>
                {/* Circular double quote icon */}
                <div className={styles.quoteIcon}>
                    <span className={styles.doubleQuote}>&ldquo;</span> {/* Added double quote */}
                </div>
                
                {/* Stars and review content */}
                <div className={styles.stars}>
                    {stars(reviews[currentIndex].rating)}
                </div>
                <h3>{reviews[currentIndex].name}</h3>
                <p>{reviews[currentIndex].text}</p>
            </div>

            {/* Dots for sliding indication */}
            <div className={styles.dots}>
                {reviews.map((_, index) => (
                    <span key={index} className={index === currentIndex ? styles.activeDot : styles.dot}></span>
                ))}
            </div>
        </div>
    );
};

export default Review;
