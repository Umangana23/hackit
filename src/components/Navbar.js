import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        <li><Link to="/services" className="navbar-link">Services</Link></li>
        <li><Link to="/blog" className="navbar-link">Blog</Link></li>
        <li><Link to="/login" className="navbar-link">Login/Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;