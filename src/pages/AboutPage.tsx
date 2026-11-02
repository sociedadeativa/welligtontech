import React from 'react';
import { Target, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Hero */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
            <span>Nossa História & Propósito</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Sobre o Welligton<span className="text-orange-600">Tech</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            "Tecnologia boa, pelo preço certo."
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 text-sm text-slate-700 leading-relaxed shadow-sm">
          <div>
            <h2 className="text-lg font-black text-slate-900 mb-2">
              Quem Somos
            </h2>
            <p>
              O <strong>WelligtonTech</strong> nasceu da necessidade de simplificar e desmistificar a compra de hardware e tecnologia no Brasil. Em um mercado com centenas de peças, oscilações diárias de preços e frequentes promoções inflacionadas, nosso compromisso é oferecer uma curadoria técnica honesta, sem jargões desnecessários e focada exclusivamente no custo-benefício real do comprador.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Nossa Missão</h3>
              <p className="text-xs text-slate-600">
                Ajudar entusiastas, estudantes e profissionais a montar seus computadores e comprar seus eletrônicos pagando o preço justo, evitando peças incompatíveis e gargalos.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Independência Editorial</h3>
              <p className="text-xs text-slate-600">
                Não somos financiados por fabricantes. Nossas recomendações baseiam-se em testes de bancada, histórico real de preços e confiabilidade de garantia nacional.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-black text-slate-900 mb-2">
              Como Selecionamos Nossas Ofertas
            </h2>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Verificação de Preço Histórico:</strong> Comparamos o valor com a média dos últimos 30 a 90 dias antes de publicar.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Lojas Oficiais:</strong> Apenas parceiros com excelente reputação no Reclame Aqui e canais oficiais de distribuição no Brasil (KaBuM!, Amazon, TerabyteShop, Pichau).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Garantia e RMA:</strong> Damos preferência a marcas com assistência e suporte técnico acessível no Brasil.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-slate-500">
              Dúvidas ou sugestões? Nossa equipe está sempre à disposição.
            </span>
            <button
              onClick={() => onNavigate('contato')}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
