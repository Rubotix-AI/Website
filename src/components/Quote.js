import React, { useState } from "react";
import Reveal from "./Reveal";
import { waLink, mailtoLink, EMAIL } from "../config";

/*
 * No backend needed: the form composes a structured message and hands it
 * to WhatsApp or the visitor's email client. Swap in Formspree/Web3Forms
 * later if you want submissions stored server-side.
 */
const Quote = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    type: "3D Printing",
    qty: "1",
    details: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const message = () =>
    `New quote request — Rubotix website\n` +
    `Name: ${form.name}\n` +
    `Contact: ${form.contact}\n` +
    `Service: ${form.type}\n` +
    `Quantity: ${form.qty}\n` +
    `Details: ${form.details}\n` +
    `(I can share files/photos in this chat)`;

  const valid = form.name.trim() && form.details.trim();

  return (
    <section id="quote" className="section">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow__tick" /> GET A QUOTE
        </p>
        <h2>Tell us what you need built</h2>
        <p className="section__lead">
          Describe the part, pick how to send it, and attach your files or photos in the chat
          or email that opens. Quotes within 24 hours.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="quote">
          <div className="quote__grid">
            <label>
              <span>Your name</span>
              <input type="text" value={form.name} onChange={set("name")} placeholder="Ahmed / Sara / …" />
            </label>
            <label>
              <span>Phone or email</span>
              <input type="text" value={form.contact} onChange={set("contact")} placeholder="+971 … or you@email.com" />
            </label>
            <label>
              <span>Service</span>
              <select value={form.type} onChange={set("type")}>
                <option>3D Printing</option>
                <option>CAD Design</option>
                <option>Design + Print</option>
                <option>Robotics Parts</option>
                <option>Electronics Enclosure</option>
                <option>Student Project</option>
                <option>Startup MVP Prototype</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              <span>Quantity</span>
              <input type="text" value={form.qty} onChange={set("qty")} placeholder="1" />
            </label>
            <label className="quote__full">
              <span>Describe the part or idea</span>
              <textarea
                rows={4}
                value={form.details}
                onChange={set("details")}
                placeholder="What is it, rough size, what it needs to do, deadline…"
              />
            </label>
          </div>

          <div className="quote__actions">
            <a
              className={`btn btn--solid btn--lg ${valid ? "" : "is-disabled"}`}
              href={valid ? waLink(message()) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => !valid && e.preventDefault()}
            >
              Send via WhatsApp
            </a>
            <a
              className={`btn btn--ghost btn--lg ${valid ? "" : "is-disabled"}`}
              href={valid ? mailtoLink("Quote request — " + form.type, message()) : undefined}
              onClick={(e) => !valid && e.preventDefault()}
            >
              Send via Email
            </a>
          </div>
          <p className="quote__note mono">
            Prefer direct? <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · attach STL, STEP, DXF, PDF,
            photos or sketches.
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default Quote;
