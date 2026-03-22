import {
  FaCut,
  FaMagic,
  FaPalette,
  FaFilm,
  FaVideo,
  FaMusic,
} from 'react-icons/fa';
import './Skills.css';

const skillsData = [
  {
    icon: <FaCut />,
    title: 'Video Editing',
    description: 'Professional editing with precise cuts, pacing, and narrative flow that keeps audiences engaged.',
    tags: ['Premiere Pro', 'Final Cut', 'DaVinci'],
  },
  {
    icon: <FaMagic />,
    title: 'Visual Effects',
    description: 'Creating stunning VFX composites and seamless integration of CGI elements into live footage.',
    tags: ['After Effects', 'Nuke', 'Fusion'],
  },
  {
    icon: <FaPalette />,
    title: 'Color Grading',
    description: 'Cinematic color correction and grading that sets the mood and elevates the visual storytelling.',
    tags: ['DaVinci Resolve', 'Lumetri', 'LUTs'],
  },
  {
    icon: <FaFilm />,
    title: 'Motion Graphics',
    description: 'Dynamic animated graphics, titles, and lower thirds that enhance production value.',
    tags: ['After Effects', 'Cinema 4D', 'Blender'],
  },
  {
    icon: <FaVideo />,
    title: 'Content Creation',
    description: 'End-to-end social media video production optimized for engagement and platform requirements.',
    tags: ['YouTube', 'Instagram', 'TikTok'],
  },
  {
    icon: <FaMusic />,
    title: 'Sound Design',
    description: 'Audio mixing, SFX layering, and soundtrack synchronization for immersive experiences.',
    tags: ['Audition', 'Logic Pro', 'Foley'],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for delivering world-class video content
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-icon">{skill.icon}</div>
              <h3 className="skill-card-title">{skill.title}</h3>
              <p className="skill-card-description">{skill.description}</p>
              <div className="skill-card-tags">
                {skill.tags.map((tag, i) => (
                  <span className="skill-card-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
