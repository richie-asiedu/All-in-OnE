import React, { useState } from 'react';
import './Navbar.css';
import { FaHeart, FaBell, FaCog, FaUser, FaSearch, FaFilter } from 'react-icons/fa';

const Navbar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    carType: 'all',
    transmission: 'all'
  });

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>EvansRentals</h1>
        </div>

        <div className="search-container">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search for cars..." />
            <button 
              className="filter-button"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
            </button>
          </div>

          {showFilters && (
            <div className="filters-dropdown">
              <div className="filter-group">
                <label>Price Range:</label>
                <select 
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="all">All Prices</option>
                  <option value="0-50">$0 - $50/day</option>
                  <option value="51-100">$51 - $100/day</option>
                  <option value="101+">$101+/day</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Car Type:</label>
                <select 
                  value={filters.carType}
                  onChange={(e) => setFilters({...filters, carType: e.target.value})}
                >
                  <option value="all">All Types</option>
                  <option value="sport">Sport</option>
                  <option value="suv">SUV</option>
                  <option value="mvp">MVP</option>
                  <option value="sedan">Sedan</option>
                  <option value="coupe">Coupe</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Transmission:</label>
                <select 
                  value={filters.transmission}
                  onChange={(e) => setFilters({...filters, transmission: e.target.value})}
                >
                  <option value="all">All</option>
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="navbar-icons">
          <div className="icon-container">
            <FaHeart className="nav-icon" />
            <span className="icon-label">Favorites</span>
          </div>
          <div className="icon-container">
            <div className="notification-badge">3</div>
            <FaBell className="nav-icon" />
            <span className="icon-label">Notifications</span>
          </div>
          <div className="icon-container">
            <FaCog className="nav-icon" />
            <span className="icon-label">Settings</span>
          </div>
          <div className="icon-container profile">
            <FaUser className="nav-icon" />
            <span className="icon-label">Profile</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
