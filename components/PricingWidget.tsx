import React, { useState, useEffect } from 'react';
import { ShieldCheck, Globe } from 'lucide-react';

// Configuration
const PRECIO_BASE_USD = 20;
const MARKUP = 1.67;

interface CurrencyInfo {
  codigo: string;
  tasa: number;
  nombre: string;
  locale: string;
  bandera: string;
}

const MONEDAS: Record<string, CurrencyInfo> = {
  US: { codigo: 'USD', tasa: 1, nombre: 'Estados Unidos', locale: 'en-US', bandera: '🇺🇸' },
  MX: { codigo: 'MXN', tasa: 17.2, nombre: 'México', locale: 'es-MX', bandera: '🇲🇽' },
  BR: { codigo: 'BRL', tasa: 5.2, nombre: 'Brasil', locale: 'pt-BR', bandera: '🇧🇷' },
  PE: { codigo: 'PEN', tasa: 3.75, nombre: 'Perú', locale: 'es-PE', bandera: '🇵🇪' },
  CL: { codigo: 'CLP', tasa: 950, nombre: 'Chile', locale: 'es-CL', bandera: '🇨🇱' },
  ES: { codigo: 'EUR', tasa: 0.92, nombre: 'España', locale: 'es-ES', bandera: '🇪🇸' },
  EC: { codigo: 'USD', tasa: 1, nombre: 'Ecuador', locale: 'es-EC', bandera: '🇪🇨' },
  PR: { codigo: 'USD', tasa: 1, nombre: 'Puerto Rico', locale: 'es-PR', bandera: '🇵🇷' },
  SV: { codigo: 'USD', tasa: 1, nombre: 'El Salvador', locale: 'es-SV', bandera: '🇸🇻' },
  CO: { codigo: 'COP', tasa: 4200, nombre: 'Colombia', locale: 'es-CO', bandera: '🇨🇴' },
  AR: { codigo: 'ARS', tasa: 365, nombre: 'Argentina', locale: 'es-AR', bandera: '🇦🇷' },
  GT: { codigo: 'GTQ', tasa: 7.7, nombre: 'Guatemala', locale: 'es-GT', bandera: '🇬🇹' },
  UY: { codigo: 'UYU', tasa: 38, nombre: 'Uruguay', locale: 'es-UY', bandera: '🇺🇾' },
  PA: { codigo: 'USD', tasa: 1, nombre: 'Panama', locale: 'es-PA', bandera: '🇵🇦' },
  HN: { codigo: 'HNL', tasa: 24, nombre: 'Honduras', locale: 'es-HN', bandera: '🇭🇳' },
  CR: { codigo: 'CRC', tasa: 560, nombre: 'Costa Rica', locale: 'es-CR', bandera: '🇨🇷' },
  PT: { codigo: 'EUR', tasa: 0.92, nombre: 'Portugal', locale: 'pt-PT', bandera: '🇵🇹' },
  SE: { codigo: 'SEK', tasa: 10.5, nombre: 'Sweden', locale: 'sv-SE', bandera: '🇸🇪' },
  CH: { codigo: 'CHF', tasa: 0.91, nombre: 'Switzerland', locale: 'de-CH', bandera: '🇨🇭' },
  GB: { codigo: 'GBP', tasa: 0.81, nombre: 'United Kingdom', locale: 'en-GB', bandera: '🇬🇧' }
};

interface PricingWidgetProps {
  checkoutUrl?: string;
}

