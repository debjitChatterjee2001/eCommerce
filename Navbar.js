import React from 'react';
import { Link } from 'react-router-dom';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        ShopperStop
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/products" className="navbar-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="navbar-cart">
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </nav>
  );
}

export default Navbar;
