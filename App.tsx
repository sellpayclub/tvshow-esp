import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ContentShowcase from './components/ContentShowcase';
import Testimonials from './components/Testimonials';
import PricingWidget from './components/PricingWidget';
import FAQ from './components/FAQ';
import Compatibility from './components/Compatibility';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Logic to handle "duplicate" page behavior
  // If the URL is /tv2, use the Thrivecart link.
  // Otherwise, default to the original Hotmart link defined in PricingWidget default props.
  const path = window.location.pathname;
  const isTV2 = path.startsWith('/tv2');
  
  const checkoutUrl = isTV2 
    ? "https://sellpay.thrivecart.com/tvshow/" 
    : "https://pay.hotmart.com/H104478089D";

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-green-500 selection:text-black">
      <Hero />
      <Features />
      <ContentShowcase />
      <Testimonials />
      <PricingWidget checkoutUrl={checkoutUrl} />
      <FAQ />
      <Compatibility />
      <Footer />
    </div>
  );
};

export default App;