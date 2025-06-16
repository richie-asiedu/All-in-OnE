import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="brand-name">EvansRentals</h2>
          <p className="brand-description">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Featured</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">Bussiness Relation</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Community</h3>
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">Invite a friend</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Socials</h3>
            <ul>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">©2022 EvansRentals. All rights reserved</p>
          <div className="legal-links">
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
