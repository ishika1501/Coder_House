import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ContactForm from './Components/ContactForm/Contact';
import Card from './Components/Card/Card';
import Review from './Components/Review/Review';
import Bottom from './Components/Bottom/Bottom';

// Pages
import Home from './Pages/Home/Home'; // Your existing Home component
import CollegePrograms from './Pages/CollegePrograms/CollegePrograms'; // College Programs component
import Contact from './Pages/Contact'; // Contact page component

function App() {
  return (
    <Router>
      <div className="appBackground">
        <Navigation />
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={
            <>
              <ContactForm />
              <div className="yellow-rectangle"></div>
              <Card />
              <Review />
              <Bottom />
            </>
          } />
          
          {/* Route for College Programs page */}
          <Route path="/college-programs" element={<CollegePrograms />} />
          
          {/* Route for Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
