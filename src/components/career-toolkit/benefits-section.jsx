import { Button } from "../ui/button";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { Check } from "lucide-react";

const benefitsTop = [
  {
    title: "Practical Experience:",
    description:
      "Gain real-world experience by working on scenarios that reflect industry challenges and workflows.",
  },
  {
    title: "Skill Validation:",
    description:
      "Demonstrate your expertise with tangible projects, showcasing your ability to apply concepts in real-world scenarios.",
  },
  {
    title: "Interview Confidence:",
    description:
      "Build confidence to tackle technical interview questions with hands-on knowledge of tools and workflows.",
  },
  {
    title: "Resume Enhancement:",
    description:
      "Add completed projects to your resume as proof of your skills, helping you stand out to potential employers.",
  },
];

const benefitsBottom = [
  {
    title: "Tool Familiarity:",
    description:
      "Learn and practice with popular DevOps and Cloud tools like Docker, Kubernetes, Jenkins, AWS, and Terraform.",
  },
  {
    title: "Problem-Solving Skills:",
    description:
      "Develop critical thinking and troubleshooting skills by resolving challenges encountered during projects.",
  },
  {
    title: "Job Readiness:",
    description:
      "Transition seamlessly into professional environments with a strong foundation in practical skills.",
  },
];

export default function BenefitsSection() {
  return (
    <div className="mb-16 p-8">
      <div className="grid md:grid-cols-[1.7fr_1fr] gap-8 mb-8">
        {/* Top section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#2A254D] text-[40px] leading-[40px] font-semibold mb-8">
            Benefits of Doing Hands-On Projects
            <br />
            in DevOps & Cloud Computing
          </h3>
          {benefitsTop.map((benefit, index) => (
            <div key={index} className="flex gap-4 mb-4 md:mb-0">
              <div className="rounded-full bg-[#F60] w-[35px] h-[35px] p-2 mt-4">
                <Check className="w-[20px] h-[20px] text-[#fff]" />
              </div>
              <div>
                <h4 className="text-[#363258] text-[28px] font-semibold mb-2">
                  {benefit.title}
                </h4>
                <p className="text-[#2A254D] text-[20px] mb-3 pr-20">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Placeholder for the image */}
        <div className="flex items-center justify-center">
          <img src={project2} />
        </div>
      </div>
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
        {/* Bottom section */}
        <div className="flex items-center justify-center order-2 md:order-1">
          <img src={project3} alt="text" />
        </div>
        <div className="flex flex-col items-center md:items-start order-1 md:order-2">
          {benefitsBottom.map((benefit, index) => (
            <div key={index} className="flex gap-4 mb-4 md:mb-0">
              <div className="rounded-full bg-[#F60] w-[35px] h-[35px] p-2 mt-4">
                <Check className="w-[20px] h-[20px] text-[#fff]" />
              </div>
              <div>
                <h4 className="text-[#363258] text-[28px] font-semibold mb-2">
                  {benefit.title}
                </h4>
                <p className="text-[#2A254D] text-[20px] mb-3 pr-8">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <Button className="px-12 mt-4 py-6 bg-[#ff6600] hover:bg-[#ff6600]/90 text-[22px]">
              Start Hand On →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
