import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ContentShowcase from './components/ContentShowcase';
import Testimonials from './components/Testimonials';
import PricingWidget from './components/PricingWidget';
import CountryCarousel from './components/CountryCarousel';
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
  
  const isSlug1 = path.includes('/slug1') || search.includes('slug1');
  const isSlug2 = path.includes('/slug2') || search.includes('slug2');
  
  const checkoutUrl = isTV2 
    ? "https://sellpay.thrivecart.com/tvshow/" 
    : "https://go.centerpag.com/PPU38CQA908";

  let headline = undefined;
  let subheadline = undefined;
  let headlineClassName = undefined;
  let subheadlineClassName = undefined;

  if (isSlug1) {
    headlineClassName = "text-2xl md:text-4xl lg:text-5xl";
    subheadlineClassName = "text-base md:text-xl";
    headline = (
      <>
        ¡YA NO TIENES QUE PAGAR POR SERVICIOS DE STREAMING NI SUSCRIPCIONES DE <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse-slow block mt-2">
          TELEVISIÓN POR CABLE POR SEPARADO!
        </span>
      </>
    );
    subheadline = (
      <>
        Descubre cómo tener todo esto de por vida pagando una sola vez:
      </>
    );
  } else if (isSlug2) {
    headlineClassName = "text-2xl md:text-4xl lg:text-5xl";
    subheadlineClassName = "text-base md:text-xl";
    headline = (
      <>
        ¡DESBLOQUEA TU TV HOY Y OBTÉN ACCESO ILIMITADO A TODOS LOS SERVICIOS DE STREAMING Y <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse-slow block mt-2">
          TODOS LOS CANALES DE CABLE!
        </span>
      </>
    );
    subheadline = (
      <>
        Películas, series, canales deportivos, ¡todo con un solo pago!
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-green-500 selection:text-black">
      <Hero 
        headline={headline} 
        subheadline={subheadline} 
        headlineClassName={headlineClassName}
        subheadlineClassName={subheadlineClassName}
      />
      <Features />
      <ContentShowcase />
      <Testimonials />
      <PricingWidget checkoutUrl={checkoutUrl} />
      <CountryCarousel />
      <FAQ />
      <Compatibility />
      <Footer />
    </div>
  );
};

export default App;