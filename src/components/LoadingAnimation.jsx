// components/LoadingAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#eef2f6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,74,118,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(44,122,77,0.08),transparent_28%)]" />
      <div className="relative flex flex-col items-center gap-5 text-center px-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
          className="rounded-full border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/60 backdrop-blur"
        >
          <Cpu className="text-[#1e4a76]" size={28} />
        </motion.div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Loading</p>
          <p className="mt-2 text-lg font-medium text-slate-800">IEEE Student Branch</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;