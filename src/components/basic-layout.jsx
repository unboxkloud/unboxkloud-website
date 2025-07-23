import { SiteHeader } from "./site-header";
import BasicContent from "./career-toolkit/basic-content";
import { SiteFooter } from "./site-footer";
import { PricingSection } from "./pricing-section";
import { TestimonialsSection } from "./testimonials-section";
import { FAQSection } from "./faq-section";
import { ConsultationSection } from "./consultation-section";

export default function BasicLayout() {
  return (
    <div>
      <SiteHeader setSelectedMenu={"Projects"} />
      <main className="mt-20 mx-8 lg:mx-20">
        <BasicContent pageView={true} />
      </main>
      <PricingSection />
      <TestimonialsSection />
      <FAQSection FAQType={"basic"} />
      <ConsultationSection />
      <SiteFooter />
    </div>
  );
}
