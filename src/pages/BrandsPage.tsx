import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { BrandItem, Product, PageRoute } from '../types';
import { ProductCard } from '../components/ProductCard';

interface BrandsPageProps {
  brands: BrandItem[];
  products: Product[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onNavigate: (route: PageRoute, param?: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({
  brands,
  products,
  favorites,
  onToggleFavorite,
  onSelectProduct,
  onNavigate
}) => {
  return (
    <div className="py-8 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-2 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
            <Award className="w-4 h-4" />
            <span>Fabricantes Homologadas</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Marcas Recomendadas no Brasil
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Monitoramos e recomendamos apenas produtos de fabricantes com histórico comprovado de confiabilidade, garantia sólida e suporte técnico de qualidade no território nacional.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((b) => (
            <div
              key={b.id}
              onClick={() => onNavigate('ofertas')}
              className="bg-white border border-slate-200/90 hover:border-orange-500 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors uppercase">
                  {b.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {b.categoryLabel}
                </p>
                <span className="text-[11px] font-bold text-orange-600 mt-2 block">
                  Ver catálogo
                </span>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-orange-600">
                <span>Ver produtos</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products from Brands */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-black text-slate-900">
            Destaques das Principais Marcas
          </h2>
          {products.length === 0 ? (
            <div className="py-12 px-6 text-center text-slate-600 space-y-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900">Catálogo de ofertas em atualização</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Estamos selecionando os melhores produtos das marcas recomendadas. Em breve novas ofertas estarão disponíveis.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={onToggleFavorite}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
