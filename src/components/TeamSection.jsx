// components/TeamSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../data/teamData';

const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-[#eef2f6]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-[#1e4a76]">Team</span>
          </h2>
          <p className="text-slate-600">Driving innovation and student leadership</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glassmorphism rounded-2xl p-6 text-center transition-all duration-300 hover-glow"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover border-4 border-slate-200 shadow-lg shadow-slate-200/60"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
              <p className="text-[#2c7a4d] text-sm mb-3">{member.position}</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href={member.Linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition"><Linkedin size={20} /></a>
                <a href={member.Instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-500 transition"><Instagram size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;