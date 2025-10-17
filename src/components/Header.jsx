import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import { containerVariants, itemVariants, imageVariants } from "../animations/animations";
import img from "../assets/img/lephu.jpg";

const Header = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ["Backend Developer", "Student"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(150);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };


  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div id = "home" className="bg-gradient-to-br from-background to-gray-50 mb-30">
      <Navbar />

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-20 md:pt-28 px-6 md:px-8 max-w-6xl mx-auto pb-16"
      >
        {/* Left Column :))  */}
        <div className="md:w-1/2 p-4 md:p-8 space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
              Hi, I'm Minh Phu
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl text-gray-700 font-medium">
              {text}
              <span className="border-r-2 border-gray-700 animate-pulse"></span>
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed text-lg">
            I'm a sophomore majoring in Information Technology at the University
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

        {/* Right Column:)))  */}
        <motion.div 
          variants={imageVariants}
          className="md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            
            <div className="absolute inset-2 bg-gray-50 rounded-full" />

            
            <motion.div 
              className="relative p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src={img}
                alt="Hero"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
