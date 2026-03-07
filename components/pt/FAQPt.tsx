import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/5 rounded-xl bg-white/[0.02] overflow-hidden transition-all hover:bg-white/[0.04]">
            <div
                role="button"
                tabIndex={0}
                className="w-full py-5 px-6 flex justify-between items-center text-left cursor-pointer outline-none focus:bg-white/5"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }
                }}
            >
                <span className="font-bold text-lg text-white">{question}</span>
                {isOpen ? <ChevronUp className="text-green-400" /> : <ChevronDown className="text-white" />}
            </div>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-6 pt-0 text-gray-100 leading-relaxed border-t border-white/5 mt-2">
                    <br />
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQPt: React.FC = () => {
    const faqs = [
        { q: "PRECISA DE INTERNET PARA FUNCIONAR?", a: "Sim, é necessário ter uma conexão de internet estável de pelo menos 10MB para aproveitar o conteúdo em alta qualidade sem interrupções." },
        { q: "COMO FUNCIONA O PAGAMENTO?", a: "Você pode escolher entre o pagamento ÚNICO de R$ 147 (acesso vitalício) ou o plano mensal de R$ 15/mês. Não há taxas ocultas." },
        { q: "QUANTOS CANAIS LIBERA?", a: "Você terá acesso a mais de 12.000 canais ao vivo, além de milhares de filmes e séries on-demand." },
        { q: "COMO VOU RECEBER?", a: "Imediatamente após confirmar o pagamento, você receberá um e-mail com seus dados de acesso e as instruções simples de instalação." },
        { q: "PRECISA DE UM TÉCNICO PARA CONFIGURAR?", a: "Não, a instalação é muito intuitiva. Enviamos um passo a passo detalhado que qualquer pessoa pode seguir em poucos minutos." },
        { q: "MORO LONGE DO CENTRO, FUNCIONA MESMO ASSIM?", a: "Sim, desde que você tenha conexão com internet, nosso serviço funciona perfeitamente em qualquer localização." },
        { q: "EM QUANTAS TVs POSSO INSTALAR?", a: "Você pode instalar em múltiplos dispositivos! Use na sua TV, celular, computador — sem limites de instalação." },
        { q: "TEM GARANTIA?", a: "Sim, oferecemos garantia de 7 dias. Se você tiver problemas técnicos que não possamos resolver, devolvemos seu dinheiro." }
    ];

    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <HelpCircle className="text-purple-500" size={32} />
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
                </div>
            </div>
        </section>
    );
};

export default FAQPt;
