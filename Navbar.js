import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        YourLogo
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
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;
