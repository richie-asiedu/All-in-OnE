import React, { useState } from 'react';
import './SideBar.css';
import { Menu } from 'lucide-react';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(100); // Initial price for the slider

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    return (
        <>
            <button className="hamburger-icon" onClick={toggleSidebar}>
                <Menu size={24} />
            </button>
            <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
                {/* <button className="close-icon" onClick={toggleSidebar}> */}
                {/* &times; */}
                {/* </button> */}
                <div className="sidebar-content">
                    <div className="filter-section">
                        <h3>TYPE</h3>
                        <label>
                            <input type="checkbox" defaultChecked /> Sport (10)
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> SUV (12)
                        </label>
                        <label>
                            <input type="checkbox" /> MPV (16)
                        </label>
                        <label>
                            <input type="checkbox" /> Sedan (20)
                        </label>
                        <label>
                            <input type="checkbox" /> Coupe (14)
                        </label>
                        <label>
                            <input type="checkbox" /> Hatchback (14)
                        </label>
                    </div>

                    <div className="filter-section">
                        <h3>CAPACITY</h3>
                        <label>
                            <input type="checkbox" defaultChecked /> 2 Person (10)
                        </label>
                        <label>
                            <input type="checkbox" /> 4 Person (14)
                        </label>
                        <label>
                            <input type="checkbox" /> 6 Person (12)
                        </label>
                        <label>
                            <input type="checkbox" defaultChecked /> 8 or More (16)
                        </label>
                    </div>

                    <div className="filter-section price-filter">
                        <h3>PRICE</h3>
                        <input
                            type="range"
                            min="0"
                            max="200"
                            value={price}
                            onChange={handlePriceChange}
                            className="price-slider"
                        />
                        <p>Max. ${price}.00</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
