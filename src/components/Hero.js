// src/components/Hero.js

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';
import '../styles.css';

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,

        // Interaction
        mouseControls: true,
        touchControls: false,
        gyroControls: false,

        // Visuals
        backgroundColor: 0x0b0f1a,
        color1: 0x5fa8ff,
        color2: 0xffffff,

        // Swarm behavior
        birdSize: 1.2,
        quantity: 3,
        separation: 40,
        alignment: 35,
        cohesion: 30,

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

