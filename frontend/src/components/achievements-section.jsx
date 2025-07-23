import { Users, FileText, Users2, Briefcase } from 'lucide-react'
import { Button } from "./ui/button"
import icon1 from '../assets/ac1.svg';
import icon2 from '../assets/ac2.svg';
import icon3 from '../assets/ac3.svg';
import icon4 from '../assets/ac4.svg';
import btnarrow from '../assets/btn_arrow.svg';

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
      <div className="text-[20px] font-semibold text-[#2A254D] leading-[4rem]">{number}</div>

      {/* Description */}
      <div className="text-[18px] text-[#363258] leading-6 whitespace-nowrap">{description}</div>
    </div>
  )
}

export function AchievementsSection() {
  const achievements = [
    {
      icon: <img src={icon1} alt='icon1' />,
      number: "1,000",
      description: "Happy Students"
    },
    {
      icon: <img src={icon2} alt='icon2' />,
      number: "980+",
      description: "ATS Resumes Prepared"
    },
    {
      icon: <img src={icon3} alt='icon3' />,
      number: "950+",
      description: "Students Attending Interviews"
    },
    {
      icon: <img src={icon4} alt='icon4' />,
      number: "750+",
      description: "Job Offers Secured"
    }
  ]

  return (
    <section className="py-[50px] px-4 md:px-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[2.5rem] font-bold text-center">
          Our <span className="text-orange-500">Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[12px] mt-[48px] mb-10">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              number={achievement.number}
              description={achievement.description}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-[8px]"
          >
            Join UnboxKloud
            <span className="ml-2"><img src={btnarrow} alt="btnarrows" /></span>
          </Button>
        </div>
      </div>
    </section>
  )
}

