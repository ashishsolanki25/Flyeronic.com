export interface CityData {
  slug: string;
  name: string;
  tagline: string;
  focus: string;
  intro: string;
  highlights: string[];
}

export const cities: CityData[] = [
  {
    slug: "bhopal",
    name: "Bhopal",
    tagline: "Government, Corporate & Education Sector Marketing",
    focus: "government, corporate, and education sector clients",
    intro:
      "As the capital of Madhya Pradesh, Bhopal is home to a mix of government bodies, corporate offices, and educational institutions — each with very different marketing needs. We help Bhopal-based organizations build credible digital presences, from SEO and website development to lead generation campaigns tailored to institutional and corporate audiences.",
    highlights: [
      "Website development for institutions and corporate offices",
      "SEO targeting Bhopal-specific local search terms",
      "Lead generation for education and B2B corporate services",
      "Google Business Profile optimization for local visibility",
    ],
  },
  {
    slug: "jabalpur",
    name: "Jabalpur",
    tagline: "Industrial & Education Brand Growth",
    focus: "industrial and education sector brands",
    intro:
      "Jabalpur's economy runs on a strong industrial base alongside a growing education sector. We work with manufacturing businesses and educational institutes in Jabalpur to build digital marketing systems — SEO, performance ads, and content — that generate consistent, qualified leads.",
    highlights: [
      "SEO and Google Ads for industrial and B2B brands",
      "Digital marketing for coaching institutes and colleges",
      "Website development built for lead capture",
      "Local SEO to dominate Jabalpur search results",
    ],
  },
  {
    slug: "gwalior",
    name: "Gwalior",
    tagline: "Manufacturing & Retail Digital Marketing",
    focus: "manufacturing and retail businesses in North MP",
    intro:
      "Gwalior is a key manufacturing and retail hub in North Madhya Pradesh. We help Gwalior businesses — from factories to retail showrooms — build a digital presence that drives real leads and sales, combining SEO, paid ads, and content marketing suited to the local market.",
    highlights: [
      "Performance marketing for retail and manufacturing brands",
      "SEO to rank for Gwalior-specific product and service searches",
      "Social media marketing for retail and showroom businesses",
      "Website development with fast, mobile-first design",
    ],
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    tagline: "Tourism & Local Business Marketing",
    focus: "tourism, hospitality, and local businesses",
    intro:
      "Ujjain's economy is deeply tied to tourism and pilgrimage traffic, alongside a strong base of local businesses. We help Ujjain-based hotels, businesses, and service providers reach both local customers and the steady stream of visitors through SEO, local search optimization, and social media marketing.",
    highlights: [
      "Local SEO for tourism, hospitality, and pilgrimage-related businesses",
      "Google Business Profile optimization for map visibility",
      "Social media marketing to reach visitors and locals alike",
      "Website development for hotels and local service businesses",
    ],
  },
  {
    slug: "dewas",
    name: "Dewas",
    tagline: "Industrial B2B Lead Generation",
    focus: "industrial B2B lead generation and brand awareness",
    intro:
      "Dewas is home to a significant industrial and manufacturing base. We work with B2B businesses in Dewas to build lead generation systems — combining SEO, Google Ads, and marketing automation — that keep the sales pipeline full without relying on cold outreach alone.",
    highlights: [
      "B2B lead generation through Google Ads and SEO",
      "Marketing automation to nurture industrial leads",
      "Website development built for B2B credibility",
      "Content marketing to establish industry authority",
    ],
  },
  {
    slug: "pithampur",
    name: "Pithampur",
    tagline: "Heavy Industry & B2B Marketing",
    focus: "heavy industry and B2B clients",
    intro:
      "Known as the 'Detroit of Asia,' Pithampur is one of the largest industrial hubs in Madhya Pradesh. We help heavy industry and B2B businesses in Pithampur build a professional digital presence — SEO, website development, and lead generation — designed for long B2B sales cycles.",
    highlights: [
      "B2B-focused SEO and website development",
      "Lead generation for industrial and manufacturing clients",
      "Marketing automation for long B2B sales cycles",
      "Content and case studies that build industrial credibility",
    ],
  },
  {
    slug: "ratlam",
    name: "Ratlam",
    tagline: "FMCG, Pharma & Trading Business Marketing",
    focus: "FMCG, pharma, and trading businesses",
    intro:
      "Ratlam is a well-established hub for FMCG, pharmaceutical, and trading businesses. We help Ratlam-based businesses in these sectors build digital marketing systems — SEO, performance ads, and website development — that support both distribution networks and direct customer acquisition.",
    highlights: [
      "SEO and Google Ads for FMCG and pharma businesses",
      "Website development for trading and distribution businesses",
      "Local SEO to capture Ratlam-based search traffic",
      "Content marketing for pharma and FMCG brand building",
    ],
  },
  {
    slug: "sagar",
    name: "Sagar",
    tagline: "Education & Retail Digital Marketing",
    focus: "education institutes and retail brands",
    intro:
      "Sagar, in Central Madhya Pradesh, has a strong base of educational institutions and retail businesses. We help Sagar-based colleges, coaching institutes, and retail brands grow through SEO, social media marketing, and lead generation tailored to the local market.",
    highlights: [
      "Digital marketing for coaching institutes and colleges",
      "SEO and Google Business Profile optimization for retail brands",
      "Social media marketing to build local brand presence",
      "Website development for admissions and lead capture",
    ],
  },
  {
    slug: "rewa",
    name: "Rewa",
    tagline: "Healthcare & Government Sector Marketing",
    focus: "healthcare and government sector marketing",
    intro:
      "Rewa, in East Madhya Pradesh, has a growing healthcare sector alongside government and public institutions. We help Rewa-based clinics, hospitals, and organizations build a trustworthy digital presence through SEO, website development, and local search optimization.",
    highlights: [
      "SEO and local search optimization for clinics and hospitals",
      "Website development built for trust and credibility",
      "Google Business Profile optimization for healthcare providers",
      "Lead generation for healthcare and government-adjacent services",
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
