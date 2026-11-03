import React, { useState, useMemo } from 'react';
import { Flame, Search, RefreshCw, Info } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product, CategoryItem } from '../types';

interface OffersPageProps {
  products: Product[];
  categories: CategoryItem[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
  initialSearch?: string;
  initialCategory?: string;
}

export const OffersPage: React.FC<OffersPageProps> = ({
  products,
  categories,
  favorites,
  onToggleFavorite,
  onSelectProduct,
  initialSearch = '',
  initialCategory = 'todos'
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCat, setSelectedCat] = useState(initialCategory);
  const [selectedStore, setSelectedStore] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState<'discount' | 'priceAsc' | 'priceDesc' | 'recent'>('discount');

  const stores = ['all', 'Amazon', 'Mercado Livre', 'Shopee'];
  const brands = useMemo(() => {
    const list = Array.from(new Set(products.map((p) => p.brand)));
    return ['all', ...list];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }

    if (selectedCat !== 'todos') {
      result = result.filter((p) => p.category === selectedCat);
    }

    if (selectedStore !== 'all') {
      result = result.filter(
        (p) =>
          p.store.toLowerCase().includes(selectedStore.toLowerCase()) ||
          p.stores?.some((s) => s.storeName.toLowerCase().includes(selectedStore.toLowerCase())) ||
          (selectedStore === 'Amazon' && Boolean(p.amazonUrl)) ||
          (selectedStore === 'Mercado Livre' && Boolean(p.mercadoLivreUrl)) ||
          (selectedStore === 'Shopee' && Boolean(p.shopeeUrl))
      );
    }

    if (selectedBrand !== 'all') {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    result.sort((a, b) => {
      if (sortBy === 'discount') return (b.discountPercentage || 0) - (a.discountPercentage || 0);
      if (sortBy === 'priceAsc') return a.currentPrice - b.currentPrice;
      if (sortBy === 'priceDesc') return b.currentPrice - a.currentPrice;
      return 0;
    });

    return result;
  }, [products, searchTerm, selectedCat, selectedStore, selectedBrand, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCat('todos');
    setSelectedStore('all');
    setSelectedBrand('all');
    setSortBy('discount');
  };

  return (
    <div className="py-8 bg-[#f8fafc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-orange-100 text-orange-600">
                <Flame className="w-5 h-5 fill-orange-600" />
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Ofertas de Hardware e Tecnologia
              </h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Curadoria independente de hardware, componentes e tecnologia com foco em custo-benefício.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-2.5 rounded-xl text-xs text-slate-600 flex items-center gap-2 shadow-xs">
            <Info className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span>Links com identificação transparente <strong className="text-slate-900 font-mono">rel="sponsored"</strong></span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Search input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filtrar por nome ou specs..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Category Select */}
            <div>
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-orange-500 font-medium"
              >
                <option value="todos">Todas as Categorias</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Store Select */}
            <div>
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-orange-500 font-medium"
              >
                <option value="all">Todas as Lojas</option>
                <option value="KaBuM!">KaBuM!</option>
                <option value="Amazon Brasil">Amazon Brasil</option>
                <option value="TerabyteShop">TerabyteShop</option>
                <option value="Pichau">Pichau</option>
              </select>
            </div>

            {/* Brand Select */}
            <div>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-orange-500 font-medium"
              >
                <option value="all">Todas as Marcas</option>
                {brands.filter((b) => b !== 'all').map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Sort Select */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-orange-600 focus:outline-none focus:border-orange-500"
              >
                <option value="discount">Maior Desconto (% OFF)</option>
                <option value="priceAsc">Menor Preço no PIX</option>
                <option value="priceDesc">Maior Preço</option>
                <option value="recent">Mais Recentes</option>
              </select>
            </div>
          </div>

          {/* Filter summary and reset */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Encontrados <strong className="text-slate-900">{filteredProducts.length}</strong> produtos
            </span>

            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 text-xs text-orange-600 hover:text-orange-700 font-bold cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Limpar Filtros</span>
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <Search className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">
              {products.length === 0 ? 'Catálogo de ofertas em atualização' : 'Nenhum produto encontrado'}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              {products.length === 0 
                ? 'Nossa curadoria está avaliando e selecionando novas ofertas e oportunidades de hardware. Volte em breve para conferir as recomendações!'
                : 'Tente redefinir seus filtros de busca ou procurar por outros termos.'}
            </p>
            {products.length > 0 && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-orange-600 text-white font-bold rounded-xl text-xs hover:bg-orange-500 transition-colors cursor-pointer"
              >
                Redefinir Filtros
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
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
  );
};
