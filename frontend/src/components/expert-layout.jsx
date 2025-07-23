import { SiteHeader } from "./site-header";
import ExpertContent from "./career-toolkit/expert-content";
import { SiteFooter } from "./site-footer";
import { PricingSection } from "./pricing-section";
import { TestimonialsSection } from "./testimonials-section";
import { FAQSection } from "./faq-section";
import { ConsultationSection } from "./consultation-section";

export default function ExpertLayout() {
  return (
    <div>
      <SiteHeader setSelectedMenu={"Projects"} />
      <main className="mt-20 mx-8 lg:mx-20">
        <ExpertContent pageView={true}/>
        </main>
        <PricingSection />
        <TestimonialsSection />
        <FAQSection FAQType={"expert"} />
        <ConsultationSection />
    
      <SiteFooter />
    </div>
  );
}
