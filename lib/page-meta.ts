import type { Metadata } from "next";

const BASE = "https://www.flyeronic.com";

export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  /** Optional page-specific link-preview image (1200x630). Defaults to the site-wide image. */
  image?: { url: string; alt: string };
}): Metadata {
  const url = `${BASE}${path}`;
  const og = image ?? { url: "/og-image.png", alt: "Flyeronic — Digital Marketing Agency in Indore" };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Flyeronic",
      locale: "en_IN",
      images: [{ url: og.url, width: 1200, height: 630, alt: og.alt }],
    },
    twitter: { card: "summary_large_image", title, description, creator: "@flyeronic", images: [og.url] },
  };
}
