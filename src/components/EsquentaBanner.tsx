import React, { useRef } from 'react';
import { Flame, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product, PageRoute } from '../types';

interface EsquentaBannerProps {
  products: Product[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onNavigate: (route: PageRoute) => void;
}

export const EsquentaBanner: React.FC<EsquentaBannerProps> = ({
  products,
  favorites,
  onToggleFavorite,
  onSelectProduct,
  onNavigate
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstCard = container.firstElementChild as HTMLElement | null;
      let scrollStep = 296;
      if (firstCard) {
        const computedStyle = window.getComputedStyle(container);
        const gap = parseFloat(computedStyle.columnGap || computedStyle.gap) || 16;
        scrollStep = firstCard.offsetWidth + gap;
      }

      const targetScroll = direction === 'left'
        ? Math.max(0, container.scrollLeft - scrollStep)
        : container.scrollLeft + scrollStep;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const esquentaProducts = products.filter((p) => p.isEsquenta || (p.discountPercentage && p.discountPercentage >= 20));

  return (
    <section className="py-6 bg-[#070d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 px-3.5 py-5 sm:px-5 sm:py-6 md:px-6 md:py-7 shadow-2xl relative overflow-hidden">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 px-1 sm:px-1.5">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Flame className="w-5 h-5 fill-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  DESTAQUES & OFERTAS
                </h2>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-bold backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curadoria Especial</span>
                </div>
              </div>

              <p className="text-white/90 text-xs sm:text-sm font-medium">
                Seleção técnica de componentes e eletrônicos com foco em custo-benefício.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {esquentaProducts.length > 0 && (
                <>
                  <button
                    onClick={() => scroll('left')}
                    className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <button
                onClick={() => onNavigate('ofertas')}
                className="flex items-center gap-1.5 bg-white text-orange-600 hover:bg-slate-100 font-black px-4 py-2 rounded-xl text-xs transition-all shadow-md ml-2 cursor-pointer"
              >
                <span>Ver catálogo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Product Cards Row or Professional Empty State */}
          {esquentaProducts.length === 0 ? (
            <div className="py-12 px-6 text-center text-white space-y-3 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto text-white">
                <Flame className="w-6 h-6 fill-white" />
              </div>
              <h3 className="text-lg font-black tracking-tight">Novas ofertas em atualização</h3>
              <p className="text-xs sm:text-sm text-white/85 max-w-md mx-auto leading-relaxed">
                Nossa curadoria está selecionando novas oportunidades de hardware com excelente custo-benefício. Volte em breve para conferir os destaques recomendados!
              </p>
            </div>
          ) : (
            <div
              ref={scrollRef}
              className="flex items-stretch gap-4 overflow-x-auto no-scrollbar py-2.5 px-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {esquentaProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-[280px] shrink-0 h-full flex flex-col"
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
      </div>
    </section>
  );
};
