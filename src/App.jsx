import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

import Contact from "./components/Contact";
import BackgroundAnimation from "./components/BackgroundGlow";

const App = () => {
  return (
    <div className="relative bg-dark text-white min-h-screen overflow-hidden">
      <BackgroundAnimation />

      {/* NAVBAR ALWAYS ON TOP */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* HERO */}
      <div className="relative z-10">
        <Hero />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-black -z-10"></div>
      </div>
            <Testimonials />

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
