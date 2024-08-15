import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import "./Navbar.css";
import logo from '../assets/alpha-high-resolution-logo-white.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Navigation links */}
      <div className="navbar-logo">
        <Link to="/adminsignin">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li className="dropdown">
          {/* Dropdown menu for "About" section */}
          <Link to="#" className="dropbtn">About</Link>
          <div className="dropdown-content">
            <Link to="/about/company">Company</Link>
          </div>
        </li>
        <li className="dropdown">
          {/* Dropdown menu for "Contact Us" section */}
          <Link to="#" className="dropbtn">Contact Us</Link>
          <div className="dropdown-content">
            <Link to="/contact/email">Email</Link>
          </div>
        </li>
        <li className="dropdown">
          {/* Dropdown menu for Sign In options */}
        <Link to="/signin" className="dropbtn">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
