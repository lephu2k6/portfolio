import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img/lephu.jpg";
import { FaUser, FaLocationDot, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa6";
import { FaUniversity, FaDownload } from "react-icons/fa";
import RevealOnScroll from "../animations/RevealOnScroll";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageAnim = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const buttonAnim = {
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" },
    tap: { scale: 0.95 }
  };

  return (
    <RevealOnScroll>
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto px-4 py-12 mt-30"
    >
      {/* Image Section */}
      <motion.div 
        variants={imageAnim}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative group">
          <img 
            src={img} 
            alt="About me" 
            className="rounded-xl shadow-2xl max-w-sm w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-gray-200 -z-10 group-hover:-bottom-2 group-hover:-right-2 transition-all duration-300" />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        variants={container}
        className="w-full md:w-1/2 space-y-6"
      >
        <motion.h1 variants={item} className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
          About Me
        </motion.h1>
        
        <motion.p variants={item} className="text-gray-600 leading-relaxed text-lg">
          I'm a freshman majoring in Information Technology at the University
          of Transport in Ho Chi Minh City. I have a passion for building
          innovative and impactful applications, and my goal is to become a
          skilled full-stack software engineer.
        </motion.p>

        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Info Cards with staggered animation */}
          {[
  { icon: <FaUser className="text-xl text-gray-700" />, title: "Name", content: "Minh Phu" },
  { icon: <FaLocationDot className="text-xl text-gray-700" />, title: "Location", content: "Di An, Ho Chi Minh City" },
  { icon: <FaEnvelope className="text-xl text-gray-700" />, title: "Email", content: "Lhmp8686@gmail.com" },
  { icon: <FaUniversity className="text-xl text-gray-700" />, title: "Studying At", content: "University of Transport, Ho Chi Minh City" },
  { icon: <FaPhone className="text-xl text-gray-700" />, title: "Phone", content: "0981 46 0071" },
  { icon: <FaBriefcase className="text-xl text-gray-700" />, title: "Profession", content: "Software Engineer" }
].map((card, index) => (
  <motion.div
    key={index}
    variants={item}
    whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
    className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3 transition-all hover:bg-gray-50"
  >
    {card.icon}
    <div>
      <span className="text-sm font-bold text-gray-900">{card.title}</span>
      <p className="text-gray-500 text-sm">{card.content}</p>
    </div>
  </motion.div>
))}
        </motion.div>

        {/* Buttons */}
        <motion.div variants={item} className="flex gap-4 mt-8">
          <motion.button
            variants={buttonAnim}
            whileHover="hover"
            whileTap="tap"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg"
          >
            <FaDownload />
            Download My CV
          </motion.button>
          <motion.button
            variants={buttonAnim}
            whileHover="hover"
            whileTap="tap"
            className="bg-white text-black border border-gray-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-gray-50"
          >
            Hire Me Now
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
    </RevealOnScroll>
  );
};

export default About;