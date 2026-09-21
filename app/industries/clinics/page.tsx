import Link from "next/link";
import { LandingPageTemplate } from "@/components/sections/landing-page-template";
import { SEOIllustration } from "@/components/ui/service-illustrations";
import { pageMeta } from "@/lib/page-meta";
import { MapPin, Search, LayoutTemplate, CalendarCheck, Star, Video } from "lucide-react";

export const metadata = pageMeta({
  title: "Digital Marketing for Doctors & Clinics in Indore | Flyeronic",
  description:
    "Digital marketing for doctors and clinics in Indore: Google Maps and local SEO, patient-enquiry ads, appointment pages, and review support, within medical advertising norms.",
  path: "/industries/clinics",
});

export default function ClinicsPage() {
  return (
    <LandingPageTemplate
      badge="Clinics & Doctors"
      h1Top="Digital Marketing for Clinics"
      h1Highlight="and Doctors in Indore"
      intro="Help patients in your area find your clinic on Google Maps, understand your services, and book an appointment, with communication that stays professional and within medical advertising rules."
      cta="Get a Free Clinic Marketing Audit"
      illustration={<SEOIllustration />}
      featuresTitle="What We Do for Clinics"
      featuresIntro={
        <>
          Most patients start on Google Maps, so we begin with{" "}
          <Link href="/services/local-seo" className="text-primary underline">local SEO</Link> and add{" "}
          <Link href="/services/google-ads" className="text-primary underline">Google Ads</Link> and{" "}
          <Link href="/services/meta-ads" className="text-primary underline">Meta Ads</Link> where they help.
        </>
      }
      features={[
        { icon: <MapPin size={22} />, title: "Google Business Profile", description: "Complete, accurate profile with services, hours, photos, and appointment links." },
        { icon: <Search size={22} />, title: "Local Search Visibility", description: "Pages and content for searches like doctors and clinics in your area." },
        { icon: <LayoutTemplate size={22} />, title: "Clinic Website & Service Pages", description: "Clear pages for each treatment, doctor profile, and location, fast on mobile." },
        { icon: <CalendarCheck size={22} />, title: "Appointment Enquiry Flow", description: "Call, WhatsApp, and booking buttons with quick follow-up so enquiries turn into visits." },
        { icon: <Star size={22} />, title: "Reviews & Reputation", description: "A simple, ethical process to ask patients for feedback and reply professionally." },
        { icon: <Video size={22} />, title: "Educational Content", description: "Short videos and posts that explain conditions and services in plain language." },
      ]}
      stepsTitle="How We Work"
      steps={[
        { title: "Audit your presence", text: "Google Maps listing, website, and how nearby clinics show up." },
        { title: "Fix the basics", text: "Profile, contact details, and service pages made accurate and consistent." },
        { title: "Bring in enquiries", text: "Local search, ads, and content aimed at patients in your area." },
        { title: "Report on enquiries", text: "Calls, direction requests, and appointment enquiries reviewed monthly." },
      ]}
      faqTitle="Clinic Marketing FAQ"
      faqs={[
        { q: "Are there rules for medical advertising in India?", a: "Yes. Healthcare advertising is regulated, so we avoid misleading claims, guaranteed outcomes, and patient testimonials that break professional and legal norms. Please confirm requirements with your medical council or legal advisor." },
        { q: "Do you use patient photos or case results?", a: "Only where the law and your professional body allow it, and with written consent. We prefer educational content over before-and-after claims." },
        { q: "How do patients find my clinic?", a: "Mostly through Google Maps and local searches. That's why the Google Business Profile, reviews, and local pages come first." },
        { q: "Can you promise more appointments?", a: "No. Results depend on your specialty, location, competition, and how enquiries are handled. We track calls and enquiries so you can see what's working." },
      ]}
      schemaName="Digital Marketing for Clinics and Doctors"
      serviceType="Healthcare digital marketing"
      path="/industries/clinics"
      breadcrumbName="Clinics & Doctors"
    />
  );
}
