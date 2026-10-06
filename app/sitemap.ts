import { MetadataRoute } from "next";

const BASE = "https://www.flyeronic.com";

// Each date reflects when that page's content was last actually changed
// (tracked from the source repo), not a single blanket date.
const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly"; lastModified: string }[] = [
  { path: "", priority: 1.0, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/locations/indore", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/services/seo", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/services/local-seo", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/services/google-ads", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/services/meta-ads", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/services/website-development", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/services/marketing-automation", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/services/content-creation", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/services/brand-films", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/services/social-media-marketing", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/services/lead-generation", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/industries/real-estate", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/industries/clinics", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly", lastModified: "2026-07-27" },
  { path: "/blog/digital-marketing-cost-indore", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/blog/choose-digital-marketing-agency-indore", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-07-27" },
  { path: "/blog/seo-real-estate-madhya-pradesh", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-07-27" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
