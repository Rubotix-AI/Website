import React from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Send your idea",
    desc:
      "WhatsApp or email us a sketch, photo, STL/STEP file, or even a broken part. A rough description is enough to start.",
  },
  {
    n: "02",
    title: "Get a quote in 24h",
    desc:
      "We confirm material, dimensions, and quantity, then send a fixed price and delivery date. No surprises, no minimum order.",
  },
  {
    n: "03",
    title: "We design & print",
    desc:
      "We model or repair the CAD, run a test print for fit-critical parts, and print the final in the material your part needs.",
  },
  {
    n: "04",
    title: "Delivered to you",
    desc:
      "Pickup or courier anywhere in the UAE. You get the physical part — and the CAD files if we designed them for you.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section section--alt">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__tick" /> PROCESS
        </p>
        <h2>How it works</h2>
        <p className="section__lead">
          From first message to part-in-hand, most projects take under a week.
        </p>
      </Reveal>

      <ol className="steps">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 80} as="li" className="step">
            <span className="step__n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
