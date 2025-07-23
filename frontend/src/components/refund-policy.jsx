import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ConsultationSection } from "./consultation-section";
import { cn } from "../lib/utils";
import useWindowSize from "../customHooks/useWindowSize";

export default function RefundPolicy() {
  const { width } = useWindowSize();
  return (
    <div>
      <SiteHeader setSelectedMenu={"Projects"} />
      <main className="mt-20 mx-8 lg:mx-20">
        <div className="pt-8 transition-all duration-[2000ms] ease-in-out">
          <div className="text-center font-light text-[48px] leading-[60px] mb-12">
            <h4 className="text-[#2A254D]">
              Refund <span className="text-[#ff6600]">Policy</span>
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
              UnboxKloud - Refund <span className="text-[#ff6600]">Policy</span>
              </h1>
              <p className="text-gray-600 mb-6">
                Last Updated:{" "}
                <span className="font-semibold">[Insert Date]</span>
              </p>

              {/* Eligibility for Refunds */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Refund <span className="text-[#ff6600]">Eligibility</span>
                </h4>
                <p>
                  We offer a{" "}
                  <span className="font-bold">7-day money-back guarantee</span>{" "}
                  under the following conditions:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    The refund request is made within{" "}
                    <span className="font-bold">7 days</span> of purchase.
                  </li>
                  <li>
                    The user has completed{" "}
                    <span className="font-bold">less than 20%</span> of the
                    course.
                  </li>
                  <li>
                    Refund requests for promotional or discounted courses are{" "}
                    <span className="font-bold text-red-600">not eligible</span>
                    .
                  </li>
                </ul>
              </section>

              {/* Non-Refundable Situations */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Non-<span className="text-[#ff6600]">Refundable</span>{" "}
                  Situations
                </h4>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Refund requests made after{" "}
                    <span className="font-bold">7 days</span> of purchase.
                  </li>
                  <li>
                    The user has completed{" "}
                    <span className="font-bold">more than 20%</span> of the
                    course.
                  </li>
                  <li>
                    Any refunds for group purchases, bundles, or subscription
                    plans.
                  </li>
                  <li>
                    Violations of our terms, such as account sharing or content
                    redistribution.
                  </li>
                </ul>
              </section>

              {/* How to Request a Refund */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  How to{" "}
                  <span className="text-[#ff6600]">Request a Refund</span>
                </h4>
                <p>
                  To request a refund, please contact our support team with the
                  following details:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Your registered email address.</li>
                  <li>Order ID and proof of payment.</li>
                  <li>Reason for refund request.</li>
                </ul>
                <p className="mt-2">
                  📩 <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:support@unboxkloud.com"
                    className="text-blue-500 underline"
                  >
                    support@unboxkloud.com
                  </a>
                </p>
              </section>

              {/* Refund Processing Time */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Refund <span className="text-[#ff6600]">Processing Time</span>
                </h4>
                <p>
                  Once your refund request is approved, the amount will be
                  credited to your original payment method within
                  <span className="font-bold"> 5-10 business days</span>.
                  Processing times may vary depending on your bank.
                </p>
              </section>

              {/* Contact Support */}
              <section className="mb-6">
                <h4 className="text-2xl font-semibold text-[#2A254D]">
                  Need <span className="text-[#ff6600]">Help?</span>
                </h4>
                <p>For any issues regarding refunds, reach out to us:</p>
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
                We are here to ensure a seamless experience at{" "}
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
