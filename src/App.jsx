import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import SectionFeed from './components/SectionFeed';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-mint selection:bg-magenta/30 overflow-x-hidden">
      {/* Dynamic Background Texture/Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Contact />
        <About />
        <SectionFeed id="articles" title="My" subtitle="Articles" />
        <SectionFeed id="projects" title="My" subtitle="Projects" />
      </main>

      <footer className="py-24 px-12 lg:px-24 bg-obsidian text-center border-t border-mint/10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <img
            src="/monogram.png"
            alt="Monogram"
            className="w-16 h-auto opacity-40 hover:opacity-100 transition-opacity"
          />
          <p className="text-mint/30 font-sans text-[10px] uppercase tracking-[0.6em]">
            © 2026 Noël Hollis Ringstad // Built for Excellence
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
