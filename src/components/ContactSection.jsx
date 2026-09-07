// components/ContactSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    resetTimerRef.current = setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 px-4 bg-[#eef2f6]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-[#1e4a76]">Touch</span>
          </h2>
          <p className="text-slate-600">Have questions? Reach out to our student branch team</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <div className="space-y-6">
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-xl">
                <Mail className="text-[#1e4a76]" size={28} />
                <div><h4 className="font-semibold text-slate-800">Email Us</h4><p className="text-slate-600">rahul.choudhary@ustu.edu.in</p></div>
              </div>
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-xl">
                <MapPin className="text-[#2c7a4d]" size={28} />
                <div><h4 className="font-semibold text-slate-800">Address</h4><p className="text-slate-600">Universal SkillTech University , Kaman Bhiwandi Road, Vasai </p></div>
              </div>
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-xl">
                <Phone className="text-[#1e4a76]" size={28} />
                <div><h4 className="font-semibold text-slate-800">Contact</h4><p className="text-slate-600">+91 9321177206</p></div>
              </div>
              <div className="flex gap-5 pt-4 justify-center lg:justify-start">
                {/* <a href='https://www.linkedin.com/in/rahul-choudhary-3905b5316/' target="_blank" rel="noopener noreferrer">
                  <Linkedin size={28} />
                </a> */}
                <a href='https://www.instagram.com/ieee_ustu/' target="_blank" rel="noopener noreferrer">
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-2xl space-y-5">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-800 focus:border-[#1e4a76] focus:outline-none transition" />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-800 focus:border-[#1e4a76] focus:outline-none" />
              <textarea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full bg-white border border-slate-200 rounded-lg p-3 text-slate-800 focus:border-[#1e4a76] focus:outline-none"></textarea>
              <button type="submit" className="w-full py-3 bg-[#1e4a76] hover:bg-[#2c7a4d] text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition group">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition" />
              </button>
              {submitted && <p className="text-[#2c7a4d] text-center">Message sent! We'll reach out soon.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;