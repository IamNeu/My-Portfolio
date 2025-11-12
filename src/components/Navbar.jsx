import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // offset for navbar height
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark/80 backdrop-blur-md border-b border-neutral-800 z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
    <h1 className="text-gradient text-xl font-bold tracking-wide">Neeru</h1>
    <ul className="flex space-x-6 text-gray-300">
      <li><a href="#home" className="hover:text-primary">Home</a></li>
      <li><a href="#about" className="hover:text-primary">About</a></li>
      <li><a href="#projects" className="hover:text-primary">Projects</a></li>
      <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
      <li><a href="#contact" className="hover:text-primary">Contact</a></li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
