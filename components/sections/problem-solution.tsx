"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Running ads with no clear ROI tracking",
  "Wasting hours on repetitive manual tasks",
  "Leads slipping through the cracks",
  "Inconsistent branding across platforms",
];

const solutions = [
  "Data-driven campaigns with real-time dashboards",
  "Automated workflows that run 24/7",
  "Systematic lead capture & nurture sequences",
  "Unified brand identity across every touchpoint",
];

export function ProblemSolution() {
  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/5 text-primary text-sm font-medium">
            Why Flyeronic?
          </span>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-secondary mb-4">
            Stop Guessing. Start Growing.
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Most businesses waste thousands on fragmented marketing. We build
            integrated systems that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem */}
          <div className="reveal delay-100 relative p-8 lg:p-10 rounded-3xl bg-white border border-red-100 shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <AlertCircle size={20} className="text-red-500" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary">
                Without a System
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="reveal delay-200 relative p-8 lg:p-10 rounded-3xl bg-white border border-green-100 shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-green-500" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary">
                With Flyeronic
              </h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary">
                  <CheckCircle2 size={18} className="mt-0.5 text-green-500 shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
