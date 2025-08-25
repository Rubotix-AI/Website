import React from "react";
import { Link } from "react-router-dom";

const Capabilities = () => {
  return (
    <section id="capabilities">
      <h2>Our Capabilities</h2>
      <Link to="/nexus" style={{ textDecoration: 'none', color: 'inherit' }}>
      <section className="band">
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
      </div>
      </section>
      </Link>

      <Link to="/sentience" style={{ textDecoration: 'none', color: 'inherit' }}>
      <section className="band">
        <div className="text">
          <h2>Rubotix Sentience</h2>
          <p>AI & Autonomous Decision-Making Systems</p>
          {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
             in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
             occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
             mollit anim id est laborum."</p> */}
        </div>
        <div className="spacer">
        <img
          src="/assets/images/sentience.jpg"  // ← update filename
          alt="Rubotix Sentience"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />
      </div>
      </section>
      </Link>

      <Link to="/genesis" style={{ textDecoration: 'none', color: 'inherit' }}>
      <section className="band">
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
      </div>
      </section>
      </Link>
      
    </section>
  );
};

export default Capabilities;
