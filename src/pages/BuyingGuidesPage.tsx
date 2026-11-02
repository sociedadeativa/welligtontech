import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { BuyingGuide, PageRoute } from '../types';

interface BuyingGuidesPageProps {
  guides: BuyingGuide[];
  onNavigate: (route: PageRoute, param?: string) => void;
}

export const BuyingGuidesPage: React.FC<BuyingGuidesPageProps> = ({
  guides,
  onNavigate
}) => {
  const [selectedGuide, setSelectedGuide] = useState<BuyingGuide | null>(null);

  return (
    <div className="py-8 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-2 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
            <BookOpen className="w-4 h-4" />
            <span>Engenharia & Custo por Desempenho</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Guias de Compra & Comparativos Técnicos
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Não tome decisões de compra baseado apenas em números de marketing. Nossa equipe analisa arquitetura, consumo elétrico (TDP), temperaturas e benchmarks em jogos reais para que você faça o melhor investimento.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => setSelectedGuide(guide)}
              className="bg-white border border-slate-200/90 hover:border-orange-500 rounded-2xl p-5 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-orange-600 uppercase tracking-wider">
                    {guide.tag}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  <span>Ler análise completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full guide reading */}
        {selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
            <div 
              className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  {selectedGuide.tag}
                </span>
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {selectedGuide.title}
              </h2>

              <div className="flex items-center gap-3 text-xs text-slate-400 pb-2 border-b border-slate-100">
                <span>{selectedGuide.date}</span>
                <span>•</span>
                <span>{selectedGuide.readTime}</span>
                <span>•</span>
                <span>Por Equipe Editorial WelligtonTech</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
                <p className="font-semibold text-slate-900">
                  {selectedGuide.summary}
                </p>

                <h4 className="text-sm font-bold text-orange-600 pt-2">
                  1. O Cenário Brasileiro de Preços
                </h4>
                <p>
                  Com o mercado oscilando devido a variações cambiais e lançamentos recentes, entender a métrica de "Custo por Frame" (R$ gasto por cada FPS gerado) é indispensável. Muitas vezes, uma peça que custa 20% a mais entrega apenas 4% a mais de desempenho real.
                </p>

                <h4 className="text-sm font-bold text-orange-600 pt-2">
                  2. Equilíbrio de Plataforma
                </h4>
                <p>
                  Evite gargalos desnecessários. Combinar um processador topo de linha com uma placa de vídeo de entrada desequilibra o orçamento. Sempre privilegie placas-mãe com VRMs bem refrigerados e fontes com certificação 80 Plus comprovada por laboratórios de testes independentes.
                </p>

                <h4 className="text-sm font-bold text-orange-600 pt-2">
                  3. Veredito WelligtonTech
                </h4>
                <p>
                  Sempre acompanhe as promoções no PIX monitoradas pelo nosso portal. Ao utilizar cupons ativos de lojas como KaBuM! e TerabyteShop, é possível economizar o valor equivalente a um pente extra de memória RAM ou um SSD NVMe de 1TB.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Fechar Artigo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
