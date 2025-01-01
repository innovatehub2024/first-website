import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Innovate Hub</h2>
          <p>Subscribe to Innovate Hub to get the latest Updates.</p>
          <div className="subscription-container">
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Projects</h3>
          <ul>
            <li><a href="#">UI/UX</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">SRS Document</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li><a href="#">Python</a></li>
            <li><a href="#">Java</a></li>
            <li><a href="#">HTML, CSS, JavaScript</a></li>
            <li><a href="#">C Programming</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Innovate Hub 2024 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;