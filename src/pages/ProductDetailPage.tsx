import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Star, 
  ShieldCheck, 
  Heart, 
  TrendingDown, 
  Zap,
  Info,
  Laptop,
  Mouse
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
  const [imgError, setImgError] = useState(false);

  const formatBRL = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const storeOffers = [
    {
      storeId: 'amazon',
      name: 'Amazon Brasil',
      shortName: 'Amazon',
      url: product.amazonUrl || product.affiliateUrl,
      badge: product.stores?.find((s) => s.storeId === 'amazon')?.badge || 'Oferta Oficial',
      modelName: product.stores?.find((s) => s.storeId === 'amazon')?.modelName,
      specsVariation: product.stores?.find((s) => s.storeId === 'amazon')?.specsVariation,
      btnClass: 'bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 shadow-sm'
    },
    {
      storeId: 'mercadolivre',
      name: 'Mercado Livre',
      shortName: 'Mercado Livre',
      url: product.mercadoLivreUrl || product.affiliateUrl,
      badge: product.stores?.find((s) => s.storeId === 'mercadolivre')?.badge || 'Envio Oficial',
      modelName: product.stores?.find((s) => s.storeId === 'mercadolivre')?.modelName,
      specsVariation: product.stores?.find((s) => s.storeId === 'mercadolivre')?.specsVariation,
      btnClass: 'bg-[#FFE600] hover:bg-[#F5DC00] text-[#2D3277] border border-yellow-400 font-black shadow-sm'
    },
    {
      storeId: 'shopee',
      name: 'Shopee',
      shortName: 'Shopee',
      url: product.shopeeUrl || product.affiliateUrl,
      badge: product.stores?.find((s) => s.storeId === 'shopee')?.badge || 'Loja Oficial',
      modelName: product.stores?.find((s) => s.storeId === 'shopee')?.modelName,
      specsVariation: product.stores?.find((s) => s.storeId === 'shopee')?.specsVariation,
      btnClass: 'bg-[#EE4D2D] hover:bg-[#DE3C1C] text-white border border-[#EE4D2D] shadow-sm'
    }
  ];

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

        {/* Affiliate Disclosure Notice */}
        <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl flex items-center gap-2 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Transparência de Afiliados:</strong> Todos os links para Amazon, Mercado Livre e Shopee são links patrocinados oficiais devidamente identificados com as tags <code className="font-mono text-orange-600 font-bold">rel="sponsored"</code> e <code className="font-mono text-orange-600 font-bold">rel="noopener noreferrer"</code>. Os preços e a disponibilidade são verificados diretamente nas lojas parceiras.
          </span>
        </div>

        {/* Main Product Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 relative min-h-[300px]">
            {imgError ? (
              <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-50 rounded-xl p-6 text-center border border-dashed border-slate-200">
                {product.category === 'perifericos' ? (
                  <Mouse className="w-16 h-16 text-slate-400 mb-2" />
                ) : (
                  <Laptop className="w-16 h-16 text-slate-400 mb-2" />
                )}
                <span className="text-sm font-black uppercase text-slate-600 tracking-wider">
                  {product.brand}
                </span>
                <span className="text-xs text-slate-400 font-medium mt-1">
                  Foto oficial do produto não fornecida
                </span>
              </div>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="max-h-80 w-full object-contain rounded-xl p-2"
                onError={() => setImgError(true)}
              />
            )}
            <button
              onClick={() => onToggleFavorite(product.id)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white text-slate-400 hover:text-rose-500 shadow-sm transition-colors cursor-pointer border border-slate-100"
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
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
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
                ou em até {product.installments.count}x de {formatBRL(product.installments.value)} sem juros no cartão
              </p>

              {/* Three Store Buttons (Amazon, Mercado Livre, Shopee) */}
              <div className="pt-2 space-y-2">
                {product.hasStoreVariations && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs font-semibold flex items-start gap-2 shadow-2xs">
                    <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-black text-amber-900">Atenção:</strong> Os modelos e especificações técnicas variam conforme a loja parceira selecionada. Consulte os detalhes comparativos abaixo.
                    </span>
                  </div>
                )}

                <span className="block text-xs font-black uppercase tracking-wider text-slate-700">
                  Comprar na sua loja preferida:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {storeOffers.map((store) => (
                    <a
                      key={store.storeId}
                      href={store.url}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all font-extrabold cursor-pointer active:scale-98 ${store.btnClass}`}
                    >
                      <div className="flex items-center gap-1.5 text-xs">
                        <span>{store.shortName}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] opacity-85 font-normal mt-0.5">
                        {store.badge}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Lojas homologadas • Redirecionamento seguro
                  </span>
                  <span className="font-mono text-[10px]">rel="sponsored"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store-specific Hardware Variations Notice & Breakdown */}
        {product.hasStoreVariations && (
          <div className="bg-amber-50/70 border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-5 h-5 text-amber-800" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-black text-amber-950">
                  Variações de Hardware Verificadas por Loja
                </h2>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {product.storeVariationsNote || "Os anúncios deste modelo possuem variações de processador, memória RAM, armazenamento SSD ou sistema operacional dependendo da plataforma parceira. Não afirmamos que os anúncios são idênticos. Confira a configuração exata de cada anúncio antes de comprar:"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {storeOffers.map((store) => (
                <div
                  key={store.storeId}
                  className="p-4 bg-white rounded-2xl border border-amber-200 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-slate-900">
                        {store.name}
                      </span>
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                        {store.badge}
                      </span>
                    </div>
                    {store.modelName && (
                      <div className="text-[11px] font-black text-amber-950 bg-amber-100/70 px-2.5 py-1 rounded-lg border border-amber-200">
                        Modelo: {store.modelName}
                      </div>
                    )}
                    <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      {store.specsVariation || 'Especificação padrão conforme ficha técnica.'}
                    </p>
                  </div>

                  <a
                    href={store.url}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${store.btnClass}`}
                  >
                    <span>Ver na {store.shortName}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

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
