import React from 'react';
import { Smartphone, Monitor, Settings, DollarSign, MessageCircle } from 'lucide-react';

const Compatibility: React.FC = () => {
  const logos = [
    { name: "Samsung", url: "https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/6047ac904271eb4701d0607c_group2033-1659616439777.png?v=1659616441" },
    { name: "LG", url: "https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/6047ac904271eb7378d06082_group2034-1659616432441.png?v=1659616433" },
    { name: "Sony", url: "https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/6047ac904271eba67ed0607e_group2032-1659616445548.png?v=1659616447" },
    { name: "Android TV", url: "https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/6047ac904271ebfe18d06084_group2040-1659616464269.png?v=1659616465" },
    { name: "Roku", url: "https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/6047ac904271eb4e66d06080_group2037-1659616451073.png?v=1659616452" },
    { name: "Apple TV", url: "https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/6047ac904271eb17aad06088_group2035-1659616457957.png?v=1659616459" },
    { name: "Android", url: "https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/6047ac904271eb19fad0608a_group2038-1659617717483.png?v=1659617718" },
    { name: "Apple", url: "https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/6047ac904271ebbf55d06086_group2039-1659618017337.png?v=1659618018" },
  ];

  const features = [
    {
      icon: <Smartphone size={32} className="text-white" />,
      color: "bg-purple-600",
      title: "Compatible con teléfonos móviles",
      desc: "Instala la aplicación tv show en tu móvil y disfruta de películas, series y canales en directo estés donde estés.",
      sub: "¡Compatible con todos los modelos!"
    },
    {
      icon: <Monitor size={32} className="text-white" />,
      color: "bg-blue-600",
      title: "MÚLTIPLES PANTALLAS",
      desc: "Instálalo en todos tus televisores o compártelo con tus amigos. ¡Solo tienes que compartir tu acceso y listo! ¡Todos disfrutarán del mejor servicio y de miles de contenidos disponibles simultáneamente!"
    },
    {
      icon: <Settings size={32} className="text-white" />,
      color: "bg-green-600",
      title: "ELIGE LA CALIDAD",
      desc: "Todos los contenidos incluyen la opción de elegir la calidad de imagen SD, HD, Full HD y 4K."
    },
    {
      icon: <DollarSign size={32} className="text-white" />,
      color: "bg-yellow-600",
      title: "PRECIO JUSTO",
      desc: "Nuestros servicios son accesibles para todos. Accede a miles de contenidos a un precio justo que se adapta a tu bolsillo, y paga solo una vez."
    },
    {
      icon: <MessageCircle size={32} className="text-white" />,
      color: "bg-pink-600",
      title: "SOPORTE TÉCNICO",
      desc: "Opción disponible para ti, directamente en tu WhatsApp siempre que lo necesites."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Brand Compatibility */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 uppercase tracking-tight">
            COMPATIBLE CON LAS PRINCIPALES MARCAS DE TV
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8 bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/5">
            {logos.map((logo, index) => (
              <div key={index} className="w-24 md:w-32 transition-all duration-300 hover:scale-110 hover:brightness-125 grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                 <img 
                   src={logo.url} 
                   alt={logo.name} 
                   loading="lazy" 
                   className="w-full h-auto object-contain"
                 />
              </div>
            ))}
          </div>
          
          <p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest animate-pulse">
            ¡Y TODAS LAS DEMÁS MARCAS DE TV CON APLICACIONES!
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, i) => (
            <div key={i} className={`bg-white/5 rounded-3xl p-8 border border-white/5 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden ${i === 3 ? 'lg:col-start-1 lg:col-end-2' : ''} ${i === 4 ? 'lg:col-start-2 lg:col-end-3' : ''}`}>
              <div className={`mb-6 ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base font-light">
                {feature.desc}
              </p>
              {feature.sub && (
                <p className="text-green-400 font-bold text-sm uppercase mt-4 border-t border-white/10 pt-4">
                  {feature.sub}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compatibility;