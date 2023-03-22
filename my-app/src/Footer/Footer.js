import React from "react";
import "./Footer.css";
import logo from "./Images/logo.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <p>Copyright © 2023</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
