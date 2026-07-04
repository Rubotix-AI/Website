# Rubotix Website — Repositioning Updated

## One thing you MUST do before deploying
Open `src/config.js` and set `WHATSAPP_NUMBER` to your real number
(international format, digits only, e.g. `9715XXXXXXXX`). Every CTA on the
site routes through this one constant.

## Files DELETED (remove from the repo)
- `src/components/App.js` — exact duplicate of `src/App.js`
- `src/components/NexusPage.js` — dummy data, replaced by single-page layout
- `src/components/SentiencePage.js` — copy-paste of NexusPage, wrong page title ("Rubotix Nexus")
- `src/components/GenesisPage.js` — copy-paste, component still named `NexusPage`
- `src/components/VantaBackground.js` — pulled three.js (~600 kB) for a background
- `src/components/About.js` — old "AI powerhouse / turn-key" copy
- `src/components/Contact.js` — replaced by Quote form
- `src/components/Loader.js` — fake loading screen removed; site now paints instantly
- `src/components/ProjectGrid.css`
- `tailwind.config.js` — stray file; Tailwind was never installed or used
- `public/assets/videos/*` — no longer referenced (optional delete; saves ~100 MB in repo)

## Files REWRITTEN
- `public/index.html` — SEO title, meta description, keywords, Open Graph,
  Twitter cards, canonical URL, LocalBusiness JSON-LD schema, new fonts
- `src/App.js` — single-page structure, no router, no duplicate
- `src/styles.css` — full rewrite: token system, responsive, reduced-motion support
- `package.json` — removed `three`, `vanta`, `react-router-dom`
- `src/components/Navbar.js` — working anchor links, scrolled state, mobile menu with CTAs
- `src/components/Hero.js` — new offer-led hero
- `src/components/Capabilities.js` — now the Materials & Capabilities spec section
- `src/components/Footer.js` — dynamic year, contact links

## Files ADDED
- `src/config.js` — WhatsApp number, email, link builders (edit once, applies everywhere)
- `src/components/Reveal.js` — dependency-free scroll reveal (IntersectionObserver)
- `src/components/Services.js` — 7 service cards, each with a prefilled WhatsApp CTA
- `src/components/HowItWorks.js` — 4-step process
- `src/components/Portfolio.js` — realistic past builds (swap in real photos ASAP)
- `src/components/Industries.js` — use cases
- `src/components/FAQ.js` — 7-question accordion
- `src/components/Quote.js` — quote form that composes a structured WhatsApp/email
  message (no backend required; swap in Formspree/Web3Forms later if wanted)
- `src/components/StickyCTA.js` — floating WhatsApp button

## Verified
- `npm install && npm run build` compiles successfully
- Bundle: 67.66 kB JS gzipped (previously included three.js + vanta)
- Mobile responsive at 380 px, reduced-motion respected

## Known limitation to fix later
Create React App renders client-side, so Google gets an empty HTML shell
before JS runs. The static meta tags in index.html cover the basics, but for
serious local SEO (ranking for "3D printing Dubai"), migrate to Next.js or
Astro, or add prerendering (react-snap) so each section ships as real HTML.
