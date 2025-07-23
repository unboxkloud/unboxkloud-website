import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ConsultationSection } from "./consultation-section";
import { cn } from "../lib/utils";
import useWindowSize from "../customHooks/useWindowSize";

export default function TermAndCondition() {
  const { width } = useWindowSize();
  return (
    <div>
      <SiteHeader setSelectedMenu={"Projects"} />
      <main className="mt-20 mx-8 lg:mx-20">
        <div className="pt-8 transition-all duration-[2000ms] ease-in-out">
          <div className="text-center font-light text-[48px] leading-[60px] mb-12">
            <h4 className="text-[#2A254D]">
              Terms & <span className="text-[#ff6600]">Conditions</span>
            </h4>
          </div>

          <div
            className={cn(
              "border-2 border-[#ff6600] mx-20 py-10 mb-14 rounded-[16px] bg-[linear-gradient(180deg,#FCE7D0_0%,#FFF_63.5%)]",
              width < 1200 && "mx-2"
            )}
          >
            <div className="max-w-4xl mx-auto p-6 text-gray-800">
              <h1 className="text-3xl font-bold text-[#2A254D] mb-4">
                UnboxKloud - Terms &{" "}
                <span className="text-[#ff6600]">Conditions</span>
              </h1>
              <p className="text-gray-600 mb-6">
                Last Updated:{" "}
                <span className="font-semibold">[Insert Date]</span>
              </p>

              {/* Introduction */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Introduction &{" "}
                  <span className="text-[#ff6600]">Agreement</span>
                </h4>
                <p>
                  Welcome to <span className="font-bold">UnboxKloud</span>. By
                  accessing and using our website and services, you agree to be
                  bound by these Terms and Conditions. If you do not agree,
                  please do not use our platform.
                </p>
              </section>

              {/* User Eligibility */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  User <span className="text-[#ff6600]">Eligibility</span>
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    You must be at least{" "}
                    <span className="font-bold">18 years old</span> or have
                    parental permission to use our services.
                  </li>
                  <li>
                    By registering, you confirm that the information provided is
                    accurate and complete.
                  </li>
                </ul>
              </section>

              {/* Course Access & Intellectual Property */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Course Access &{" "}
                  <span className="text-[#ff6600]">Intellectual Property</span>
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    All courses, materials, and content on UnboxKloud are
                    protected by copyright laws.
                  </li>
                  <li>
                    You are granted a{" "}
                    <span className="font-bold">
                      non-transferable, limited license
                    </span>{" "}
                    to access the purchased content.
                  </li>
                  <li>
                    Reselling, sharing, or distributing course content is{" "}
                    <span className="font-bold text-red-600">
                      strictly prohibited
                    </span>
                    .
                  </li>
                </ul>
              </section>

              {/* Payments & Refunds */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Payments & <span className="text-[#ff6600]">Refunds</span>
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    All payments are processed securely via third-party payment
                    gateways.
                  </li>
                  <li>
                    Refunds are available within{" "}
                    <span className="font-bold">7 days</span> of purchase if
                    less than <span className="font-bold">20%</span> of the
                    course is completed.
                  </li>
                  <li>
                    No refunds are provided for promotional or discounted
                    courses.
                  </li>
                </ul>
              </section>

              {/* User Conduct */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  User <span className="text-[#ff6600]">Conduct</span>
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Respectful and ethical behavior is expected in all community
                    interactions.
                  </li>
                  <li>
                    Spamming, harassment, or hate speech will result in account
                    suspension.
                  </li>
                  <li>Violation of these terms may lead to legal action.</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Limitation of{" "}
                  <span className="text-[#ff6600]">Liability</span>
                </h4>
                <p>
                  UnboxKloud is not liable for any direct, indirect, or
                  incidental damages resulting from the use of our services. Our
                  courses are for educational purposes, and we do not guarantee
                  specific career outcomes.
                </p>
              </section>

              {/* Modifications to Terms */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Changes to <span className="text-[#ff6600]">Terms</span>
                </h4>
                <p>
                  UnboxKloud reserves the right to update these Terms and
                  Conditions at any time. We will notify users of significant
                  changes. Continued use of the platform after modifications
                  constitutes acceptance of the new terms.
                </p>
              </section>

              {/* Contact & Support */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Contact & <span className="text-[#ff6600]">Support</span>
                </h4>
                <p>
                  For any questions regarding our Terms and Conditions, contact
                  us:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    📧 <span className="font-semibold">Email:</span>{" "}
                    <a
                      href="mailto:support@unboxkloud.com"
                      className="text-blue-500 underline"
                    >
                      support@unboxkloud.com
                    </a>
                  </li>
                  <li>
                    🌐 <span className="font-semibold">Website:</span>{" "}
                    <a href="#" className="text-blue-500 underline">
                      www.unboxkloud.com
                    </a>
                  </li>
                </ul>
              </section>

              <p className="mt-6 text-gray-600 text-sm">
                Thank you for choosing{" "}
                <span className="font-bold">UnboxKloud</span>. Happy Learning!
                🚀
              </p>
            </div>
          </div>
        </div>
      </main>
      <ConsultationSection />
      <SiteFooter />
    </div>
  );
}
