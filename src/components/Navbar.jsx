import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some styles for your navbar

const Navbar = () => {
  const location = useLocation();

  // Determine navbar background color based on the current path
  const getNavbarStyle = () => {
    if (location.pathname === '/services') {
      return { opacity: 0.9, color: 'white' }; // Light white background and white text for the services page
    }
    else if (location.pathname === '/softwarepage1') {
      return { opacity: 0.9, color: 'lightgreen' }; // Light white background and white text for the services page
    }
    return { backgroundColor: 'transparent', color: 'white' }; // Default styles for other pages
  };

  return (
    <nav className="navbar" style={getNavbarStyle()}>
      <img src="images/logo.png" alt="logo" className="logo" />
      <ul className="navbar-links">
        <li><Link to="/" style={{ color: getNavbarStyle().color }}>Home</Link></li>
        <li><a href="#features" style={{ color: getNavbarStyle().color }}>Features</a></li>
        <li><Link to="/services" style={{ color: getNavbarStyle().color }}>Services</Link></li>
        <li><Link to="/About" style={{ color: getNavbarStyle().color }}>About Us</Link></li>
        <li><a href="/contact" style={{ color: getNavbarStyle().color }}>Contact</a></li>
      </ul>
      {/* Button wrapped within Link */}
      <Link to="/getstarted" >
        <button className="navbar-button">Get Started</button>
      </Link>
    </nav>
  );
};

export default Navbar;
