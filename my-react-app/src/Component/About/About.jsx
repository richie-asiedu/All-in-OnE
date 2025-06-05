import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      mirror: false,
      offset: 50,
      easing: 'ease-out',
      delay: 0,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  return (
    <div className={`about-main ${darkMode ? 'dark' : ''}`}>
      <div className="about-content">
        <div className="about-section" data-aos="fade-up" data-aos-duration="400">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Salon Interior" 
            className="about-image"
            loading="eager"
            data-aos="zoom-in"
            data-aos-duration="400"
          />
          <div className="about-text">
            <h2 data-aos="fade-up" data-aos-duration="300">Our Story</h2>
            <p data-aos="fade-up" data-aos-duration="300">
              Founded in 2025, Sherry's Beauty Salon has become the premier destination for those 
              seeking exceptional beauty services. Our passion for excellence and 
              dedication to customer satisfaction sets us apart.
            </p>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card" data-aos="fade-up" data-aos-delay="50">
            <h3>Hair Styling</h3>
            <p>Expert cuts and styling for all hair types</p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Color</h3>
            <p>Vibrant, long-lasting hair coloring</p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="150">
            <h3>Treatment</h3>
            <p>Rejuvenating hair treatments</p>
          </div>
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Styling</h3>
            <p>Special occasion styling</p>
          </div>
        </div>

        <div className="team-section" data-aos="fade-up" data-aos-duration="500">
          <h2 data-aos="fade-down" data-aos-duration="400">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div 
                className="image-container" 
                data-aos="zoom-in" 
                data-aos-delay="50"
                data-aos-duration="400"
              >
                <img 
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3" 
                  alt="Stylist" 
                />
              </div>
              <h3 data-aos="fade-up" data-aos-delay="100">Sarah Johnson</h3>
              <p data-aos="fade-up" data-aos-delay="150">Master Stylist</p>
            </div>
            <div className="team-member">
              <div 
                className="image-container" 
                data-aos="zoom-in" 
                data-aos-delay="50"
                data-aos-duration="400"
              >
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3" 
                  alt="Stylist" 
                />
              </div>
              <h3 data-aos="fade-up" data-aos-delay="100">Michael Chen</h3>
              <p data-aos="fade-up" data-aos-delay="150">Color Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;