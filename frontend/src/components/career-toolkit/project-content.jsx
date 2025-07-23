import { Button } from "../ui/button";
import project1 from "../../assets/project1.png";
import { Check } from "lucide-react";

const projectFeatures = [
  "Scenario-Based Projects",
  "Step-by-Step PDF Guides",
  "Video Explanations at each step",
  "Source Code & Configurations",
  "Troubleshooting Tips",
  "Industry-Standard Tools",
  "Project Checklists",
  "Downloadable Resources",
  "Lifetime Access to Projects Library & Resources",
  "Certificate of Completion",
  "Hands On Practice with industry professional tools",
  "GitHub, Jenkins, Docker Kubernetes, AWS, AZURE, GCP",
];

export default function ProjectContent() {
  return (
    <div className="p-8">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-12">
        {/* Left Side (Smaller Width) */}
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="relative w-full max-w-md">
            <img
              src={project1}
              alt="Cloud platforms"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side (Larger Width) */}
        <div className="order-1 md:order-2">
          <div className="mb-5">
            <h3 className="text-[#2A254D] text-[2.5rem] leading-[40px] font-semibold mb-4">
              100% Job Ready Projects in DevOps & Cloud Computing
            </h3>
            <p className="text-[#363258] text-[20px] leading-[24px] font-medium mr-5">
              The Ultimate DevOps Projects for Beginners, Intermediate and
              Expert level. These Projects are curated by 20+ Years of Industry
              experts by addressing all learning needs from Companies. Grab it
              now by doing it yourself with Step by step guides & Instructions.
              Get your hands dirty & be Job Ready..!
            </p>
          </div>
          <h4 className="text-[#363258] text-[28px] font-semibold mb-2">
            What's included in the Projects
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="rounded-full bg-[#F60] w-[20px] h-[20px]">
                  <Check className="w-[19px] h-[19px] text-[#fff]" />
                </div>
                <span className="text-[#2A254D] text-[20px] leading-[24px]">{feature}</span>
              </div>
            ))}
          </div>
          <Button className="px-12 mt-4 py-6 bg-[#ff6600] hover:bg-[#ff6600]/90 text-[22px]">
            Start Hand On →
          </Button>
        </div>
      </div>
    </div>
  );
}
