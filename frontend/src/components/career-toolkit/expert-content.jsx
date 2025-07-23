import { Button } from "../ui/button";
import { Check, X } from "lucide-react";
import basic1 from "../../assets/basic1.png";
import basicIcon1 from "../../assets/basicicon1.svg";
import basicIcon2 from "../../assets/basicicon2.svg";
import basicIcon3 from "../../assets/basicicon3.svg";
import basicIcon4 from "../../assets/basicicon4.svg";
import basicIcon5 from "../../assets/basicicon5.svg";
import basicIcon6 from "../../assets/basicicon6.svg";
import basicIcon7 from "../../assets/basicicon7.svg";
import Grantee1 from "../../assets/grantee1.png";
import Grantee2 from "../../assets/grantee2.png";
import useWindowSize from "../../customHooks/useWindowSize";
import { cn } from "../../lib/utils";

const projects = [
  {
    number: 1,
    title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
    tags: ["Web Development", "JavaScript"],
    skills:
      "Learn: HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | jQuery",
  },
  {
    number: 2,
    title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
    tags: ["Web Development"],
    skills:
      "Learn: HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | jQuery",
  },
  // {
  //   number: 3,
  //   title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
  //   tags: ["Web Development", "Andorid"],
  //   skills:
  //     "Learn: HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | jQuery",
  // },
  // {
  //   number: 4,
  //   title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
  //   tags: ["Web Development", "Azure"],
  //   skills:
  //     "Learn: HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | jQuery",
  // },
  // {
  //   number: 5,
  //   title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
  //   tags: ["Web Development", "Aws"],
  //   skills:
  //     "Learn: HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | jQuery",
  // },
];

const features = [
  { text: "Scenario-Based Projects", included: true },
  { text: "Step-by-Step PDF Guides", included: true },
  { text: "Video explanations at each step", included: true },
  { text: "Source Code & Configurations", included: true },
  { text: "Troubleshooting Tips", included: true },
  { text: "Industry-Standard Tools", included: true },
  { text: "Project Checklists", included: true },
  { text: "Downloadable Resources", included: true },
  { text: "Lifetime Access to Projects Library & Resources", included: true },
  { text: "Certificate of Completion", included: true },
  {
    text: "Hands On Practice with industry professional tools",
    included: true,
  },
  {
    text: "GitHub, Jenkins, Docker, Kubernetes, AWS, AZURE, GCP",
    included: true,
  },
  { text: "Job Wining Resume Workshop", included: false },
  { text: "Interview Secret Workshop", included: false },
];

