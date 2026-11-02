import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product, CategoryItem, PageRoute } from '../types';

interface CategoryPageProps {
  categoryId: string;
  categories: CategoryItem[];
  products: Product[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  onNavigate: (route: PageRoute, param?: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryId,
  categories,
  products,
  favorites,
  onToggleFavorite,
  onSelectProduct,
  onNavigate
}) => {
  const currentCat = categories.find((c) => c.id === categoryId) || categories[0];
  const catProducts = categoryId === 'todos' 
    ? products 
    : products.filter((p) => p.category === categoryId);

  return (
    <div className="py-8 bg-[#f8fafc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-orange-600 transition-colors cursor-pointer"
          >
            Início
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button 
            onClick={() => onNavigate('ofertas')}
            className="hover:text-orange-600 transition-colors cursor-pointer"
          >
            Categorias
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-orange-600 font-bold">{currentCat.name}</span>
        </div>

        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Departamento Especializado</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {currentCat.name}
            </h1>
            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
              Confira os modelos recomendados com o melhor custo-benefício e preços verificados em lojas oficiais brasileiras.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl">
              {catProducts.length} itens disponíveis
            </span>
            <button
              onClick={() => onNavigate('guias')}
              className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-black px-4 py-2 rounded-xl transition-all shadow-md shadow-orange-600/20 cursor-pointer"
            >
              Guia de Compra
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {catProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
