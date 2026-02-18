import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src="assets/images/rubotix-logo-01.png" alt="Rubotix Logo" />
        </a>
      </div>

      {/* Desktop links */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#capabilities">Our Capabilities</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

