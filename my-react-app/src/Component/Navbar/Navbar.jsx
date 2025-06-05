import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { useTheme } from '../../context/ThemeContext';

const HairstylistLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="#FF69B4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"/>
    <path d="M9 13.5c0 1.38 1.12 2.5 2.5 2.5h1c1.38 0 2.5-1.12 2.5-2.5V12H9v1.5z"/>
    <path d="M7 10v2h10v-2H7zm5-6C9.24 4 7 6.24 7 9h10c0-2.76-2.24-5-5-5z"/>
  </svg>
);

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery('');
  };

  const navLinks = [
    { 
      id: 'home', 
      text: 'Home',
      offset: -80
    },
    { 
      id: 'about', 
      text: 'About',
      offset: -80
    },
    { 
      id: 'services', 
      text: 'Services',
      offset: -80
    },
    { 
      id: 'contact', 
      text: 'Contact',
      offset: -80
    },
  ];

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav-brand">
        <div className="logo">
          <HairstylistLogo />
          <h1 className='text-pink-500 font-extrabold'>Sherry's Beauty Salon</h1>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`nav-elements ${isOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="nav-link"
                activeClass="active"
                isDynamic={true}
                spyThrottle={100}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </div>
        </form>

        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
