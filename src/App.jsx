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
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-green-900 z-[9999] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pixel Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>

            {/* Animated Pixels */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-green-400 rounded-sm"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0,
                    opacity: 0
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>

            {/* Main Intro Content */}
            <div className="relative text-center">
              {/* Pixel Font Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-4 pixel-font"
                  style={{
                    color: '#00ff00',
                    textShadow: `
                      0 0 5px #00ff00,
                      0 0 10px #00ff00,
                      0 0 15px #00ff00,
                      0 0 20px #00ff00,
                      2px 2px 0 #00aa00
                    `,
                    fontFamily: "'Courier New', monospace",
                    letterSpacing: '2px'
                  }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.5
                  }}
                >
                  XIN CHÀO
                </motion.h1>
              </motion.div>

              {/* Pixel Art Hand */}
              <motion.div
                className="text-4xl md:text-6xl mb-8 pixel-emoji"
                style={{
                  filter: 'drop-shadow(0 0 10px #00ff00)'
                }}
                initial={{ rotate: -30, scale: 0, opacity: 0 }}
                animate={{ 
                  rotate: [0, -30, 0, -30, 0], 
                  scale: 1,
                  opacity: 1
                }}
                transition={{
                  rotate: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  },
                  scale: {
                    duration: 0.8,
                    delay: 1,
                  },
                  opacity: {
                    duration: 0.5,
                    delay: 1,
                  }
                }}
              >
                👋
              </motion.div>

              {/* Pixel Loading Bar */}
              <motion.div 
                className="relative w-64 h-6 bg-gray-800 border-2 border-green-400 mx-auto mb-4 overflow-hidden"
                style={{
                  boxShadow: '0 0 10px #00ff00'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1.5, ease: "linear" }}
                />
                {/* Pixel Pattern Overlay */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, transparent 25%, rgba(0, 255, 0, 0.1) 25%, 
                      rgba(0, 255, 0, 0.1) 50%, transparent 50%, transparent 75%, 
                      rgba(0, 255, 0, 0.1) 75%, rgba(0, 255, 0, 0.1))
                    `,
                    backgroundSize: '10px 10px'
                  }}
                />
              </motion.div>

              {/* Pixel Style Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-lg md:text-xl text-green-300 mt-4 pixel-text"
                style={{
                  fontFamily: "'Courier New', monospace",
                  textShadow: '0 0 5px #00ff00',
                  letterSpacing: '1px'
                }}
              >
                &gt; INITIALIZING PORTFOLIO...
              </motion.p>
            </div>

            {/* Corner Pixels */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-green-400" style={{ boxShadow: '0 0 10px #00ff00' }} />
            <div className="absolute top-4 right-4 w-3 h-3 bg-green-400" style={{ boxShadow: '0 0 10px #00ff00' }} />
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-400" style={{ boxShadow: '0 0 10px #00ff00' }} />
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-400" style={{ boxShadow: '0 0 10px #00ff00' }} />
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

      <style jsx>{`
        .pixel-font {
          font-family: 'Courier New', monospace;
          image-rendering: pixelated;
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: grayscale;
        }
        .pixel-emoji {
          image-rendering: pixelated;
          filter: drop-shadow(2px 2px 0 #00aa00);
        }
        .pixel-text {
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
}

export default App;