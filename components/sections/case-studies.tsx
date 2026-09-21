"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tracked = [
  { title: "Cost per lead", text: "What each enquiry actually costs, by channel and campaign." },
  { title: "Qualified leads", text: "How many leads are real buyers, patients, or customers, not just form fills." },
  { title: "Return on ad spend", text: "Revenue tracked back to the ads that produced it." },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-accent-purple uppercase tracking-widest mb-3">
            How We Measure
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center">
            Results You Can Verify
          </h2>
          <p className="text-base text-muted-foreground mt-3 text-center" style={{ textAlign: "center" }}>
            We publish case studies only with client permission and verified numbers.
            Until then, this is what we track and report on every month.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto reveal">
          {tracked.map((t) => (
            <div key={t.title} className="bg-white border border-border rounded-2xl p-7">
              <h3 className="font-bold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 reveal">
          <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Get a free marketing audit <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
