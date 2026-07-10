"use client";

const testimonials = [
  {
    id: 1,
    quote: "Flyeronic ke Facebook aur Instagram ads se hamare township project ke site visits 3 guna ho gaye. Pehle sirf walk-ins pe depend the, ab har hafte qualified buyer leads aa rahe hain.",
    name: "Rajesh Khanna",
    role: "Director, Shreeji Realtors",
    initials: "RK",
    avatarBg: "#4A34B8",
    accent: "#6C3AFF",
  },
  {
    id: 2,
    quote: "Clinic ki Google My Business optimization aur targeted ads ke baad naye patient inquiries doubling ho gayi. Ab reception pe calls rukte hi nahi.",
    name: "Dr. Kavita Reddy",
    role: "Founder, GlowLine Skin Clinic",
    initials: "KR",
    avatarBg: "#1A3A8F",
    accent: "#111111",
  },
  {
    id: 3,
    quote: "Humari manufacturing unit ke liye B2B leads generate karna bahut mushkil tha. Flyeronic ne LinkedIn aur email campaigns se directly distributor inquiries la di — pehle 45 din me hi results mile.",
    name: "Manish Agarwal",
    role: "Director, Agarwal Industries",
    initials: "MA",
    avatarBg: "#1A3A8F",
    accent: "#2563EB",
  },
  {
    id: 4,
    quote: "Instagram reels aur local SEO ke through hamare salon ki booking calendar hamesha full rehta hai. New client walk-ins me bhi bahut fark aaya — pehle mahine se hi.",
    name: "Pooja Malhotra",
    role: "Owner, Bella Salon & Spa",
    initials: "PM",
    avatarBg: "#1A3A8F",
    accent: "#2563EB",
  },
  {
    id: 5,
    quote: "Swiggy-Zomato visibility ke saath hamare khud ke website se bhi direct orders aane lage. Ad spend ka ROI clearly track ho raha hai — 3.8x return pehle quarter me.",
    name: "Sanjay Iyer",
    role: "Founder, Spice Route Foods",
    initials: "SI",
    avatarBg: "#222",
    accent: "#111111",
  },
  {
    id: 6,
    quote: "Flyeronic ne humara poora sales funnel banaya — ads, landing pages, WhatsApp automation. NRI investors tak seedha pahunch bani aur site visit bookings 2 mahine me hi bhar gaye.",
    name: "Anita Desai",
    role: "CEO, Skyline Estates",
    initials: "AD",
    avatarBg: "#4A34B8",
    accent: "#111111",
  },
  {
    id: 7,
    quote: "Flyeronic ke saath kaam karna ek dedicated marketing team rakhne jaisa laga. Fast execution, clear communication, aur results jo actually dikhe — highly recommend.",
    name: "Dev Rathore",
    role: "Co-founder, NexGen Clinics",
    initials: "DR",
    avatarBg: "#4A34B8",
    accent: "#6C3AFF",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  avatarBg,
  accent,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  accent: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal flex flex-col justify-between relative overflow-hidden rounded-2xl border border-white/10 p-6 delay-${delay}`}
      style={{ backgroundColor: accent }}
    >
      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Quote mark */}
      <span className="text-3xl leading-none text-white/25 font-serif mb-3 select-none relative z-10">&ldquo;</span>

      <article className="flex flex-col flex-1 relative z-10">
        <p className="text-sm leading-relaxed text-white/90 flex-1">{quote}</p>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
          <div>
            <h3 className="font-semibold text-sm text-white leading-tight">{name}</h3>
            <p className="text-xs text-white/60 mt-0.5">{role}</p>
          </div>
          {/* Initials Avatar */}
          <div
            className="w-12 h-12 rounded-xl border-2 border-white/20 shrink-0 flex items-center justify-center font-bold text-sm text-white"
            style={{ backgroundColor: avatarBg }}
          >
            {initials}
          </div>
        </div>
      </article>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Client Love
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center">
            Trusted by Growing Brands
          </h2>
          <p className="text-base text-muted-foreground mt-3 text-center" style={{ textAlign: "center" }}>
            Real results from real businesses — hear what our clients say about
            working with Flyeronic.
          </p>
        </div>

        {/* Uniform 3-column grid — all cards same width, auto height */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} delay={(t.id % 3 + 1) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
