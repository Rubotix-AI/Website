// src/components/Hero.js

import React from 'react';
import '../styles.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/assets/videos/swarm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1>Solving Autonomy, One Move at a Time</h1>
        <p>AI & Robotics engineered to solve the puzzle of autonomy.</p>
        <a href="#contact" className="cta">Let’s Collaborate</a>
      </div>
    </div>
  );
};

export default Hero;
