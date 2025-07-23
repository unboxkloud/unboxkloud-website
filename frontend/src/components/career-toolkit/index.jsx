import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import ProjectIcon from "../../assets/project.svg";
import ProjectIconActive from "../../assets/projectBlack.svg";
import BasicIcon from "../../assets/basic.svg";
import BasicIconActive from "../../assets/BasicActive.svg";
import AdvanceIcon from "../../assets/advance.svg";
import AdvanceIconActive from "../../assets/advanceActive.svg";
import ExpertIcon from "../../assets/expert.svg";
import ExpertIconActive from "../../assets/expertActive.svg";
import ProjectContent from "./project-content";
import AdvanceContent from "./advance-content";
import ExpertContent from "./expert-content";
import BasicContent from "./basic-content";
import BenefitsSection from "./benefits-section";
import BonusResume from "./bonus-resume";
import BonusInterview from "./bonus-interview";
import useWindowSize from "../../customHooks/useWindowSize";
import tickSound from "../../assets/click.wav";

const tabs = [
  {
    id: "Projects",
    label: "Project",
    icon: ProjectIconActive,
    iconActive: ProjectIcon,
  },
  { id: "Basic", label: "Basic", icon: BasicIcon, iconActive: BasicIconActive },
  {
    id: "Advance",
    label: "Advance",
    icon: AdvanceIcon,
    iconActive: AdvanceIconActive,
  },
  {
    id: "Expert",
    label: "Expert",
    icon: ExpertIcon,
    iconActive: ExpertIconActive,
  },
];

export default function CareerToolkit({ selectedMenu }) {
  const [activeTab, setActiveTab] = useState("Projects");
  const { width } = useWindowSize();
  const divRefs = useRef([]); 

  useEffect(() => {
    setActiveTab(selectedMenu);
    // console.log("selectedMenu1", selectedMenu);
    // if (width <= 1040) {
    //   selectedMenu === "Basic" && divRefs.current[1].scrollIntoView({ behavior: "smooth", block: "start" });
    //   selectedMenu === "Advance" && divRefs.current[2].scrollIntoView({ behavior: "smooth", block: "start" });
    //   if(selectedMenu === "Expert") {
    //      divRefs.current[3].scrollIntoView({ behavior: "smooth", block: "start" });
    //      setTimeout(() => {
    //       window.scrollBy({ top: -20, behavior: "smooth" }); // Adjust this value as needed
    //     }, 300);
    //     }

      
    // }
  }, [selectedMenu]);

  return (
    <section className="py-16 px-4 md:px-[100px]" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[40px] text-[#19191A] font-semibold -mb-4">
            Your Complete <span className="text-[#ff6600]">Career Toolkit</span>{" "}
            for
          </h2>
          <h2 className="text-[40px] font-semibold text-[#19191A]">
            DevOps & Cloud
          </h2>
          <p className="text-[#474C59] text-[18px] leading-[24px] text-center max-w-3xl mx-auto">
            From mastering real-world projects to acing interviews with an
            ATS-friendly resume, UnboxKloud Academy is your partner in achieving
            career success. Join hands-on workshops, build an impressive
            portfolio, and land your dream job.
          </p>
        </div>

    
          <>
            {/* Tabs */}
            {/* <div className="flex justify-center mb-8">
              <div className="inline-flex lg:gap-6 gap-[0.5rem]">
                {width > 800 && tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "lg:px-12 lg:py-4 rounded-[16px] lg:text-[24px] font-medium transition-all flex items-center lg:gap-2 text-[#2A254D]",
                      "px-6 py-3 text-base gap-1",
                      activeTab === tab.id
                        ? "border-[2.39px] border-[#ff6600] bg-gradient-to-b from-[#FEF7EE] to-white"
                        : "bg-[#f0f1f5] hover:bg-[#f0f1f5]/80",
                      width <= 640 && "text-[14px] px-4 py-3"
                    )}
                  >
                    {activeTab === tab.id ? (
                      <img
                        src={tab?.iconActive}
                        className="lg:w-10 lg:h-10 w-5 h-5"
                        alt={tab.label}
                      />
                    ) : (
                      <img
                        src={tab?.icon}
                        className="lg:w-10 lg:h-10 w-5 h-5"
                        alt={tab.label}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Content */}
            <div className="bg-[linear-gradient(180deg,#FEF7EE_0%,#FFF_82.84%)] rounded-[16px] border-[2.39px] border-[#ff6600]">
              {activeTab === "Projects" && (
                <div>
                  <ProjectContent />
                  <BenefitsSection />
                  <BonusResume />
                  <BonusInterview />
                </div>
              )}
              {activeTab === "Basic" && <BasicContent />}
              {activeTab === "Advance" && <AdvanceContent />}
              {activeTab === "Expert" && <ExpertContent />}
            </div>
          </>
        
      </div>
    </section>
  );
}
