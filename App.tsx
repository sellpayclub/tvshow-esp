import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ContentShowcase from './components/ContentShowcase';
import Testimonials from './components/Testimonials';
import PricingWidget from './components/PricingWidget';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-green-500 selection:text-black">
      <Hero />
      <Features />
      <ContentShowcase />
      <Testimonials />
      <PricingWidget />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;