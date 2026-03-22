import { FaUser, FaVideo, FaFilm, FaMagic, FaCut, FaPalette } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    { icon: <FaCut />, text: 'Premiere Pro Expert' },
    { icon: <FaMagic />, text: 'After Effects & VFX' },
    { icon: <FaFilm />, text: 'Color Grading' },
    { icon: <FaPalette />, text: 'Motion Graphics' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="about-placeholder">
                <FaUser />
              </div>
              <div className="about-experience-badge">
                <div className="about-experience-badge-number">3+</div>
                <div className="about-experience-badge-text">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="about-label">About Me</span>
            <h2 className="about-title">Turning Raw Footage Into Cinematic Masterpieces</h2>
            <p className="about-text">
              I'm Sumit Kumar, a passionate video editor with over 3 years of experience 
              in crafting compelling visual narratives. I specialize in commercial editing, 
              music videos, and social media content that not only looks stunning but 
              drives real engagement.
            </p>
            <p className="about-text">
              My approach combines technical precision with creative storytelling — ensuring 
              every cut, transition, and effect serves the narrative. I believe great editing 
              is invisible; it should feel effortless while keeping the audience captivated.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div className="about-highlight" key={index}>
                  <div className="about-highlight-icon">{item.icon}</div>
                  <span className="about-highlight-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
