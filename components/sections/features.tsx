"use client";

import { Zap, Shield, LineChart, Clock, HeadphonesIcon, Target } from "lucide-react";

const features = [
  {
    icon: <Target size={22} />,
    title: "Results-First Approach",
    description: "Every strategy is built around measurable KPIs. We don't guess — we test, track, and optimize.",
    color: "text-primary bg-primary/5",
  },
  {
    icon: <Zap size={22} />,
    title: "Full-Stack Execution",
    description: "From ads to automation to creatives — one team, one system, zero fragmentation.",
    color: "text-accent-purple bg-accent-purple/5",
  },
  {
    icon: <LineChart size={22} />,
    title: "Data-Driven Decisions",
    description: "Real-time dashboards and weekly reporting so you always know exactly what's working.",
    color: "text-accent-green bg-accent-green/5",
  },
  {
    icon: <Clock size={22} />,
    title: "Fast Turnaround",
    description: "Go live in weeks, not months. We move fast without cutting corners on quality.",
    color: "text-primary bg-primary/5",
  },
  {
    icon: <Shield size={22} />,
    title: "Transparent Pricing",
    description: "No hidden fees, no lock-in contracts. Clear scope, clear pricing, clear results.",
    color: "text-accent-purple bg-accent-purple/5",
  },
  {
    icon: <HeadphonesIcon size={22} />,
    title: "Dedicated Support",
    description: "Your own account manager, weekly check-ins, and a Slack channel for instant communication.",
    color: "text-accent-green bg-accent-green/5",
  },
];

export function FeaturesSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        {/* Section Header — fully centred */}
        <div className="text-center mb-12 max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-3">
            Why Flyeronic
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center">
            Why Choose Us
          </h2>
          <p className="text-base text-muted-foreground mt-3 text-center">
            We&apos;re not just another agency. We build integrated marketing
            systems that deliver predictable, scalable growth.
          </p>
        </div>

        {/* Features Grid — equal-height cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ gridAutoRows: "1fr" }}
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal delay-${(i % 3 + 1) * 100} group flex flex-col h-full bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5`}
              style={{ padding: "28px" }}
            >
              {/* Fixed icon box */}
              <div
                className={`rounded-xl flex items-center justify-center shrink-0 ${feature.color}`}
                style={{ width: 48, height: 48, marginBottom: 16 }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                {feature.title}
              </h3>
              {/* flex-1 pushes all cards to same height */}
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
