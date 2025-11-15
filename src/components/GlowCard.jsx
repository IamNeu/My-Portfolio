import React from "react";
import { motion } from "framer-motion";

const GlowCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative bg-gray-900/60w-full h-auto p-4 rounded-xl backdrop-blur-md border border-gray-800 shadow-lg hover:shadow-primary/30 transition-all duration-500 animate-glow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;

