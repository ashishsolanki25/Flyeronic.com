import { LegalPage, LegalSection } from "@/components/sections/legal-page";

export const metadata = {
  title: "Cookie Policy | Flyeronic",
  description: "How flyeronic.com uses cookies and similar technologies, and how you can control them.",
  alternates: { canonical: "https://www.flyeronic.com/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="21 September 2026">
      <LegalSection heading="What are cookies">
        <p>Cookies are small text files stored on your device that help a website work and understand how it is used.</p>
      </LegalSection>
      <LegalSection heading="How we use them">
        <p>Essential cookies keep the site working (for example, remembering form state). Analytics and performance tools, where enabled, help us understand which pages are useful. Embedded third-party content, such as maps, fonts, and social links, may set their own cookies.</p>
      </LegalSection>
      <LegalSection heading="Your choices">
        <p>You can block or delete cookies in your browser settings. Blocking some cookies may affect how parts of the site work.</p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>Questions about this policy: team@flyeronic.com.</p>
      </LegalSection>
    </LegalPage>
  );
}
