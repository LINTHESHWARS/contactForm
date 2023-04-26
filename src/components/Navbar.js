import React from 'react';
import './Navbar.css';
import logo from '../images/logo.jpg'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <img src={logo} alt='Logo'/>
    </nav>
  );
}

export default Navbar;
