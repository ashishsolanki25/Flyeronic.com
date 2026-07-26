export interface CityFaq {
  q: string;
  a: string;
}

export interface CityData {
  slug: string;
  name: string;
  tagline: string;
  focus: string;
  intro: string;
  localDetail: string;
  metaDescription: string;
  highlights: string[];
  faqs: CityFaq[];
}

export const cities: CityData[] = [
  {
    slug: "indore",
    name: "Indore",
    tagline: "Our Home Base — Full-Service Digital Marketing",
    focus: "real estate, clinics, salons, restaurants, and D2C brands across every part of the city",
    intro:
      "Indore is where Flyeronic is based — our office sits on Super Corridor, and we work with businesses across every part of the city, from Vijay Nagar and Palasia to Rajwada and Indore-Ujjain Road. Being local means faster turnarounds, in-person meetings when you want them, and a real understanding of what works for Indore's market — not a generic playbook applied from outside.",
    localDetail:
      "Because we're a five-minute drive from most of Indore, client meetings happen in person more often than over video — useful for the kind of hands-on work real estate launches, clinic openings, and restaurant brand refreshes usually need. We've run campaigns for Vijay Nagar retail brands during festive season rushes and for Super Corridor real estate projects targeting NRI and out-of-city buyers, so the playbook adjusts depending on which part of Indore a client is actually selling to.",
    metaDescription:
      "Flyeronic is an Indore-based digital marketing agency on Super Corridor, serving real estate, clinics, salons, restaurants, and D2C brands across Vijay Nagar, Palasia, and beyond with SEO, ads, and web development.",
    highlights: [
      "In-person strategy meetings at our Super Corridor office",
      "Deep local market knowledge across Vijay Nagar, Palasia, Rajwada & beyond",
      "Full-service SEO, paid ads, automation, and content — all under one roof",
      "50+ Indore brands grown with a 4.9/5 client rating",
    ],
    faqs: [
      {
        q: "Can we meet in person, since your office is in Indore too?",
        a: "Yes — our office is on Super Corridor, and in-person meetings are the norm for Indore clients rather than the exception, especially at the strategy and kickoff stage.",
      },
      {
        q: "Do you work with real estate projects specifically in Indore?",
        a: "Yes, real estate is one of our core focus areas here, including projects along Super Corridor and Indore-Ujjain Road — from lead generation ads to full website builds.",
      },
      {
        q: "Which parts of Indore do you have the most experience marketing in?",
        a: "We've worked across Vijay Nagar, Palasia, Rajwada, and the Super Corridor stretch — each has different customer behavior, which shapes how we set up campaigns for a client there.",
      },
    ],
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    tagline: "Government, Corporate & Education Sector Marketing",
    focus: "government, corporate, and education sector clients",
    intro:
      "As the capital of Madhya Pradesh, Bhopal is home to a mix of government bodies, corporate offices, and educational institutions — each with very different marketing needs. We help Bhopal-based organizations build credible digital presences, from SEO and website development to lead generation campaigns tailored to institutional and corporate audiences.",
    localDetail:
      "Bhopal clients tend to fall into one of two very different buckets: institutions that need a credible, document-heavy web presence for tenders and empanelment, or coaching institutes and colleges racing for admission-season visibility. We've built both — a professional, certification-forward site for a government-adjacent vendor, and admission-cycle Google Ads campaigns timed to when Bhopal's coaching search volume actually spikes.",
    metaDescription:
      "Digital marketing for Bhopal's government vendors, corporate offices, and education institutes — SEO, website development, and lead generation from Flyeronic, built around MP's capital city's institutional buyers.",
    highlights: [
      "Website development for institutions and corporate offices",
      "SEO targeting Bhopal-specific local search terms",
      "Lead generation for education and B2B corporate services",
      "Google Business Profile optimization for local visibility",
    ],
    faqs: [
      {
        q: "Do you build websites suited for government tenders or empanelment in Bhopal?",
        a: "Yes — we focus on clear documentation, certifications, and a professional layout that government and PSU buyers typically look for during vendor evaluation.",
      },
      {
        q: "Can you help a coaching institute in Bhopal with admissions marketing?",
        a: "Yes, we run Google Ads and local SEO timed to Bhopal's admission cycles, targeting exam-prep and course-specific searches.",
      },
      {
        q: "Is your work only for large corporate clients, or do smaller Bhopal businesses work with you too?",
        a: "Both — we work with corporate offices needing B2B lead generation as well as smaller local businesses needing standard SEO and social media support.",
      },
    ],
  },
  {
    slug: "jabalpur",
    name: "Jabalpur",
    tagline: "Industrial & Education Brand Growth",
    focus: "industrial and education sector brands",
    intro:
      "Jabalpur's economy runs on a strong industrial base alongside a growing education sector. We work with manufacturing businesses and educational institutes in Jabalpur to build digital marketing systems — SEO, performance ads, and content — that generate consistent, qualified leads.",
    localDetail:
      "The two sides of Jabalpur's economy need almost opposite marketing approaches — a manufacturing unit needs to be findable by a handful of procurement buyers, while a college or coaching institute needs high-volume local visibility among students and parents. We keep those campaigns structurally separate even when both are running for the same client group in the city.",
    metaDescription:
      "Flyeronic supports Jabalpur's manufacturing units and education institutes with SEO, Google Ads, and lead-generation websites — built around the city's industrial and student-focused buyer base.",
    highlights: [
      "SEO and Google Ads for industrial and B2B brands",
      "Digital marketing for coaching institutes and colleges",
      "Website development built for lead capture",
      "Local SEO to dominate Jabalpur search results",
    ],
    faqs: [
      {
        q: "Do you work with manufacturing companies in Jabalpur that mainly sell B2B?",
        a: "Yes — we build lead-capture-focused websites and can run targeted campaigns aimed at procurement contacts rather than general consumer audiences.",
      },
      {
        q: "How is marketing for a Jabalpur college different from a Jabalpur retail store?",
        a: "Education marketing is admission-cycle driven and local-search heavy, while retail marketing leans more on offers and social ads — we structure campaigns differently for each.",
      },
      {
        q: "Do you offer remote support for Jabalpur clients, or only in-person?",
        a: "Mostly remote over video calls, with in-person visits arranged for larger ongoing engagements when needed.",
      },
    ],
  },
  {
    slug: "gwalior",
    name: "Gwalior",
    tagline: "Manufacturing & Retail Digital Marketing",
    focus: "manufacturing and retail businesses in North MP",
    intro:
      "Gwalior is a key manufacturing and retail hub in North Madhya Pradesh. We help Gwalior businesses — from factories to retail showrooms — build a digital presence that drives real leads and sales, combining SEO, paid ads, and content marketing suited to the local market.",
    localDetail:
      "Retail and showroom businesses in Gwalior see sharp demand spikes around festivals and local shopping seasons, so offer-led ad campaigns timed to those windows tend to outperform always-on advertising. For manufacturing clients, we've found a straightforward, well-documented company website often does more for credibility with a new buyer than any single campaign.",
    metaDescription:
      "SEO, ads, and web development for Gwalior's manufacturing units and retail showrooms — Flyeronic builds digital marketing tailored to North Madhya Pradesh's industrial and shopping economy.",
    highlights: [
      "Performance marketing for retail and manufacturing brands",
      "SEO to rank for Gwalior-specific product and service searches",
      "Social media marketing for retail and showroom businesses",
      "Website development with fast, mobile-first design",
    ],
    faqs: [
      {
        q: "Can you run ads for a retail showroom in Gwalior around festival season?",
        a: "Yes — festival and local shopping-season timing is exactly where we've seen the best results for Gwalior retail clients, and we plan campaigns around that calendar.",
      },
      {
        q: "Do you help manufacturing businesses in Gwalior reach buyers outside their existing network?",
        a: "Yes, through a credibility-focused website and targeted outreach aimed at procurement decision-makers in your industry.",
      },
      {
        q: "Do your services cover towns near Gwalior, or just the city itself?",
        a: "Our local SEO and ad targeting can extend to nearby North MP towns depending on where your actual customers are coming from.",
      },
    ],
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    tagline: "Tourism & Local Business Marketing",
    focus: "tourism, hospitality, and local businesses",
    intro:
      "Ujjain's economy is deeply tied to tourism and pilgrimage traffic, alongside a strong base of local businesses. We help Ujjain-based hotels, businesses, and service providers reach both local customers and the steady stream of visitors through SEO, local search optimization, and social media marketing.",
    localDetail:
      "Demand for hotels, dharamshalas, and travel services in Ujjain moves with the religious calendar rather than a typical weekday-weekend pattern — search and booking activity spikes hard around specific festival dates. We plan campaigns around that calendar directly instead of running flat, always-on ad spend that misses the actual demand windows.",
    metaDescription:
      "Flyeronic markets Ujjain's hotels, dharamshalas, and local businesses with festival-calendar-timed ad campaigns, Google Business Profile management, and local SEO built around pilgrimage-driven demand.",
    highlights: [
      "Local SEO for tourism, hospitality, and pilgrimage-related businesses",
      "Google Business Profile optimization for map visibility",
      "Social media marketing to reach visitors and locals alike",
      "Website development for hotels and local service businesses",
    ],
    faqs: [
      {
        q: "Can you help our hotel in Ujjain get more bookings during festival season?",
        a: "Yes — we plan booking-focused campaigns specifically around Ujjain's major religious dates and festival periods, when demand spikes sharply.",
      },
      {
        q: "Do you work with businesses in Ujjain that aren't tourism-related?",
        a: "Yes, local SEO and social media management work the same way for any Ujjain business serving the resident population, separate from the tourism cycle.",
      },
      {
        q: "Is Google Business Profile optimization worth it for a dharamshala or small hotel?",
        a: "Yes — for pilgrimage-driven searches, an optimized profile with reviews and accurate details often influences booking decisions more directly than paid ads do.",
      },
    ],
  },
  {
    slug: "dewas",
    name: "Dewas",
    tagline: "Industrial B2B Lead Generation",
    focus: "industrial B2B lead generation and brand awareness",
    intro:
      "Dewas is home to a significant industrial and manufacturing base. We work with B2B businesses in Dewas to build lead generation systems — combining SEO, Google Ads, and marketing automation — that keep the sales pipeline full without relying on cold outreach alone.",
    localDetail:
      "For Dewas's industrial businesses, a clear, well-documented website usually does more for credibility with a new buyer than any single ad campaign — certifications, product categories, and past work need to be easy to find, not buried in a PDF catalog. We build that foundation first, then layer lead generation on top of it.",
    metaDescription:
      "B2B lead generation, SEO, and marketing automation for Dewas's industrial and manufacturing businesses — Flyeronic builds credibility-focused digital systems for MP's industrial belt.",
    highlights: [
      "B2B lead generation through Google Ads and SEO",
      "Marketing automation to nurture industrial leads",
      "Website development built for B2B credibility",
      "Content marketing to establish industry authority",
    ],
    faqs: [
      {
        q: "We manufacture in Dewas but rely mostly on word of mouth — can digital marketing actually help?",
        a: "Yes — a credible website plus targeted LinkedIn and email outreach typically opens doors to buyers outside your existing network, which word of mouth alone can't reach.",
      },
      {
        q: "Do you build the website first, or start with ads?",
        a: "Usually the website first if it isn't already solid — it's the foundation that makes any lead generation campaign convert better.",
      },
      {
        q: "How is B2B marketing in Dewas different from marketing a retail business?",
        a: "It's about reaching a small number of the right decision-makers rather than broad volume, so we lean on LinkedIn, email, and direct outreach over social ads.",
      },
    ],
  },
  {
    slug: "pithampur",
    name: "Pithampur",
    tagline: "Heavy Industry & B2B Marketing",
    focus: "heavy industry and B2B clients",
    intro:
      "Known as the 'Detroit of Asia,' Pithampur is one of the largest industrial hubs in Madhya Pradesh. We help heavy industry and B2B businesses in Pithampur build a professional digital presence — SEO, website development, and lead generation — designed for long B2B sales cycles.",
    localDetail:
      "Pithampur's buyer base is almost entirely OEMs, tier-1/tier-2 suppliers, and industrial distributors — businesses that search for suppliers by product category, capability, or certification rather than brand name. We structure SEO and site content around exactly those search patterns, and where relevant, extend it to export-focused content for manufacturers looking beyond domestic buyers.",
    metaDescription:
      "Flyeronic builds B2B-focused SEO, websites, and lead generation for Pithampur's auto and heavy industry manufacturers — targeting OEMs, suppliers, and distributors across Asia's industrial hub.",
    highlights: [
      "B2B-focused SEO and website development",
      "Lead generation for industrial and manufacturing clients",
      "Marketing automation for long B2B sales cycles",
      "Content and case studies that build industrial credibility",
    ],
    faqs: [
      {
        q: "Do you understand the specific buyer types common in Pithampur's auto and heavy industry sector?",
        a: "Yes — we tailor content and outreach to OEMs, tier-1/tier-2 suppliers, and distributors, the main buyer categories in Pithampur's industrial base.",
      },
      {
        q: "Can you help our Pithampur business get found by procurement teams searching online?",
        a: "Yes, through SEO and site structuring that surfaces your product categories, capabilities, and certifications clearly to buyers researching suppliers.",
      },
      {
        q: "Do you support export-focused marketing for Pithampur manufacturers?",
        a: "Yes — we can build content and web presence aimed at international buyers alongside your domestic marketing.",
      },
    ],
  },
  {
    slug: "ratlam",
    name: "Ratlam",
    tagline: "FMCG, Pharma & Trading Business Marketing",
    focus: "FMCG, pharma, and trading businesses",
    intro:
      "Ratlam is a well-established hub for FMCG, pharmaceutical, and trading businesses. We help Ratlam-based businesses in these sectors build digital marketing systems — SEO, performance ads, and website development — that support both distribution networks and direct customer acquisition.",
    localDetail:
      "Ratlam's trading and distribution economy runs heavily on existing relationships, so we've found digital marketing works best when it supports those relationships rather than tries to replace them — a findable, credible web presence that reassures retailers and sub-dealers you're an established partner, not a pure cold-acquisition play.",
    metaDescription:
      "SEO, web development, and digital marketing for Ratlam's FMCG, pharma, and trading businesses — Flyeronic builds credible online presence that supports existing distribution relationships.",
    highlights: [
      "SEO and Google Ads for FMCG and pharma businesses",
      "Website development for trading and distribution businesses",
      "Local SEO to capture Ratlam-based search traffic",
      "Content marketing for pharma and FMCG brand building",
    ],
    faqs: [
      {
        q: "We're an FMCG distributor in Ratlam — will digital marketing actually help our existing retailer network?",
        a: "Yes — a strong web presence tends to reassure retailers and sub-dealers you're an established, credible partner, which supports the relationships you already have rather than replacing them.",
      },
      {
        q: "Can you help a pharma trading business in Ratlam get found online?",
        a: "Yes, through SEO and directory-style visibility built around your specific product categories and certifications.",
      },
      {
        q: "We want to add new retailers to our network — can you help with that?",
        a: "Yes — we set up lead capture systems and outreach specifically aimed at expanding a retailer or distributor network.",
      },
    ],
  },
  {
    slug: "sagar",
    name: "Sagar",
    tagline: "Education & Retail Digital Marketing",
    focus: "education institutes and retail brands",
    intro:
      "Sagar, in Central Madhya Pradesh, has a strong base of educational institutions and retail businesses. We help Sagar-based colleges, coaching institutes, and retail brands grow through SEO, social media marketing, and lead generation tailored to the local market.",
    localDetail:
      "Most demand in a city the size of Sagar is genuinely local, so hyperlocal SEO — ranking for neighborhood-specific and Sagar-specific search terms — tends to bring more relevant leads than broader, state-wide keyword targeting. That's where we start with nearly every Sagar client before adding paid campaigns on top.",
    metaDescription:
      "Flyeronic helps Sagar's education institutes and retail brands grow through hyperlocal SEO, admission-season Google Ads, and Google Business Profile management built for Central MP's local market.",
    highlights: [
      "Digital marketing for coaching institutes and colleges",
      "SEO and Google Business Profile optimization for retail brands",
      "Social media marketing to build local brand presence",
      "Website development for admissions and lead capture",
    ],
    faqs: [
      {
        q: "Can you help our coaching institute in Sagar with admissions marketing?",
        a: "Yes — we run local search optimization and social campaigns timed to Sagar's admission seasons.",
      },
      {
        q: "Is hyperlocal SEO really worth it for a city the size of Sagar?",
        a: "Yes — for most Sagar businesses, ranking for tightly local search terms brings more relevant leads than broader keyword targeting would.",
      },
      {
        q: "Do you manage Google Business Profiles for retail stores in Sagar?",
        a: "Yes, including review management and local search optimization to help you show up for nearby shoppers.",
      },
    ],
  },
  {
    slug: "rewa",
    name: "Rewa",
    tagline: "Healthcare & Government Sector Marketing",
    focus: "healthcare and government sector marketing",
    intro:
      "Rewa, in East Madhya Pradesh, has a growing healthcare sector alongside government and public institutions. We help Rewa-based clinics, hospitals, and organizations build a trustworthy digital presence through SEO, website development, and local search optimization.",
    localDetail:
      "For healthcare providers in Rewa, patient reviews and a well-managed Google Business Profile tend to influence new-patient decisions more directly than paid advertising does — so that's usually where we focus first, before layering in broader SEO and lead generation for the practice.",
    metaDescription:
      "SEO, Google Business Profile management, and website development for Rewa's clinics, hospitals, and government-adjacent organizations — Flyeronic builds trust-focused digital presence for East MP.",
    highlights: [
      "SEO and local search optimization for clinics and hospitals",
      "Website development built for trust and credibility",
      "Google Business Profile optimization for healthcare providers",
      "Lead generation for healthcare and government-adjacent services",
    ],
    faqs: [
      {
        q: "Can you help our clinic or hospital in Rewa attract more patients?",
        a: "Yes — we focus on Google Business Profile optimization, review management, and local SEO, which tend to influence patient decisions more directly than ads.",
      },
      {
        q: "Do you work with businesses that supply to government institutions in Rewa?",
        a: "Yes, we build credibility-focused websites and documentation suited to that kind of buyer relationship.",
      },
      {
        q: "How long does local SEO take to show results for a Rewa-based business?",
        a: "Typically 3 to 6 months for meaningful movement on local search terms, with Google Business Profile improvements often showing sooner.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
