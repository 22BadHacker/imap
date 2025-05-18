// components/Preloader.tsx
"use client"; // Required for Framer Motion in Next.js 13+

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed here (milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>

    <motion.div exit={{height: '0%', filter: 'blur(5px)', transition: {duration: 0.3, delay: 0.5}}} initial={{height: '100%'}} transition={{duration: 0.3}} className="fixed inset-0 bg-[#f0f0f0] flex items-center justify-center z-50">
      <div className="text-center flex items-center sm:flex-row flex-col gap-4">
        <div
          
          className="text-[#111111] text-sm font-[800] mb-3"
        >
          Institut des Métiers Appliqués Privé. <span className="text-[12px] font-[800] relative -top-[2px]">&reg;</span>
        </div>
        
        <div className="sm:w-[200px] w-[240px] h-[1px] bg-[#b3b4af]  overflow-hidden mx-auto mb-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-[#4a453e] rounded-full"
          />
        </div>
        
        <div
          
          className="text-[#111111] text-[15px] font-[700] mb-3 font-sans"
        >
          {progress}%
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}