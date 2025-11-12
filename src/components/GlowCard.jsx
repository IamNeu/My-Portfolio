import React from "react";
import { motion } from "framer-motion";

const GlowCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative bg-gray-900/60 backdrop-blur-md border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-primary/30 transition-all duration-500 animate-glow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;

