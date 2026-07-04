import React from "react";
import Reveal from "./Reveal";

/*
 * Replace image paths with real photos of your builds as you shoot them.
 * Real photos convert far better than renders or stock — even phone photos
 * on a clean background. Keep the spec line: it signals engineering rigour.
 */
const BUILDS = [
  {
    img: "/assets/images/genesis.jpg",
    title: "USV Sensor Mast Mounts",
    spec: "ASA · UV-stable · marine hardware inserts",
    desc:
      "Camera and GNSS antenna brackets for an unmanned surface vessel — designed for vibration, salt spray, and quick swap-out at sea.",
  },
  {
    img: "/assets/images/sentience.jpg",
    title: "LiDAR + Camera Bracket for UGV",
    spec: "PETG-CF · ±0.2 mm bore fit · M3 heat-set inserts",
    desc:
      "Rigid co-mount aligning a 3D LiDAR and depth camera on a ground robot, with cable strain relief built into the part.",
  },
  {
    img: "/assets/images/nexus.jpg",
    title: "IP-rated Electronics Enclosure",
    spec: "ABS · gasket channel · cable glands",
    desc:
      "Custom housing for an ESP32 sensor node: sealed lid, ventilation labyrinth, and wall-mount tabs — printed, not injection moulded.",
  },
  {
    img: "/assets/images/image.jpg",
    title: "Assembly Jig for Small-Batch Production",
    spec: "PLA+ · locating pins · 40-unit batch",
    desc:
      "Drill and glue-up fixture that cut a client's assembly time per unit by half and made the output repeatable.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__tick" /> PAST BUILDS
        </p>
        <h2>Parts we've shipped</h2>
        <p className="section__lead">
          A sample of recent work. Every part below started as a message with a sketch or a
          problem — not a finished CAD file.
        </p>
      </Reveal>

      <div className="builds">
        {BUILDS.map((b, i) => (
          <Reveal key={b.title} delay={Math.min(i * 70, 210)}>
            <figure className="build">
              <div className="build__media">
                <img src={b.img} alt={b.title} loading="lazy" />
              </div>
              <figcaption>
                <span className="build__spec">{b.spec}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
