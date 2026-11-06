import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Star, 
  ShieldCheck, 
  Heart, 
  Zap,
  Info,
  Laptop,
  Mouse,
  Tablet,
  CheckCircle2
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
  onBack
}) => {
  const initialStore = (product.stores && product.stores.length > 0)
    ? product.stores[0].storeId
    : 'amazon';

  const [selectedStoreId, setSelectedStoreId] = useState<'amazon' | 'mercadolivre' | 'shopee'>(initialStore);
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const firstStore = (product.stores && product.stores.length > 0)
      ? product.stores[0].storeId
      : 'amazon';
    setSelectedStoreId(firstStore);
    setSelectedImage(product.image);
    setImgError(false);
  }, [product.id, product.image]);

  const formatBRL = (val: number | null | undefined) => {
    if (val === null || val === undefined) return '';
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const storeOffers = useMemo(() => {
    const rawOffers = [
      {
        storeId: 'amazon' as const,
        name: 'Amazon Brasil',
        shortName: 'Amazon',
        url: product.stores?.find((s) => s.storeId === 'amazon')?.url || product.amazonUrl || product.affiliateUrl,
        badge: product.stores?.find((s) => s.storeId === 'amazon')?.badge || 'Oferta Oficial',
        modelName: product.stores?.find((s) => s.storeId === 'amazon')?.modelName,
        specsVariation: product.stores?.find((s) => s.storeId === 'amazon')?.specsVariation,
        image: product.stores?.find((s) => s.storeId === 'amazon')?.image,
        currentPrice: product.stores?.find((s) => s.storeId === 'amazon')?.currentPrice,
        previousPrice: product.stores?.find((s) => s.storeId === 'amazon')?.previousPrice,
        discountPercentage: product.stores?.find((s) => s.storeId === 'amazon')?.discountPercentage,
        installments: product.stores?.find((s) => s.storeId === 'amazon')?.installments,
        btnClass: 'bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 shadow-sm',
        isAvailable: product.stores ? product.stores.some((s) => s.storeId === 'amazon') : !!product.amazonUrl
      },
      {
        storeId: 'mercadolivre' as const,
        name: 'Mercado Livre',
        shortName: 'Mercado Livre',
        url: product.stores?.find((s) => s.storeId === 'mercadolivre')?.url || product.mercadoLivreUrl || product.affiliateUrl,
        badge: product.stores?.find((s) => s.storeId === 'mercadolivre')?.badge || 'Envio Oficial',
        modelName: product.stores?.find((s) => s.storeId === 'mercadolivre')?.modelName,
        specsVariation: product.stores?.find((s) => s.storeId === 'mercadolivre')?.specsVariation,
        image: product.stores?.find((s) => s.storeId === 'mercadolivre')?.image,
        currentPrice: product.stores?.find((s) => s.storeId === 'mercadolivre')?.currentPrice,
        previousPrice: product.stores?.find((s) => s.storeId === 'mercadolivre')?.previousPrice,
        discountPercentage: product.stores?.find((s) => s.storeId === 'mercadolivre')?.discountPercentage,
        installments: product.stores?.find((s) => s.storeId === 'mercadolivre')?.installments,
        btnClass: 'bg-[#FFE600] hover:bg-[#F5DC00] text-[#2D3277] border border-yellow-400 font-black shadow-sm',
        isAvailable: product.stores ? product.stores.some((s) => s.storeId === 'mercadolivre') : !!product.mercadoLivreUrl
      },
      {
        storeId: 'shopee' as const,
        name: 'Shopee',
        shortName: 'Shopee',
        url: product.stores?.find((s) => s.storeId === 'shopee')?.url || product.shopeeUrl || product.affiliateUrl,
        badge: product.stores?.find((s) => s.storeId === 'shopee')?.badge || 'Loja Oficial',
        modelName: product.stores?.find((s) => s.storeId === 'shopee')?.modelName,
        specsVariation: product.stores?.find((s) => s.storeId === 'shopee')?.specsVariation,
        image: product.stores?.find((s) => s.storeId === 'shopee')?.image,
        currentPrice: product.stores?.find((s) => s.storeId === 'shopee')?.currentPrice,
        previousPrice: product.stores?.find((s) => s.storeId === 'shopee')?.previousPrice,
        discountPercentage: product.stores?.find((s) => s.storeId === 'shopee')?.discountPercentage,
        installments: product.stores?.find((s) => s.storeId === 'shopee')?.installments,
        btnClass: 'bg-[#EE4D2D] hover:bg-[#DE3C1C] text-white border border-[#EE4D2D] shadow-sm',
        isAvailable: product.stores ? product.stores.some((s) => s.storeId === 'shopee') : !!product.shopeeUrl
      }
    ];

    const available = rawOffers.filter((o) => o.isAvailable);
    return available.length > 0 ? available : rawOffers;
  }, [product]);

  const activeOffer = useMemo(() => {
    const found = storeOffers.find((s) => s.storeId === selectedStoreId);
    return found || storeOffers[0];
  }, [storeOffers, selectedStoreId]);

  const handleSelectStore = (storeId: 'amazon' | 'mercadolivre' | 'shopee') => {
    setSelectedStoreId(storeId);
    const storeObj = storeOffers.find((s) => s.storeId === storeId);
    if (storeObj?.image) {
      setSelectedImage(storeObj.image);
      setImgError(false);
    }
  };

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
          <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 relative min-h-[340px]">
            <div className="w-full flex-1 flex items-center justify-center relative">
              {imgError ? (
                <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-50 rounded-xl p-6 text-center border border-dashed border-slate-200">
                  {product.category === 'perifericos' ? (
                    <Mouse className="w-16 h-16 text-slate-400 mb-2" />
                  ) : product.category === 'tablets' ? (
                    <Tablet className="w-16 h-16 text-slate-400 mb-2" />
                  ) : (
                    <Laptop className="w-16 h-16 text-slate-400 mb-2" />
                  )}
                  <span className="text-sm font-black uppercase text-slate-600 tracking-wider">
                    {product.brand}
                  </span>
                  <span className="text-xs text-slate-400 font-medium mt-1">
                    Imagem do produto indisponível
                  </span>
                </div>
              ) : (
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="max-h-80 w-full object-contain rounded-xl p-2 transition-all duration-300"
                  onError={() => setImgError(true)}
                />
              )}
              <button
                onClick={() => onToggleFavorite(product.id)}
                className="absolute top-2 right-2 p-2.5 rounded-full bg-white text-slate-400 hover:text-rose-500 shadow-sm transition-colors cursor-pointer border border-slate-100 z-10"
                title={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'text-rose-500 fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Store Photos Gallery Tabs */}
            {storeOffers.some((s) => s.image) && (
              <div className="w-full mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                  Visualizar foto do anúncio:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => { setSelectedImage(product.image); setImgError(false); }}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all border cursor-pointer ${
                      selectedImage === product.image
                        ? 'bg-orange-50 text-orange-700 border-orange-500 ring-2 ring-orange-200'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>Padrão</span>
                  </button>
                  {storeOffers.map((store) => store.image && (
                    <button
                      key={store.storeId}
                      type="button"
                      onClick={() => handleSelectStore(store.storeId)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all border cursor-pointer ${
                        selectedImage === store.image
                          ? 'bg-orange-50 text-orange-700 border-orange-500 ring-2 ring-orange-200'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <img 
                        src={store.image} 
                        alt={store.name} 
                        className="w-4 h-4 object-contain rounded shrink-0" 
                        onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                      />
                      <span>{store.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
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

            {/* Pricing Box with Store Selection Tabs */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-5">
              {/* Store Switcher Tabs */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-600">
                    Selecione a loja parceira:
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Preço e oferta variam por loja
                  </span>
                </div>
                <div className={`grid gap-2 ${
                  storeOffers.length === 1 ? 'grid-cols-1' : storeOffers.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
                }`}>
                  {storeOffers.map((store) => {
                    const isSelected = store.storeId === selectedStoreId;
                    return (
                      <button
                        key={store.storeId}
                        type="button"
                        onClick={() => handleSelectStore(store.storeId)}
                        className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer relative ${
                          isSelected
                            ? store.storeId === 'amazon'
                              ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-md ring-2 ring-slate-400'
                              : store.storeId === 'mercadolivre'
                              ? 'bg-[#FFE600] text-[#2D3277] border-yellow-500 shadow-md ring-2 ring-yellow-400'
                              : 'bg-[#EE4D2D] text-white border-[#EE4D2D] shadow-md ring-2 ring-red-300'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black">{store.shortName}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                        </div>
                        <div className="text-[11px] font-bold mt-1 truncate">
                          {store.currentPrice ? formatBRL(store.currentPrice) : 'Sob consulta'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Store Indicator */}
              <div className="flex items-center justify-between text-xs py-2 px-3 bg-white rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-700">
                  Oferta exibida: <strong className="text-slate-950 font-black">{activeOffer.name}</strong>
                </span>
                {activeOffer.badge && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-orange-100 text-orange-900">
                    {activeOffer.badge}
                  </span>
                )}
              </div>

              {/* Price Panel (Dynamic per selected store) */}
              <div className="space-y-3">
                {activeOffer.currentPrice !== null && activeOffer.currentPrice !== undefined ? (
                  <>
                    {activeOffer.previousPrice && activeOffer.previousPrice > activeOffer.currentPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-slate-400 line-through">
                          De {formatBRL(activeOffer.previousPrice)}
                        </span>
                        {Math.round(((activeOffer.previousPrice - activeOffer.currentPrice) / activeOffer.previousPrice) * 100) > 0 ? (
                          <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                            -{Math.round(((activeOffer.previousPrice - activeOffer.currentPrice) / activeOffer.previousPrice) * 100)}% OFF
                          </span>
                        ) : null}
                      </div>
                    ) : null}

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-950 font-mono tracking-tight">
                        {formatBRL(activeOffer.currentPrice)}
                      </span>
                    </div>

                    {activeOffer.installments ? (
                      <p className="text-xs text-slate-500">
                        ou em até {activeOffer.installments.count}x de {formatBRL(activeOffer.installments.value)}
                        {activeOffer.installments.interestFree === false ? ' no cartão' : ' sem juros no cartão'}
                      </p>
                    ) : (
                      <p className="text-xs text-slate-500">
                        Consulte condições de parcelamento na loja
                      </p>
                    )}
                  </>
                ) : (
                  <div className="space-y-2 py-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100 text-amber-900 text-xs font-bold">
                      <Info className="w-3.5 h-3.5 text-amber-700" />
                      <span>Preço sob consulta na loja parceira</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                      Consulte o preço na loja
                    </div>
                    <p className="text-xs text-slate-500">
                      O valor atual e as condições de pagamento devem ser verificados diretamente na página oficial da loja parceira.
                    </p>
                  </div>
                )}
              </div>

              {/* Selected Model & Specs Callout */}
              {(activeOffer.modelName || activeOffer.specsVariation) && (
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                  {activeOffer.modelName && (
                    <div className="font-black text-slate-900">
                      Modelo ofertado na {activeOffer.shortName}: <span className="text-orange-600 font-bold">{activeOffer.modelName}</span>
                    </div>
                  )}
                  {activeOffer.specsVariation && (
                    <div className="text-slate-600 text-[11px] leading-relaxed">
                      {activeOffer.specsVariation}
                    </div>
                  )}
                </div>
              )}

              {/* Warning on variations if applicable */}
              {product.hasStoreVariations && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs font-semibold flex items-start gap-2 shadow-2xs">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-black text-amber-900">Atenção:</strong> Modelos e configurações variam conforme a loja. Confira antes de comprar.
                  </span>
                </div>
              )}

              {/* Main Store CTA Button */}
              <div className="space-y-3 pt-1">
                <a
                  href={activeOffer.url}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98 ${activeOffer.btnClass}`}
                >
                  <span>Ir para a oferta na {activeOffer.shortName}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Direct quick links to other stores */}
                <div className="pt-2">
                  <span className="block text-[11px] font-bold text-slate-500 mb-1.5">
                    Ou veja nas outras lojas parceiras:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {storeOffers
                      .filter((s) => s.storeId !== selectedStoreId)
                      .map((altStore) => (
                        <a
                          key={altStore.storeId}
                          href={altStore.url}
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                          className="py-2 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-between transition-all"
                        >
                          <span className="truncate">{altStore.shortName}</span>
                          <div className="flex items-center gap-1 text-[10px] text-slate-500 shrink-0 font-medium">
                            <span>{altStore.currentPrice ? formatBRL(altStore.currentPrice) : 'Ver loja'}</span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </div>
                        </a>
                      ))}
                  </div>
                </div>

                {/* Disclaimer regarding verified values */}
                <div className="p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                  <p>
                    * Valores verificados recentemente na loja parceira. Não há sincronização em tempo real; preços, disponibilidade e condições de parcelamento estão sujeitos a alteração diretamente no site do varejista.
                  </p>
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

        {/* Store Comparison and Breakdown Section */}
        {product.stores && product.stores.length > 0 && (
          <div className={`rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 ${
            product.hasStoreVariations 
              ? 'bg-amber-50/70 border border-amber-300' 
              : 'bg-white border border-slate-200'
          }`}>
            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                product.hasStoreVariations
                  ? 'bg-amber-200 text-amber-900'
                  : 'bg-emerald-100 text-emerald-800'
              }`}>
                {product.hasStoreVariations ? (
                  <Info className="w-5 h-5 text-amber-800" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                )}
              </div>
              <div className="space-y-1">
                <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                  product.hasStoreVariations
                    ? 'bg-amber-200 text-amber-950'
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {product.hasStoreVariations ? 'Aviso de Variações' : 'Disponibilidade Verificada'}
                </span>
                <h2 className={`text-base sm:text-lg font-black ${
                  product.hasStoreVariations ? 'text-amber-950' : 'text-slate-900'
                }`}>
                  {product.hasStoreVariations 
                    ? 'Modelos e configurações variam conforme a loja. Confira antes de comprar.' 
                    : 'Ofertas verificadas nas lojas parceiras oficiais'}
                </h2>
                <p className={`text-xs leading-relaxed ${
                  product.hasStoreVariations ? 'text-amber-900' : 'text-slate-600'
                }`}>
                  {product.storeVariationsNote || (
                    product.hasStoreVariations
                      ? "Os modelos e especificações técnicas variam dependendo da plataforma parceira. Não afirmamos que os anúncios são idênticos. Confira a configuração exata de cada anúncio antes de comprar:"
                      : "Configurações equivalentes verificadas na Amazon, Mercado Livre e Shopee com redirecionamento seguro e links oficiais patrocinados:"
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {storeOffers.map((store) => {
                const isSelected = store.storeId === selectedStoreId;
                return (
                  <div
                    key={store.storeId}
                    className={`p-4 bg-white rounded-2xl border shadow-xs flex flex-col justify-between space-y-3 transition-all ${
                      isSelected 
                        ? 'ring-2 ring-orange-500 border-orange-500' 
                        : product.hasStoreVariations ? 'border-amber-200' : 'border-slate-200'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-slate-900">
                          {store.name}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          product.hasStoreVariations 
                            ? 'bg-amber-100 text-amber-800' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {store.badge}
                        </span>
                      </div>

                      {/* Store-specific Pricing Highlight */}
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        {store.currentPrice !== null && store.currentPrice !== undefined ? (
                          <>
                            {store.previousPrice && store.previousPrice > store.currentPrice ? (
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-slate-400 line-through">
                                  De {formatBRL(store.previousPrice)}
                                </span>
                                <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-1 rounded">
                                  -{Math.round(((store.previousPrice - store.currentPrice) / store.previousPrice) * 100)}%
                                </span>
                              </div>
                            ) : null}
                            <div className="text-base font-black text-slate-950 font-mono">
                              {formatBRL(store.currentPrice)}
                            </div>
                            {store.installments ? (
                              <div className="text-[10px] text-slate-500 mt-0.5">
                                até {store.installments.count}x de {formatBRL(store.installments.value)}
                              </div>
                            ) : null}
                          </>
                        ) : (
                          <div className="text-xs font-bold text-amber-800">
                            Consulte o preço na loja
                          </div>
                        )}
                      </div>

                      {/* Model Image Preview */}
                      {store.image && (
                        <div 
                          onClick={() => {
                            handleSelectStore(store.storeId);
                            window.scrollTo({ top: 120, behavior: 'smooth' });
                          }}
                          className="h-28 w-full bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-2 cursor-pointer hover:border-orange-500 transition-colors group"
                          title={`Selecionar oferta e visualizar imagem da ${store.shortName}`}
                        >
                          <img 
                            src={store.image} 
                            alt={store.modelName || store.name} 
                            className="h-full w-full object-contain group-hover:scale-105 transition-transform" 
                            loading="lazy"
                          />
                        </div>
                      )}

                      {store.modelName && (
                        <div className={`text-[11px] font-black px-2.5 py-1 rounded-lg border ${
                          product.hasStoreVariations
                            ? 'text-amber-950 bg-amber-100/70 border-amber-200'
                            : 'text-slate-800 bg-slate-100 border-slate-200'
                        }`}>
                          Modelo: {store.modelName}
                        </div>
                      )}
                      <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        {store.specsVariation || 'Especificação padrão conforme ficha técnica.'}
                      </p>
                    </div>

                    <div className="pt-2 space-y-2">
                      <button
                        type="button"
                        onClick={() => {
                          handleSelectStore(store.storeId);
                          window.scrollTo({ top: 120, behavior: 'smooth' });
                        }}
                        className={`w-full py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-orange-50 text-orange-700 border-orange-400'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                        }`}
                      >
                        {isSelected ? '✓ Oferta selecionada acima' : 'Selecionar oferta'}
                      </button>

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
                  </div>
                );
              })}
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
