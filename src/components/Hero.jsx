import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; 
import BackgroundGlow from "./BackgroundGlow"; 


const Hero = () => {
   
  return (
    <section

      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 bg-dark text-white relative overflow-hidden">
      {/* Soft glowing gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"></div>

      {/* Left side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">

        <h1 className="text-4xl sm:text-3xl font-bold mb-2">
  Hi, I'm{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400">
    Neeru Nayak
  </span>
</h1>
     
        <h2 className="text-xl sm:text-6xl text-white-400 mb-4">
          Frontend Developer & React Enthusiast
        </h2>
        <p className="max-w-lg text-gray-400 mb-6 leading-relaxed">
          I craft responsive, user-focused web experiences using React,
          Tailwind, and modern UI tools.
        </p>

        <motion.a
  href="#projects"
  whileHover={{ scale: 1.05 }}
  className="px-6 py-3 rounded-xl text-white font-semibold
    bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400
    hover:from-teal-400 hover:to-purple-500
    transition-all duration-500 shadow-lg hover:shadow-teal-500/40"
>
           View My Work
</motion.a>

      </motion.div>

     {/* Right side - Profile image */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
  className="flex-1 flex justify-center items-center mb-10 md:mb-0 z-10"
>
  <div className="flex justify-center items-center">
    <div
      className="
        relative 
        w-56 sm:w-64 md:w-80 lg:w-[420px] 
        aspect-square 
        rounded-full p-[6px]
        bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400
        shadow-[0_0_30px_8px_rgba(45,212,191,0.35)]
        max-w-[90%]
      "
    >
      <div className="rounded-full overflow-hidden w-full h-full">
        <img
          src={profile}
          alt="Neeru Nayak"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>
  </div>
</motion.div>

    </section>
  );
};

export default Hero;
