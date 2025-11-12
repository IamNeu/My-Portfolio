import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-dark text-white"
    >
      {/* Ombre Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-gray-400 leading-relaxed text-center mb-10"
      >
        I’m a passionate frontend developer focused on creating responsive and
        user-friendly web experiences using React, Tailwind CSS, and modern
        JavaScript. I love building visually engaging interfaces and continuously
        learning new technologies to bring ideas to life on the web.
      </motion.p>

      {/* Resume Button */}
      <motion.a
        href="Neeru_Resume.pdf"


        download
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400
          hover:from-teal-400 hover:to-purple-500
          transition-all duration-500 shadow-lg hover:shadow-teal-500/40"
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default About;
