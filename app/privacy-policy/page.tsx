import { LegalPage, LegalSection } from "@/components/sections/legal-page";

export const metadata = {
  title: "Privacy Policy | Flyeronic",
  description: "How Flyeronic collects, uses, and protects the information you share through flyeronic.com.",
  alternates: { canonical: "https://www.flyeronic.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="21 September 2026">
      <p className="text-sm">
        This policy explains what information Flyeronic (&quot;we&quot;, &quot;us&quot;) collects through flyeronic.com,
        why we collect it, and the choices you have.
      </p>
      <LegalSection heading="Information we collect">
        <p>Information you give us: your name, email, phone number, business details, and message when you use our contact form, WhatsApp, email, or phone.</p>
        <p>Information collected automatically: basic technical data such as browser type, device, pages visited, and approximate location, through cookies and similar technologies (see our Cookie Policy).</p>
      </LegalSection>
      <LegalSection heading="How we use it">
        <p>To respond to your enquiry, prepare proposals and audits, deliver services you request, improve our website, and comply with legal obligations. We do not sell your personal information.</p>
      </LegalSection>
      <LegalSection heading="Who we share it with">
        <p>Only with service providers that help us run the website and handle enquiries (for example form-processing, email, hosting, and analytics tools), and when required by law. These providers may process data on our behalf under their own terms.</p>
      </LegalSection>
      <LegalSection heading="Retention and security">
        <p>We keep enquiry information only as long as needed for the purposes above, and use reasonable technical and organisational safeguards. No online transmission is completely secure, so we cannot guarantee absolute security.</p>
      </LegalSection>
      <LegalSection heading="Your choices">
        <p>You can ask us to access, correct, or delete the personal information you have shared, or withdraw consent for marketing messages, by emailing team@flyeronic.com or flyeronic.info@gmail.com. We handle personal data in line with applicable Indian law.</p>
      </LegalSection>
      <LegalSection heading="Changes and contact">
        <p>We may update this policy and will change the date above when we do. Questions: team@flyeronic.com, flyeronic.info@gmail.com, +91 9109176922, GRM Business Park, Super Corridor, Indore, MP.</p>
      </LegalSection>
    </LegalPage>
  );
}
