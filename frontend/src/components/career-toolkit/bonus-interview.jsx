import { Button } from "../ui/button";
import project5 from "../../assets/project5.png";
import { Check } from "lucide-react";

const interviewFeatures = [
  "Interview Do's and Don't's",
  "Answer Structuring Techniques",
  "Most Asked Interview Questions",
  "Handling Technical Challenges",
  "Mock Interviews",
  "Industry Expert Insights",
  "Behavioral Interview Strategies",
  "Confidence Building",
  "Real-Life Scenario Practice",
  "Time Management During Interview",
  "Comprehensive Interview Guidance",
  "Interview Alignment with Resume & Job Description",
];

export default function BonusInterview() {
  return (
    <>
      <div className="flex justify-end mt-5">
        <div className="inline-block bg-[linear-gradient(97deg,#DCC99E_0.65%,#B9923D_91.38%)] px-6 py-3 font-medium rounded-[16px_16px_0px_0px] text-[24px] mr-3">
          Bonus Gift
        </div>
      </div>

      <div className="bg-[#FFF0E6] mx-3 p-8 rounded-[16px_0px_16px_16px] mb-3">
        <div className="grid md:grid-cols-[1fr_2fr] gap-2">
          <div className="flex items-center justify-center lg:-mt-[200px]">
            <img
              src={project5}
              alt="Bonus Interview"
              width={300}
              height={400}
              className="w-full max-w-sm h-auto"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-[#ff6600] text-[40px] leading-[40px]">
              Get FREE Workshop
              <span className="font-semibold text-[#2A254D] text-[40px]">
                :
                <br />
                “Unlock the Secret of DevOps & Cloud Interview”
              </span>
            </h3>
            <p className="mb-6 text-[#363258] text-[20px] leading-[24px] font-medium">
              This is a free program designed to help you master key concepts,
              showcase your expertise, and confidently crack <b>DevOps and Cloud
              interviews</b> to land your dream job.
            </p>
            <div>
              <h4 className="font-semibold text-[28px] mb-4 text-[#363258]">
                What's included
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {interviewFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="rounded-full bg-[#F60] w-[26px] h-[26px] p-1">
                      <Check className="w-[19px] h-[19px] text-[#fff]" />
                    </div>
                    <span className="text-[20px] text-[#2A254D] pl-2">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Button className="px-12 mt-4 py-6 bg-[#ff6600] hover:bg-[#ff6600]/90 text-[22px]">
              Start Hand On →
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
