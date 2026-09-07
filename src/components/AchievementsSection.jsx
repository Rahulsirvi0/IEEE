// components/AchievementsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Award, Zap, Code } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { icon: <Users size={36} />, value: 15, label: 'Active Members', suffix: '+' },
  //{ icon: <Calendar size={36} />, value: 45, label: 'Upcoming Events', suffix: '+' },
  { icon: <Zap size={36} />, value: 0, label: 'Workshops', suffix: '' },
  //{ icon: <Trophy size={36} />, value: 'In Future', label: 'Hackathon Wins', suffix: '' },
];

const achievementsList = [
  'IEEE Best Student Branch Award 2024',
  'National Level Project Competition Winners',
  'Certified ComSoc Student Chapter',
  'Research Papers Published',
  'Industry Collaboration Excellence',
];

const AchievementsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f8fafc] to-[#eef2f6]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#1e4a76]">Achievements</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Recognized globally for technical excellence and leadership</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism rounded-2xl p-6 text-center border border-slate-200"
            >
              <div className="text-[#1e4a76] mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold text-slate-800 mb-1">
                <AnimatedCounter value={stat.value} /> {stat.suffix}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <Award className="text-[#2c7a4d]" /> Key Milestones
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievementsList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200"
              >
                <Code size={20} className="text-[#1e4a76]" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;