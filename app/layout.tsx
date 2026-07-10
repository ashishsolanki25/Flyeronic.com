import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { ScrollAnimation } from "@/components/scroll-animation";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flyeronic.com"),
  title: "Digital Marketing Agency in Indore | Flyeronic - Grow Your Business",
  description:
    "Leading digital marketing agency in Indore offering SEO, social media marketing, website design & lead generation services for local businesses. Get a free strategy call today.",
  keywords: [
    "digital marketing agency in Indore",
    "SEO services Indore",
    "social media marketing Indore",
    "website designing company Indore",
    "best digital marketing company in Indore, MP",
    "digital marketing agency",
    "marketing automation",
    "performance marketing",
    "lead generation",
    "branding agency",
    "sales funnels",
    "Google Ads agency",
    "Flyeronic",
  ],
  authors: [{ name: "Flyeronic", url: "https://flyeronic.com" }],
  creator: "Flyeronic",
  alternates: {
    canonical: "https://flyeronic.com",
  },
  openGraph: {
    title: "Digital Marketing Agency in Indore | Flyeronic - Grow Your Business",
    description:
      "Leading digital marketing agency in Indore offering SEO, social media marketing, website design & lead generation services for local businesses. Get a free strategy call today.",
    type: "website",
    url: "https://flyeronic.com",
    siteName: "Flyeronic",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Indore | Flyeronic - Grow Your Business",
    description:
      "Leading digital marketing agency in Indore offering SEO, social media marketing, website design & lead generation services for local businesses. Get a free strategy call today.",
    creator: "@flyeronic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Flyeronic",
  "image": "https://flyeronic.com/flyeronic-logo.svg",
  "url": "https://flyeronic.com",
  "telephone": "+919109176922",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "GRM Business Park, Super Corridor",
    "addressLocality": "Indore",
    "addressRegion": "MP",
    "postalCode": "452005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.7533,
    "longitude": 75.8038
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Indore" },
    { "@type": "AdministrativeArea", "name": "Ujjain" },
    { "@type": "AdministrativeArea", "name": "Dewas" },
    { "@type": "AdministrativeArea", "name": "Super Corridor" },
    { "@type": "AdministrativeArea", "name": "Vijay Nagar" },
    { "@type": "AdministrativeArea", "name": "AB Road" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ScrollAnimation />
        <Providers>{children}</Providers>
        <WhatsAppButton />
      </body>
    </html>
  );
}
