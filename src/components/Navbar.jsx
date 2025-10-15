import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaBriefcase, FaFolder, FaCode, FaEnvelope } from "react-icons/fa";
import RevealOnScroll from "../animations/RevealOnScroll";



export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "Experience", "Project", "skill", "contact"];
    const sections = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((s) => s.el);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.2 } // 👈 giảm bớt margin
      );
      

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Experience", href: "#Experience", icon: <FaBriefcase /> },
    { name: "Project", href: "#Project", icon: <FaFolder /> },
    { name: "Skill", href: "#skill", icon: <FaCode /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <RevealOnScroll>
    <div className="animate-slideDown fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl bg-white bg-opacity-80 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm py-2 px-6">
      <nav className="flex justify-center items-center gap-6 font-medium text-gray-600 text-sm">
        {menuItems.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
              active.toLowerCase() === name.toLowerCase()
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-900 hover:text-white"
            }`}
          >
            {icon}
            {name}
          </a>
        ))}
      </nav>
      
    </div>
    </RevealOnScroll>
    
    
  );
}    
