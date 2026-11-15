import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Platforms from './components/Platforms.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Features from './components/Features.jsx';
import Faq from './components/Faq.jsx';
import CtaFinal from './components/CtaFinal.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-purple-600/30 selection:text-purple-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Platforms />
        <HowItWorks />
        <Features />
        <Faq />
        <CtaFinal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
