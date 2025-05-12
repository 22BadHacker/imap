// components/LoadingScreen.jsx

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">IMAP</h1>
        <p className="text-lg mt-4 text-gray-600 italic">
          Préparez-vous à découvrir, apprendre et créer...
        </p>

        <div className="mt-8">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-primary-500 rounded-full animate-spin mx-auto" />
        </div>
      </motion.div>
    </div>
  );
}
