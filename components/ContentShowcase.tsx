import React from 'react';
import CTAButton from './CTAButton';

const ContentCard: React.FC<{
  title: string;
  img: string;
  desc: string;
}> = ({ title, img, desc }) => (
  <div className="group relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300">
    <div className="aspect-video w-full overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
    </div>
    
    <div className="absolute bottom-0 left-0 w-full p-8">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
        {desc}
      </p>
    </div>
  </div>
);

const ContentShowcase: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Streaming Logos Section */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[100px] pointer-events-none rounded-full"></div>
        <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">
          SERVICIOS DE STREAMING GRATUITOS
        </h2>
        <div className="relative z-10 flex justify-center mb-8 px-4">
           <img src="https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/captura-de-tela-20220713-as-111928-1657721971327.png?v=1657721976" alt="Streaming Logos" className="max-w-full md:max-w-3xl rounded-xl opacity-90 hover:opacity-100 transition-opacity" />
        </div>
        <p className="relative z-10 text-xl text-gray-100 max-w-2xl mx-auto">
          Acceso a todas. Series y películas de Netflix, HBO, Amazon Prime, Disney y mucho más, ¡todo disponible directamente en el sistema!
        </p>
      </div>

      {/* Laptop Section */}
      <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] rounded-3xl p-8 md:p-12 mb-24 border border-white/5 relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/3 h-full bg-purple-900/10 blur-[80px]"></div>
         
         <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-full md:w-1/2">
               <img src="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/tv-show-netflix-1657463476282.png?v=1657463501" alt="Web Platform" className="w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full md:w-1/2">
               <h3 className="text-3xl font-bold text-white mb-6">VÍSTELO TAMBIÉN ONLINE DIRECTAMENTE EN TU ORDENADOR</h3>
               <p className="text-gray-100 text-lg mb-8 leading-relaxed">
                 Además de la aplicación para el móvil y la televisión, TVSHOW tiene más que ofrecerte. Disponemos de una plataforma web para ver la televisión en la pantalla de tu ordenador, solo tienes que iniciar sesión en tu cuenta y disfrutar desde donde quieras.
               </p>
            </div>
         </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-4">VEA UN POCO DE LO QUE TENDRA ACCESO...</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <ContentCard 
          title="PELÍCULAS ESTRENOS DE CINE EN PRIMERA PERSONA"
          img="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/filmes-1659740661491.png?v=1659740663"
          desc="Todas las películas que aún están en cartelera se añaden cada semana en calidad HD y FULL HD."
        />
        <ContentCard 
          title="TODOS LOS CANALES DE DEPORTES ⚽️"
          img="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/premieres-1659740751399.png?v=1659740753"
          desc="Literalmente TODOS. ¡Prepárate para tener acceso a toda la parrilla de canales de deportes, fútbol, artes marciales y mucho más!"
        />
        <ContentCard 
          title="CANALES PARA ADULTOS 😈"
          img="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/adultos-1659740893110.png?v=1659740894"
          desc="Toda la lista de canales para adultos incluida con CONTRASEÑA para el bloqueo y la seguridad de los niños."
        />
        <ContentCard 
          title="CANALES INFANTILES 👸🏼"
          img="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/super-box-tv-desenhos-1024x597-1-1659740993942.png?v=1659740996"
          desc="¡Toda la lista para que los niños se diviertan además de Disney PLUS y mucho más!"
        />
      </div>

      <div className="text-center">
        <CTAButton className="scale-110" />
      </div>
    </section>
  );
};

export default ContentShowcase;