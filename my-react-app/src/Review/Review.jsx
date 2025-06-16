import React from 'react';
import './Review.css';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'Alex Stanton',
      title: 'CEO at Bukalapak',
      date: '21 July 2022',
      rating: 4, // out of 5
      avatar: 'https://i.ibb.co/V92W11c/Nissan-GT-R.png', // Placeholder for avatar
      text: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
    },
    {
      id: 2,
      name: 'Skylar Dias',
      title: 'CEO at Amazon',
      date: '20 July 2022',
      rating: 3, // out of 5
      avatar: 'https://i.ibb.co/V92W11c/Nissan-GT-R.png', // Placeholder for avatar
      text: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
    },
  ];

  return (
    <div className="reviews-container container">
      <div className="reviews-header">
        <h2>Reviews</h2>
        <span className="reviews-count">{reviews.length}</span>
      </div>

      {reviews.map(review => (
        <div className="review-item" key={review.id}>
          <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
          <div className="review-content">
            <div className="reviewer-details">
              <div className="reviewer-info">
                <h3>{review.name}</h3>
                <p>{review.title}</p>
              </div>
              <span className="review-date">{review.date}</span>
            </div>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < review.rating ? 'star' : 'star empty'}>&#9733;</span>
              ))}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        </div>
      ))}

      <button className="show-all-button">
        Show All
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Review;
