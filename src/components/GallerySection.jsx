// components/GallerySection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '../data/galleryData';

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 px-4 bg-[#f8fafc]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="text-[#1e4a76]">Gallery</span>
          </h2>
          <p className="text-slate-600">Capturing moments of innovation and collaboration</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden cursor-pointer group border border-slate-200 shadow-sm"
              onClick={() => openLightbox(img)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/40 via-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-200/80 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
            onClick={() => setLightboxOpen(false)}
          >
            <button className="absolute top-5 right-5 text-slate-700 bg-white rounded-full p-2 hover:bg-slate-100 transition shadow-sm">
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={currentImage?.src}
              alt={currentImage?.alt}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-slate-200 bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;