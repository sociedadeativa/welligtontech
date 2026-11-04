import React, { useState } from 'react';
import { 
  Heart, 
  ExternalLink, 
  Star, 
  Share2, 
  Eye, 
  CheckCircle2,
  ShieldCheck,
  Laptop,
  Mouse,
  Package
} from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  onSelectProduct
}) => {
  const [imgError, setImgError] = useState(false);

  const formatBRL = (val: number | null | undefined) => {
    if (val === null || val === undefined) return '';
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: product.name,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${product.name} - Confira no WelligtonTech: ${window.location.href}`);
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative text-slate-800 h-[545px] w-full">
      <div className="flex flex-col">
        {/* Top Header Row: Rating + Action Icons */}
        <div className="p-3.5 pb-2 flex items-center justify-between z-10 h-10">
          <div className="flex items-center gap-1 text-[11px] font-bold text-amber-700">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-slate-400 font-normal">({product.reviewCount})</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Compartilhar"
              aria-label="Compartilhar"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(product.id);
              }}
              className="p-1 rounded-full text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
              title={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
              aria-label="Favoritar"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Product Image Area with object-contain & fallback */}
        <div 
          onClick={() => onSelectProduct(product)}
          className="relative px-3 py-2 h-44 flex items-center justify-center bg-white cursor-pointer overflow-hidden border-b border-slate-100"
        >
          {imgError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 rounded-xl p-3 text-center border border-dashed border-slate-200">
              {product.category === 'perifericos' ? (
                <Mouse className="w-10 h-10 text-slate-400 mb-1" />
              ) : (
                <Laptop className="w-10 h-10 text-slate-400 mb-1" />
              )}
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                {product.brand}
              </span>
              <span className="text-[9px] text-slate-400 font-medium line-clamp-1">
                Foto não fornecida
              </span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-1 rounded-xl group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* Badge Ribbon (e.g. purple pill ESQUENTA) */}
        <div className="px-3.5 pt-2 flex items-center gap-2 h-7">
          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-purple-900 text-white shadow-xs">
            {product.badge}
          </span>
        </div>

        {/* Store & Brand info */}
        <div className="px-3.5 pt-1 flex items-center justify-between text-xs h-5">
          <div className="flex items-center gap-1.5">
            <span 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: product.storeDotColor || '#ea580c' }}
            />
            <span className="font-bold text-slate-800 text-[11px] truncate max-w-[150px]">
              {product.store}
            </span>
          </div>

          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
            {product.brand}
          </span>
        </div>

        {/* Product Title (Standardized 2-line height) */}
        <div 
          onClick={() => onSelectProduct(product)}
          className="px-3.5 pt-1 h-10 flex items-start cursor-pointer"
        >
          <h3 
            className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-orange-600 transition-colors"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing Block */}
        <div className="px-3.5 pt-1.5">
          {product.currentPrice !== null && product.currentPrice !== undefined ? (
            <>
              <div className="flex items-center gap-1.5 h-4">
                {product.previousPrice && product.previousPrice > product.currentPrice ? (
                  <>
                    <span className="text-[11px] text-slate-400 line-through">
                      De {formatBRL(product.previousPrice)}
                    </span>
                    <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                      -{Math.round(((product.previousPrice - product.currentPrice) / product.previousPrice) * 100)}%
                    </span>
                  </>
                ) : (
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Oferta Verificada
                  </span>
                )}
              </div>

              <div className="mt-0.5 h-6 flex items-baseline">
                <span className="text-lg font-black text-slate-950 font-mono tracking-tight">
                  {formatBRL(product.currentPrice)}
                </span>
              </div>

              <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 h-4 truncate">
                {product.installments
                  ? `ou ${product.installments.count}x de ${formatBRL(product.installments.value)}`
                  : 'Consulte condições de parcelamento'}
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1.5 h-4">
                <span className="text-[10px] font-bold text-amber-700 bg-amber-100/80 px-1.5 py-0.2 rounded">
                  Sob consulta
                </span>
              </div>

              <div className="mt-0.5 h-6 flex items-baseline">
                <span className="text-sm font-black text-slate-800 tracking-tight">
                  Consulte o preço na loja
                </span>
              </div>

              <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5 h-4 truncate">
                Preços e estoque no site parceiro
              </p>
            </>
          )}
        </div>

          {/* Standardized Store variation notice slot */}
          <div className="h-6 mt-1.5">
            {product.hasStoreVariations ? (
              <div className="h-full py-0.5 px-2 rounded-lg bg-amber-50 border border-amber-200/80 text-[10px] text-amber-900 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
                <span className="truncate">Especificações variam por loja</span>
              </div>
            ) : (
              <div className="h-full py-0.5 px-2 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-500 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">Especificação homologada</span>
              </div>
            )}
          </div>

          {/* Stock remaining notice */}
          <div className="flex items-center justify-between text-[10px] mt-1.5 pt-1.5 border-t border-slate-100 h-6">
            <span className="text-rose-600 font-black">
              Restam {product.remainingUnits || 12} Unid.
            </span>
            <span className="text-slate-400 text-[9px]">
              Oferta verificada
            </span>
          </div>
        </div>

      {/* Action Area: Details Button + 3 Dedicated Store Buttons */}
      <div className="p-3 pt-2 space-y-2 mt-auto border-t border-slate-100/80 bg-white z-10">
        {/* Comparar / Ver Ficha Button */}
        <button
          onClick={() => onSelectProduct(product)}
          className="w-full h-8 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-2 rounded-xl text-xs transition-colors cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-slate-500" />
          <span>Ver Ficha & Comparativo</span>
        </button>

        {/* 3 Dedicated Store Affiliate Buttons (Amazon, Mercado Livre, Shopee) */}
        <div>
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1 px-0.5 h-4">
            <span>Comprar na loja oficial:</span>
            <span className="text-[9px] text-slate-400 font-normal">rel="sponsored"</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 h-8">
            {/* Amazon Button */}
            <a
              href={product.amazonUrl || product.affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-0.5 bg-slate-900 hover:bg-slate-800 text-amber-400 py-1.5 px-1 rounded-lg text-[10px] font-black tracking-tight transition-all shadow-xs active:scale-95 text-center cursor-pointer group/btn h-8 relative z-20"
              title="Abrir oferta na Amazon (Abre em nova aba com rel=sponsored)"
            >
              <span>Amazon</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-80 group-hover/btn:opacity-100 shrink-0" />
            </a>

            {/* Mercado Livre Button */}
            <a
              href={product.mercadoLivreUrl || product.affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-0.5 bg-[#FFE600] hover:bg-[#F5DC00] text-[#2D3277] py-1.5 px-1 rounded-lg text-[10px] font-black tracking-tight transition-all shadow-xs active:scale-95 text-center cursor-pointer group/btn h-8 relative z-20"
              title="Abrir oferta no Mercado Livre (Abre em nova aba com rel=sponsored)"
            >
              <span className="truncate">M. Livre</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-80 group-hover/btn:opacity-100 shrink-0" />
            </a>

            {/* Shopee Button */}
            <a
              href={product.shopeeUrl || product.affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-0.5 bg-[#EE4D2D] hover:bg-[#DE3C1C] text-white py-1.5 px-1 rounded-lg text-[10px] font-black tracking-tight transition-all shadow-xs active:scale-95 text-center cursor-pointer group/btn h-8 relative z-20"
              title="Abrir oferta na Shopee (Abre em nova aba com rel=sponsored)"
            >
              <span>Shopee</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-80 group-hover/btn:opacity-100 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
