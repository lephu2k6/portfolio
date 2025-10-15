import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/minhphu", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/minhphu", label: "LinkedIn" },
    { icon: <FaFacebook />, href: "https://facebook.com/minhphu", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com/minhphu", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com/minhphu", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#Project" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Contact" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "API Development",
    "System Architecture",
    "Consulting"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Minh Phu
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Software Engineer passionate about building innovative and impactful applications. 
              Let's create something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-400">Lhmp8686@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-400" />
                <span className="text-gray-400">0981 46 0071</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="text-gray-400">Di An, Ho Chi Minh City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Minh Phu. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Crafted with ❤️ and ☕ in Ho Chi Minh City
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;