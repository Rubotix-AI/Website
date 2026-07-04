// ─────────────────────────────────────────────────────────────
// Rubotix site configuration — edit contact details here ONCE.
// ─────────────────────────────────────────────────────────────

// WhatsApp number in international format, digits only (no +, no spaces).
// Example for UAE: "9715XXXXXXXX"
export const WHATSAPP_NUMBER = "9715XXXXXXXX"; // TODO: set your real number

export const EMAIL = "sales@rubotix.ai";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Rubotix, I have a part/idea I'd like to prototype. Can I send you the details?";

export const waLink = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject, body) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
