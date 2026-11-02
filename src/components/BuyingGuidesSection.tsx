import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { BuyingGuide, PageRoute } from '../types';

interface BuyingGuidesSectionProps {
  guides: BuyingGuide[];
  onSelectGuide: (g: BuyingGuide) => void;
  onNavigate: (route: PageRoute) => void;
}

export const BuyingGuidesSection: React.FC<BuyingGuidesSectionProps> = ({
  guides,
  onSelectGuide,
  onNavigate
}) => {
  return (
    <section className="py-8 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Title & View All (Screenshot 1 top) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5 fill-orange-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Guias de compra & comparativos
            </h2>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              - Dicas de especialistas para não errar na montagem do seu setup
            </span>
          </div>

          <button
            onClick={() => onNavigate('guias')}
            className="flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-500 cursor-pointer"
          >
            <span>Todos os guias</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Row (Screenshot 1 top) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          {guides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => onSelectGuide(guide)}
              className="bg-white border border-slate-200/90 hover:border-orange-500 rounded-2xl p-5 flex flex-col justify-between space-y-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group cursor-pointer"
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
      </div>
    </section>
  );
};
