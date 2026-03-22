import { useState } from 'react';
import { FaPlay, FaArrowRight, FaFilm } from 'react-icons/fa';
import './Portfolio.css';

const categories = ['All', 'Commercial', 'Music Video', 'Social Media', 'Short Film'];

const projects = [
  {
    title: 'Urban Fashion Brand Film',
    category: 'Commercial',
    meta: '2024 · 2:30 min',
    color: '#1a1a2e',
  },
  {
    title: 'Indie Artist — "Midnight"',
    category: 'Music Video',
    meta: '2024 · 4:15 min',
    color: '#1e1528',
  },
  {
    title: 'Tech Startup Promo',
    category: 'Commercial',
    meta: '2023 · 1:45 min',
    color: '#0f1a2e',
  },
  {
    title: 'Instagram Reels Package',
    category: 'Social Media',
    meta: '2024 · Series',
    color: '#1a1520',
  },
  {
    title: 'Short Film — "Echoes"',
    category: 'Short Film',
    meta: '2023 · 12:00 min',
    color: '#151520',
  },
  {
    title: 'YouTube Channel Rebrand',
    category: 'Social Media',
    meta: '2024 · Ongoing',
    color: '#1a2020',
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of recent video editing and production projects
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-filter ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-item-thumbnail">
                <div
                  className="portfolio-item-thumb-img"
                  style={{
                    background: `linear-gradient(135deg, ${project.color} 0%, #0a0a0f 100%)`,
                  }}
                >
                  <FaFilm />
                </div>
                <div className="portfolio-item-overlay">
                  <div className="portfolio-item-play">
                    <FaPlay />
                  </div>
                  <div className="portfolio-item-info">
                    <div className="portfolio-item-category">{project.category}</div>
                    <div className="portfolio-item-title">{project.title}</div>
                  </div>
                </div>
              </div>
              <div className="portfolio-item-bottom">
                <span className="portfolio-item-meta">{project.meta}</span>
                <span className="portfolio-item-link">
                  View <FaArrowRight />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
