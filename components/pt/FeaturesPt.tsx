import React from 'react';
import { Tv, Smartphone, RefreshCw, DollarSign } from 'lucide-react';

const FeaturesPt: React.FC = () => {
    const features = [
        {
            icon: <Tv size={32} className="text-purple-400" />,
            title: "Compatível com todas as TVs",
            desc: "O AppTVSHOW é compatível com todas as Smart TVs. Para modelos ANTIGOS, basta um dispositivo para baixar aplicativos."
        },
        {
            icon: <DollarSign size={32} className="text-green-400" />,
            title: "Pagamento Acessível",
            desc: "Escolha entre pagamento ÚNICO de R$ 104 ou o plano mensal de apenas R$ 20/mês. O sistema é seu para instalar onde quiser!"
        },
        {
            icon: <RefreshCw size={32} className="text-blue-400" />,
            title: "Atualização automática",
            desc: "Toda semana nosso sistema se atualiza e adiciona novos canais, filmes recém-lançados, tudo em primeira mão!"
        },
        {
            icon: <Smartphone size={32} className="text-pink-400" />,
            title: "Assista onde quiser",
            desc: "O TvShow oferece um aplicativo totalmente exclusivo compatível com seu celular, TVs, dispositivos TV Box, videogames e muito mais. Basta baixar e assistir o que quiser, quando quiser."
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            {/* Decorative Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse-slow"></div>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0503/6045/1268/t/6/assets/cel-tvshow-1657461898771.png?v=1657461901"
                            alt="Mockup do App"
                            loading="lazy"
                            decoding="async"
                            className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl z-10"
                        />
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Mais de <span className="text-purple-500">100.000</span> conteúdos
                        </h2>
                        <p className="text-xl text-gray-100 leading-relaxed font-light">
                            No nosso aplicativo você pode assistir todos os filmes, inclusive os lançamentos que estão no cinema são adicionados na mesma semana.
                        </p>

                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-2">Todos os canais liberados abertos e fechados</h3>
                            <p className="text-sm text-gray-200">
                                Oferecemos todos os canais abertos e fechados, sem interrupções e com a melhor qualidade.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="group p-8 bg-[#0a0a0a] rounded-3xl border border-white/5 hover:border-purple-500/50 hover:bg-[#111] transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                            <p className="text-gray-200 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesPt;
