"use client";

/**
 * Announcement Bar — "Free Demo Shoot" offer
 * ─────────────────────────────────────────────
 * Sticky strip at the very top of the page. Uses a small "REC ●" indicator
 * as the signature element — it borrows from the language of a camera
 * viewfinder, which ties directly to the "demo shoot" offer instead of a
 * generic sparkle/badge icon. Dismissible; the choice is remembered per
 * browser via localStorage so it doesn't nag returning visitors.
 */

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const DISMISS_KEY = "flyeronic-demo-shoot-bar-dismissed";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(DISMISS_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore storage errors (e.g. private browsing) */
    }
  };

  if (!visible) return null;

  const phoneNumber = "919109176922";
  const message =
    "Hi, I'd like to book a free demo shoot to see Flyeronic's work before starting a project.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="announcement-bar" role="region" aria-label="Special offer">
      <div className="announcement-bar__inner">
        <span className="announcement-bar__rec" aria-hidden="true">
          <span className="announcement-bar__rec-dot" />
          REC
        </span>

        <p className="announcement-bar__text">
          <span className="announcement-bar__text-strong">Book a free demo shoot</span>
          <span className="announcement-bar__text-sep"> — </span>
          see exactly how we&apos;d showcase your business before you spend a rupee.
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-bar__cta"
        >
          Claim your slot
        </a>
      </div>

      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className="announcement-bar__close"
      >
        <X size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
}
