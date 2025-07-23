"use client";

import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import Logo from "../assets/logo.svg";
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
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const menuItems = [
  {
    href: "/",
    icon: HomeIcon,
    iconActive: HomeIconActive,
    text: "Home",
    isActive: true,
  },
  // {
  //   href: "/",
  //   icon: ProjectIcon,
  //   iconActive: ProjectActiveIcon,
  //   text: "Projects",
  // },
  { href: "/basic", icon: BookIcon, iconActive: BookActiveIcon, text: "Basic" },
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
  // { href: "https://unboxkloud.blogspot.com/", icon: Book1Icon, text: "Blogs" },
];

export function MobileSidebar({ isOpen, onClose, setSelectedMenu }) {
  // Handle clicking outside to close
  const sidebarRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen
            ? "opacity-0 pointer-events-none"
            : "opacity-0 pointer-events-none"
        )}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 w-[280px] h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-lg shadow-gray-400/50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/">
            <img src={Logo} alt="UnboxKloud Logo" className="w-auto ml-1" />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-orange-50"
          >
            <X className="h-5 w-5 text-gray-500" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto  p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const IconActive = item.iconActive;
              const isActive = location.pathname === item.href; // Check active route
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  to={item.href}
                  smooth={true}
                  duration={1200}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "text-[#ff6600] bg-orange-50"
                      : "text-[#19191a] hover:text-[#ff6600] hover:bg-orange-50"
                  )}
                  onClick={() => {
                    // setSelectedMenu(item.text);
                    onClose();
                  }}
                >
                  {isActive ? (
                    <img src={IconActive} alt={item.text} size={20} />
                  ) : (
                    <img src={Icon} alt={item.text} size={20} />
                  )}
                  <span>{item.text}</span>
                </Link>
              );
            })}
            {/* <a
              href={"https://unboxkloud.blogspot.com/"}
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors"
            >
              <img src={Book1Icon} size={20} />
              {"Blog"}
            </a> */}
          </div>
        </nav>

        {/* Auth Buttons */}
        <div className="p-4">
        <a href="https://superprofile.bio/store/unboxkloud/signin" target="_blank">
          <Button
            variant="ghost"
            className="w-full justify-start text-[#19191a] hover:text-[#ff6600] hover:bg-orange-50"
            onClick={onClose}
          >
            Log In
          </Button>
          <Button
            className="w-full bg-[#ff6600] hover:bg-[#ff6600]/90 text-white mt-2"
            onClick={onClose}
          >
            Sign up
          </Button>
          </a>
        </div>
      </div>
    </>
  );
}
