import React, { useState } from 'react';
import { ShieldCheck, Check, Zap, Star } from 'lucide-react';

interface PricingWidgetPtProps {
    checkoutUrlUnico?: string;
    checkoutUrlMensal?: string;
}

const PricingWidgetPt: React.FC<PricingWidgetPtProps> = ({
    checkoutUrlUnico = "https://go.centerpag.com/PPU38CQA908",
    checkoutUrlMensal = "https://go.centerpag.com/PPU38CQA908"
}) => {
    const [planType, setPlanType] = useState<'unico' | 'mensal'>('unico');

    const inclusions = [
        "✅ +12.000 canais abertos e fechados",
        "✅ Netflix, Amazon Prime, Disney+ e muito mais",
        "✅ Filmes lançamentos do cinema toda semana",
        "✅ Todos os canais de esportes",
        "✅ Canais adultos com senha de segurança",
        "✅ Canais infantis completos",
        "✅ Múltiplas telas — instale em quantas TVs quiser!",
        "✅ Compatível com celular, TV, computador",
        "✅ Atualização automática semanal",
        "✅ Suporte técnico via WhatsApp",
    ];

    return (
        <div id="pricing" className="py-24 px-4 flex flex-col items-center justify-center min-h-[90vh] bg-[#050505] relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-lg">

                {/* Plan Toggle */}
                <div className="flex items-center justify-center mb-8">
                    <div className="bg-white/5 rounded-full p-1 border border-white/10 flex">
                        <button
                            onClick={() => setPlanType('unico')}
                            className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${planType === 'unico'
                                ? 'bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            💰 Pagamento Único
                        </button>
                        <button
                            onClick={() => setPlanType('mensal')}
                            className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${planType === 'mensal'
                                ? 'bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            📅 Plano Mensal
                        </button>
                    </div>
                </div>

                {/* Premium Dark Card */}
                <div className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 hover:from-green-500/50 hover:to-green-900/50 transition-all duration-500 shadow-2xl">
                    <div className="bg-[#0f0f10] rounded-[23px] p-8 md:p-12 h-full relative overflow-hidden">

                        {/* Inner Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-[50px] rounded-full pointer-events-none"></div>

                        <div className="text-center mb-8">
                            <span className="inline-block py-1 px-3 rounded-md bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider mb-4 border border-green-500/20">
                                🔥 OFERTA EXCLUSIVA! 🔥
                            </span>
                            <h3 className="text-3xl font-black text-white mb-2">
                                {planType === 'unico' ? 'ACESSO VITALÍCIO' : 'PLANO MENSAL'}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {planType === 'unico'
                                    ? 'Pague uma vez e tenha acesso para sempre!'
                                    : 'Flexibilidade total — cancele quando quiser!'}
                            </p>
                        </div>

                        {/* Price Display */}
                        <div className="text-center mb-8">
                            {planType === 'unico' ? (
                                <>
                                    <div className="flex items-center justify-center gap-2 text-gray-400 line-through text-lg mb-2">
                                        <span>De R$ 197,00</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-2xl font-bold text-green-400 self-start mt-2">R$</span>
                                        <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">104</span>
                                        <span className="text-lg text-gray-400 self-end mb-3">,00</span>
                                    </div>
                                    <p className="text-green-400 font-bold text-sm mt-2 animate-pulse">
                                        💡 Você economiza R$ 93,00!
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-2xl font-bold text-green-400 self-start mt-2">R$</span>
                                        <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">20</span>
                                        <span className="text-lg text-gray-400 self-end mb-3">/mês</span>
                                    </div>
                                    <p className="text-green-400 font-bold text-sm mt-2 animate-pulse">
                                        💡 Menos de R$ 0,67 por dia!
                                    </p>
                                </>
                            )}
                        </div>

                        {/* What's included */}
                        <div className="bg-white/5 rounded-2xl p-5 mb-8 border border-white/10">
                            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Star size={16} className="text-yellow-400" />
                                Tudo isso incluso:
                            </h4>
                            <ul className="space-y-2">
                                {inclusions.map((item, i) => (
                                    <li key={i} className="text-sm text-gray-200 leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <a
                            href={planType === 'unico' ? checkoutUrlUnico : checkoutUrlMensal}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black text-lg uppercase tracking-wide rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] text-center transform hover:scale-[1.02]"
                        >
                            <Zap size={20} className="inline mr-2 -mt-1" />
                            {planType === 'unico' ? 'QUERO MEU ACESSO VITALÍCIO!' : 'ASSINAR AGORA — R$ 20/MÊS'}
                        </a>

                        {/* Trust badges */}
                        <div className="mt-6 space-y-2 text-center">
                            <div className="flex items-center justify-center gap-2 text-sm text-white font-bold">
                                <ShieldCheck size={16} className="text-green-400" />
                                {planType === 'unico' ? 'PAGAMENTO ÚNICO — Sem mensalidade!' : 'CANCELE QUANDO QUISER'}
                            </div>
                            <p className="text-xs text-gray-400">🔒 Compra 100% Segura • Garantia de 7 dias</p>
                            <p className="text-sm text-green-400 font-bold mt-2 uppercase">⚠️ Pagamento somente via PIX à vista</p>
                            <p className="text-xs text-gray-300 mt-3 bg-white/5 rounded-lg px-3 py-2 border border-white/10">💱 Na página de pagamento, o valor será convertido automaticamente para a moeda do seu país.</p>
                        </div>
                    </div>
                </div>

                {/* Brand Compatibility */}
                <div className="mt-12 text-center">
                    <h3 className="text-white font-bold mb-4 uppercase text-sm">COMPATÍVEL COM AS PRINCIPAIS MARCAS DE TV</h3>
                    <div className="opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-white">
                            <span>SAMSUNG</span>
                            <span>LG</span>
                            <span>ANDROID TV</span>
                            <span>ROKU</span>
                            <span>APPLE TV</span>
                            <span>FIRE STICK</span>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-white font-bold uppercase">E TODAS AS OUTRAS MARCAS DE TV COM APLICATIVOS!</p>
                </div>

            </div>
        </div>
    );
};

export default PricingWidgetPt;
