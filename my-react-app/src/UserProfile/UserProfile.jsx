import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import Navbar from "../Component/Navbar/Navbar"
import Home from '../assets/home.png';
import CarRent from '../assets/car@4x.png';
import Chart from '../assets/chart.png';
import Wallet from '../assets/empty-wallet.png';
import Msg from '../assets/message.png';
import Vector from '../assets/vector.png';
import Settings from '../assets/setting.png';
import Info from '../assets/info-circle.png';
import Briefcase from '../assets/briefcase.png';
import LogOut from '../assets/logout.png';
import Map from '../assets/Maps.png';
import Niss from '../assets/image 8.png';
import Car2 from '../assets/image 7.png';
import Car3 from '../assets/Car.png';
import Car4 from '../assets/image 10.png';
import { FaMapMarkerAlt, FaCalendarAlt, FaExchangeAlt } from 'react-icons/fa';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [rentalType, setRentalType] = useState('pickup'); // 'pickup' or 'dropoff'
  const [pickupLocation, setPickupLocation] = useState('Kota Semarang');
  const [pickupDate, setPickupDate] = useState('2022-07-20');
  const [pickupTime, setPickupTime] = useState('07:00');
  const [dropoffLocation, setDropoffLocation] = useState('Kota Semarang');
  const [dropoffDate, setDropoffDate] = useState('2022-07-21');
  const [dropoffTime, setDropoffTime] = useState('01:00');

  const carCategories = [
    { name: 'Sport Car', count: 17439, color: '#3563e9' },
    { name: 'SUV', count: 9478, color: '#61b0f5' },
    { name: 'Coupe', count: 18197, color: '#92c4f7' },
    { name: 'Hatchback', count: 12510, color: '#b1d5f9' },
    { name: 'MPV', count: 14406, color: '#d1e6fa' },
  ];

  const totalRentalCount = carCategories.reduce((sum, category) => sum + category.count, 0);

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = getCoordinatesForPercent(startAngle);
    const end = getCoordinatesForPercent(endAngle);

    const largeArcFlag = endAngle - startAngle <= 0.5 ? 0 : 1;

    return [
      `M ${x} ${y}`,
      `L ${x + radius * start[0]} ${y + radius * start[1]}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x + radius * end[0]} ${y + radius * end[1]}`,
      'Z',
    ].join(' ');
  };

  const renderSegments = () => {
    let currentPercentage = 0;
    const segments = [];

    carCategories.forEach((category, index) => {
      const percentage = category.count / totalRentalCount;
      const startAngle = currentPercentage;
      const endAngle = currentPercentage + percentage;

      const pathData = describeArc(50, 50, 40, startAngle, endAngle);

      segments.push(
        <path
          key={index}
          d={pathData}
          fill={category.color}
          stroke="white"
          strokeWidth="1"
        />
      );
      currentPercentage = endAngle;
    });
    return segments;
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const handleRentalTypeChange = (type) => {
    setRentalType(type);
  };

  return (
    <div className={`user-profile-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className={`hamburger-menu ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Sidebar Content */}
        <div className="main-menu">
          <h2>MAIN MENU</h2>
          <ul>
            <li className="active"><img src={Home} alt="Dashboard" /> Dashboard</li>
            <li>
              <Link to="/category" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                <img src={CarRent} alt="Car Rent" /> Car Rent
              </Link>
            </li>
            <li><img src={Chart} alt="Insight" /> Insight</li>
            <li><img src={Wallet} alt="Reimburse" /> Reimburse</li>
            <li><img src={Msg} alt="Inbox" /> Inbox</li>
            <li><img src={Vector} alt="Calendar" /> Calender</li>
          </ul>
        </div>
        <div className="preferences">
          <h2>PREFERENCES</h2>
          <ul>
            <li><img src={Settings} alt="Settings" /> Settings</li>
            <li><img src={Info} alt="Help & Center" /> Help & Center</li>
            <li>
              <img src={Briefcase} alt="Dark Mode" /> Dark Mode
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="darkModeToggle" 
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <label htmlFor="darkModeToggle">
                  <Sun 
                    size={16} 
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: isDarkMode ? '#a0aec0' : 'white', /* Dim in dark mode, bright in light mode */
                      transition: 'color 0.3s ease'
                    }}
                  />
                  <Moon 
                    size={16} 
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: isDarkMode ? 'white' : '#a0aec0', /* Bright in dark mode, dim in light mode */
                      transition: 'color 0.3s ease'
                    }}
                  />
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="logout">
          <ul>
            <li><img src={LogOut} alt="Log Out" /> Log Out</li>
          </ul>
        </div>
      </div>
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="details-rental-card">
            <h2>Details Rental</h2>
            <div className="map-placeholder">
              {/* Map Image */}
              <img src={Map} alt="Map" />
            </div>
            <div className="car-info">
              <div className="car-image">
                <img src={Niss} alt="Nissan GT-R" />
              </div>
              <div className="car-details">
                <h3>Nissan GT - R</h3>
                <p>Sport Car</p>
              </div>
              <div className="car-id">#9761</div>
            </div>

            <div className="rental-points">
              <div className="booking-section">
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      checked={rentalType === 'pickup'}
                      onChange={() => handleRentalTypeChange('pickup')}
                    />
                    <span className="radio-label">Pick-up</span>
                  </label>
                </div>
                
                {rentalType === 'pickup' && (
                  <div className="booking-cards">
                    <div className="booking-card location-card">
                      <div className="card-header">
                        <FaMapMarkerAlt className="card-icon" />
                        <h3>Location</h3>
                      </div>
                      <div className="card-content">
                        <select value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
                          <option value="Kota Semarang">Kota Semarang</option>
                          <option value="Bandung">Bandung</option>
                          <option value="Jakarta">Jakarta</option>
                        </select>
                      </div>
                    </div>

                    <div className="booking-card date-card">
                      <div className="card-header">
                        <FaCalendarAlt className="card-icon" />
                        <h3>Date</h3>
                      </div>
                      <div className="card-content">
                        <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                      </div>
                    </div>

                    <div className="booking-card time-card">
                      <div className="card-header">
                        <FaCalendarAlt className="card-icon" />
                        <h3>Time</h3>
                      </div>
                      <div className="card-content">
                        <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className="switch-button" onClick={() => handleRentalTypeChange(rentalType === 'pickup' ? 'dropoff' : 'pickup')}>
                <FaExchangeAlt />
              </button>

              <div className="booking-section">
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      checked={rentalType === 'dropoff'}
                      onChange={() => handleRentalTypeChange('dropoff')}
                    />
                    <span className="radio-label">Drop-off</span>
                  </label>
                </div>

                {rentalType === 'dropoff' && (
                  <div className="booking-cards">
                    <div className="booking-card location-card">
                      <div className="card-header">
                        <FaMapMarkerAlt className="card-icon" />
                        <h3>Location</h3>
                      </div>
                      <div className="card-content">
                        <select value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)}>
                          <option value="Kota Semarang">Kota Semarang</option>
                          <option value="Bandung">Bandung</option>
                          <option value="Jakarta">Jakarta</option>
                        </select>
                      </div>
                    </div>

                    <div className="booking-card date-card">
                      <div className="card-header">
                        <FaCalendarAlt className="card-icon" />
                        <h3>Date</h3>
                      </div>
                      <div className="card-content">
                        <input type="date" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} />
                      </div>
                    </div>

                    <div className="booking-card time-card">
                      <div className="card-header">
                        <FaCalendarAlt className="card-icon" />
                        <h3>Time</h3>
                      </div>
                      <div className="card-content">
                        <input type="time" value={dropoffTime} onChange={(e) => setDropoffTime(e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="total-rental-price">
              <div className="price-label">
                <h3>Total Rental Price</h3>
                <p>Overall price and includes rental discount</p>
              </div>
              <div className="price-value">
                <h3>$80.00</h3>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="top-car-rental-card">
              <h2>Top 5 Car Rental ...</h2>
              <div className="donut-chart-container">
                {/* Donut Chart Placeholder */}
                {/* <img src={DonutChart} alt="Donut Chart" /> */}
                <svg className="donut-chart" viewBox="0 0 100 100">
                  {renderSegments()}
                  <circle cx="50" cy="50" r="25" className="donut-chart-center-circle" fill="white" />
                </svg>
                <div className="chart-info">
                  <p className="total-rental-count">{totalRentalCount}</p>
                  <p className="rental-car-label">Rental Car</p>
                </div>
              </div>
              <div className="car-categories">
                <ul>
                  {carCategories.map((category, index) => (
                    <li key={index}><span className={`color-dot ${category.name.toLowerCase().replace(/\s/g, '-')}`} style={{ backgroundColor: category.color }}></span> {category.name} <span>{category.count.toLocaleString()}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="recent-transaction-card">
              <div className="card-header">
                <h2>Recent Transaction</h2>
                <a href="#">View All</a>
              </div>
              <div className="transaction-list">
                <div className="transaction-item">
                  <div className="item-details">
                    <img src={Niss} alt="Nissan GT-R" />
                    <div className="item-text">
                      <h3>Nissan GT-R</h3>
                      <p>Sport Car</p>
                    </div>
                  </div>
                  <div className="item-price-date">
                    <p className="date">20 July</p>
                    <p className="price">$80.00</p>
                  </div>
                </div>
                <div className="transaction-item">
                  <div className="item-details">
                    <img src={Car2} alt="Koenigsegg" />
                    <div className="item-text">
                      <h3>Koenigsegg</h3>
                      <p>Sport Car</p>
                    </div>
                  </div>
                  <div className="item-price-date">
                    <p className="date">19 July</p>
                    <p className="price">$99.00</p>
                  </div>
                </div>
                <div className="transaction-item">
                  <div className="item-details">
                    <img src={Car3} alt="Rolls-Royce" />
                    <div className="item-text">
                      <h3>Rolls - Royce</h3>
                      <p>Sport Car</p>
                    </div>
                  </div>
                  <div className="item-price-date">
                    <p className="date">18 July</p>
                    <p className="price">$96.00</p>
                  </div>
                </div>
                <div className="transaction-item">
                  <div className="item-details">
                    <img src={Car4} alt="CR-V" />
                    <div className="item-text">
                      <h3>CR - V</h3>
                      <p>SUV</p>
                    </div>
                  </div>
                  <div className="item-price-date">
                    <p className="date">17 July</p>
                    <p className="price">$80.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default UserProfile;
