import { Button } from "../ui/button";
import project4 from "../../assets/project4.png";
import { Check } from "lucide-react";

const resumeFeatures = [
  "ATS-Friendly Resume Templates",
  "Experienced Resume Advice",
  "Resume Do's and Don'ts",
  "Video Guidance",
  "Highlighting Skillset's",
  "Insights from Recruiters & HR's",
  "Role-Specific Insights",
  "Editable Formats",
  "Step by Step Guidance",
  "Downloadable Resources",
  "Industry-Standard Keywords",
  "Lifetime Access to Resume Templates",
];

export default function BonusResume() {
  return (
    <>
      <div className="inline-block bg-[linear-gradient(97deg,#DCC99E_0.65%,#B9923D_91.38%)] px-6 py-3 font-medium rounded-[16px_16px_0px_0px] ml-3 text-[24px]">
        Bonus Gift
      </div>

      <div className="bg-[#FFF0E6] mx-3 p-8 rounded-[0px_16px_16px_16px]">
        <div className="grid md:grid-cols-[2fr_1fr] gap-2">
          <div>
            <h3 className="font-semibold mb-2 text-[#ff6600] text-[40px] leading-[40px]">
              Get FREE Workshop<span className="font-semibold text-[#2A254D] text-[40px]">:
              <br />
              
                "Unlock the Secret of Job-Winning Resume!"
              </span>
            </h3>
            <p className="mb-6 text-[#363258] text-[20px] leading-[24px] font-medium">
              This is a free program designed to help you craft professional 
              <b> ATS-friendly Resumes</b> that highlight your skills and experience,
              ensuring you stand out and land your dream job.
            </p>
            <div>
              <h4 className="font-semibold text-[28px] mb-4 text-[#363258]">What's included</h4>
              <div className="grid grid-cols-2 gap-2">
                {resumeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="rounded-full bg-[#F60] w-[26px] h-[26px] p-1">
                      <Check className="w-[19px] h-[19px] text-[#fff]" />
                    </div>
                    <span className="text-[20px] text-[#2A254D] pl-2">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button className="px-12 mt-4 py-6 bg-[#ff6600] hover:bg-[#ff6600]/90 text-[22px]">
            Start Hand On →
          </Button>
          </div>
          <div className="flex items-center justify-center lg:-mt-[150px]">
            <img
              src={project4}
              alt="Resume template"
              width={300}
              height={400}
              className="w-full max-w-sm h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
