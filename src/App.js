// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Login from './components/Login'; // Import the Login component
import Footer from './components/Footer';
import SignUp from './components/Signup';

function App() {
  const images = [
    'pic1.jpeg',
    'pic2.jpeg',
    'pic3.jpeg',
    'pic4.jpeg',
    'pic5.jpg'
  ];

  return (
    <Router>
      <div className="first-page">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home images={images} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add a route to render nothing for the main content when login page is open */}
          <Route path="/login/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
