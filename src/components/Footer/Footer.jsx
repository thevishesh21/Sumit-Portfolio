import { FaVideo } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <FaVideo />
              </div>
              <span className="footer-logo-text">Sumit<span>.</span></span>
            </div>
            <p className="footer-brand-text">
              Professional video editor crafting cinematic experiences. Turning creative visions into compelling visual stories.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h4 className="footer-column-title">Navigation</h4>
            <div className="footer-column-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#showreel">Showreel</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="footer-column-title">Services</h4>
            <div className="footer-column-links">
              <a href="#skills">Video Editing</a>
              <a href="#skills">Color Grading</a>
              <a href="#skills">Motion Graphics</a>
              <a href="#skills">Sound Design</a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="footer-column-title">Contact</h4>
            <div className="footer-column-links">
              <a href="mailto:sumit@editor.com">sumit@editor.com</a>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <a href="#contact">Hire Me</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2024 Sumit Kumar. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
