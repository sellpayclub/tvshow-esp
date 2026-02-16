import React from 'react';
import CTAButton from './CTAButton';
import VideoPlayer from './VideoPlayer';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 px-4 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-10 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            ¡DEJA DE PAGAR MUCHO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse-slow">
              POR POCO CONTENIDO!
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
            Más de <strong className="text-white">12 000 canales</strong> abiertos y cerrados, Netflix, Amazon Prime, Disney y mucho más.
          </p>
        </div>

        {/* Main Image with Spotlight */}
        <div className="relative my-12 group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          {/* Image Glow */}
          <div className="absolute inset-0 bg-purple-600/20 blur-[60px] rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
          
          <img 
            src="https://cdn.shopify.com/s/files/1/0706/9512/5188/files/tv3.png?v=1749096198" 
            alt="TV Show Interface" 
            className="relative z-0 max-w-full h-auto mx-auto drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 mb-12">
          Directamente en tu televisor o MÓVIL en un único sistema.
        </p>

        {/* Video Container - Dark Glass Style */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-12 bg-black/50 backdrop-blur-sm relative">
           <div className="absolute inset-0 border-2 border-white/5 rounded-2xl pointer-events-none z-20"></div>
           <VideoPlayer id="69931b677a04c8d380dd5df2" />
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
             <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" alt="Cliente 1" />
                <img className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100" alt="Cliente 2" />
                <img className="w-10 h-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100" alt="Cliente 3" />
             </div>
             <span className="text-white font-medium">
               <strong className="text-green-400">+ 100 mil</strong> clientes utilizan TV SHOW
             </span>
          </div>
          
          <CTAButton className="scale-110 shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;