import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import btnarrow from "../assets/btn_arrow.svg";
import useWindowSize from "../customHooks/useWindowSize";

function PricingCard({ title, price, features, isPopular, onStartClick, index }) {
  const { width } = useWindowSize();
  return (
    <div
      className={cn(
        "relative p-7 rounded-2xl border-[2.4px] transition-transform hover:-translate-y-1 hover:border-[#F60] hover:bg-gradient-to-b from-[#FEF7EE] to-[#FFF]",
        index === 2 && "md:mt-10",
        isPopular
          ? "bg-[#000] border-[#ff6600] bg-gradient-to-b from-[#FEF7EE] to-[#FFF]"
          : "bg-white border-[#F5F7F9]"
      )}
    >
      {isPopular && (
        <div className={cn("absolute top-[-54px] left-1/2 -translate-x-1/2 bg-[#ff6600] text-white py-2 rounded-t-[24px] text-[24px] font-medium w-[210px] text-center",
              // width < 950 &&  "text-[18px] w-[150px] top-[-40px]"
        )}>
        Best Choice
      </div>
      )}
      <h3 className="text-[32px] font-medium text-[#2A254D]">{title}</h3>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="text-[40px] font-bold text-[#2A254D]">{price}$</span>
          <div className="relative top-[-16px]">
            <span className="text-[20px] text-[#2A254D]">/</span>
            <span className="text-[20px] text-[#2A254D] leading-[24px] font-normal">
              One Time Payment
            </span>
            <div className=" ml-[5%] -mt-[10px]">
              <span className="text-[#2A254D] text-[20px] font-normal line-through">
                per month
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 mb-8 mt-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            {feature.included ? (
              <div className="rounded-full bg-[#F60] p-1">
                <Check className="w-[20px] h-[20px] text-[#fff]" />
              </div>
            ) : (
              <div className="rounded-full bg-[#000] p-1">
                <X className="w-[20px] h-[20px] text-[#fff]" />
              </div>
            )}
            <span className="text-[#2A254D] text-[20px] leading-[24px] font-normal">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <Button
        className="w-full font-[600] bg-[#ff6600] hover:bg-[#ff6600]/90 text-white text-base py-6 rounded-[8px]"
        onClick={onStartClick}
      >
        Start Hand On <img src={btnarrow} alt="btnarrows" />
      </Button>
    </div>
  );
}

export function PricingSection() {
  const pricingPlans = [
    {
      title: "Basic",
      price: "10",
      link:"https://superprofile.bio/vp/671cf128f6707c0013a2ee21",
      features: [
        { text: "Access to UnboxKloud Academy LMS Portal", included: true },
        { text: 'Access to "All Basic Projects"', included: true },
        { text: 'Access to "FB Student Group"', included: true },
        {
          text: 'Access to "Basic Telegram Student Community"',
          included: true,
        },
        { text: "Job Wining Resume Workshop", included: false },
        { text: "Interview Secrets Workshop", included: false },
      ],
    },
    {
      title: "Advance",
      price: "15",
      link:"https://superprofile.bio/vp/671cf128f6707c0013a2ee21",
      features: [
        { text: 'Access to "All Basic Projects"', included: true },
        { text: 'Access to "All Advance Projects"', included: true },
        { text: 'Access to "FB Student Group"', included: true },
        {
          text: 'Access to "Advance Telegram Student Community"',
          included: true,
        },
        { text: "Job Wining Resume Workshop", included: true },
        { text: "Interview Secrets Workshop", included: false },
      ],
    },
    {
      title: "Expert",
      price: "20",
      link:"",
      isPopular: true,
      features: [
        { text: 'Access to All "Basic & Advance Projects"', included: true },
        { text: 'Access to "All Expert Projects"', included: true },
        { text: 'Access to "FB Student Group"', included: true },
        {
          text: 'Access to "Expert Telegram Student Community"',
          included: true,
        },
        { text: "Job Wining Resume Workshop", included: true },
        { text: "Interview Secrets Workshop", included: true },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-semibold">
            Select Your <span className="text-[#ff6600]">Plan</span>
          </h2>
          <p className="text-[#474C59] text-[18px]">
            Flexible options to suit your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-6 gap-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              index={index}
              {...plan}
              onStartClick={() => window.open(plan?.link, '_blank', 'noopener,noreferrer')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
