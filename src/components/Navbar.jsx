import React from "react";
import { FaHome, FaUser, FaBriefcase, FaFolder, FaCode, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Experience", href: "#Experience", icon: <FaBriefcase /> },
    { name: "Project", href: "#Project", icon: <FaFolder /> },
    { name: "Skill", href: "#skill", icon: <FaCode /> },
    { name: "Contact", href: "#Contact", icon: <FaEnvelope /> },
  ];

  return (
    
    <div className="animate-slideDown fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl bg-white bg-opacity-80 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm py-2 px-6">
      <nav className="flex justify-center items-center gap-6 font-medium text-gray-600 text-sm">
        {menuItems.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            {icon}
            {name}
          </a>
        ))}
      </nav>
      
    </div>
    
    
  );
}
    