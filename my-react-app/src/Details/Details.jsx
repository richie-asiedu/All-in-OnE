import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import './Details.css'; // Import the CSS file
import image8 from '../assets/image 8.png';
import imageV2 from '../assets/View 2.png';
import imageV3 from '../assets/View 3 (1).png';
import Review from '../Review/Review';
import RecommendationCars from '../Component/RecommendationCars/RecommendationCars';
import Navbar from '../Component/Navbar/Navbar';
import SideBar from '../Component/SideBar/SideBar';
import PopularCars from '../Component/PopularCars/PopularCars';
import { Link } from 'react-router-dom';

const CarDetails = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const carImages = [
    image8,
    imageV2,
    imageV3
  ];

  return (
    <div className="car-details-page">
      <div className="main-content-wrapper">
        <div className="details-grid">

          {/* Left Section - Hero Card */}
          <div className="hero-card-section">
            {/* Main Hero Card */}
            <div className="main-hero-card">
              <div className="hero-card-content">
                <div className="hero-card-text">
                  <h1>
                    Sports car with the best design and acceleration
                  </h1>
                  <p>
                    Safety and comfort with driving a futuristic and elegant sports car
                  </p>
                </div>
                {/* Car Image */}
                <div className="hero-car-image-wrapper">
                  <img
                    src={carImages[selectedImage]}
                    alt="Sports Car"
                    className="hero-car-image"
                  />
                </div>
              </div>
            </div>
            {/* Bottom Image Row */}
            <div className="thumbnail-grid">
              {carImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`thumbnail-item ${selectedImage === index ? 'selected' : ''}`}
                >
                  <div className="thumbnail-image-wrapper">
                    <img
                      src={image}
                      alt={`Car view ${index + 1}`}
                      className="thumbnail-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Car Details */}
          <div className="car-details-card">
            {/* Header with Heart */}
            <div className="car-details-header">
              <div>
                <h2>
                  Nissan GT-R
                </h2>
                <div className="star-rating-details">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                  <Star className="star-icon empty-star" />
                  <span className="reviewer-count">440+ Reviewer</span>
                </div>
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="like-button"
              >
                <Heart className={`heart-icon ${isLiked ? 'liked' : 'unliked'}`} />
              </button>
            </div>

            {/* Description */}
            <p className="description-text">
              NISMO has become the embodiment of Nissan's outstanding performance. Inspired by the most
              unforgiving proving ground, the "race track".
            </p>

            {/* Specifications Grid */}
            <div className="specifications-grid">
              <div className="spec-item">
                <p className="spec-label">Type Car</p>
                <p className="spec-value">Sport</p>
              </div>
              <div className="spec-item">
                <p className="spec-label">Capacity</p>
                <p className="spec-value">2 Person</p>
              </div>
              <div className="spec-item">
                <p className="spec-label">Steering</p>
                <p className="spec-value">Manual</p>
              </div>
              <div className="spec-item">
                <p className="spec-label">Gasoline</p>
                <p className="spec-value">70L</p>
              </div>
            </div>
            {/* Pricing and Button */}
            <div className="pricing-section">
              <div>
                <div className="current-price">
                  <span>$80.00/</span>
                  <span>day</span>
                </div>
                <div className="original-price">
                  <span>$100.00</span>
                  <div className="line-through"></div>
                </div>
              </div>
              <Link to="/fullpaymentsform" className="rent-now-link">
                <button className="rent-now-button-details">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-[10%]">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch"></div>
        </div>
      </div>

      <div className="other-sections-wrapper">
        <div className="mt-[82px]">
          <Review />
        </div>
        <Navbar />
        <SideBar />
        <PopularCars />
        <RecommendationCars />
      </div>
    </div>
  );
};

export default CarDetails;