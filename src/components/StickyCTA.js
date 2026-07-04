import React from "react";
import { waLink } from "../config";

const StickyCTA = () => {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-wa"
      aria-label="Chat with Rubotix on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.9 1 3.8 1.5 4.7 1.5 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.7c-1.4 0-3.1-.4-4.6-1.3l-.3-.2-4.3 1.4 1.4-4.2-.2-.3c-1.3-1.8-2-3.9-2-6.2C6 9.4 10.5 5 16 5s10 4.4 10 9.9-4.5 9.8-10 9.8zm5.5-7.4c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
};

export default StickyCTA;
