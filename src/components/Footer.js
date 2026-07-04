import React from "react";
import { EMAIL, waLink } from "../config";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <img src="/assets/images/rubotix-logo-01.png" alt="Rubotix logo" className="footer__logo" />
          <p>CAD design, 3D printing and functional prototyping. Dubai · Abu Dhabi · UAE.</p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#portfolio">Past Builds</a>
          <a href="#quote">Get a Quote</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
      <p className="footer__legal mono">
        © {new Date().getFullYear()} Rubotix — designed and printed in the UAE.
      </p>
    </footer>
  );
};

export default Footer;
