import { useState, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Experiment from "./components/Experiment";
import MyProject from "./components/Project";
import MySkill from "./components/Skill";
import MyContact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 z-[9999] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>

            {/* Main Intro Content */}
            <div className="relative text-center">
              {/* Welcome Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 10,
                    delay: 0.5
                  }}
                >
                  Xin chào
                </motion.h1>
              </motion.div>

              {/* Hand Wave Emoji */}
              <motion.div
                initial={{ rotate: -30, scale: 0 }}
                animate={{ rotate: [0, -30, 0, -30, 0], scale: 1 }}
                transition={{
                  rotate: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  },
                  scale: {
                    duration: 0.5,
                    delay: 1,
                  },
                }}
                className="text-6xl md:text-8xl mb-8"
              >
                👋
              </motion.div>

              {/* Loading Dots */}
              <motion.div className="flex justify-center space-x-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: [0, 1, 0], 
                      y: [10, -10, 10] 
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mt-8 font-light"
              >
                Welcome to my portfolio
              </motion.p>
            </div>

            {/* Bottom Progress Bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header />
          <About />
          <Experiment />
          <MyProject />
          <MySkill />
          <MyContact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;