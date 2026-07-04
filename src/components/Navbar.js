import React, { useEffect, useState } from "react";
import { waLink } from "../config";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#portfolio", label: "Past Builds" },
  { href: "#capabilities", label: "Materials" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="nav__logo" aria-label="Rubotix home">
        <img src="/assets/images/rubotix-logo-01.png" alt="Rubotix logo" />
      </a>

      <ul className="nav__links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav__actions">
        <a href="#quote" className="btn btn--solid btn--sm">
          Get a Quote
        </a>
      </div>

      <button
        className={`nav__burger ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="nav__mobile" onClick={() => setMenuOpen(false)}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#quote" className="btn btn--solid">
            Get a Quote
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
