import { SiteHeader } from "./site-header";
import { HeroSection } from "./hero-section";
import { CompaniesSection } from "./companies-section";
import { HowItWorks } from "./how-it-works";
import { AchievementsSection } from "./achievements-section";
import { PricingSection } from "./pricing-section";
import { TestimonialsSection } from "./testimonials-section";
import CareerToolkit from "./career-toolkit/index";
import { ConsultationSection } from "./consultation-section";
import  MoveToTop  from "./move-top-top";
import { ExploreProjectSection } from "./explore-projects";
import { SiteFooter } from "./site-footer";
import { FAQSection } from "./faq-section";
import { Helmet } from "react-helmet";
import { useState } from "react";

export default function HomeLayout() {
  const [selectedMenu, setSelectedMenu] = useState("Projects");

  return (
    <div className="bg-white">
      <Helmet>
        <title>UnboxKloud</title>
        <meta
          name="description"
          content="This is the home page of my awesome website."
        />
        <meta property="og:title" content="UnboxKloud" />
        <meta
          property="og:description"
          content="Explore the best content on our home page!"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <SiteHeader setSelectedMenu={setSelectedMenu} />
      <main className="mt-20">
        <HeroSection />
        <CompaniesSection />
        <HowItWorks />
        <AchievementsSection />
        <CareerToolkit selectedMenu={selectedMenu} />
        <ExploreProjectSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection FAQType={"project"} />
        <ConsultationSection />
        {/* <MoveToTop /> */}
      </main>
      <SiteFooter />
    </div>
  );
}
