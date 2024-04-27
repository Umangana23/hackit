import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="social-media">
                <h3>Follow Us</h3>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="footer-links">
                <h3>Useful Links</h3>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Information</a>
                <a href="#">FAQ</a>
            </div>
            <div className="contact-info">
                <h3>Contact Us</h3>
                <p>Email: info@lapdoo.com</p>
                <p>Phone: +123-456-7890</p>
                <p>Address: 123 Main St, City, Country</p>
            </div>
            <div className="copyright">
                <p>&copy; 2024 LapDoo. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
