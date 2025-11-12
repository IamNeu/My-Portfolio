import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-dark text-white relative overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mb-4 gradient-text text-center"
      >
        Let’s Connect
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-gray-400 max-w-xl mb-10 text-base font-normal leading-relaxed"
      >
        I’m open to new opportunities and collaborations.  
        Feel free to reach out — I’d love to connect and create something impactful together!
      </motion.p>

      {/* Contact Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <a
          href="mailto:neerusometimes@gmail.com"
          className="flex items-center gap-3 bg-white/10 hover:bg-primary/20 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#4cd4c750]"
        >
          <Mail className="w-5 h-5 text-primary" />
          <span className="text-gray-300">Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/neeru-nayak-a280b416/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-white/10 hover:bg-primary/20 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#4cd4c750]"
        >
          <Linkedin className="w-5 h-5 text-primary" />
          <span className="text-gray-300">LinkedIn</span>
        </a>

        <a
          href="https://github.com/IamNeu"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-white/10 hover:bg-primary/20 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#4cd4c750]"
        >
          <Github className="w-5 h-5 text-primary" />
          <span className="text-gray-300">GitHub</span>
        </a>
      </motion.div>

      {/* Footer */}
      <p className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Neeru Nayak. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
