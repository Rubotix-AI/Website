import React from "react";
import Reveal from "./Reveal";

const INDUSTRIES = [
  {
    title: "Robotics & Drone Teams",
    desc: "Sensor mounts, frames, gimbals, propeller guards, payload adapters for UAVs, UGVs and USVs.",
  },
  {
    title: "Startups & Founders",
    desc: "Investor-ready MVP prototypes and pilot hardware without tooling costs or overseas lead times.",
  },
  {
    title: "Engineering & Facilities Teams",
    desc: "Jigs, fixtures, replacement parts and obsolete components re-engineered from the physical original.",
  },
  {
    title: "Students & Universities",
    desc: "Capstone and competition builds with real engineering review — not just a print job.",
  },
  {
    title: "Labs & Researchers",
    desc: "Custom test rigs, sample holders, sensor housings and one-off experimental hardware.",
  },
  {
    title: "Small Businesses",
    desc: "Product displays, custom tools, spare parts and small-batch functional components.",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="section">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__tick" /> WHO WE WORK WITH
        </p>
        <h2>Use cases</h2>
      </Reveal>

      <div className="industries">
        {INDUSTRIES.map((it, i) => (
          <Reveal key={it.title} delay={Math.min(i * 50, 200)}>
            <div className="industry">
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Industries;
