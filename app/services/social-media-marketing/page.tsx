import Link from "next/link";
import { LandingPageTemplate } from "@/components/sections/landing-page-template";
import { ContentCreationIllustration } from "@/components/ui/service-illustrations";
import { pageMeta } from "@/lib/page-meta";
import { CalendarDays, Clapperboard, Users, MessageSquare, BarChart3, Palette } from "lucide-react";

export const metadata = pageMeta({
  title: "Social Media Marketing Agency in Indore | Flyeronic",
  description:
    "Social media marketing in Indore: content planning, reels, community management, and reporting for Instagram, Facebook, and LinkedIn, built around leads, not just likes.",
  path: "/services/social-media-marketing",
});

export default function SocialMediaMarketingPage() {
  return (
    <LandingPageTemplate
      badge="Social Media Marketing"
      h1Top="Social Media Marketing"
      h1Highlight="for Indore Businesses"
      intro="We plan, create, and manage your Instagram, Facebook, and LinkedIn presence so your content builds trust and brings real enquiries, not just followers."
      cta="Get a Free Social Media Audit"
      illustration={<ContentCreationIllustration />}
      featuresTitle="What Social Media Marketing Includes"
      featuresIntro={
        <>
          Organic content works best with paid support. We connect it with our{" "}
          <Link href="/services/meta-ads" className="text-primary underline">Meta Ads</Link> and{" "}
          <Link href="/services/content-creation" className="text-primary underline">content creation</Link> services.
        </>
      }
      features={[
        { icon: <CalendarDays size={22} />, title: "Content Calendar", description: "A monthly plan of posts, reels, and stories tied to your offers and audience." },
        { icon: <Clapperboard size={22} />, title: "Reels & Short Video", description: "Short-form video scripting, shooting, and editing for Instagram and Facebook." },
        { icon: <Palette size={22} />, title: "Designs & Creatives", description: "Consistent, on-brand graphics and carousels that look like one business." },
        { icon: <MessageSquare size={22} />, title: "Community Management", description: "Replies to comments and DMs so enquiries don't go unanswered." },
        { icon: <Users size={22} />, title: "Profile Optimization", description: "Bio, highlights, links, and contact buttons set up to turn visitors into enquiries." },
        { icon: <BarChart3 size={22} />, title: "Monthly Reporting", description: "Reach, engagement, profile visits, and enquiries, with what to change next month." },
      ]}
      stepsTitle="How It Works"
      steps={[
        { title: "Audit", text: "We review your profiles, content, and competitors in your area." },
        { title: "Plan", text: "Content pillars, posting schedule, and goals for the month." },
        { title: "Create & post", text: "We make and publish the content, with your approval where you want it." },
        { title: "Report & refine", text: "Monthly numbers show what worked, and the plan is adjusted." },
      ]}
      faqTitle="Social Media Marketing FAQ"
      faqs={[
        { q: "Which platforms do you manage?", a: "Mainly Instagram, Facebook, and LinkedIn. We recommend platforms based on where your customers actually spend time." },
        { q: "Will social media bring me leads?", a: "It can, especially with a clear offer, good creatives, and paid support. We don't promise a specific number of leads, and we track enquiries so you can see what works." },
        { q: "Do you handle photoshoots and video?", a: "Yes. Our content creation and brand films services cover shoots, reels, and editing." },
        { q: "How often will you post?", a: "It depends on your goals and package. We agree a posting schedule before we start." },
      ]}
      schemaName="Social Media Marketing"
      serviceType="Social media marketing"
      path="/services/social-media-marketing"
      breadcrumbName="Social Media Marketing"
    />
  );
}
