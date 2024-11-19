import React, { useState, useEffect } from 'react';
import './Navigationbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import salad from '../assets/images/salad.jpeg'
import logo from '../assets/images/logo.png'



function Navigationbar() {
    // const [isNavVisible, setIsNavVisible] = useState(false);
    // const [activeLink, setActiveLink] = useState(null);
    
    
    // const toggleNav = () => {
    //     setIsNavVisible(!isNavVisible);
    // };

    
    // const handleLinkClick = (index) => {
    //     setActiveLink(index);
    //     setIsNavVisible(true); 
    // };
    return (
        <>
            <div className="nav-bar-contents"> 
                <nav>
                    <div className="restaurant-logo"> 
                        <img src={logo} />
                    </div>
                    <ul id="nav-links" >
                        <li><a href="ResturantHomepage.html">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="./Components/RestaurantShopPage/RestaurantShopPage.html">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
                            <a href="#" aria-label="Favorites">
                                <i className="fas fa-heart" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Cart">
                                <i className="fas fa-cart-shopping" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="navbarbtn">
                        <i className="fas fa-bars"></i>
                    </div>
                </nav>

                <div className="restaurantslogan">
                    <h3>Crafting your Exceptional Dining Reservations</h3>
                    <p>Reservation is a step into a world of gastronomic wonder. Reserve your table today and let us paint your culinary dreams into reality.</p>
                    <button>Explore Products</button>
                </div>
            </div>
        </>
    );
}

export default Navigationbar;
