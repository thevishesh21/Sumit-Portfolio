import { useState, useEffect } from 'react';
import { FaVideo, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="navbar-logo">
          <div className="navbar-logo-icon">
            <FaVideo />
          </div>
          <span className="navbar-logo-text">Sumit<span>.</span></span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="#showreel" onClick={closeMenu}>Showreel</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <div className="navbar-cta">
          <a href="#contact" className="btn-primary">Hire Me</a>
          <div
            className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
