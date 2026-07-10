"use client";

/**
 * WhatsApp Floating Action Button
 * ─────────────────────────────────
 * Globally rendered via app/layout.tsx so it appears on every page.
 * Opens wa.me chat with a pre-filled message in a new tab.
 * On mobile it deep-links into the WhatsApp app if installed.
 */
export function WhatsAppButton() {
  const phoneNumber = "919109176922";
  const message =
    "Hi, I'm interested in your services. Can you share more details?";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp-fab"
    >
      {/* Animated pulse ring */}
      <span className="whatsapp-fab__ring" aria-hidden="true" />

      {/* Official WhatsApp icon (inline SVG — no extra deps needed) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        aria-hidden="true"
        className="whatsapp-fab__icon"
      >
        <path d="M16.003 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.358.629 4.669 1.822 6.685L2.667 29.333l6.826-1.792A13.284 13.284 0 0016.003 29.333c7.365 0 13.33-5.97 13.33-13.333 0-7.362-5.965-13.333-13.33-13.333zm0 24.267a11.01 11.01 0 01-5.618-1.54l-.403-.24-4.052 1.063 1.081-3.944-.263-.415A10.974 10.974 0 015.005 16c0-6.065 4.933-11 10.998-11C22.068 5 27 9.935 27 16c0 6.065-4.932 11-10.997 11zm6.03-8.234c-.33-.165-1.952-.963-2.255-1.073-.304-.11-.525-.165-.747.165-.22.33-.855 1.073-1.048 1.293-.193.22-.386.247-.716.083-.33-.165-1.392-.513-2.65-1.634-.98-.874-1.641-1.952-1.833-2.282-.193-.33-.02-.508.145-.672.148-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.747-1.8-1.023-2.468-.27-.648-.543-.56-.747-.57-.193-.01-.413-.012-.634-.012s-.578.082-.881.413c-.303.33-1.156 1.13-1.156 2.756s1.184 3.196 1.348 3.416c.165.22 2.33 3.558 5.648 4.991.789.34 1.404.543 1.884.694.792.252 1.512.217 2.082.132.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.192-1.568-.082-.138-.303-.22-.634-.385z" />
      </svg>
    </a>
  );
}
