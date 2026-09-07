// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { name: 'Home', ref: refs.homeRef },
    { name: 'About', ref: refs.aboutRef },
    { name: 'Events', ref: refs.eventsRef },
    { name: 'Team', ref: refs.teamRef },
    { name: 'Achievements', ref: refs.achievementsRef },
    { name: 'Gallery', ref: refs.galleryRef },
    { name: 'Contact', ref: refs.contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm py-3"
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection(refs.homeRef)}>
          <Cpu className="text-[#1e4a76] w-8 h-8 group-hover:rotate-12 transition duration-300" />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#1e4a76] to-[#2c7a4d] bg-clip-text text-transparent">
            IEEE SB
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="relative text-slate-700 hover:text-[#1e4a76] transition duration-300 text-lg font-medium group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2c7a4d] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800 z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-0 right-0 w-3/4 h-full bg-white z-40 md:hidden p-8 pt-24 shadow-xl border-l border-slate-200"
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.ref);
                  setIsOpen(false);
                }}
                className="text-left text-xl text-slate-700 hover:text-[#1e4a76] transition border-b border-slate-200 pb-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;