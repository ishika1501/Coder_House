import React, { useState } from "react";
import styles from "./CollegePrograms.module.css";

const collegeProgramsData = [
  {
    id: 1,
    image: "/public/Moments/1.jpg",  // Image path should start with /
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: "/public/Moments/2.jpg",  // Image path should start with /
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    image: "/public/Moments/3.jpg",  // Image path should start with /
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    image: "/public/Moments/4.jpg",  // Image path should start with /
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    image: "/public/Moments/5.jpg",  // Image path should start with /
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  }
];

const CollegePrograms = () => {
  const [currentProgram, setCurrentProgram] = useState(0);

  const handleNext = () => {
    setCurrentProgram((prevProgram) => 
      prevProgram === collegeProgramsData.length - 1 ? 0 : prevProgram + 1
    );
  };

  const handlePrevious = () => {
    setCurrentProgram((prevProgram) => 
      prevProgram === 0 ? collegeProgramsData.length - 1 : prevProgram - 1
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Our <span>Moments</span>
      </h2>

      <div className={styles.content}>
        <div className={styles.description}>
          <h3>Description Here</h3>
          <p>{collegeProgramsData[currentProgram].description}</p>
        </div>

        <div className={styles.images}>
          <div className={styles.imageBox}>
            <img
              src={collegeProgramsData[currentProgram].image}
              alt="College Program"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.arrows}>
          <button className={styles.arrow} onClick={handlePrevious}>
            &#8592;
          </button>
          <button className={styles.arrow} onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegePrograms;
