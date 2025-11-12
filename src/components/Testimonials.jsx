import React from "react";
import { motion } from "framer-motion";
import GlowCard from "../components/GlowCard";

const testimonials = [
  {
    name: "Sumi Barman",
    company: "Infosys",
    feedback:
      "Neeru is a dedicated and quick learner. Her ability to solve issues efficiently really stood out in our projects.",
  },
  {
    name: "Dhaval Sharma",
    company: "Freelance",
    feedback:
      "Loved collaborating with Neeru — her attention to detail and sense of design always make interfaces feel intuitive and polished.",
  },
  {
    name: "Priyank Sharma",
    company: "Coco Neo",
    feedback:
      "Neeru brings creative problem-solving to every project. Her knowledge and teamwork skills make her a great asset.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen bg-dark text-white py-20 px-6 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Gradient Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-teal-400"
        >
          What People Say
        </motion.h2>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard>
                <p className="italic text-gray-300 mb-6 text-base leading-relaxed">
                  "{t.feedback}"
                </p>
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-primary">{t.company}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
