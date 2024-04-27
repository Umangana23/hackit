// FirstPage.js
import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import HomeSlider from './HomeSlider';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const FirstPage = () => {
  return (
    <Router>
      <div className="first-page">
        <Header />
        
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {/* Add routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default FirstPage;
