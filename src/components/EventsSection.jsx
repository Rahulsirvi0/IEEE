// components/EventsSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/eventData';

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  const emptyStateMessage =
    activeTab === 'upcoming' ? 'Events upcoming soon' : 'Events will be updated soon';

  return (
    <section className="py-20 px-4 bg-[#f8fafc]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#1e4a76]">Events</span>
          </h2>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === 'upcoming' ? 'bg-[#1e4a76] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === 'past' ? 'bg-[#2c7a4d] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        {events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                    <Calendar size={16} /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <MapPin size={16} /> {event.location}
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{event.description}</p>
                  {activeTab === 'upcoming' && (
                    <button className="w-full py-2 bg-[#1e4a76] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#2c7a4d] transition group">
                      Register Now <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
                    </button>
                  )}
                  {activeTab === 'past' && (
                    <div className="text-xs text-slate-500 italic">Event concluded • {event.attendees}+ attended</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto rounded-3xl border border-dashed border-slate-300 bg-white/80 px-6 py-16 text-center shadow-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">{emptyStateMessage}</h3>
            <p className="text-slate-500">
              Check back later for updates on upcoming sessions and past event highlights.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;