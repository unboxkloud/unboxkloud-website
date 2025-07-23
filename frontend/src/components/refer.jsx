import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ConsultationSection } from "./consultation-section";
import { cn } from "../lib/utils";
import useWindowSize from "../customHooks/useWindowSize";

export default function Refer() {
  const { width } = useWindowSize();
  return (
    <div>
      <SiteHeader setSelectedMenu={"Projects"} />
      <main className="mt-20 mx-8 lg:mx-20">
        <div className="pt-8 transition-all duration-[2000ms] ease-in-out">
          <div className="text-center font-light text-[48px] leading-[60px] mb-12">
            <h4 className="text-[#2A254D]">
               Refund And <span className="text-[#ff6600]">Earn</span>
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
        Refer & <span className="text-[#ff6600]">Earn</span>
      </h1>
      <p className="text-gray-600 mb-6">
        Invite your friends to UnboxKloud and earn rewards when they enroll in a course! 🚀
      </p>

      {/* How It Works */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold text-[#2A254D]">
          How it <span className="text-[#ff6600]">Works?</span>
        </h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Share your unique referral link with friends.</li>
          <li>Your friend signs up and purchases a course using your link.</li>
          <li>You earn a **500 reward** for every successful referral! 🎉</li>
        </ul>
      </section>

      {/* Referral Rewards */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold text-[#2A254D]">
          Your <span className="text-[#ff6600]">Rewards</span>
        </h4>
        <ul className="list-disc ml-6 space-y-2">
          <li>Earn 500 per successful referral.</li>
          <li>Rewards can be redeemed as course credits or withdrawn via PayPal.</li>
          <li>There is **no limit** on how much you can earn! 💰</li>
        </ul>
      </section>

      {/* Contact Support */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold text-[#2A254D]">
          Need <span className="text-[#ff6600]">Help?</span>
        </h4>
        <p>If you have questions, contact us:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>📧 <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:support@unboxkloud.com" className="text-blue-500 underline">
              support@unboxkloud.com
            </a>
          </li>
          <li>🌐 <span className="font-semibold">Website:</span>{" "}
            <a href="#" className="text-blue-500 underline">www.unboxkloud.com</a>
          </li>
        </ul>
      </section>

      <p className="mt-6 text-gray-600 text-sm">
        Start referring today and earn unlimited rewards with <span className="font-bold">UnboxKloud</span>! 🚀
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
