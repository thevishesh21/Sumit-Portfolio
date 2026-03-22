import { FaPlay } from 'react-icons/fa';
import './Showreel.css';

const Showreel = () => {
  return (
    <section className="showreel section" id="showreel">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Watch</span>
          <h2 className="section-title">My Showreel</h2>
          <p className="section-subtitle">
            A compilation of my best work — showcasing storytelling, pacing, and visual craft
          </p>
        </div>

        <div className="showreel-player">
          <div className="showreel-video-wrapper">
            <div className="showreel-pulse-ring"></div>
            <button className="showreel-play-btn" aria-label="Play showreel">
              <FaPlay />
            </button>
          </div>
          <div className="showreel-bottom">
            <span className="showreel-title">Sumit Kumar — Showreel 2024</span>
            <span className="showreel-duration">02:48</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
