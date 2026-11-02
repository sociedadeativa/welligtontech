import React from 'react';
import { ThumbsUp, ArrowRight } from 'lucide-react';
import { BrandItem, PageRoute } from '../types';

interface RecommendedBrandsSectionProps {
  brands: BrandItem[];
  onSelectBrand: (brandName: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const RecommendedBrandsSection: React.FC<RecommendedBrandsSectionProps> = ({
  brands,
  onSelectBrand,
  onNavigate
}) => {
  return (
    <section className="py-8 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Title and View All Link (Screenshot 2 bottom) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              <ThumbsUp className="w-5 h-5 fill-orange-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Marcas recomendadas
            </h2>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              - Fabricantes com garantia nacional e histórico comprovado
            </span>
          </div>

          <button
            onClick={() => onNavigate('marcas')}
            className="flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-500 cursor-pointer"
          >
            <span>Ver todas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 12 Brands Grid (Screenshot 2 bottom) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand.name)}
              className="bg-white border border-slate-200/90 hover:border-orange-500 rounded-2xl p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group cursor-pointer"
            >
              <h3 className="text-base font-black text-slate-900 group-hover:text-orange-600 transition-colors uppercase">
                {brand.name}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                {brand.categoryLabel}
              </p>
              <span className="text-[10px] font-bold text-slate-400 mt-2 block">
                {brand.offersCount} ofertas
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
