import { FaPlay, FaDownload, FaFilm } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-bg-orb hero-bg-orb--gold"></div>
        <div className="hero-bg-orb hero-bg-orb--purple"></div>
        <div className="hero-bg-grid"></div>
      </div>

      <div className="container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for Projects
          </div>

          <h1 className="hero-name">
            Sumit
            <span>Kumar</span>
          </h1>

          <p className="hero-tagline">Professional Video Editor & Motion Designer</p>

          <p className="hero-description">
            Crafting cinematic stories through the art of editing. Specializing in 
            commercial films, music videos, and social media content that captivates and converts.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              <FaPlay /> View My Work
            </a>
            <a href="#contact" className="btn-outline">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">50+</div>
              <div className="hero-stat-label">Projects Done</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">3+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">30+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-visual-frame">
            <div
              className="hero-visual-img"
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a18 50%, #16213e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaFilm style={{ fontSize: '4rem', color: 'var(--accent)', opacity: 0.3 }} />
            </div>
            <div className="hero-visual-overlay">
              <div className="hero-visual-overlay-icon">
                <FaPlay />
              </div>
              <div className="hero-visual-overlay-text">
                <strong>Latest Project</strong>
                Brand Commercial — 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
