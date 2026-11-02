import React from 'react';
import { 
  Heart, 
  ExternalLink, 
  Star, 
  Share2, 
  Eye, 
  CheckCircle2,
  ShieldCheck
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
  const formatBRL = (val: number) => {
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
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative text-slate-800">
      <div>
        {/* Top Header Row: Rating + Action Icons */}
        <div className="p-3.5 pb-2 flex items-center justify-between z-10">
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

        {/* Product Image Area */}
        <div 
          onClick={() => onSelectProduct(product)}
          className="relative px-4 py-2 flex items-center justify-center bg-slate-50/60 cursor-pointer overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Badge Ribbon (e.g. purple pill ESQUENTA) */}
        <div className="px-3.5 pt-2.5 flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-purple-900 text-white shadow-xs">
            {product.badge}
          </span>
        </div>

        {/* Store & Brand info */}
        <div className="px-3.5 pt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: product.storeDotColor || '#ea580c' }}
            />
            <span className="font-bold text-slate-800 text-[11px]">
              {product.store}
            </span>
          </div>

          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
            {product.brand}
          </span>
        </div>

        {/* Product Title */}
        <div 
          onClick={() => onSelectProduct(product)}
          className="px-3.5 pt-1.5 cursor-pointer"
        >
          <h3 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-orange-600 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Pricing Block */}
        <div className="px-3.5 pt-2.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-400 line-through">
              De {formatBRL(product.previousPrice)}
            </span>
            <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
              -{product.discountPercentage}%
            </span>
          </div>

          <div className="mt-0.5">
            <span className="text-lg font-black text-slate-950 font-mono tracking-tight">
              {formatBRL(product.currentPrice)}
            </span>
          </div>

          <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
            À vista no <strong className="text-slate-800 font-bold">PIX</strong> ou {product.installments.count}x de {formatBRL(product.installments.value)}
          </p>

          {/* Stock remaining notice (Red text like in screenshot) */}
          <div className="flex items-center justify-between text-[10px] mt-2 pt-2 border-t border-slate-100">
            <span className="text-rose-600 font-black">
              Restam {product.remainingUnits || 12} Unid.
            </span>
            <span className="text-slate-400 text-[9px]">
              Oferta verificada
            </span>
          </div>
        </div>
      </div>

      {/* Two Bottom Action Buttons (Screenshot 4, 3, 2) */}
      <div className="p-3 pt-2 grid grid-cols-2 gap-2">
        {/* Comparar Button */}
        <button
          onClick={() => onSelectProduct(product)}
          className="flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 px-2.5 rounded-xl text-xs transition-colors cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Comparar</span>
        </button>

        {/* Ir à Loja Affiliate Button (rel="sponsored") */}
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="flex items-center justify-center gap-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-extrabold py-2 px-2.5 rounded-xl text-xs transition-all shadow-md shadow-orange-600/20 active:scale-[0.98] cursor-pointer"
        >
          <span>Ir à Loja</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
