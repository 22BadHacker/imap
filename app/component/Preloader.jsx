// Preloader.jsx
'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PreloaderCountdown = () => {
  const [count, setCount] = useState(100);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 10), 500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <AnimatePresence>
      {count >= 0 && (
        <motion.div
          className="fixed inset-0 bg-black text-white flex items-end justify-end p-10 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            key={count}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-[120px] font-black leading-none"
          >
            {count === 0 ? "Go!" : count}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreloaderCountdown;
