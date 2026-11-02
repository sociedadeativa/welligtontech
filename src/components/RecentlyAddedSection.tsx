import React, { useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface RecentlyAddedSectionProps {
  products: Product[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
}

export const RecentlyAddedSection: React.FC<RecentlyAddedSectionProps> = ({
  products,
  favorites,
  onToggleFavorite,
  onSelectProduct
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75,
        behavior: 'smooth'
      });
    }
  };

  const recent = products.filter((p) => p.isRecentlyAdded || p.id === 'wt-06' || p.id === 'wt-08' || p.id === 'wt-05');

  return (
    <section className="py-8 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Title and Arrows (Screenshot 2 top) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 fill-orange-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Acabaram de chegar
            </h2>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              - Lançamentos e novas ofertas adicionadas hoje
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full bg-white text-slate-700 hover:text-orange-600 hover:bg-slate-100 flex items-center justify-center transition-colors border border-slate-200 shadow-xs cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full bg-white text-slate-700 hover:text-orange-600 hover:bg-slate-100 flex items-center justify-center transition-colors border border-slate-200 shadow-xs cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Cards Row */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 overflow-x-auto no-scrollbar py-2 scroll-smooth"
        >
          {recent.map((product) => (
            <div
              key={product.id}
              className="min-w-[270px] max-w-[285px] flex-shrink-0"
            >
              <ProductCard
                product={product}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={onToggleFavorite}
                onSelectProduct={onSelectProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
