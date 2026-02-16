import React from 'react';
import VideoPlayer from './VideoPlayer';
import CTAButton from './CTAButton';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#050505] py-24 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-white tracking-tight">
          Vea lo que dicen nuestros clientes
        </h2>
        
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none z-10 opacity-50"></div>
          <VideoPlayer id="69931b6d626614ea48199e06" />
        </div>

        <CTAButton text="¡QUIERO MI ACCESO!" />
      </div>
    </section>
  );
};

export default Testimonials;