import React from 'react';
import CTAButtonPt from './CTAButtonPt';

const ContentCard: React.FC<{
    title: string;
    img: string;
    desc: string;
}> = ({ title, img, desc }) => (
    <div className="group flex flex-col h-full bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300">
        {/* 1. Title Area */}
        <div className="p-6 pb-4 bg-[#161616]">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight min-h-[3rem] flex items-center">
                {title}
            </h3>
        </div>

        {/* 2. Image Area */}
        <div className="w-full aspect-video overflow-hidden relative border-y border-white/5">
            <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 z-10 transition-colors duration-300"></div>
            <img
                src={img}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
        </div>

        {/* 3. Description Area */}
        <div className="p-6 pt-5 flex-grow bg-[#111]">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                {desc}
            </p>
        </div>
    </div>
);

const ContentShowcasePt: React.FC = () => {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            {/* Streaming Logos Section */}
            <div className="text-center mb-24 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[100px] pointer-events-none rounded-full"></div>
                <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">
                    SERVIÇOS DE STREAMING GRATUITOS
                </h2>
                <div className="relative z-10 flex justify-center mb-8 px-4">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0652/7880/4220/t/2/assets/captura-de-tela-20220713-as-111928-1657721971327.png?v=1657721976"
                        alt="Logos de Streaming"
                        loading="lazy"
                        decoding="async"
                        className="max-w-full md:max-w-3xl rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
                <p className="relative z-10 text-xl text-gray-100 max-w-2xl mx-auto">
                    Acesso a todas. Séries e filmes da Netflix, HBO, Amazon Prime, Disney e muito mais, tudo disponível direto no sistema!
                </p>
            </div>

            {/* Laptop Section */}
            <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] rounded-3xl p-8 md:p-12 mb-24 border border-white/5 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-purple-900/10 blur-[80px]"></div>

                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/tv-show-netflix-1657463476282.png?v=1657463501"
                            alt="Plataforma Web"
                            loading="lazy"
                            decoding="async"
                            className="w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-bold text-white mb-6">ASSISTA TAMBÉM ONLINE DIRETO NO SEU COMPUTADOR</h3>
                        <p className="text-gray-100 text-lg mb-8 leading-relaxed">
                            Além do aplicativo para celular e TV, o TVSHOW tem muito mais a oferecer. Temos uma plataforma web para assistir TV na tela do seu computador, basta fazer login na sua conta e aproveitar de onde você estiver.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-white mb-4">VEJA UM POUCO DO QUE VOCÊ TERÁ ACESSO...</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <ContentCard
                    title="FILMES LANÇAMENTOS DO CINEMA"
                    img="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/filmes-1659740661491.png?v=1659740663"
                    desc="Todos os filmes que ainda estão em cartaz são adicionados toda semana em qualidade HD e FULL HD. Cinema em casa!"
                />
                <ContentCard
                    title="TODOS OS CANAIS DE ESPORTES ⚽️"
                    img="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/premieres-1659740751399.png?v=1659740753"
                    desc="Literalmente TODOS. Prepare-se para ter acesso a toda a grade de canais de esportes, futebol, lutas e muito mais!"
                />
                <ContentCard
                    title="CANAIS ADULTOS 😈"
                    img="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/adultos-1659740893110.png?v=1659740894"
                    desc="Toda a lista de canais adultos incluída com SENHA para bloqueio e segurança das crianças."
                />
                <ContentCard
                    title="CANAIS INFANTIS 👸🏼"
                    img="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/super-box-tv-desenhos-1024x597-1-1659740993942.png?v=1659740996"
                    desc="Toda a lista para as crianças se divertirem, além de Disney PLUS e muito mais!"
                />
            </div>

            <div className="text-center">
                <CTAButtonPt className="scale-110" />
            </div>
        </section>
    );
};

export default ContentShowcasePt;
