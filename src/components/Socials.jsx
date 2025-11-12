import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="fixed left-4 top-1/3 flex flex-col gap-4 z-50">
      <a href="https://github.com/IamNeu" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/neeru-nayak-a280b416/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary">
        <FaLinkedin size={24} />
      </a>
      <a href="mailto:neerusometimes@gmail.com" className="text-gray-400 hover:text-primary">
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default Socials;
