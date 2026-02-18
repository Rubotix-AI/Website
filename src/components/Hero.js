// src/components/Hero.js

import React from "react";
import "../styles.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Solving Autonomy, One Move at a Time</h1>
        <p>AI & Robotics engineered to solve the puzzle of autonomy.</p>
        <a href="#contact" className="cta">Let’s Collaborate</a>
      </div>
    </section>
  );
};

export default Hero;

