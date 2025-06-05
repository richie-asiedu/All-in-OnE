import React, { useState, useEffect, lazy, Suspense } from 'react';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../../context/ThemeContext';

const Services = () => {
  const { darkMode } = useTheme();
  const [selectedService, setSelectedService] = useState(null);

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

    // Preload images
    services.forEach(service => {
      service.images.forEach(imgUrl => {
        const img = new Image();
        img.src = imgUrl + '&auto=format&fit=crop&w=800&q=80';
      });
    });
  }, []);

  const services = [
    {
      id: 1,
      name: "Hair Styling",
      description: "Transform your look with our expert hair styling services. From classic cuts to trendy styles, our skilled stylists will help you achieve the perfect look.",
      price: "From $150 - $300",
      images: [
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1560869713-da86a9ec0744?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3"
      ],
      features: ["Haircut", "Styling", "Hair Treatment", "Blow Dry"]
    },
    {
      id: 2,
      name: "Color & Highlights",
      description: "Add dimension and vibrancy to your hair with our professional coloring services. We use premium products for long-lasting, beautiful results.",
      price: "From $180 - $400",
      images: [
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3"
      ],
      features: ["Full Color", "Highlights", "Balayage", "Color Correction"]
    },
    {
      id: 3,
      name: "Spa Treatments",
      description: "Indulge in our luxurious spa treatments. Relax and rejuvenate while our experts take care of your beauty needs.",
      price: "From $300 - $900",
      images: [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3"
      ],
      features: ["Facial", "Massage", "Body Scrub", "Aromatherapy"]
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeGallery = () => {
    setSelectedService(null);
  };

  return (
    <div className={`services-container ${darkMode ? 'dark' : ''}`}>
      <div className="services-header" data-aos="fade-up" data-aos-duration="400">
        <h2 className="services-subtitle">Sherry's Beauty Services</h2>
        <h1 className="services-title">Elevate Your Natural Beauty</h1>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="service-image-container">
              <img 
                src={`${service.images[0]}&auto=format&fit=crop&w=800&q=80`}
                alt={service.name}
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="service-overlay">
                <button 
                  className="view-more-btn"
                  onClick={() => handleServiceClick(service)}
                >
                  View Gallery
                </button>
              </div>
            </div>
            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <span 
                    key={i} 
                    className="feature-tag"
                    data-aos="fade-right"
                    data-aos-delay={i * 50}
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="service-price">{service.price}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="gallery-modal">
          <div className="gallery-content">
            <button className="close-btn" onClick={closeGallery}>×</button>
            <h2>{selectedService.name} Gallery</h2>
            <div className="gallery-grid">
              {selectedService.images.map((image, index) => (
                <div 
                  key={index} 
                  className="gallery-item"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <img 
                    src={`${image}&auto=format&fit=crop&w=800&q=80`}
                    alt={`${selectedService.name} ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
