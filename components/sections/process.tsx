"use client";

import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "We analyze your current marketing, identify gaps, and map your growth opportunities.",
    icon: <Search size={24} />,
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Strategy & Blueprint",
    description: "Custom marketing blueprint with clear KPIs, channels, and automation workflows.",
    icon: <Lightbulb size={24} />,
    color: "#7C3AED",
  },
  {
    number: "03",
    title: "Build & Launch",
    description: "We build everything — ads, funnels, automations, creatives — and go live fast.",
    icon: <Rocket size={24} />,
    color: "#22C55E",
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "Continuous A/B testing, reporting, and optimization to scale what works.",
    icon: <TrendingUp size={24} />,
    color: "#2563EB",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/5 text-primary text-sm font-medium">
            Our Process
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-secondary mb-4">
            How We Work
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base" style={{ textAlign: "center" }}>
            A proven 4-step framework that takes you from scattered marketing to a predictable growth machine.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ gridAutoRows: "1fr" }}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal delay-${(index + 1) * 100} group relative flex flex-col h-full bg-white border border-border rounded-2xl hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1`}
              style={{ padding: "28px" }}
            >
              {/* Step number — decorative */}
              <span className="absolute top-5 right-5 font-heading text-4xl font-bold text-muted/60 group-hover:text-primary/10 transition-colors duration-500 select-none">
                {step.number}
              </span>

              {/* Fixed 56×56 icon */}
              <div
                className="rounded-xl flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ width: 56, height: 56, backgroundColor: step.color, marginBottom: 16 }}
              >
                {step.icon}
              </div>

              <h3 className="font-heading text-base font-semibold text-secondary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Connector line between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
