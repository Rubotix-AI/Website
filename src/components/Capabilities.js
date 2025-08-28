import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Capabilities = () => {
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };

    const handleMouseLeave = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
            videoRefs.current[index].currentTime = 0; // reset to start
        }
    };

  return (
    <section id="capabilities">
      <h2>Our Capabilities</h2>
      <Link to="/nexus" style={{ textDecoration: 'none', color: 'inherit' }}>
      <section
          className="band"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
      >
        <div className="text">
          <h2>Rubotix Nexus</h2>
          <p>Industrial Automation & IoT Solutions</p>
        </div>
        <div className="spacer">
        <img
          src="/assets/images/nexus.jpg"  // ← update filename
          alt="Rubotix Nexus"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />
        <video
            ref={(el) => (videoRefs.current[0] = el)}
            src="/assets/videos/industrial_automation.mp4"
            className="preview-video"
            muted
            loop
            playsInline
        />
      </div>
      </section>
      </Link>

      <Link to="/sentience" style={{ textDecoration: 'none', color: 'inherit' }}>
      <section
          className="band"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
      >
        <div className="text">
          <h2>Rubotix Sentience</h2>
          <p>AI & Autonomous Decision-Making Systems</p>
        </div>
        <div className="spacer">
        <img
          src="/assets/images/sentience.jpg"
          alt="Rubotix Sentience"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />
        <video
            ref={(el) => (videoRefs.current[1] = el)}
            src="/assets/videos/decision_making.mp4"
            className="preview-video"
            muted
            loop
            playsInline
        />
      </div>
      </section>
      </Link>

      <Link to="/genesis" style={{ textDecoration: 'none', color: 'inherit' }}>
      <section
          className="band"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
      >
        <div className="text">
          <h2>Rubotix Genesis</h2>
          <p>Prototyping, R&D, and Custom Robotics</p>
        </div>
        <div className="spacer">
        <img
          src="/assets/images/genesis.jpg"  // ← update filename
          alt="Rubotix Genesis"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />
        <video
            ref={(el) => (videoRefs.current[2] = el)}
            src="/assets/videos/custom_robotics.mp4"
            className="preview-video"
            muted
            loop
            playsInline
        />
      </div>
      </section>
      </Link>
      
    </section>
  );
};

export default Capabilities;
