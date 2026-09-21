"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, MapPin, ChevronDown, CheckCircle, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Indore mein best digital marketing agency kaun si hai?",
    answer: "Flyeronic Indore ki digital marketing agency hai jo Super Corridor pe based hai. Hum Facebook Ads, Google Ads, SEO, aur sales funnel automation par kaam karte hain. Best agency ka faisla aapke goals, budget aur proof par hona chahiye, isliye hum pehle free strategy call mein aapke marketing ka audit karte hain aur bina commitment ke batate hain ki kya kaam karega.",
  },
  {
    question: "Kya Flyeronic real estate aur local businesses ke liye kaam karta hai?",
    answer: "Haan. Real estate, clinics, salons, restaurants aur local businesses hamare focus areas hain. Real estate ke liye hum WhatsApp campaigns, Facebook Lead Ads aur NRI-targeted Instagram content plan karte hain jo site visits aur bookings ke liye design hote hain.",
  },
  {
    question: "Google pe #1 rank karne mein kitna time lagta hai?",
    answer: "Local SEO ke liye — jaise 'digital marketing agency Indore' — 3 se 6 mahine ka realistic timeline hai consistent kaam ke saath. Hum on-page SEO, Google Business Profile optimization, aur local citation building karte hain. Paid ads se results sirf 7 dinon mein shuru ho jaate hain.",
  },
  {
    question: "Digital marketing agency hire karne mein kitna budget chahiye?",
    answer: "Flyeronic ke saath aap Rs. 15,000/month se shuru kar sakte hain jisme social media + SEO included hai. Performance marketing ke liye minimum Rs. 10,000-15,000 ad spend alag hota hai. Hum transparent pricing dete hain — koi hidden charges nahi. Free strategy call mein aapke business ke liye best plan suggest karte hain.",
  },
  {
    question: "Kya aap Ujjain, Dewas, Bhopal mein bhi services dete hain?",
    answer: "Haan, hum poore Madhya Pradesh mein kaam karte hain — Ujjain, Dewas, Pithampur, Bhopal aur pan-India bhi. Digital marketing fully remote ho sakti hai, toh location koi barrier nahi. Hamare Indore office mein in-person meetings bhi available hain Super Corridor pe.",
  },
  {
    question: "Pehla result kab dikhega aur kaise track karein?",
    answer: "Paid ads se leads aksar 7-14 dinon mein aani shuru ho jaati hain. SEO mein shuruaati movement (impressions aur rankings) 60-90 dinon mein dikh sakti hai, aur competitive keywords ke liye 3-6 mahine lagte hain. Hum har client ko monthly report dete hain jisme leads count, ad spend, ROAS, aur keyword rankings clearly mention hote hain.",
  },
];

const locations = [
  { name: "Indore", desc: "Humara home base — real estate, clinics, salons & startups." },
  { name: "Bhopal", desc: "MP capital — government, corporate & education sector clients." },
  { name: "Jabalpur", desc: "Industrial & education brands ke liye digital growth." },
  { name: "Gwalior", desc: "North MP mein manufacturing & retail businesses." },
  { name: "Ujjain", desc: "Tourism, temples & local business digital marketing." },
  { name: "Dewas", desc: "Industrial B2B lead generation & brand awareness." },
  { name: "Pithampur", desc: "Asia ke Detroit mein heavy industry & B2B clients." },
  { name: "Ratlam", desc: "FMCG, pharma & trading businesses ka digital hub." },
  { name: "Sagar", desc: "Central MP — education institutes & retail brands." },
  { name: "Rewa", desc: "East MP mein healthcare & government sector marketing." },
];

export function LocalFaqLocations() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq-locations" className="py-20 lg:py-24 bg-white border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pt-4 pb-5 text-sm leading-7 text-muted-foreground border-t border-border/40 bg-primary/[0.02]">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
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
                Madhya Pradesh ki badi cities mein businesses ke liye digital marketing, SEO aur performance ads:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-6">
                {locations.map((loc) => (
                  <Link
                    key={loc.name}
                    href={`/locations/${loc.name.toLowerCase()}`}
                    className="flex gap-2.5 items-start bg-white rounded-xl border border-border/60 hover:border-primary/40 hover:shadow-sm transition-all p-3.5"
                  >
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={15} />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground leading-tight">{loc.name}</h4>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{loc.desc}</p>
                    </div>
                  </Link>
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
