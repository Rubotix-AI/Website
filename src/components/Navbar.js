import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src="assets/images/rubotix-logo-01.png" alt="Rubotix Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#capabilities">Our Capabilities</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
