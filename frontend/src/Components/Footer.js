import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h4>About Us</h4>
          <p>
            We provide the best content and services tailored to your needs. Discover more about our mission, vision, and values.
          </p>
        </div>

        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section social-section">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="#"><FacebookIcon className="social-icon" /></a></li>
            <li><a href="#"><TwitterIcon className="social-icon" /></a></li>
            <li><a href="#"><InstagramIcon className="social-icon" /></a></li>
            <li><a href="#"><LinkedInIcon className="social-icon" /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
