import { useState } from "react";
import { BarChart3, FileText, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import btnarrow from '../assets/btn_arrow.svg';
import useWindowSize from "../customHooks/useWindowSize";
import { cn } from "../lib/utils";

// Define the steps array inside the component as state
export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active step index

  const steps = [
    {
      number: 1,
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Build",
      titleHighlight: "Projects",
      subtitle: "Start building the projects that set your resume apart today!",
      description:
        "Projects designed with Step by step guide & Explanations to perform Real Life Scenario & use case. Result Oriented Approach.",
      buttonText: "Start Hand On",
    },
    {
      number: 2,
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Create",
      titleHighlight: "Resume",
      subtitle:
        "ATS Friendly Resume templates leads to get more Interview Calls.",
      description:
        "Resume templates hand picked by industry Experts, HR & Recruiters. ATS friendly & Specific to DevOps & Cloud Engineer Job.",
      buttonText: "Build Resume",
    },
    {
      number: 3,
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Get",
      titleHighlight: "Hired",
      subtitle: "Not preparing for interview may lead to REJECTION.",
      description:
        "How to be hero in Technical Interview Round, Standout in Manager Round of Interview, How to Negotiate Salary at HR Round of Interview. DO's & DONT's interview.",
      buttonText: "Get Hired",
    },
  ];

  return (
    <section className="pt-20 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How it <span className="text-[#ff6600]">Works</span>
          </h2>
          <p className="text-[#19191a]/70 max-w-3xl mx-auto">
            Get hired as a Certified DevOps or Cloud Engineer with our intense
            DevOps Projects & Workshops programs. In-Depth with extensive
            real-life projects.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="w-full lg:w-[1000px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 relative mt-8 gap-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                {...step}
                isActive={index === activeIndex} // Only the hovered step is active
                onMouseEnter={() => setActiveIndex(index)} // Set active step on hover
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  number,
  icon,
  title,
  titleHighlight,
  subtitle,
  description,
  buttonText,
  isActive,
  onMouseEnter,
}) {
  const { width } = useWindowSize();
  return (
    <div className={cn("relative",  width < 636 && "mx-16")} onMouseEnter={onMouseEnter}>
      {/* Custom curved step header */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32">
        <div className="relative">
          <svg
            viewBox="0 0 128 40"
            className={`w-full ${isActive ? "text-[#ff6600]" : "text-[#fff0e6]"}`}
          >
            <path
              d="M0 20C0 8.954 8.954 0 20 0h88c11.046 0 20 8.954 20 20v20H0V20z"
              fill="currentColor"
            />
          </svg>
          <div
            className={`absolute inset-0 flex items-center justify-center text-2xl font-semibold ${
              isActive ? "text-white" : "text-[#ff6600]"
            }`}
          >
            Step {number}
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className={`mt-6 p-8 rounded-[16px] h-full flex flex-col transition-all duration-200 transition-transform hover:-translate-y-1 hover:border-[#F60] hover:bg-gradient-to-b from-[#FEF7EE] to-[#FFF]
          ${
            isActive
              ? "border-[2.4px] border-t-[8px] border-[#ff6600] bg-[linear-gradient(180deg,_rgba(254,_247,_238,_0.24)_0%,_#FFF_82.84%)]"
              : "bg-[linear-gradient(180deg,_rgba(254,_247,_238,_0.24)_0%,_#FFF_82.84%)] border-[2.4px] border-[#FFF0E6]"
          }`}
      >
        {/* Icon */}
        <div className="mx-auto mb-8">
          <div className="w-20 h-20 rounded-full bg-[#19191a] flex items-center justify-center relative">
            {isActive && (
              <div className="absolute inset-[-2px] border-[2.4px] border-[#ff6600] rounded-full" />
            )}
            <div className="relative">{icon}</div>
          </div>
        </div>

        {/* Content */}
        <div className="leading-5 text-center flex-1">
          <h3 className="flex text-[32px] justify-center font-bold">
            <span className="text-[#2A254D] mr-2">{title}</span>
            <span className="text-[#ff6600]">{titleHighlight}</span>
          </h3>
          <p className="text-base mt-2 font-semibold text-[#363258] max-w-xs mx-auto">
            {subtitle}
          </p>
          <p className="text-[#4A4769] text-[18px] mt-2">{description}</p>
        </div>

        {/* Button */}
        <Button className="w-full font-[600] bg-[#ff6600] hover:bg-[#ff6600]/90 text-white text-base py-6 rounded-[8px]">
          {buttonText} <img src={btnarrow} alt="btnarrows" />
        </Button>
      </div>
    </div>
  );
}
