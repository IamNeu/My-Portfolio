import React from "react";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Webhooks"] },
  { category: "Payments & Cloud", items: ["Stripe API", "Stripe Connect", "AWS SNS", "Vercel", "Render", "Cloudflare"] },
  { category: "Auth & Email", items: ["Google OAuth 2.0", "JWT", "Resend", "Custom Domain Email"] },
{ category: "AI & Tools", items: ["LLMs", "RAG Pipelines", "GenAI Workflows", "FastAPI", "ReactFlow", "Dagre", "Prompt Engineering", "Cursor AI"] },];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-dark text-white py-20"
    >
      {/* Heading */}
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
        className="max-w-2xl text-gray-400 leading-relaxed text-center mb-12"
      >
        I'm a Full-Stack Developer and AI Solutions Engineer who builds production-grade SaaS products end-to-end.
        Currently freelancing in the fintech space , I've shipped a complete merchant payment collection platform
        with Stripe integrations, AWS SMS infrastructure, Google OAuth, bulk data pipelines and custom email routing.
        Previously at Infosys supporting enterprise-scale systems, I bring a reliability-first mindset to everything I build.
        I'm drawn to the intersection of AI and real-world product engineering , where LLMs, RAG pipelines, and
        agentic systems solve actual problems, not demos.
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-12"
      >
        {skills.map((group, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-2xl p-5 text-left hover:shadow-[0_0_25px_#4cd4c750] transition-all"
          >
            <h3 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-gray-300 border border-neutral-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

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