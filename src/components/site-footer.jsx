import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import FLogo from "../assets/fLogo.svg";
import { cn } from "../lib/utils";
import HomeIconActive from "../assets/Home 05.svg";
import HomeIcon from "../assets/Home05Active.png";
import ProjectIcon from "../assets/Activity.svg";
import ProjectActiveIcon from "../assets/ActivityActive.png";
import BookIcon from "../assets/Book.svg";
import BookActiveIcon from "../assets/BookActive.png";
import CodeIcon from "../assets/Code.svg";
import CodeActiveIcon from "../assets/CodeActive.png";
import TeacherIcon from "../assets/Teacher.svg";
import TeacherActiveIcon from "../assets/TeacherActive.png";
import Book1Icon from "../assets/Book1.svg";

const quickLinks = [
  {
    title: "Quick Links",
    links: [
      // { href: "/", text: "Home" },
      // // { href: "/projects", text: "Projects" },
      // { href: "/basic", text: "Basic" },
      // { href: "/advance", text: "Advance" },
      // { href: "/expert", text: "Expert" },
      // { href: "/logs", text: "Blogs" },
      {
        href: "/",
        icon: HomeIcon,
        iconActive: HomeIconActive,
        text: "Home",
        isActive: true,
      },
      {
        href: "/basic",
        icon: BookIcon,
        iconActive: BookActiveIcon,
        text: "Basic",
      },
      {
        href: "/advance",
        icon: CodeIcon,
        iconActive: CodeActiveIcon,
        text: "Advance",
      },
      {
        href: "/expert",
        icon: TeacherIcon,
        iconActive: TeacherActiveIcon,
        text: "Expert",
      },
      { href: "https://unboxkloud.blogspot.com/", icon: Book1Icon, text: "Blogs" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "/our-policy", text: "Our Policy" },
      { href: "/refund-policy", text: "Refund Policy" },
      { href: "/terms-and-conditions", text: "Terms and Conditions" },
      { href: "/refer-and-earn", text: "Refer & Earn" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61567494097438",
    icon: Facebook,
    text: "Facebook",
  },
  {
    href: "https://www.instagram.com/unboxkloud/",
    icon: Instagram,
    text: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/unboxkloud/",
    icon: Linkedin,
    text: "Linkedin",
  },
  {
    href: "https://www.youtube.com/@UnboxKloud",
    icon: Youtube,
    text: "YouTube",
  },
];

export function SiteFooter() {
  return (
    <footer id="footer">
      <div className="bg-[#FEF8F1] text-[#19191a] py-16">
        <div className=" mx-auto md:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Contact Section */}
            <div className="space-y-6 ml-20">
              <img src={FLogo} alt="logo" />
              <div className="space-y-1">
                <a
                  href="tel:+974-3365-9171"
                  className="flex items-center gap-3 text-[#19191A] hover:text-[#ff6600]  text-[16px] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#ff6600]" />
                  +974-3365-9171
                </a>
                <a
                  href="mailto:support@unboxkloud.com"
                  className="flex items-center gap-3 text-[#19191A] text-[16px] hover:text-[#ff6600] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#ff6600]" />
                  support@unboxkloud.com
                </a>
              </div>
            </div>

            {/* Quick Links Sections */}
            {quickLinks.map((section, index) => (
              <div key={index} className={" ml-20"}>
                <h3 className="text-[18px] font-medium">{section.title}</h3>
                <ul className="mt-[10px]">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="flex">
                      {link.icon && (
                        <img
                          src={link.icon}
                          alt={link.text}
                          className="w-5 h-5 mr-2"
                        />
                      )}
                      <a
                        href={link.href}
                        target={link.text === "Blogs" && "_blank"}
                        className="text-[#333743] text-[16px] hover:text-[#ff6600] transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links Section */}
            <div className="ml-20">
              <h3 className="text-[18px] font-medium">Social Links</h3>
              <ul className="mt-[10px]">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index} className="mb-[10px]">
                      <a
                        href={link.href}
                        target="_blank"
                        className="flex items-center gap-3 text-[#333743] hover:text-[#ff6600] transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                        {link.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#FEF8F1] text-[#19191A] text-[16px] py-4 border-t border-solid border-[#DDDEE0]">
        <div className="max-w-7xl mx-auto px-4 md:px-[100px] text-center font-normal">
          UnboxKloud - All Rights Reserved © Copyright 2025
        </div>
      </div>
    </footer>
  );
}
