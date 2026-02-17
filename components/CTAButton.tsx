import React from 'react';
import { ShoppingCart, PlayCircle } from 'lucide-react';

interface CTAButtonProps {
  text?: string;
  url?: string;
  className?: string;
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text = "¡QUIERO MI ACCESO!", 
  url = "#pricing", 
  className = "",
  fullWidth = false
}) => {
  const isExternal = url.startsWith('http');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isExternal && url.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`relative group ${fullWidth ? 'w-full' : 'inline-block'} ${className}`}>
      {/* Glow Effect Layer */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      <a 
        href={url}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        className={`
          relative flex items-center justify-center gap-3
          bg-gradient-to-r from-green-600 to-green-500
          hover:from-green-500 hover:to-green-400
          text-white font-black text-lg md:text-xl uppercase tracking-wider
          py-5 px-10 rounded-full
          border border-green-400/30
          shadow-[0_0_20px_rgba(22,163,74,0.3)]
          transition-all duration-300 transform group-hover:scale-[1.02]
          ${fullWidth ? 'w-full' : ''}
        `}
      >
        <PlayCircle size={28} className="fill-white/20" />
        {text}
      </a>
    </div>
  );
};

export default CTAButton;