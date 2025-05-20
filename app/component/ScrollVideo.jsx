"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ScrollVideo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Animate scale and size
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["20px", "0px"]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="h-[200vh] bg-white">
      <motion.div
        style={{
          scale: springScale,
          borderRadius: borderRadius,
        }}
        className="fixed top-1/2 left-1/2 w-[200px] h-[120px] -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden shadow-2xl"
      >
        <video
          src="/videos/hats.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      </motion.div>
    </div>
  );
}