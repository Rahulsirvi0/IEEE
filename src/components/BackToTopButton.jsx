// components/BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#1e4a76] text-white p-3 rounded-full shadow-lg shadow-slate-200/70 z-40 hover:bg-[#2c7a4d] transition group"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;