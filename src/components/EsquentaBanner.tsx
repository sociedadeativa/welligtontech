import React, { useRef, useState, useEffect } from 'react';
import { Flame, Clock, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75,
        behavior: 'smooth'
      });
    }
  };

  const esquentaProducts = products.filter((p) => p.isEsquenta || p.discountPercentage >= 20);

  return (
    <section className="py-6 bg-[#070d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Header Row (Screenshot 4) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Flame className="w-5 h-5 fill-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  ESQUENTA DE OFERTAS
                </h2>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white font-mono text-xs font-bold backdrop-blur-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>
                    Termina em {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <p className="text-white/90 text-xs sm:text-sm font-medium">
                Descontos agressivos à vista no PIX com frete grátis e cupons ativos
              </p>
            </div>

            <div className="flex items-center gap-2">
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

              <button
                onClick={() => onNavigate('ofertas')}
                className="flex items-center gap-1.5 bg-white text-orange-600 hover:bg-slate-100 font-black px-4 py-2 rounded-xl text-xs transition-all shadow-md ml-2 cursor-pointer"
              >
                <span>Ver todas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Horizontal Product Cards Row */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 overflow-x-auto no-scrollbar py-2 scroll-smooth"
          >
            {esquentaProducts.map((product) => (
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
      </div>
    </section>
  );
};
