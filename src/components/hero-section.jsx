"use client";

import { Button } from "./ui/button";
import { FileText, Users } from "lucide-react";
import HeroImage from "../assets/HeroImage.png";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute  bg-[#FEF7EE] rounded-full opacity-20 blur-3xl" />

      <div className="relative grid md:grid-cols-2 gap-12 mx-auto ">
        {/* Left Column - Text Content */}
        <div className="space-y-8 pl-20 mt-20 max-sm:mt-10 max-sm:pl-6">
          <div className="space-y-4 pt-16">
            <h1 className="text-[#2A254D] text-5xl lg:text-6xl font-normal leading-tight">
              Get Hired as
            </h1>
              <h2 className="flex text-7xl font-black pt-2 float-end  flex-wrap my-2 max-sm:text-4xl max-sm:float-start max-sm:pl-6">
                <span className="text-[#ff6600]">Dev</span>
                <span className="text-[#2D2B5A]">Ops</span>
                <span className="text-[#2D2B5A] px-4">&</span>
                <span className="text-[#ff6600]">Clo</span>
                <span className="text-[#2D2B5A]">ud</span>
              </h2>
              <h6 className="text-[#2A254D] text-7xl font-normal text-right pl-22 max-sm:text-center max-sm:text-4xl max-sm:pl-14">Engineer</h6>
            

            <h3 className="text-4xl font-normal text-[#363258] max-sm:float-start">
              by doing step-by-step
            </h3>

            <h2 className="flex text-6xl font-bold text-[#2D2B5A] max-sm:float-start max-sm:text-2xl">
              <span className="text-[#ff6600] pr-4">Basic</span> to{" "}
              <span className="text-[#ff6600] px-4">Expert</span>{" "}
              <span>Projects</span>
            </h2>
          </div>
          <div className="pt-10 max-sm:float-start max-sm:ml-20 max-sm:pl-12">
          <Button
            size="lg"
            className="bg-[#ff6600] hover:bg-[#ff6600]/90 text-xl text-white px-8 py-6 font-semibold rounded-lg"
          >
            Get Started
          </Button>
          </div>
          
        </div>

        {/* Right Column - Image and Floating Elements */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative z-10">
            <img
              src={HeroImage}
              className="w-full h-auto"
              size={20}
              width={600}
              height={600}
              alt="DevOps Engineer with laptop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
