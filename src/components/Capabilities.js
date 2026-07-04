import React from "react";
import Reveal from "./Reveal";

const MATERIALS = [
  { name: "PLA / PLA+", use: "Fast concept models, form checks, jigs", trait: "Cheap, rigid, fast" },
  { name: "PETG", use: "Functional parts, brackets, outdoor-adjacent use", trait: "Tough, slightly flexible" },
  { name: "ABS / ASA", use: "UAE outdoor parts, enclosures, automotive", trait: "Heat & UV resistant" },
  { name: "TPU", use: "Gaskets, feet, bumpers, wheels, seals", trait: "Rubber-like, flexible" },
  { name: "Nylon / PA-CF", use: "End-use robotics parts, gears, load-bearing mounts", trait: "Strongest, wear resistant" },
];

const CAPS = [
  { k: "Layer resolution", v: "0.08 – 0.32 mm" },
  { k: "Dimensional tolerance", v: "±0.2 mm typical (tighter on request)" },
  { k: "Threaded joints", v: "Heat-set brass inserts M2 – M6" },
  { k: "Finishing", v: "Sanding, priming, vapour smoothing (ABS)" },
  { k: "CAD deliverables", v: "STEP, STL, technical drawings (PDF)" },
  { k: "Design software", v: "Autodesk Inventor, Fusion 360" },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="section section--alt">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__tick" /> MATERIALS & CAPABILITIES
        </p>
        <h2>Built in the right material</h2>
        <p className="section__lead">
          A bracket that lives on a Dubai rooftop needs different plastic than a desk gadget.
          We pick the material for the job — and tell you why.
        </p>
      </Reveal>

      <div className="caps">
        <Reveal className="caps__materials">
          <table>
            <thead>
              <tr>
                <th>Material</th>
                <th>Best for</th>
                <th>Character</th>
              </tr>
            </thead>
            <tbody>
              {MATERIALS.map((m) => (
                <tr key={m.name}>
                  <td className="mono">{m.name}</td>
                  <td>{m.use}</td>
                  <td>{m.trait}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal delay={120} className="caps__specs">
          <dl>
            {CAPS.map((c) => (
              <div key={c.k} className="caps__row">
                <dt>{c.k}</dt>
                <dd className="mono">{c.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default Capabilities;
