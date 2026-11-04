import React from 'react';
import { X, Heart, ExternalLink, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Product[];
  onRemoveFavorite: (id: string) => void;
  onSelectProduct: (p: Product) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const formatBRL = (val: number | null | undefined) => {
    if (val === null || val === undefined) return '';
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative max-h-[85vh] flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="text-base font-black text-slate-900">
              Ofertas Salvas ({favorites.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-3 space-y-2.5">
          {favorites.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Heart className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-bold text-slate-700">Nenhum produto salvo ainda.</p>
              <p className="text-xs text-slate-500">
                Clique no coração em qualquer card de produto para guardá-lo aqui.
              </p>
            </div>
          ) : (
            favorites.map((product) => (
              <div
                key={product.id}
                className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 hover:border-slate-300 transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-contain bg-white border border-slate-200 p-1 rounded-lg flex-shrink-0"
                />

                <div 
                  onClick={() => { onSelectProduct(product); onClose(); }}
                  className="flex-1 min-w-0 cursor-pointer"
                >
                  <span className="text-[10px] font-bold text-orange-600 block uppercase">
                    {product.store}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {product.name}
                  </h4>
                  <span className="text-xs font-mono font-black text-slate-950 block mt-0.5">
                    {product.currentPrice !== null && product.currentPrice !== undefined ? formatBRL(product.currentPrice) : 'Consulte na loja'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="p-2 rounded-lg bg-orange-600 text-white hover:bg-orange-500 transition-colors"
                    title="Ir à loja"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onRemoveFavorite(product.id)}
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-200 transition-colors cursor-pointer"
                    title="Remover"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
