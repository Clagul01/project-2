import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    
  );
}

export default Navbar;
