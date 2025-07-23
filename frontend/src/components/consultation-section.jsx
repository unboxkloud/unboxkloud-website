import { Button } from "./ui/button";

export function ConsultationSection() {
  return (
    <section className="px-4 md:px-[100px] py-16">
      <div className="mx-auto">
        <div className="bg-[#161F2D] rounded-[16px] px-6 py-16 md:py-24 text-center">
          <div className="mx-auto">
            <span className="text-[#F60] text-[18px]">
              DevOps & Cloud Engineer
            </span>

            <h3 className="mt-8 text-[56px] leading-[58px] font-bold text-white">
              Not sure where to <span className="text-[#ff6600]">Start?</span>
            </h3>

            <h3 className=" text-[56px] leading-[58px] font-bold text-white">
              Book a <span className="text-[#ff6600]">30 Minutes</span>{" "}
              Consulting Call
            </h3>

            <h4 className=" text-[56px] leading-[58px] font-bold text-white">
              with our <span className="text-[#ff6600]">Industry Experts</span>
            </h4>

            <p className="my-8 mx-[10%] text-white/90 text-[18px] leading-relaxed">
              Join thousands of professionals who've built their dream careers
              with UnboxKloud Academy. Get started today with hands-on projects,
              expert mentorship, and career-ready skills!
            </p>

            <Button
              className="px-12 py-8 bg-[#ff6600] hover:bg-[#ff6600]/90 text-white text-[22px] rounded-lg"
              onClick={() => {
                window.open(
                  "https://superprofile.bio/bookings/unboxkloud",
                  "_blank"
                );
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
