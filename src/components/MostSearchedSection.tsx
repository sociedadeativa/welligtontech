import React, { useState, useRef } from 'react';
import { Target, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface MostSearchedSectionProps {
  products: Product[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
}

export const MostSearchedSection: React.FC<MostSearchedSectionProps> = ({
  products,
  favorites,
  onToggleFavorite,
  onSelectProduct
}) => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filterTabs = [
    { id: 'todos', label: 'TODOS' },
    { id: 'hardware', label: 'HARDWARE' },
    { id: 'computadores', label: 'COMPUTADORES' },
    { id: 'notebooks', label: 'NOTEBOOKS' },
    { id: 'smartphones', label: 'CELULAR & SMARTPHONE' },
    { id: 'perifericos', label: 'PERIFÉRICOS' },
    { id: 'monitores', label: 'MONITORES' },
    { id: 'ssd-memoria', label: 'SSD & MEMÓRIA' },
    { id: 'gaming', label: 'GAMING' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75,
        behavior: 'smooth'
      });
    }
  };

  const filtered = products.filter((p) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'hardware') {
      return ['placas-video', 'processadores', 'placas-mae'].includes(p.category);
    }
    if (activeFilter === 'computadores') return ['pcs'].includes(p.category);
    if (activeFilter === 'notebooks') return p.category === 'notebooks';
    if (activeFilter === 'smartphones') return p.category === 'smartphones';
    if (activeFilter === 'perifericos') return ['perifericos', 'acessorios'].includes(p.category);
    if (activeFilter === 'monitores') return p.category === 'monitores';
    if (activeFilter === 'ssd-memoria') return ['ssd', 'memoria-ram'].includes(p.category);
    if (activeFilter === 'gaming') return p.category === 'gaming';
    return true;
  });

  return (
    <section className="py-8 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Section Title & Arrows */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Mais procurados
            </h2>
          </div>

          {filtered.length > 0 && (
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
          )}
        </div>

        {/* Filter Pills Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#183b70] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Row with Horizontal Scroll or Clean Empty State */}
        {filtered.length === 0 ? (
          <div className="py-12 px-6 text-center text-slate-600 space-y-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Catálogo em atualização</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Estamos selecionando as melhores recomendações de produtos para esta categoria. Em breve as ofertas selecionadas estarão disponíveis aqui.
            </p>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 overflow-x-auto no-scrollbar py-2 scroll-smooth"
          >
            {filtered.map((product) => (
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
        )}
      </div>
    </section>
  );
};
