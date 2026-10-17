"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    // A route change replaces page content without remounting the root layout.
    // Re-scan on every pathname so newly rendered .reveal elements are observed.
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (!( "IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      if (!element.classList.contains("active")) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
