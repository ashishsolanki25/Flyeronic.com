import { MetadataRoute } from "next";
import { cities } from "@/lib/city-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://flyeronic.com/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: "https://flyeronic.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://flyeronic.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://flyeronic.com/services/seo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://flyeronic.com/services/google-ads",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://flyeronic.com/services/meta-ads",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://flyeronic.com/services/website-development",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://flyeronic.com/services/marketing-automation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://flyeronic.com/services/content-creation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://flyeronic.com/services/brand-films",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://flyeronic.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://flyeronic.com/blog/digital-marketing-cost-indore",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://flyeronic.com/blog/choose-digital-marketing-agency-indore",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://flyeronic.com/blog/seo-real-estate-madhya-pradesh",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...cityEntries,
  ];
}