const PricingWidget: React.FC<PricingWidgetProps> = ({
  checkoutUrl = "https://pay.hotmart.com/H104478089D"
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Helper to format currency
  const formatPrice = (val: number, info: CurrencyInfo) => {
    return new Intl.NumberFormat(info.locale, {
      style: 'currency',
      currency: info.codigo,
      minimumFractionDigits: /CLP|COP/.test(info.codigo) ? 0 : 2
    }).format(val);
  };

  useEffect(() => {
    const detectCountry = async () => {
      // 1. Check Session Storage
      const cache = sessionStorage.getItem('countryCode');
      if (cache && MONEDAS[cache]) {
        setSelectedCountry(cache);
        setLoading(false);
        return;
      }

      // 2. Try IP-API
      try {
        const res = await fetch('https://ip-api.com/json/');
        const data = await res.json();
        if (data.countryCode && MONEDAS[data.countryCode]) {
          sessionStorage.setItem('countryCode', data.countryCode);
          setSelectedCountry(data.countryCode);
          setLoading(false);
          return;
        }
      } catch (e) {
        // Ignore error
      }

      // 3. Fallback to Timezone (simplified for brevity, assume utility works)
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      let detected = 'US';
      if (tz.match(/Sao_Paulo|Brasilia/)) detected = 'BR';
      else if (tz.includes('Mexico')) detected = 'MX';
      else if (tz.includes('Madrid')) detected = 'ES';
      // ... (other detections)

      setSelectedCountry(detected);
      setLoading(false);
    };

    detectCountry();
  }, []);

  const currentInfo = MONEDAS[selectedCountry] || MONEDAS['US'];
  const localPrice = PRECIO_BASE_USD * currentInfo.tasa;
  const originalPrice = localPrice * MARKUP;
  const savings = Math.round(((originalPrice - localPrice) / originalPrice) * 100);

  return (
    <div id="pricing" className="py-24 px-4 flex flex-col items-center justify-center min-h-[90vh] bg-[#050505] relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-lg">

        {/* Country Selector - Highlighted */}
        <div className="flex flex-col items-center justify-center mb-8 relative z-20">
          <p className="text-green-400 font-bold mb-3 text-sm animate-pulse flex items-center">
            <span className="mr-2">👇</span>¿No es tu país? Cámbialo aquí<span className="ml-2">👇</span>
          </p>
          <div className="relative inline-flex items-center bg-black/40 border-2 border-green-500/60 rounded-full px-6 py-3 backdrop-blur-md hover:bg-green-900/20 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)] cursor-pointer group">
            <Globe size={22} className="text-green-400 mr-3 group-hover:scale-110 transition-transform" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-transparent text-base font-bold text-white focus:outline-none cursor-pointer appearance-none pr-8 w-full"
            >
              <option value="" className="bg-black">Auto-detectar</option>
              {Object.entries(MONEDAS).map(([code, info]) => (
                <option key={code} value={code} className="bg-black text-white">{info.nombre}</option>
              ))}
            </select>
            <div className="absolute right-5 pointer-events-none text-green-400 group-hover:translate-y-0.5 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Premium Dark Card */}
        <div className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 hover:from-green-500/50 hover:to-green-900/50 transition-all duration-500 shadow-2xl">
          <div className="bg-[#0f0f10] rounded-[23px] p-8 md:p-12 h-full relative overflow-hidden">

            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="text-center mb-8">
              <span className="inline-block py-1 px-3 rounded-md bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider mb-4 border border-green-500/20">
                🔥 ¡OFERTA EXCLUSIVA! 🔥
              </span>
              <h3 className="text-3xl font-black text-white mb-2">¡PRECIO ESPECIAL PARA TU PAÍS!</h3>
            </div>

            {loading ? (
              <div className="h-24 flex items-center justify-center text-green-500 animate-pulse">
                💜 Calculando tu precio...
              </div>
            ) : (
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 text-gray-400 line-through text-lg mb-2">
                  <span className="mr-2 text-xl">{currentInfo.bandera}</span>
                  <span>Precio normal: {formatPrice(originalPrice, currentInfo)}</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                    {formatPrice(localPrice, currentInfo)}
                  </span>
                </div>

                <div className="mt-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-sm text-white">🎉 ¡Precio especial para <strong>{currentInfo.nombre}</strong>!</p>
                  <p className="text-sm text-white">💳 Moneda: {currentInfo.codigo}</p>
                  <p className="mt-2 text-green-400 font-bold animate-pulse">💡 ¡Ahorras {savings}% hoy!</p>
                </div>
              </div>
            )}

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-white text-black font-black text-lg uppercase tracking-wide rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center"
            >
              Comprar Ahora
            </a>

            <div className="mt-6 space-y-2 text-center">
              <p className="text-sm text-white font-bold">PAGO ÚNICO</p>
              <p className="text-xs text-white">✅ Canales y películas para ADULTOS INCLUIDOS</p>
              <p className="text-xs text-white">✅ Pantallas múltiples, ¡colócalo en todos los televisores que quieras! (sin límites)</p>
              <p className="text-xs text-gray-300 mt-3 bg-white/5 rounded-lg px-3 py-2 border border-white/10">💱 En la página de pago, el precio se mostrará automáticamente en la moneda de tu país.</p>
            </div>
          </div>
        </div>

        {/* Brand Compatibility - Monochrome */}
        <div className="mt-12 text-center">
          <h3 className="text-white font-bold mb-4 uppercase text-sm">COMPATIBLE CON LASPRINCIPALES MARCAS DE TV</h3>
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
          <p className="mt-4 text-xs text-white font-bold uppercase">¡Y TODAS LAS DEMÁS MARCAS DE TV CON APLICACIONES!</p>
        </div>

      </div>
    </div>
  );
};

export default PricingWidget;