import { Button } from "./ui/button";
import icon1 from "../assets/ac1.svg";
import icon2 from "../assets/ac2.svg";
import icon3 from "../assets/ac3.svg";
import btnarrow from "../assets/btn_arrow.svg";
import { Link } from "react-router-dom";

function AchievementCard({ icon, number, description }) {
  return (
    <div
      className="rounded-[16px] border-[2.4px] border-[#ff6600] h-[184px] p-6 flex flex-col items-start text-start"
      style={{
        background: "linear-gradient(180deg, #FEF7EE 0%, #FFF 82.84%)",
      }}
    >
      {/* Icon */}
      <div className="text-[#ff6600]">{icon}</div>

      {/* Number */}
      <div className="text-[20px] font-semibold text-[#2A254D] leading-[4rem]">
        {number}
      </div>

      {/* Description */}
      <div className="text-[18px] text-[#363258] leading-6 whitespace-nowrap">
        {description}
      </div>
    </div>
  );
}

export function ExploreProjectSection() {
  const achievements = [
    {
      icon: <img src={icon1} alt="icon1" />,
      number: "Basic",
      description: "Explore Basic Projects →",
      href: "/basic",
    },
    {
      icon: <img src={icon2} alt="icon2" />,
      number: "Advance",
      description: "Explore Advance Projects →",
      href: "/advance",
    },
    {
      icon: <img src={icon3} alt="icon3" />,
      number: "Expert",
      description: "Explore Expert Projects →",
      href: "/expert",
    },
  ];

  return (
    <section className="py-[50px] px-4 md:px-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[2.5rem] font-bold text-center">
          Explore <span className="text-orange-500">Projects</span>
        </h2>

        {/* Centered Grid */}
        <div className="flex justify-center mt-[48px] mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {achievements.map((achievement, index) => (
              <Link to={achievement.href} key={index} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <AchievementCard
                  icon={achievement.icon}
                  number={achievement.number}
                  description={achievement.description}
                />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
