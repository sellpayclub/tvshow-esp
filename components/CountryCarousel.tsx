import React from 'react';

const flags = [
  { emoji: '🇲🇽', name: 'México' },
  { emoji: '🇦🇷', name: 'Argentina' },
  { emoji: '🇨🇴', name: 'Colombia' },
  { emoji: '🇨🇱', name: 'Chile' },
  { emoji: '🇵🇪', name: 'Perú' },
  { emoji: '🇨🇷', name: 'Costa Rica' },
  { emoji: '🇪🇸', name: 'España' },
  { emoji: '🇺🇸', name: 'Estados Unidos' },
  { emoji: '🇪🇺', name: 'Europa' },
  { emoji: '🇺🇾', name: 'Uruguay' },
  { emoji: '🇵🇾', name: 'Paraguay' },
  { emoji: '🇪🇨', name: 'Ecuador' },
  { emoji: '🇧🇴', name: 'Bolivia' },
  { emoji: '🇬🇹', name: 'Guatemala' },
  { emoji: '🇭🇳', name: 'Honduras' },
  { emoji: '🇸🇻', name: 'El Salvador' },
  { emoji: '🇳🇮', name: 'Nicaragua' },
  { emoji: '🇵🇦', name: 'Panamá' },
  { emoji: '🇩🇴', name: 'Rep. Dominicana' },
  { emoji: '🇬🇧', name: 'Reino Unido' },
  { emoji: '🇨🇦', name: 'Canadá' },
  { emoji: '🇦🇺', name: 'Australia' },
];

const CountryCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-black/80 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 tracking-tight uppercase">
          DISPONIBLE EN TODOS LOS PAÍSES - SISTEMA 100% EN ESPAÑOL
        </h2>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...flags, ...flags, ...flags].map((country, index) => (
            <div key={index} className="flex flex-col items-center justify-center mx-8 min-w-[120px] transition-transform hover:scale-110 cursor-default">
              <span className="text-7xl mb-4 drop-shadow-2xl">{country.emoji}</span>
              <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCarousel;
