import Link from "next/link";
import { LandingPageTemplate } from "@/components/sections/landing-page-template";
import { AutomationIllustration } from "@/components/ui/service-illustrations";
import { pageMeta } from "@/lib/page-meta";
import { Target, LayoutTemplate, MessageCircle, Filter, BarChart3, Database } from "lucide-react";

export const metadata = pageMeta({
  title: "Lead Generation Agency in Indore | Flyeronic",
  description:
    "Lead generation for Indore businesses: targeted ads, landing pages, WhatsApp follow-up, and lead tracking so you can see which leads become customers.",
  path: "/services/lead-generation",
});

export default function LeadGenerationPage() {
  return (
    <LandingPageTemplate
      badge="Lead Generation"
      h1Top="Lead Generation"
      h1Highlight="for Indore Businesses"
      intro="We build the full path from ad to enquiry to follow-up, so you can see which leads are real and where your budget is working."
      cta="Get a Free Lead Generation Audit"
      illustration={<AutomationIllustration />}
      featuresTitle="What Lead Generation Includes"
      featuresIntro={
        <>
          Lead generation combines <Link href="/services/google-ads" className="text-primary underline">Google Ads</Link>,{" "}
          <Link href="/services/meta-ads" className="text-primary underline">Meta Ads</Link>, and{" "}
          <Link href="/services/marketing-automation" className="text-primary underline">marketing automation</Link> into one funnel.
        </>
      }
      features={[
        { icon: <Target size={22} />, title: "Targeted Ad Campaigns", description: "Search and social ads aimed at people already looking for what you offer." },
        { icon: <LayoutTemplate size={22} />, title: "Landing Pages", description: "Fast pages with one clear offer and one action, built for mobile visitors." },
        { icon: <MessageCircle size={22} />, title: "WhatsApp Follow-up", description: "Quick replies and follow-up sequences so new enquiries don't go cold." },
        { icon: <Filter size={22} />, title: "Lead Qualification", description: "Form questions and follow-up that separate serious buyers from casual clicks." },
        { icon: <Database size={22} />, title: "Lead Tracking", description: "Every enquiry logged with its source, so you know which campaign brought it." },
        { icon: <BarChart3 size={22} />, title: "Cost Per Lead Reporting", description: "Monthly reports on cost per lead, qualified leads, and what to scale or stop." },
      ]}
      stepsTitle="How It Works"
      steps={[
        { title: "Define the customer", text: "Who buys, what they search, and what a good lead is worth to you." },
        { title: "Build the funnel", text: "Landing page, tracking, and follow-up ready before ads go live." },
        { title: "Launch and test", text: "Small budgets across audiences and creatives to find what works." },
        { title: "Scale what converts", text: "Budget moves to the campaigns that produce qualified enquiries." },
      ]}
      faqTitle="Lead Generation FAQ"
      faqs={[
        { q: "Can you guarantee a number of leads?", a: "No. Lead volume depends on your offer, price, location, and budget. We set up tracking so you can see what each rupee produces." },
        { q: "How soon can leads start coming in?", a: "Paid campaigns can start producing enquiries within a couple of weeks after launch. SEO-based lead generation takes longer, usually 3–6 months." },
        { q: "Do I pay ad budget separately?", a: "Yes. Ad spend goes directly to Google or Meta from your account, separate from our management fee." },
        { q: "Which industries do you work with?", a: "Real estate, clinics, restaurants, schools, and local service businesses are our main focus. See our real estate and clinic pages for details." },
      ]}
      schemaName="Lead Generation"
      serviceType="Lead generation"
      path="/services/lead-generation"
      breadcrumbName="Lead Generation"
    />
  );
}
