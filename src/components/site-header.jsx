import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { MobileSidebar } from "./mobile-sidebar";
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

export function SiteHeader({ setSelectedMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [hasShadow, setHasShadow] = React.useState(false);
  const location = useLocation();
  const [hovered, setHovered] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }

      setLastScrollY(window.scrollY);

      // Add shadow when scrolled down
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      // className="top-0 z-40 w-full  bg-background"
      className={`fixed top-0 w-full z-40 bg-background transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${hasShadow ? "shadow-md" : "shadow-none"}`}
    >
      <div className="flex h-22 items-center justify-between max-sm:mx-10 md:mx-10 mx-20">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src={Logo}
              alt="UnboxKloud Logo"
              className="w-auto md:ml-2 cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className="hover:bg-orange-50"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-9">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const IconActive = item.iconActive;
            const isActive = location.pathname === item.href; // Check active route
            const isHovered = hovered === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                to={item.href}
                // onClick={() => setSelectedMenu(item.text)}
                smooth={true}
                duration={1200}
                className={`flex items-center gap-1.5 ${
                  isActive
                    ? "text-[#ff6600] font-semibold"
                    : "text-[#19191a] hover:text-[#ff6600]"
                }`}
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={isActive || isHovered ? item.iconActive : item.icon}
                  alt={item.text}
                  className="w-5 h-5"
                />
                {item.text}
              </Link>
            );
          })}
          {/* <a
            href={"https://unboxkloud.blogspot.com/"}
            target="_blank"
            className={"flex items-center gap-1.5 "}
          >
            <img src={Book1Icon} size={20} />
            {"Blog"}
          </a> */}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://superprofile.bio/store/unboxkloud/signin" target="_blank">
          <Button
            variant="ghost"
            className="text-[#ff6600] text-base font-medium hover:text-[#ff6600] mr-2"
          >
            Log In
          </Button>
          <Button
            variant="SignUp"
            className="bg-[#ff6600] hover:bg-[#ff6600]/90 px-10 py-6 text-white"
          >
            Sign up
          </Button>
          </a>
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar
          isOpen={isMobileMenuOpen}
          setSelectedMenu={setSelectedMenu}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}
