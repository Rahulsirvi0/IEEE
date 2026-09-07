// components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target, Users, BookOpen, Award, Zap } from 'lucide-react';

const aboutCards = [
  { icon: <Globe size={40} />, title: 'What is IEEE?', desc: 'World\'s largest technical professional organization dedicated to advancing technology for humanity.' },
  { icon: <Target size={40} />, title: 'Our Mission', desc: 'Foster innovation, collaborate on tech, and empower students through knowledge.' },
  { icon: <Award size={40} />, title: 'Our Vision', desc: 'Be the leading student community driving technological excellence and leadership.' },
  { icon: <Users size={40} />, title: 'Benefits', desc: 'Networking, exclusive resources, global conferences, and mentorship programs.' },
  { icon: <BookOpen size={40} />, title: 'Technical Communities', desc: 'Access to IEEE ComSoc, RAS, CS and specialized knowledge hubs.' },
  { icon: <Zap size={40} />, title: 'Industry Connect', desc: 'Workshops by experts, hackathons, and real-world project exposure.' },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f8fafc] to-[#eef2f6]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#1e4a76]">IEEE</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Empowering innovators, shaping the future of engineering.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glassmorphism rounded-2xl p-6 text-center hover-glow transition-all duration-300 border border-slate-200"
            >
              <div className="text-[#1e4a76] mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-slate-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;