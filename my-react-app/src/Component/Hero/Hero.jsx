import React from 'react';
import './Hero.css';
import heroImage from '../../assets/image 7.png';
import heroImage2 from '../../assets/image 8.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-sections">
        <div className="hero-section primary-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>The Best Platform for Car Rentals</h1>
              <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            </div>
            <button className="hero-button">Rental Car</button>
            <div className="hero-image">
              <img src={heroImage} alt="Luxury Car" />
            </div>
          </div>
        </div>

        <div className="hero-section secondary-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Easy way to rent a car at a low price</h2>
              <p>Providing cheap car rental services and safe and comfortable facilities.</p>
            </div>
            <button className="hero-button2">Rental Car</button>
            <div className="hero-image">
              <img src={heroImage2} alt="Premium Service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 