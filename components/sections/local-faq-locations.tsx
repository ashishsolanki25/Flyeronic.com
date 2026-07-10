"use client";

import { useState } from "react";
import { HelpCircle, MapPin, ChevronDown, CheckCircle, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do you provide digital marketing services in Indore?",
    answer: "Yes, Flyeronic is a premium digital marketing agency based in Indore, MP. We specialize in performance ads, search engine optimization (SEO), social media marketing, marketing automation, and website designing for local, national, and international brands.",
  },
  {
    question: "Where is your office located in Indore?",
    answer: "Our office is located at GRM Business Park, Super Corridor, Indore, MP. If you're a local business owner looking to scale, you are welcome to schedule a visit to our office for a personalized face-to-face marketing strategy session.",
  },
  {
    question: "What digital marketing services do you offer for Indore businesses?",
    answer: "We offer end-to-end digital growth systems: Facebook & Google Ads (Performance Marketing), Local & National SEO to rank #1 on Google search, High-Converting Website Designing, Social Media Branding, Sales Funnels, and Lead Generation systems designed to get you customers predictably.",
  },
  {
    question: "Why should we choose Flyeronic over other digital marketing agencies in Indore, MP?",
    answer: "Unlike agencies that focus on vanity metrics like 'likes' or 'shares', we focus strictly on business outcomes (Leads, ROI, and ROAS). We build automated marketing systems that run 24/7. Our transparent reporting ensures you know exactly where every rupee of your marketing budget goes.",
  },
  {
    question: "How do we get started with your marketing services?",
    answer: "You can start by booking a free 30-minute strategy call through our contact form. We will audit your current website and marketing campaigns, identify growth opportunities, and provide you with a customized roadmap tailored for your business.",
  },
];

const locations = [
  { name: "Super Corridor", desc: "Where our head office is located." },
  { name: "Vijay Nagar", desc: "Serving tech startups and corporate offices." },
  { name: "AB Road", desc: "Helping showrooms, retail, and real estate brands." },
  { name: "Indore City", desc: "Full service area across the Indore metropolitan area." },
  { name: "Ujjain", desc: "Supporting local businesses and tourism enterprises." },
  { name: "Dewas", desc: "Providing industrial marketing and B2B lead generation." },
];

export function LocalFaqLocations() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-locations" className="py-20 lg:py-24 bg-white border-t border-border">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/5 text-primary text-sm font-medium">
            Local Presence &amp; FAQ
          </span>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Indore&apos;s Leading Digital Marketing Partner
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
            Serving businesses in Indore and surrounding regions with result-oriented digital solutions.
          </p>
        </div>

        {/* 2 Column Layout — FAQ left (3/5), Locations right (2/5) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── FAQ Column ── */}
          <div className="lg:col-span-3 reveal delay-100">
            <div className="flex items-center gap-2 mb-5">
              <HelpCircle className="text-primary shrink-0" size={22} />
              <h3 className="font-heading text-xl font-bold text-foreground">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-border rounded-2xl bg-muted/10 transition-all duration-300 hover:border-primary/20 overflow-hidden"
                  >
                    {/* Trigger button — items-start + pt to keep chevron top-aligned with first text line on wraps */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 font-semibold text-sm sm:text-base text-foreground hover:text-primary transition-colors focus:outline-none"
                      aria-expanded={isOpen}
                      style={{ minHeight: "52px" }}
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <span className="shrink-0 mt-0.5">
                        {isOpen ? (
                          <ChevronUp size={18} className="text-primary" />
                        ) : (
                          <ChevronDown size={18} className="text-muted-foreground" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pt-3 pb-5 text-sm leading-relaxed text-muted-foreground border-t border-border/40 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Locations Column ── */}
          <div className="lg:col-span-2 reveal delay-200">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="text-primary shrink-0" size={22} />
              <h3 className="font-heading text-xl font-bold text-foreground">
                Areas We Serve
              </h3>
            </div>

            <div className="bg-muted/10 border border-border rounded-3xl p-6 sm:p-7">
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                We provide digital marketing, website design, and SEO services to businesses throughout Malwa and MP:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="flex gap-2.5 items-start bg-white rounded-xl border border-border/60 hover:border-primary/20 transition-all p-3.5"
                  >
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={15} />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground leading-tight">{loc.name}</h4>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{loc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-border/60 flex flex-col gap-2">
                <p className="text-xs font-semibold text-foreground uppercase tracking-widest">Head Office</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  GRM Business Park, Super Corridor, Indore, MP - 452005
                </p>
                <p className="text-xs text-muted-foreground">
                  Phone:{" "}
                  <a href="tel:+919109176922" className="text-primary hover:underline">
                    +91 9109176922
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
