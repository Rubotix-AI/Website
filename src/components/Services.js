import React from "react";
import Reveal from "./Reveal";
import { waLink } from "../config";

const SERVICES = [
  {
    tag: "SVC-01",
    title: "3D Printing",
    desc:
      "Upload an STL or STEP file and get a printed part delivered. FDM printing in PLA, PETG, ABS/ASA, TPU and carbon-fibre nylon, tuned for strength or finish.",
    wa: "Hi Rubotix, I have a file I'd like 3D printed. Can I send it over?",
  },
  {
    tag: "SVC-02",
    title: "CAD Design",
    desc:
      "No CAD file? No problem. Send a sketch, photo, or broken part and we model it in professional CAD — dimensioned, printable, and yours to keep.",
    wa: "Hi Rubotix, I need a part designed in CAD. Can I share a sketch/photo?",
  },
  {
    tag: "SVC-03",
    title: "Design + Print",
    desc:
      "The full loop: we design the part, print a test fit, refine tolerances, and deliver a working prototype plus the final CAD files. One quote, one handover.",
    wa: "Hi Rubotix, I'd like a part designed AND printed. Here's my idea:",
  },
  {
    tag: "SVC-04",
    title: "Robotics Parts",
    desc:
      "Sensor mounts, LiDAR and camera brackets, gimbal plates, chassis parts, grippers and drivetrain components for drones, UGVs, USVs and robot arms.",
    wa: "Hi Rubotix, I need custom robotics parts. Here's what I'm building:",
  },
  {
    tag: "SVC-05",
    title: "Electronics Enclosures",
    desc:
      "Custom cases for PCBs, Raspberry Pi, ESP32, sensors and battery packs — with proper standoffs, cable glands, ventilation and mounting points.",
    wa: "Hi Rubotix, I need a custom enclosure for my electronics. Details:",
  },
  {
    tag: "SVC-06",
    title: "Student Projects",
    desc:
      "Graduation projects, competition robots, capstone builds. Student-friendly pricing, quick iterations, and engineering advice so your build actually works.",
    wa: "Hi Rubotix, I'm a student working on a project and need help with parts.",
  },
  {
    tag: "SVC-07",
    title: "Startup MVP Prototypes",
    desc:
      "Looks-like and works-like prototypes for pitching, testing and pilot customers — built to iterate weekly, not quarterly, without tooling costs.",
    wa: "Hi Rubotix, we're a startup and need an MVP prototype. Can we talk?",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__tick" /> WHAT WE MAKE
        </p>
        <h2>Services</h2>
        <p className="section__lead">
          Physical parts, designed and made in the UAE. Pick the service that matches where
          you are — a rough idea, a napkin sketch, or a finished CAD file.
        </p>
      </Reveal>

      <div className="cards">
        {SERVICES.map((s, i) => (
          <Reveal key={s.tag} delay={Math.min(i * 60, 240)}>
            <article className="card">
              <span className="card__tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a
                href={waLink(s.wa)}
                target="_blank"
                rel="noopener noreferrer"
                className="card__link"
              >
                Send your design →
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
