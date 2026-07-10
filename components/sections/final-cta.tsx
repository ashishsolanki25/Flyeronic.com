"use client";

import { ArrowRight, Zap } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export function FinalCTA() {
  return (
    <section id="cta" className="py-20">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-3xl reveal"
          style={{
            background: "linear-gradient(135deg, #00C9A7 0%, #00b09b 50%, #009b86 100%)",
            padding: "64px 32px",
            textAlign: "center",
          }}
        >
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div
            className="relative z-10"
            style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full text-sm font-medium"
              style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}
            >
              <Zap size={14} />
              Ready to Scale?
            </div>

            {/* Heading — forced center via style */}
            <h2
              className="font-bold font-heading text-white mb-4 leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                textAlign: "center",
                width: "100%",
              }}
            >
              Let&apos;s Build Your{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #7C3AED, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Growth Engine
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-sm sm:text-base mb-10"
              style={{ color: "rgba(255,255,255,0.7)", textAlign: "center", maxWidth: "420px", margin: "0 auto 40px" }}
            >
              Book a free strategy call. We&apos;ll audit your marketing,
              identify the biggest opportunities, and show you exactly how to scale.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedButton href="#contact" variant="outline">
                Book Free Strategy Call
                <ArrowRight size={16} />
              </AnimatedButton>
              <AnimatedButton
                href="mailto:flyeronic.info@gmail.com"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                flyeronic.info@gmail.com
              </AnimatedButton>
            </div>

            <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.45)", textAlign: "center" }}>
              No commitment · Free audit · Results in 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
