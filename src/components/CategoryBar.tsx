import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Laptop, 
  Monitor, 
  Cpu, 
  Grid, 
  Tv, 
  HardDrive, 
  Database, 
  MonitorCheck, 
  Gamepad2, 
  Mouse, 
  Smartphone, 
  Tablet,
  Headphones, 
  Wrench,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CategoryItem } from '../types';

interface CategoryBarProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const getIcon = (id: string) => {
    switch (id) {
      case 'notebooks': return Laptop;
      case 'pcs': return Monitor;
      case 'tablets': return Tablet;
      case 'processadores': return Cpu;
      case 'placas-mae': return Grid;
      case 'placas-video': return Tv;
      case 'memoria-ram': return HardDrive;
      case 'ssd': return Database;
      case 'monitores': return MonitorCheck;
      case 'gaming': return Gamepad2;
      case 'perifericos': return Mouse;
      case 'smartphones': return Smartphone;
      case 'acessorios': return Headphones;
      case 'monte-seu-pc': return Wrench;
      default: return Cpu;
    }
  };

  const checkScrollLimits = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollStep = Math.max(el.clientWidth * 0.6, 240);
    el.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth'
    });
    setTimeout(checkScrollLimits, 150);
    setTimeout(checkScrollLimits, 400);
  };

  useEffect(() => {
    checkScrollLimits();

    const el = scrollContainerRef.current;
    if (!el) return;

    const handleResize = () => {
      checkScrollLimits();
    };

    window.addEventListener('resize', handleResize);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        checkScrollLimits();
      });
      observer.observe(el);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [checkScrollLimits, categories]);

  return (
    <div className="bg-white border-b border-slate-200 py-3 shadow-sm relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative flex items-center">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pr-3 pl-0 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none">
              <button
                type="button"
                onClick={() => scrollByAmount('left')}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-md text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 pointer-events-auto"
                aria-label="Rolar categorias para a esquerda"
                title="Categorias anteriores"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Scrollable Category Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollLimits}
            className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full py-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat) => {
              const Icon = getIcon(cat.id);
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  data-category-id={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex flex-col items-center gap-1.5 min-w-[72px] sm:min-w-[80px] py-1 transition-all group cursor-pointer shrink-0 ${
                    isSelected ? 'scale-105' : 'hover:-translate-y-0.5'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-orange-50 group-hover:text-orange-600 border border-slate-200/80'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold text-center leading-tight whitespace-nowrap ${
                    isSelected ? 'text-orange-600' : 'text-slate-700 group-hover:text-orange-600'
                  }`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pl-3 pr-0 bg-gradient-to-l from-white via-white/95 to-transparent pointer-events-none">
              <button
                type="button"
                onClick={() => scrollByAmount('right')}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-md text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 pointer-events-auto"
                aria-label="Rolar categorias para a direita"
                title="Próximas categorias"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
