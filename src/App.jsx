import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ContactForm from './Components/ContactForm/Contact';
import Card from './Components/Card/Card';  
import Courses from './Components/Courses/Courses';
import Review from './Components/Review/Review';  // Ensure Review is imported

function App() {
  return (
    <div className="appBackground"> 
      <Navigation />
      <ContactForm />
      <div className="yellow-rectangle"></div>
      <Card />  
      <Courses />
      <Review />  {/* Ensure this component is included */}
    </div>
  );
}

export default App;
