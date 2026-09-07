// App.jsx
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import TeamSection from './components/TeamSection';
import AchievementsSection from './components/AchievementsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const teamRef = useRef(null);
  const achievementsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Simulate loading time for smooth animation
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContactSection = () => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  if (loading) return <LoadingAnimation />;

  return (
    <div className="min-h-screen text-slate-800 font-sans overflow-x-hidden bg-transparent">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, eventsRef, teamRef, achievementsRef, galleryRef, contactRef }}
      />
      <main>
        <div ref={homeRef}><Hero scrollToEvents={() => scrollToSection(eventsRef)} scrollToContactSection={scrollToContactSection} /></div>
        <div ref={aboutRef}><AboutSection /></div>
        <div ref={eventsRef}><EventsSection /></div>
        <div ref={teamRef}><TeamSection /></div>
        <div ref={achievementsRef}><AchievementsSection /></div>
        <div ref={galleryRef}><GallerySection /></div>
        <div ref={contactRef}><ContactSection /></div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;