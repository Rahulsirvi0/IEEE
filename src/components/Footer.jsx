// components/Footer.jsx
import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 px-4 shadow-[0_-1px_0_rgba(148,163,184,0.18)]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="text-[#1e4a76]" size={28} />
            <span className="text-xl font-bold bg-gradient-to-r from-[#1e4a76] to-[#2c7a4d] bg-clip-text text-transparent">IEEE Student Branch</span>
          </div>
          
          <p className="text-slate-500 text-sm">© 2025 IEEE Student Branch | Built by IEEE Webmaster Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;