// src/components/Hero.js

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import '../styles.css';

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,

        // Interaction
        mouseControls: true,
        touchControls: false,
        gyroControls: false,

        // Visuals
        backgroundColor: 0x000000,
		color: 0xffc000,
		points: 10.0,

        // Performance scaling
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="hero-container">
      <div className="hero-overlay">
        <h1>Solving Autonomy, One Move at a Time</h1>
        <p>AI & Robotics engineered to solve the puzzle of autonomy.</p>
        <a href="#contact" className="cta">Let’s Collaborate</a>
      </div>
    </div>
  );
};

export default Hero;

