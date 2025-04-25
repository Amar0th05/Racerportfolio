import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { BsYoutube, BsInstagram, BsEnvelope } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import MediaGallery from "./MediaGallery"; // Import it at top

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const links = ["Home", "About", "Career", "Achievements"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 pt-3 pb-7 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center leading-tight">
          <div className="flex flex-col">
            <span
              className="text-3xl md:text-3xl font-extrabold 
                bg-gradient-to-r from-red-600 to-red-400 
                bg-clip-text text-transparent tracking-widest uppercase"
            >
              Navaneeth Kumar
            </span>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-10 text-white text-2xl font-medium items-center">
          {links.map((link) => (
            <ScrollLink
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="group relative cursor-pointer transition-all"
            >
              <span className="group-hover:text-red-500 transition duration-300">
                {link}
              </span>
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}

          {/* Media link (desktop) */}
          <span
            onClick={() => setShowGallery(true)}
            className="group relative cursor-pointer transition-all"
          >
            <span className="group-hover:text-red-500 transition duration-300">
              Media
            </span>
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </span>

          {/* Icons */}
          <a
            href="https://youtube.com/@navaneeth.27?si=7gcZYyHLE11e9n9w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-white transition duration-300 transform hover:scale-125"
          >
            <BsYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/navaneeth.27?igsh=aDl0eG93cWU1NDJm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-white transition duration-300 transform hover:scale-125"
          >
            <BsInstagram size={24} />
          </a>
          <a
            href="mailto:teamnavaneeth.27@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-white transition duration-300 transform hover:scale-125"
          >
            <BsEnvelope size={28} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-black bg-opacity-90">
          {links.map((link) => (
            <ScrollLink
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white text-xl cursor-pointer hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </ScrollLink>
          ))}

          {/* Media link (mobile) */}
          <span
            onClick={() => {
              setShowGallery(true);
              setIsOpen(false);
            }}
            className="text-white text-xl cursor-pointer hover:text-red-500 transition"
          >
            Media
          </span>

          {/* Mobile Icons */}
          <div className="flex gap-6 text-2xl text-white mt-2">
            <a
              href="https://youtube.com/@navaneeth.27?si=7gcZYyHLE11e9n9w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-white transition duration-300 transform hover:scale-125"
            >
              <BsYoutube />
            </a>
            <a
              href="https://www.instagram.com/navaneeth.27?igsh=aDl0eG93cWU1NDJm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white transition duration-300 transform hover:scale-125"
            >
              <BsInstagram />
            </a>
            <a
              href="mailto:teamnavaneeth.27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-white transition duration-300 transform hover:scale-125"
            >
              <BsEnvelope size={28} />
            </a>
          </div>
        </div>
      )}

      {/* Moving bike icon */}
      <FontAwesomeIcon
        icon={faMotorcycle}
        className="absolute text-green-500 transition-transform duration-300"
        style={{
          left: `${scrollPercent}%`,
          transform: "translateX(-50%) rotate(-360deg)",
          fontSize: "2rem",
          bottom: "10px",
        }}
      />

      {/* Scroll progress bar */}
      <div className="relative h-[6px] w-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </div>

      {/* Media Gallery Modal */}
      {showGallery && <MediaGallery onClose={() => setShowGallery(false)} />}
    </div>
  );
};

export default Navbar;
