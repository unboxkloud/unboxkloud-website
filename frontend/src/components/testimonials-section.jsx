import { Star, Mail } from "lucide-react";
import john from "../assets/john.png";
import GmailIcon from "../assets/gmailIcon.png";
import WhatsAppIcon from "../assets/whatsapp.png";
import useWindowSize from "../customHooks/useWindowSize";

function TestimonialCard({ name, username, text, platform }) {
  console.log("platform", platform)
  return (
    <div className="bg-white px-8 py-6 rounded-[16px] border-2 border-[#F5F7F9] transition-transform hover:-translate-y-1 hover:border-[#F60] hover:bg-gradient-to-b from-[#FEF7EE] to-[#FFF]">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={john}
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-[24px] text-[#2A254D]">{name}</h3>
          <p className="text-[#4A4769] text-[18px] -mt-[5px]">{username}</p>
        </div>

        {platform === "gmail" && (
          <img src={GmailIcon} alt="Gmail" width={56} height={56} />
        )}
        {platform === "whatsapp" && (
          <img src={WhatsAppIcon} alt="WhatsApp" width={56} height={56} />
        )}
      </div>
      <p className="text-[#4A4769] mb-4 text-[18px] leading-[20px]">{text}</p>
      <div className="flex gap-[12px]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-8 h-8 fill-[#ff6600] text-[#ff6600]" />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const { width } = useWindowSize();
  const testimonials = [
    {
      name: "John Doe",
      username: "@johndoe",
      platform: "",
      text: `“As a startup looking to establish our brand presence in a competitive market, finding the right digital marketing partner was crucial for our success We're thrilled with the results we've seen so far and look forward to achieving even greater milestones with SEOC.”`,
    },
    {
      name: "John Doe",
      username: "@johndoe",
      platform: "gmail",
      text: `“As a startup looking to establish our brand presence in a competitive market, finding the right digital marketing partner was crucial for our success We're thrilled with the results we've seen so far and look forward to achieving even greater milestones with SEOC.”`,
    },
    {
      name: "John Doe",
      username: "@johndoe",
      platform: "whatsapp",
      text: `“As a startup looking to establish our brand presence in a competitive market, finding the right digital marketing partner was crucial for our success We're thrilled with the results we've seen so far and look forward to achieving even greater milestones with SEOC.”`,
    },
    {
      name: "John Doe",
      username: "@johndoe",
      platform: "whatsapp",
      text: `“As a startup looking to establish our brand presence in a competitive market, finding the right digital marketing partner was crucial for our success We're thrilled with the results we've seen so far and look forward to achieving even greater milestones with SEOC.”`,
    },
    {
      name: "John Doe",
      username: "@johndoe",
      platform: "gmail",
      text: `“As a startup looking to establish our brand presence in a competitive market, finding the right digital marketing partner was crucial for our success We're thrilled with the results we've seen so far and look forward to achieving even greater milestones with SEOC.”`,
    },
    {
      name: "John Doe",
      username: "@johndoe",
      platform: "gmail",
      text: `“As a startup looking to establish our brand presence in a competitive market, finding the right digital marketing partner was crucial for our success We're thrilled with the results we've seen so far and look forward to achieving even greater milestones with SEOC.”`,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[18px] text-[#474C59]">Testimonials</p>
          <h2 className="text-[40px] font-semibold">
            What Our <span className="text-[#ff6600]">Student Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mt-20 pt-8 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              className={`${
                (index % 3 === 1) & (width > 950) &&
                "lg:transform -translate-y-16"
              }`} // Apply negative translation to the second column
            >
              <TestimonialCard key={index} {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
