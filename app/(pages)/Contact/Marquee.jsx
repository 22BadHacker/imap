'use client'
import React from "react";
import { motion } from "framer-motion";
// import "./Marquee.css"; // For styling

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: ["100%", "-100%"], // Move from right to left
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust speed
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Add your content here */}
        <span>🚀 Welcome to the Infinite Marquee! 🚀</span>
        <span>🔥 Build stunning UIs with Framer Motion! 🔥</span>
        <span>💻 Design meets development! 💻</span>
      </motion.div>
      <motion.div
        className="marquee"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Duplicate content for seamless effect */}
        <span>🚀 Welcome to the Infinite Marquee! 🚀</span>
        <span>🔥 Build stunning UIs with Framer Motion! 🔥</span>
        <span>💻 Design meets development! 💻</span>
      </motion.div>
      <motion.div
        className="marquee"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Duplicate content for seamless effect */}
        <span>🚀 Welcome to the Infinite Marquee! 🚀</span>
        <span>🔥 Build stunning UIs with Framer Motion! 🔥</span>
        <span>💻 Design meets development! 💻</span>
      </motion.div>
      <motion.div
        className="marquee"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Duplicate content for seamless effect */}
        <span>🚀 Welcome to the Infinite Marquee! 🚀</span>
        <span>🔥 Build stunning UIs with Framer Motion! 🔥</span>
        <span>💻 Design meets development! 💻</span>
      </motion.div>
    </div>
  );
};

export default Marquee;