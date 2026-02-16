import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          <div className="flex items-center gap-3 text-white bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <Lock size={20} className="text-green-500" />
            <span className="font-bold">Site 100% Seguro</span>
          </div>
          <div className="flex items-center gap-3 text-white bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <ShieldCheck size={20} className="text-blue-500" />
            <span className="font-bold">Garantía de 7 Días</span>
          </div>
        </div>

        <div className="mb-12">
           <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Aceptamos</h4>
           <div className="flex justify-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="h-8 bg-white/10 rounded px-3 flex items-center text-xs font-bold">VISA</div>
              <div className="h-8 bg-white/10 rounded px-3 flex items-center text-xs font-bold">MASTERCARD</div>
              <div className="h-8 bg-white/10 rounded px-3 flex items-center text-xs font-bold">AMEX</div>
              <div className="h-8 bg-white/10 rounded px-3 flex items-center text-xs font-bold">PAYPAL</div>
           </div>
        </div>

        <div className="text-[10px] md:text-xs text-gray-200 leading-relaxed max-w-4xl mx-auto space-y-6 font-light">
          <p className="font-bold text-white text-sm">TV SHOW SERVIÇOS TELECOM</p>
          <p>
            2022 ©Copyright © 2021tvshow. Todos os direitos reservados. Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veiculados são de propriedade exclusiva da tV shOW. É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem autorização expressa.
          </p>
          <p>
            A possibilidade criminal de qualquer direito mencionado irá implicar na responsabilização cível e nos termos da Lei. Informamos que TV SHOW é um info-produto. Seu resultado pode variar de pessoa para pessoa. Os preços dos produtos estão sujeitos a uma alteração sem aviso prévio.
          </p>
          <p className="italic opacity-50">
            "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;