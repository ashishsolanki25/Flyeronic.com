"use client";

import { TrendingUp, ArrowUpRight } from "lucide-react";
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
  Visual3,
} from "@/components/ui/animated-card-chart";

const caseStudies = [
  {
    client: "ScaleUp Digital",
    industry: "SaaS",
    metric: "4.2x ROAS",
    description: "Scaled Google Ads from $2K to $18K/month spend while maintaining 4.2x return on ad spend.",
    mainColor: "#2563EB",
    secondaryColor: "#7C3AED",
    results: [
      { label: "Revenue Growth", value: "+320%" },
      { label: "Cost Per Lead", value: "-58%" },
      { label: "Conversion Rate", value: "12.4%" },
    ],
  },
  {
    client: "BrightPath Academy",
    industry: "EdTech",
    metric: "120+ Leads/Month",
    description: "Built an automated lead gen funnel that generates 120+ qualified leads monthly on autopilot.",
    mainColor: "#7C3AED",
    secondaryColor: "#2563EB",
    results: [
      { label: "Leads/Month", value: "120+" },
      { label: "Automation Rate", value: "80%" },
      { label: "Time Saved", value: "25hrs/wk" },
    ],
  },
  {
    client: "UrbanNest Realty",
    industry: "Real Estate",
    metric: "$2.1M Pipeline",
    description: "Generated a $2.1M sales pipeline through Meta Ads + CRM automation in just 90 days.",
    mainColor: "#22C55E",
    secondaryColor: "#2563EB",
    results: [
      { label: "Pipeline Value", value: "$2.1M" },
      { label: "Qualified Leads", value: "340+" },
      { label: "Time to ROI", value: "21 days" },
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-3">
            Proven Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center">
            Case Studies
          </h2>
          <p className="text-base text-muted-foreground mt-3 text-center" style={{ textAlign: "center" }}>
            Real numbers from real clients. Here&apos;s what happens when marketing
            becomes a system.
          </p>
        </div>

        {/* Animated Chart Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {caseStudies.map((study, i) => (
            <div
              key={study.client}
              className={`reveal delay-${(i % 3 + 1) * 100} w-full flex justify-center`}
            >
              <AnimatedCard className="w-full max-w-[356px]">
                <CardVisual>
                  <Visual3
                    mainColor={study.mainColor}
                    secondaryColor={study.secondaryColor}
                  />
                </CardVisual>
                <CardBody>
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                        {study.industry}
                      </p>
                      <CardTitle className="font-heading text-base">
                        {study.client}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white"
                      style={{ backgroundColor: study.mainColor }}
                    >
                      <TrendingUp size={10} />
                      {study.metric}
                    </div>
                  </div>
                  <CardDescription className="text-xs leading-relaxed">
                    {study.description}
                  </CardDescription>
                  {/* Results mini-grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {study.results.map((r) => (
                      <div key={r.label} className="text-center p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                        <p className="font-heading font-bold text-xs text-foreground">{r.value}</p>
                        <p className="text-[9px] text-muted-foreground">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
