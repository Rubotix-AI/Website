import React, { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "I don't have a CAD file — just an idea or a broken part. Can you help?",
    a: "Yes — that's most of our work. Send photos, a sketch with rough dimensions, or the physical part itself. We measure, model it in CAD, and send you the design for approval before printing.",
  },
  {
    q: "How fast can I get my part?",
    a: "Simple prints from an existing file: usually 24–72 hours. Design + print projects: typically 3–7 days depending on complexity and test fits. Tell us your deadline and we'll be straight about whether it's possible.",
  },
  {
    q: "How much does it cost?",
    a: "Small printed parts start from roughly AED 50–150. CAD design is quoted per part based on complexity. Every quote is fixed before we start — you approve the price and the design first.",
  },
  {
    q: "Do you deliver across the UAE?",
    a: "Yes. Courier delivery anywhere in the UAE, with same-city options in Dubai and Abu Dhabi. Pickup can also be arranged.",
  },
  {
    q: "Are 3D printed parts strong enough for real use?",
    a: "In the right material and print orientation, yes. We regularly print load-bearing brackets and outdoor parts in PETG, ASA and carbon-fibre nylon. If a part genuinely needs metal, we'll tell you instead of printing something that fails.",
  },
  {
    q: "Do I own the design files?",
    a: "If we design a part for you, the STEP/STL files are yours once the project is paid. We don't lock you in.",
  },
  {
    q: "Can you handle confidential startup projects?",
    a: "Yes. We're happy to sign an NDA before you share anything, and we never post client work without permission.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section section--alt">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__tick" /> QUESTIONS
        </p>
        <h2>FAQ</h2>
      </Reveal>

      <div className="faq">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={Math.min(i * 40, 160)}>
            <div className={`faq__item ${open === i ? "is-open" : ""}`}>
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="faq__icon" aria-hidden="true">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && <p className="faq__a">{f.a}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
