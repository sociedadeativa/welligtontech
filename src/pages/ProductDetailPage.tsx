import React from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Star, 
  ShieldCheck, 
  Heart, 
  TrendingDown, 
  Zap,
  Info
} from 'lucide-react';
import { Product, PageRoute } from '../types';

interface ProductDetailPageProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onBack: () => void;
  onNavigate: (route: PageRoute, param?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  onBack,
  onNavigate
}) => {
  const formatBRL = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const storeComparison = [
    { store: product.store, price: product.currentPrice, isBest: true, link: product.affiliateUrl },
    { store: 'KaBuM!', price: Number((product.currentPrice * 1.05).toFixed(2)), isBest: false, link: 'https://kabum.com.br' },
    { store: 'Amazon Brasil', price: Number((product.currentPrice * 1.08).toFixed(2)), isBest: false, link: 'https://amazon.com.br' },
    { store: 'TerabyteShop', price: Number((product.currentPrice * 1.10).toFixed(2)), isBest: false, link: 'https://terabyteshop.com.br' },
  ].filter((v, i, a) => a.findIndex(t => t.store === v.store) === i);

  return (
    <div className="py-8 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-orange-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para as ofertas</span>
        </button>

        {/* Fictional Sample Notice */}
        <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl flex items-center gap-2 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            <strong>Aviso de Demonstração:</strong> Esta página contém dados ilustrativos. Ao clicar no botão abaixo, você será redirecionado para a loja oficial parceira através de link patrocinado (<code className="font-mono text-orange-600 font-bold">rel="sponsored"</code>).
          </span>
        </div>

        {/* Main Product Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-80 w-full object-cover rounded-xl"
            />
            <button
              onClick={() => onToggleFavorite(product.id)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white text-slate-400 hover:text-rose-500 shadow-sm transition-colors cursor-pointer"
              title={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>
          </div>

          {/* Details & Price */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black text-orange-600 bg-orange-100 px-2.5 py-0.5 rounded uppercase">
                  {product.categoryLabel}
                </span>
                <span className="text-xs text-slate-500">
                  Marca: <strong className="text-slate-900">{product.brand}</strong>
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-600 ml-auto font-bold">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400 font-normal">({product.reviewCount} avaliações)</span>
                </div>
              </div>

              <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing Box */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-slate-400 line-through">
                  De {formatBRL(product.previousPrice)}
                </span>
                <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  -{product.discountPercentage}% OFF
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-950 font-mono tracking-tight">
                  {formatBRL(product.currentPrice)}
                </span>
                <span className="text-xs font-bold text-emerald-600">no PIX</span>
              </div>

              <p className="text-xs text-slate-500">
                ou {formatBRL(product.currentPrice * 1.1)} em até {product.installments.count}x de {formatBRL(product.installments.value)} sem juros no cartão
              </p>

              {/* Affiliate CTA */}
              <div className="pt-2">
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-black py-4 px-6 rounded-2xl text-sm transition-all shadow-lg shadow-orange-600/25 cursor-pointer"
                >
                  <span>IR PARA A LOJA OFICIAL ({product.store.toUpperCase()})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Redirecionamento seguro para a loja parceira
                  </span>
                  <span>rel="sponsored"</span>
                </div>
              </div>
            </div>

            {/* Simulated Store Price Comparison */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Comparativo de Preços nas Principais Lojas
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {storeComparison.map((sc, i) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-xl border text-xs flex flex-col justify-between ${
                      sc.isBest
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{sc.store}</span>
                      {sc.isBest && (
                        <span className="text-[9px] bg-emerald-600 text-white font-black px-1 rounded">
                          MELHOR
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-mono font-bold mt-1 text-slate-900">
                      {formatBRL(sc.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-600" />
            <span>Ficha Técnica Detalhada</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {Object.entries(product.specs).map(([key, val], idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-4"
              >
                <span className="text-slate-500 font-semibold">{key}</span>
                <span className="text-slate-900 font-mono font-bold text-right">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
