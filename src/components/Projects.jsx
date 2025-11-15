import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Recipe Finder",
    desc: "A web app to discover recipes by ingredients with dynamic API fetching.",
    github: "https://github.com/IamNeu/RecipeFinderWebApp",
    demo: "https://recipe-f-inder-e2lh.vercel.app/",
  },
  {
    title: "My Portfolio Website",
    desc: "You’re looking at it right now 👀 — a React-based portfolio featuring animations, custom glow borders, and a clean responsive design.",
    github: "https://github.com/IamNeu/my-portfolio",
    demo: "https://vercel.com/neus-projects-4adbba5e",
    featured: true,
  },
  {
    title: "Calculator",
    desc: "A simple and responsive calculator built with JavaScript.",
    github: "https://github.com/IamNeu/Simple-Calculator",
    demo: "https://simple-calculator-ten-amber.vercel.app/",
  },
  {
    title: "Dynamic Quiz App",
    desc: "An interactive React app that dynamically generates quiz questions.",
    github: "https://github.com/IamNeu/Dynamic-Quiz-App",
    demo: "https://dynamic-quiz-app-omega.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-dark text-white py-20 px-4"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold mb-12 bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] 
              ${
                p.featured
                  ? "bg-neutral-900 border border-transparent shadow-[0_0_30px_#6ee7b740] hover:shadow-[0_0_35px_#c084fc80]"
                  : "bg-neutral-900 hover:shadow-[0_0_25px_#4cd4c750]"
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gradient">
              {p.title}
              {p.featured && (
                <span className="ml-2 text-sm font-medium text-purple-300">
                  ✨ Featured
                </span>
              )}
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              {p.desc}
            </p>

            <div className="flex justify-between text-sm sm:text-base">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Github size={16} /> GitHub
              </a>

              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:underline"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
