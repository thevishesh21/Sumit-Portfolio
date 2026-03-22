import useScrollReveal from '../../hooks/useScrollReveal';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaBehance,
  FaPaperPlane,
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [infoRef, infoVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.15 });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <div
            className={`contact-info reveal-left ${infoVisible ? 'visible' : ''}`}
            ref={infoRef}
          >
            <span className="contact-info-label">Get In Touch</span>
            <h2 className="contact-info-title">Let's Create Something Amazing</h2>
            <p className="contact-info-text">
              Have a project in mind? I'd love to hear about it. Whether it's a commercial,
              music video, or social media content — let's bring your vision to life.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaEnvelope /></div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">sumit@editor.com</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaPhone /></div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Phone</span>
                  <span className="contact-detail-value">+91 98765 43210</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">New Delhi, India</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#" className="contact-social" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="contact-social" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className="contact-social" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" className="contact-social" aria-label="Behance"><FaBehance /></a>
            </div>
          </div>

          {/* Form */}
          <div
            className={`contact-form-wrapper reveal-right ${formVisible ? 'visible' : ''}`}
            ref={formRef}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Video editing project" />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project..." required></textarea>
              </div>

              <button type="submit" className="btn-primary">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
