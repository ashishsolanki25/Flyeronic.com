import type { Metadata } from "next";

const BASE = "https://www.flyeronic.com";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${BASE}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "Flyeronic", locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description, creator: "@flyeronic" },
  };
}
