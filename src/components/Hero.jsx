// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

const Hero = ({ scrollToEvents, scrollToContactSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-28 bg-transparent">
      <div className="absolute inset-0 pointer-events-none">
            {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/Universal clg img.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(30,41,59,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.12)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="container-custom text-center z-10 relative max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#1e4a76] via-[#4f87b8] to-[#2c7a4d]" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-white">
            IEEE Student Branch
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Innovating Technology, Building Future Leaders
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button 
            onClick={scrollToContactSection} 
            className="group px-8 py-3 bg-[#1e4a76] hover:bg-[#2c7a4d] text-white rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-300/60">
            Join IEEE <Users size={20} className="group-hover:translate-x-1 transition" />
          </button>
          <button
            onClick={scrollToEvents}
            className="group px-8 py-3 bg-[#1e4a76] hover:bg-[#2c7a4d] text-white rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-300/60"
          >
            Explore Events <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;