import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ConsultationSection } from "./consultation-section";
import { cn } from "../lib/utils";
import useWindowSize from "../customHooks/useWindowSize";

export default function OurPolicy() {
  const { width } = useWindowSize();
  return (
    <div>
      <SiteHeader setSelectedMenu={"Projects"} />
      <main className="mt-20 mx-8 lg:mx-20">
        <div className="pt-8 transition-all duration-[2000ms] ease-in-out">
          <div className="text-center font-light text-[48px] leading-[60px] mb-12">
            <h4 className="text-[#2A254D]">
              Our <span className="text-[#ff6600]">Policy</span>
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
                UnboxKloud -{" "}
                <span className="text-[#ff6600]">Privacy Policy</span>
              </h1>
              <p className="text-gray-600 mb-6">
                Last Updated: <span className="font-semibold">[01/03/25]</span>
              </p>

              {/* General Terms */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  General <span className="text-[#ff6600]">Terms</span>
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    By accessing and using{" "}
                    <span className="font-bold">UnboxKloud</span>, you agree to
                    comply with these policies.
                  </li>
                  <li>
                    Our courses are for educational purposes only. Misuse of our
                    content is strictly prohibited.
                  </li>
                  <li>
                    We reserve the right to update these policies at any time.
                  </li>
                </ul>
              </section>

              {/* Refund & Cancellation */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Refund &{" "}
                  <span className="text-[#ff6600]">Cancellation Policy</span>
                </h4>
                <p>
                  We offer a{" "}
                  <span className="font-semibold">
                    7-day money-back guarantee
                  </span>{" "}
                  under these conditions:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Refund requests are valid within{" "}
                    <span className="font-bold">7 days</span> of purchase if
                    less than <span className="font-bold">20%</span> of the
                    course is completed.
                  </li>
                  <li>
                    Refunds are processed within{" "}
                    <span className="font-bold">5-10 business days</span>.
                  </li>
                  <li>No refunds on promotional or discounted courses.</li>
                </ul>
                <p className="mt-2">
                  📩 <span className="font-semibold">To request a refund:</span>{" "}
                  Email{" "}
                  <a
                    href="mailto:support@unboxkloud.com"
                    className="text-blue-500 underline"
                  >
                    support@unboxkloud.com
                  </a>
                </p>
              </section>

              {/* Course Access & Usage */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Course <span className="text-[#ff6600]">Access & Usage</span>
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Lifetime access is granted unless stated otherwise.</li>
                  <li>
                    Sharing, reselling, or distributing course content is{" "}
                    <span className="font-bold text-red-600">
                      strictly prohibited
                    </span>
                    .
                  </li>
                  <li>
                    Violations may result in account suspension{" "}
                    <span className="font-bold">(no refunds)</span>.
                  </li>
                </ul>
              </section>

              {/* Privacy Policy */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Privacy <span className="text-[#ff6600]">Policy</span>
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    We collect minimal data for account management and progress
                    tracking.
                  </li>
                  <li>
                    Your personal data is{" "}
                    <span className="font-bold">never sold</span> to third
                    parties.
                  </li>
                  <li>
                    For more details, check our{" "}
                    <a href="#" className="text-blue-500 underline">
                      Privacy Policy
                    </a>
                    .
                  </li>
                </ul>
              </section>

              {/* Community Guidelines */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Community <span className="text-[#ff6600]">Guidelines</span>
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Respect others in forums, chats, and discussion groups.
                  </li>
                  <li>
                    No hate speech, harassment, or inappropriate behavior.
                  </li>
                  <li>
                    Follow ethical practices while applying DevOps knowledge.
                  </li>
                </ul>
              </section>

              {/* Contact & Support */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Support & <span className="text-[#ff6600]">Contact</span>
                </h4>
                <p>For support, reach out to us:</p>
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
                We are here to help you on your{" "}
                <span className="font-bold">DevOps learning journey</span>! 🚀
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
