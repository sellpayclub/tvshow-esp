import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/5 rounded-xl bg-white/[0.02] overflow-hidden transition-all hover:bg-white/[0.04]">
      <button
        className="w-full py-5 px-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-white">{question}</span>
        {isOpen ? <ChevronUp className="text-green-400" /> : <ChevronDown className="text-white" />}
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-0 text-gray-100 leading-relaxed border-t border-white/5 mt-2">
           <br/>
           {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: "¿NECESITAS INTERNET PARA FUNCIONAR?", a: "Sí, es necesario tener una conexión a internet estable de al menos 10MB para disfrutar del contenido en alta calidad sin interrupciones." },
    { q: "¿EL PAGO ES ÚNICO?", a: "Sí, el pago es 100% único. No hay mensualidades ni cuotas ocultas. Pagas una vez y tienes acceso de por vida." },
    { q: "¿CUÁNTOS CANALES LIBERA?", a: "Tendrás acceso a más de 12,000 canales en vivo, además de miles de películas y series on-demand." },
    { q: "¿CÓMO LO RECIBIRÉ?", a: "Inmediatamente después de confirmar tu pago, recibirás un correo electrónico con tus datos de acceso y las instrucciones sencillas de instalación." },
    { q: "¿NECESITAS UN ESPECIALISTA PARA CONFIGURARLO?", a: "No, la instalación es muy intuitiva. Te enviamos un paso a paso detallado que cualquiera puede seguir en pocos minutos." },
    { q: "¿VIVO LEJOS DEL CENTRO, ¿ME IRÁ BIEN?", a: "Sí, siempre que tengas conexión a internet, nuestro servicio funciona perfectamente en cualquier ubicación geográfica." },
    { q: "¿EN CUÁNTOS TELEVISORES PUEDO INSTALARLO?", a: "Puedes instalarlo en múltiples dispositivos, pero el uso simultáneo depende del plan adquirido (generalmente 1 conexión simultánea, pero instalable en varios)." },
    { q: "¿TIENE GARANTÍA?", a: "Sí, ofrecemos garantía de satisfacción. Si tienes problemas técnicos que no podamos resolver, te devolvemos tu dinero." }
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <HelpCircle className="text-purple-500" size={32} />
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Preguntas Frecuentes
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;