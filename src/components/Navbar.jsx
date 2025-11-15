import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
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

        {/* Logo */}
        <h1 className="text-gradient text-xl font-bold tracking-wide">Neeru</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li><a href="#home" className="hover:text-primary">Home</a></li>
          <li><a href="#about" className="hover:text-primary">About</a></li>
          <li><a href="#projects" className="hover:text-primary">Projects</a></li>
          <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 bg-dark/90 px-6 pb-4 text-gray-300 border-t border-neutral-800">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
