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
  // Lógica para detectar a página TV2
  // Verificamos tanto o caminho (/tv2) quanto parâmetros (?tv2) para garantir que funcione
  // Convertemos para minúsculas para evitar erros de digitação
  const path = window.location.pathname.toLowerCase();
  const search = window.location.search.toLowerCase();
  
  // Se tiver 'tv2' no link ou nos parâmetros, ativa o link da Thrivecart
  const isTV2 = path.includes('/tv2') || search.includes('tv2');
  
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