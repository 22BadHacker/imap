// components/LetterReveal.js
'use client';

import { motion } from 'framer-motion';

export default function LetterReveal({ text }) {
  const letters = text.split('');

  return (
    <div className="flex flex-wrap justify-center text-3xl md:text-5xl font-bold">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
