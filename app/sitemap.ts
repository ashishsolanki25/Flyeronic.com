import { MetadataRoute } from "next";

const BASE = "https://www.flyeronic.com";
const LAST = new Date("2026-09-21");

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1.0, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/locations/indore", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/seo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/local-seo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/google-ads", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/meta-ads", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/website-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/marketing-automation", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/content-creation", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/brand-films", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/social-media-marketing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/lead-generation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/real-estate", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industries/clinics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog/digital-marketing-cost-indore", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/choose-digital-marketing-agency-indore", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog/seo-real-estate-madhya-pradesh", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: LAST,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
