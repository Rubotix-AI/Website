// src/components/VantaBackground.js

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js';
import '../styles.css';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
	if (vantaEffect.current) return;
	
	const isMobile = window.innerWidth <= 768;

    if (!vantaEffect.current) {
      vantaEffect.current = GLOBE({
        el: vantaRef.current,
        THREE: THREE,

        // Interaction
        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        // Visuals
        backgroundColor: 0x000000,
		color: 0xffc000,
		color2: 0xffffff,
		
        scale: 1.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div className="vanta-bg" ref={vantaRef} />;

};

export default VantaBackground;


