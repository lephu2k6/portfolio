import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import { containerVariants, itemVariants, imageVariants } from "../animations/animations";
import img from "../assets/img/lephu.jpg";

const Header = () => {

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div className="bg-gradient-to-br from-background to-gray-50 mb-30">
      <Navbar />

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-20 md:pt-28 px-6 md:px-8 max-w-6xl mx-auto pb-16"
      >
        {/* Left Column */}
        <div className="md:w-1/2 p-4 md:p-8 space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
              Hi, I'm Minh Phu
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl text-gray-700 font-medium">Software Engineer</h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed text-lg">
            I'm a freshman majoring in Information Technology at the University
            of Transport in Ho Chi Minh City, driven by a strong passion for
            software development. My goal is to become a skilled full-stack
            software engineer capable of building innovative and impactful
            applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-500">
            <FaLocationDot className="text-red-500 text-lg" />
            <span>Di An, Ho Chi Minh City</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-black text-white shadow-lg font-medium text-sm rounded-full flex items-center gap-2 hover:bg-gray-900 transition-all hover:scale-105 active:scale-95">
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-white text-black border border-gray-200 shadow-lg font-medium text-sm rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">
              Contact Me
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div 
          variants={imageVariants}
          className="md:w-1/2 flex justify-center md:justify-end w-full h-full"
        >
          <div className="relative">
            <img
              src={img}
              alt="Hero"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
            <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border-2 border-gray-200 -z-10" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
