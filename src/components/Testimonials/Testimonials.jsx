import useScrollReveal from '../../hooks/useScrollReveal';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Arjun Mehta',
    role: 'Founder, PixelWave Studios',
    initials: 'AM',
    text: 'Sumit transformed our raw footage into a cinematic brand film that exceeded all expectations. His attention to pacing and color grading is truly next level.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Content Creator, 500K+ Subscribers',
    initials: 'PS',
    text: 'Working with Sumit has been a game-changer for my YouTube channel. The editing quality elevated my content and helped me grow my audience significantly.',
    stars: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Music Artist',
    initials: 'RV',
    text: 'The music video Sumit edited for my latest track was beyond anything I imagined. He understood the vibe instantly and delivered a visual masterpiece.',
    stars: 5,
  },
];

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
          ref={headerRef}
        >
          <span className="section-label">Feedback</span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Hear from the people I've had the pleasure of working with
          </p>
        </div>

        <div className="testimonials-grid" ref={gridRef}>
          {testimonialsData.map((testimonial, index) => (
            <div
              className={`testimonial-card reveal ${gridVisible ? 'visible' : ''} delay-${index + 1}`}
              key={index}
            >
              <div className="testimonial-stars">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div className="testimonial-author-info">
                  <span className="testimonial-author-name">{testimonial.name}</span>
                  <span className="testimonial-author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
