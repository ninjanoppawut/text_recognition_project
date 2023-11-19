import React from "react";
import "./Navbar.css"; // Make sure to create a corresponding CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the top left */}
      <div className="logo">
        <h3>แอพพลิเคชั่นการตรวจจับภาษาจากภาพด้วยปัญญาประดิษฐ์</h3>
      </div>

      {/* Navigation links (Add more links as needed) */}
      <ul className="nav-links">
        {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
