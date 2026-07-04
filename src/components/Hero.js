import React from "react";
import { waLink } from "../config";

const Hero = () => {
  return (
    <header className="hero" id="top">
      <div className="hero__layers" aria-hidden="true" />
      <div className="hero__inner">
        <p className="eyebrow">
          <span className="eyebrow__tick" /> CAD DESIGN · 3D PRINTING · PROTOTYPING — DUBAI / ABU DHABI
        </p>

        <h1>
          Send us a sketch.
          <br />
          Get back a <span className="accent">working part.</span>
        </h1>

        <p className="hero__sub">
          Rubotix designs and 3D prints functional prototypes for startups, engineers, and
          students across the UAE. Brackets, mounts, enclosures, jigs, robotics hardware —
          from idea to physical part, fast.
        </p>

        <div className="hero__ctas">
          <a href="#quote" className="btn btn--solid btn--lg">
            Start a Prototype
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--lg"
          >
            WhatsApp Us
          </a>
        </div>

        <ul className="hero__proof">
          <li>
            <strong>24–72h</strong>
            <span>typical print turnaround</span>
          </li>
          <li>
            <strong>PLA → PA-CF</strong>
            <span>prototype to end-use materials</span>
          </li>
          <li>
            <strong>Engineer-led</strong>
            <span>designed by robotics engineers</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Hero;
