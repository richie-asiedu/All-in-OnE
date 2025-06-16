import React, { useState } from 'react';
import './Booking.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaExchangeAlt } from 'react-icons/fa';

const Booking = () => {
  const [isPickup, setIsPickup] = useState(true);

  return (
    <div className="booking-container">
      <div className="booking-section">
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              checked={isPickup}
              onChange={() => setIsPickup(!isPickup)}
            />
            <span className="radio-label">Pick-up</span>
          </label>
        </div>
        
        <div className="booking-cards">
          <div className="booking-card location-card">
            <div className="card-header">
              <FaMapMarkerAlt className="card-icon" />
              <h3>Location</h3>
            </div>
            <div className="card-content">
              <select defaultValue="">
                <option value="" disabled>Select your city</option>
                <option value="Labadi">Labadi</option>
                <option value="Osu">Osu</option>
                <option value="Tema">Tema</option>
                <option value="East Legon">East Legon</option>
              </select>
            </div>
          </div>

          <div className="booking-card date-card">
            <div className="card-header">
              <FaCalendarAlt className="card-icon" />
              <h3>Date</h3>
            </div>
            <div className="card-content">
              <input type="date" />
            </div>
          </div>

          <div className="booking-card time-card">
            <div className="card-header">
              <FaCalendarAlt className="card-icon" />
              <h3>Time</h3>
            </div>
            <div className="card-content">
              <input type="time" />
            </div>
          </div>
        </div>
      </div>

      <button className="switch-button" onClick={() => setIsPickup(!isPickup)}>
        <FaExchangeAlt />
      </button>

      <div className="booking-section">
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              checked={!isPickup}
              onChange={() => setIsPickup(!isPickup)}
            />
            <span className="radio-label">Drop-off</span>
          </label>
        </div>

        <div className="booking-cards">
          <div className="booking-card location-card">
            <div className="card-header">
              <FaMapMarkerAlt className="card-icon" />
              <h3>Location</h3>
            </div>
            <div className="card-content">
              <select defaultValue="">
                <option value="" disabled>Select your city</option>
                <option value="Labadi">Labadi</option>
                <option value="Osu">Osu</option>
                <option value="Tema">Tema</option>
                <option value="East Legon">East Legon</option>
              </select>
            </div>
          </div>

          <div className="booking-card date-card">
            <div className="card-header">
              <FaCalendarAlt className="card-icon" />
              <h3>Date</h3>
            </div>
            <div className="card-content">
              <input type="date" />
            </div>
          </div>

          <div className="booking-card time-card">
            <div className="card-header">
              <FaCalendarAlt className="card-icon" />
              <h3>Time</h3>
            </div>
            <div className="card-content">
              <input type="time" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking; 