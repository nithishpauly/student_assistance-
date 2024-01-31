
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar styles

const Navbar = () => {
 
  return (
    

    <nav className='navbar'>
      <div id="Header">
      
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/auth">Sign in</Link>
          <Link to="/signup">Sign Up</Link>
          {/* <Link to="/admin">Admin</Link> */}
          {/* <Link to="/Profile"></Link> */}
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
