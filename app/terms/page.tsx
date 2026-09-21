import { LegalPage, LegalSection } from "@/components/sections/legal-page";

export const metadata = {
  title: "Terms of Service | Flyeronic",
  description: "The terms that apply when you use flyeronic.com and engage Flyeronic for digital marketing services.",
  alternates: { canonical: "https://www.flyeronic.com/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="21 September 2026">
      <LegalSection heading="Using this website">
        <p>By using flyeronic.com you agree to these terms. Content here is for general information about our services and may change without notice.</p>
      </LegalSection>
      <LegalSection heading="Our services">
        <p>Paid engagements are governed by a written proposal or agreement that sets out scope, fees, payment schedule, and timelines. If it conflicts with these terms, the signed agreement applies.</p>
      </LegalSection>
      <LegalSection heading="No guarantees of results">
        <p>Search rankings, ad performance, leads, and sales depend on factors outside our control, including competition, platform algorithms, budget, and your product and pricing. We work to improve outcomes but do not guarantee specific rankings or results.</p>
      </LegalSection>
      <LegalSection heading="Intellectual property">
        <p>Our website, brand, and materials belong to Flyeronic. Deliverables created for you transfer as stated in your agreement, usually after full payment. Third-party assets (fonts, stock media, platforms) remain subject to their own licences.</p>
      </LegalSection>
      <LegalSection heading="Liability">
        <p>To the extent permitted by law, Flyeronic is not liable for indirect or consequential losses arising from use of this website or our services. Our total liability is limited to the fees paid for the relevant service.</p>
      </LegalSection>
      <LegalSection heading="Governing law">
        <p>These terms are governed by the laws of India, and the courts at Indore, Madhya Pradesh have jurisdiction. Contact: flyeronic.info@gmail.com.</p>
      </LegalSection>
    </LegalPage>
  );
}
