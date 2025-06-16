import React, { useState } from 'react'
import './PopularCars.css'
import { FaGasPump, FaUsers, FaCog } from 'react-icons/fa'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Car from '../../assets/Car.png'
import carImage from '../../assets/image 8.png'
import carImage2 from '../../assets/image 7.png'
import { Link } from 'react-router-dom'

const PopularCars = () => {
  const [likedCars, setLikedCars] = useState([1, 3]); 

  const toggleLike = (id) => {
    setLikedCars(prev => 
      prev.includes(id) 
        ? prev.filter(carId => carId !== id)
        : [...prev, id]
    );
  };

  const cars = [
    {
      id: 1,
      name: 'Koenigsegg',
      category: 'Sport',
      image: carImage2,
      fuelCapacity: '90L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '99.00'
    },
    {
      id: 2,
      name: 'Nissan GT - R',
      category: 'Sport',
      image: carImage,
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '80.00',
      originalPrice: '100.00'
    },
    {
      id: 3,
      name: 'Rolls - Royce',
      category: 'Sedan',
      image: Car,
      fuelCapacity: '70L',
      transmission: 'Manual',
      capacity: '4 People',
      price: '96.00'
    },
    {
      id: 4,
      name: 'Nissan GT - R',
      category: 'Sport',
      image: carImage,
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '80.00',
      originalPrice: '100.00'
    }
  ];

  return (
    <div className="popular-cars-container">
      <div className="cars-grid">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <div className="card-header">
              <div className="car-title">
                <h3>{car.name}</h3>
                <span className="car-category">{car.category}</span>
              </div>
              <button 
                className={`favorite-btn ${likedCars.includes(car.id) ? 'liked' : ''}`}
                onClick={() => toggleLike(car.id)}
              >
                {likedCars.includes(car.id) ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
            </div>
            
            <div className="car-image">
              <img src={car.image} alt={car.name} />
            </div>

            <div className="car-specs">
              <div className="spec-item">
                <FaGasPump className="spec-icon" />
                <span>{car.fuelCapacity}</span>
              </div>
              <div className="spec-item">
                <FaCog className="spec-icon" />
                <span>{car.transmission}</span>
              </div>
              <div className="spec-item">
                <FaUsers className="spec-icon" />
                <span>{car.capacity}</span>
              </div>
            </div>

            <div className="card-footer">
              <div className="price-container">
                <div className="price">
                  <span className="amount">${car.price}</span>
                  <span className="period">/day</span>
                </div>
                {car.originalPrice && (
                  <div className="original-price">
                    <span className="strike-through">${car.originalPrice}</span>
                  </div>
                )}
              </div>
              <Link to="/details" style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className="rent-button">Rent Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