function ProjectCard({ number, title, skills, tags, desktopView }) {
  return (
    <div
      key={number}
      className={cn("mt-10 border-[2.39px] border-[#ff6600] relative border rounded-xl p-4 hover:shadow-lg transition-shadow bg-[linear-gradient(180deg,#FCE7D0_0%,#FFF_63.5%)]",
      desktopView && "w-[400px]"
      )}
    >
      {/* Project Label Positioned on Top */}
      <div className="text-nowrap font-semibold absolute -top-[2.5rem] left-1/2 -translate-x-1/2 bg-[#ff6600] text-white px-10 rounded-[24px_24px_0px_0px] text-[24px] pt-1">
        Project {number}
      </div>

      <div className="relative mb-4">
        <img
          src={basic1}
          alt={`Project ${number}`}
          width={300}
          height={200}
          className="w-full rounded-lg"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border-[2.39px] border-[#ff6600] bg-[#FFF0E6] text-[#ff6600] px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="font-semibold text-[24px] leading-[24px] text-[#363258] mb-2">
        {title}
      </h3>
      <p className="text-[16px] leading-[24px] text-[#2A254D]">{skills}</p>
    </div>
  );
}

export default function ExpertContent({ pageView }) {
  const { width } = useWindowSize();
  const remainder = projects.length % 3;
  return (
    <div className="pt-8">
      {/* Header */}
      <div className="text-center font-light text-[48px] leading-[60px] mb-12">
        <h3 className="text-[#2A254D]">WELCOME TO</h3>
        <h2 className="font-medium text-[#2A254D]">
          EXPERT PROJECTS <span className="text-[#ff6600]">CLOUD & DEVOPS</span>
        </h2>
        <h4 className="text-[#2A254D]">
          GET YOUR <span className="text-[#ff6600]">HANDS</span> DIRTY
        </h4>
      </div>

      {/* Top 5 Projects */}
      <div
        className={cn(
          pageView &&
            "border-2 border-[#ff6600] mx-20 py-10 mb-14 rounded-[16px]",
          width < 900 && "mx-2"
        )}
      >
        <h2 className="text-center font-semibold text-[64px] mb-8 leading-[70px] text-[#2A254D]">
          <span className="text-[#ff6600]">DevOps & Cloud</span>{" "}
          Expert Project
          <br />
        </h2>
        <p className={cn("text-center font-medium text-[#363258] mb-12 text-[20px] leading-[24px] px-6",
          pageView && "px-10 lg:px-20"
        )}>
          The Ultimate DevOps Projects for Beginners, Intermediate and Expert
          level. These Projects are curated by 20+ Years of Industry experts by
          addressing all learning needs from Companies. Grab it now by doing it
          yourself with Step by step guides & instructions. Get your hands dirty
          & be Job Ready..!
        </p>

        {/* Projects Grid */}
        <div
          className={cn(
            "grid grid-cols-3  gap-4 px-10",
            width < 1350 && "grid-cols-2",
            width < 900 && "grid-cols-1"
          )}
        >
          {width > 1350 ? projects.map((project, index) => {
            if (index === projects.length - 2 && remainder === 2) {
              return (
                <div
                  key={index}
                  className="col-span-2 md:col-span-3 flex justify-center gap-4 "
                >
                  <ProjectCard
                    number={project.number}
                    title={project.title}
                    skills={project.skills}
                    tags={project.tags}
                    desktopView={true}
                  />
                  <ProjectCard
                    number={projects[index+1]?.number}
                    title={projects[index+1]?.title}
                    skills={projects[index+1]?.skills}
                    tags={projects[index+1]?.tags}
                    desktopView={true}
                  />
                </div>
              );
            }
            // Skip the second item of the last row when rendering because it's already handled
            if (index === projects.length - 1 && remainder === 2) return null;

            return (
              <div key={index} >
                <ProjectCard
                    number={project.number}
                    title={project.title}
                    skills={project.skills}
                    tags={project.tags}
                  />
              </div>
            );
          })
        : projects.map((project, index) => (
          <div
            key={index}
            //  className={index >= 3 ? "lg:ml-[50%] lg:w-[400px]" : ""}
          >
            <ProjectCard
              number={project.number}
              title={project.title}
              skills={project.skills}
              tags={project.tags}
            />
          </div>
        ))}
        </div>

        <div className="text-center my-8">
          <Button className="lg:px-12 md:px-8 px-6 rounded-[100px] mt-4 py-6 bg-[#ff6600] hover:bg-[#ff6600]/90 text-[16px]">
            Get Access To All EXPERT PROJECTS →
          </Button>
        </div>
      </div>

      {/* Info Boxes */}
      <div className={cn(pageView && "mx-20", width < 1200 && "mx-2")}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-[#ff6600] rounded-xl p-6 bg-[linear-gradient(180deg,#FCE7D0_0%,#FFF_63.5%)]">
            <h3 className="text-[32px] font-semibold mb-4 text-[#363258]">
              Who is this{" "}
              <span className="text-[#ff6600]">Expert Projects</span> for?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <img
                  src={basicIcon1}
                  className="w-12 h-12 text-[#ff6600] mt-5 mr-3"
                />
                <div>
                  <p className="font-bold text-[#2A254D] text-[20px]">
                    Everyone:
                  </p>
                  <p className="text-[#2A254D] text-[20px] leading-[24px]">
                    Who want to get into DevOps & Cloud Role & learn the basics
                    by doing hands On.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={basicIcon2}
                  className="w-12 h-12 text-[#ff6600] mt-5 mr-3"
                />
                <div>
                  <p className="font-bold text-[#2A254D] text-[20px]">
                    Systems administrators:
                  </p>
                  <p className="text-[#2A254D] text-[20px] leading-[24px]">
                    Who want to switch career to Cloud & DevOps Engineer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={basicIcon3}
                  className="w-12 h-12 text-[#ff6600] mt-5 mr-3"
                />
                <div>
                  <p className="font-bold text-[#2A254D] text-[20px]">
                    Students:
                  </p>
                  <p className="text-[#2A254D] text-[20px] leading-[24px]">
                    Who want to complete Projects & get qualified to internship
                    program by our partner companies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={basicIcon4}
                  className="w-12 h-12 text-[#ff6600] mt-5 mr-3"
                />
                <div>
                  <p className="font-bold text-[#2A254D] text-[20px]">
                    Managers, Project Managers:
                  </p>
                  <p className="text-[#2A254D] text-[20px] leading-[24px]">
                    Who want to get a better understanding on release workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="border-2 border-[#ff6600] rounded-xl p-6 bg-[linear-gradient(180deg,#FCE7D0_0%,#FFF_63.5%)]">
              <h3 className="text-[32px] font-semibold text-[#2A254D] mb-4">
                Projects <span className="text-[#ff6600]">Prerequisites</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img
                    src={basicIcon5}
                    className="w-12 h-12 text-[#ff6600] mt-5 mr-3"
                  />
                  <div>
                    <p className="font-bold text-[#2A254D] text-[20px]">
                      Laptop:
                    </p>
                    <p className="text-[#2A254D] text-[20px] leading-[24px]">
                      To follow the demos and access the UnboxKloud Academy
                      Portal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img
                    src={basicIcon6}
                    className="w-12 h-12 text-[#ff6600] mt-5 mr-3"
                  />
                  <div>
                    <p className="font-bold text-[#2A254D] text-[20px]">
                      Internet:
                    </p>
                    <p className="text-[#2A254D] text-[20px] leading-[24px]">
                      To Access Cloud based Projects hosted on UnboxKloud
                      Academy Portal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 border-2 border-[#ff6600] rounded-xl p-6 bg-[linear-gradient(180deg,#FCE7D0_0%,#FFF_63.5%)]">
              <h3 className="text-[32px] font-semibold text-[#2A254D]  mb-4">
                Who this is <span className="text-[#ff6600]">NOT</span> for.!
              </h3>
              <div className="flex items-start gap-3">
                <img
                  src={basicIcon7}
                  className="w-12 h-12 text-[#ff6600] mt-5 mr-3"
                />
                <div>
                  <p className="font-bold text-[#2A254D] text-[20px]">
                    Experience Engineers:
                  </p>
                  <p className="text-[#2A254D] text-[20px] leading-[24px]">
                    Who already have knowledge on DevOps & Cloud Platform, Web
                    Application Deployment, Micro Services Architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <Button className="lg:px-10 px-5 rounded-[8px] mt-4 py-10 bg-[#ff6600] hover:bg-[#ff6600]/90 lg:text-[40px] text-[25px]">
          Enroll to Basic Projects →
        </Button>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-[32px] text-[#363258] font-semibold text-center mb-8 ">
          What's Included in the Projects
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-1 mb-8 w-auto ml-5 lg:ml-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center text-left gap-2 w-[400px] ",
                (width > 1250) & (index % 2 === 0) && "ml-[30%]",
                (width < 1250) & (index % 2 === 0) && "lg:ml-[10%]"
              )}
            >
              {feature.included ? (
                <div className="rounded-full bg-[#F60] p-1">
                  <Check className="w-[20px] h-[20px] text-[#fff]" />
                </div>
              ) : (
                <div className="rounded-full bg-[#000] p-1">
                  <X className="w-[20px] h-[20px] text-[#fff]" />
                </div>
              )}
              <span className="text-[#2A254D] text-[20px]">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Certification Badges */}
        <div className="flex justify-center gap-8 mb-8">
          <img
            src={Grantee1}
            alt="100% Satisfaction Guaranteed"
            width={176}
            height={176}
          />
          <img
            src={Grantee2}
            alt="100% certification"
            width={176}
            height={176}
          />
        </div>

        <div className="text-center mb-16">
          <Button className="lg:px-10 px-5 rounded-[8px] mt-4 py-10 bg-[#ff6600] hover:bg-[#ff6600]/90 lg:text-[40px] text-[25px]">
            Enroll to Basic Projects →
          </Button>
        </div>
      </div>
    </div>
  );
}
