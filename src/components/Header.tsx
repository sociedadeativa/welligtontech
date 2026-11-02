import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Bell, 
  Heart, 
  Flame, 
  ChevronRight, 
  ShieldCheck, 
  BookOpen,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon as Instagram } from './InstagramIcon';
import { PageRoute } from '../types';
import { CONTACT_CONFIG } from '../config/contactConfig';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, param?: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
  favoritesCount,
  onOpenFavorites
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#09122a] border-b border-slate-800 text-white shadow-xl">
      {/* Top Demo & Compliance Notice Bar (matching Screenshot 4) */}
      <div className="bg-[#050a17] text-xs py-1.5 px-4 border-b border-slate-800/80 text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-orange-600 text-slate-950 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-black">
              DEMONSTRAÇÃO
            </span>
            <span className="text-slate-300 text-xs">
              WelligtonTech: Dados ilustrativos para teste. Links patrocinados com <strong className="text-orange-400 font-mono">rel="sponsored"</strong>.
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('afiliados')}
              className="hover:text-orange-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Transparência de Afiliados</span>
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('guias')}
              className="hover:text-orange-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-orange-400" />
              <span>Guias de Compra</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0 select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-orange-600/30 group-hover:scale-105 transition-transform">
              W
            </div>

            <div>
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Welligton<span className="text-orange-500">Tech</span>
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide hidden sm:block">
                Tecnologia boa, pelo preço certo.
              </p>
            </div>
          </div>

          {/* Location Chip (Screenshot 4) */}
          <div className="hidden xl:flex items-center gap-2 bg-[#121c38] px-3.5 py-2 rounded-xl border border-slate-700/80 text-xs text-slate-300">
            <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <div className="text-left leading-tight">
              <span className="text-[10px] text-slate-400 block">Ofertas para</span>
              <strong className="text-white text-xs">São Paulo, SP</strong>
            </div>
          </div>

          {/* Search Bar with Orange Buscar button */}
          <form 
            onSubmit={onSearchSubmit}
            className="flex-1 max-w-xl relative hidden md:block"
          >
            <div className="relative w-full flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busque por placa de vídeo, processador, notebook, SSD..."
                className="w-full pl-4 pr-28 py-2.5 bg-[#121c38] border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Buscar</span>
              </button>
            </div>
          </form>

          {/* Actions: Alertas & Favoritos */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onNavigate('ofertas')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#121c38] border border-transparent hover:border-slate-700 transition-all cursor-pointer"
            >
              <Bell className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Alertas</span>
            </button>

            <button
              onClick={onOpenFavorites}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#121c38] border border-transparent hover:border-slate-700 transition-all relative cursor-pointer"
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-rose-500 fill-rose-500' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">Favoritos</span>
              {favoritesCount > 0 && (
                <span className="bg-orange-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white bg-[#121c38] rounded-xl border border-slate-700"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="md:hidden pt-3">
          <form onSubmit={onSearchSubmit} className="relative w-full flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar placa de vídeo, processador..."
              className="w-full pl-3.5 pr-24 py-2 bg-[#121c38] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 bg-orange-600 text-white font-bold rounded-lg text-xs flex items-center gap-1"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Buscar</span>
            </button>
          </form>
        </div>
      </div>

      {/* Secondary Sub-navigation bar (matching Screenshot 4) */}
      <div className="bg-[#0b1633] border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => onNavigate('home')}
              className={`hover:text-orange-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === 'home' ? 'text-orange-400 font-bold' : ''
              }`}
            >
              Início
            </button>

            <button
              onClick={() => onNavigate('ofertas')}
              className={`flex items-center gap-1 hover:text-orange-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === 'ofertas' ? 'text-orange-400 font-bold' : ''
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Ofertas do Dia</span>
            </button>

            <button
              onClick={() => onNavigate('marcas')}
              className={`hover:text-orange-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === 'marcas' ? 'text-orange-400 font-bold' : ''
              }`}
            >
              Marcas
            </button>

            <button
              onClick={() => onNavigate('guias')}
              className={`hover:text-orange-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === 'guias' ? 'text-orange-400 font-bold' : ''
              }`}
            >
              Guias & Comparativos
            </button>

            <button
              onClick={() => onNavigate('servicos')}
              className={`flex items-center gap-1.5 hover:text-orange-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === 'servicos' || currentRoute === 'servico-office' ? 'text-orange-400 font-bold' : ''
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Serviços de Informática</span>
            </button>

            <button
              onClick={() => onNavigate('sobre')}
              className={`hover:text-orange-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === 'sobre' ? 'text-orange-400 font-bold' : ''
              }`}
            >
              Sobre o WelligtonTech
            </button>

            <button
              onClick={() => onNavigate('contato')}
              className={`hover:text-orange-400 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === 'contato' ? 'text-orange-400 font-bold' : ''
              }`}
            >
              Contato & Parcerias
            </button>
          </div>

          {/* Instagram Profile Pill */}
          <a
            href={CONTACT_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-500/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-orange-500/30 text-pink-300 border border-pink-500/40 px-3.5 py-1 rounded-full text-xs font-bold transition-all shadow-sm"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>Fale conosco pelo Instagram</span>
            <ExternalLink className="w-3 h-3 text-pink-400 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a142c] border-b border-slate-800 p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-[#121c38] rounded-xl text-left"
            >
              Início
            </button>
            <button
              onClick={() => { onNavigate('ofertas'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-[#121c38] rounded-xl text-left text-orange-400 font-bold"
            >
              Ofertas do Dia
            </button>
            <button
              onClick={() => { onNavigate('marcas'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-[#121c38] rounded-xl text-left"
            >
              Marcas
            </button>
            <button
              onClick={() => { onNavigate('guias'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-[#121c38] rounded-xl text-left"
            >
              Guias de Compra
            </button>
            <button
              onClick={() => { onNavigate('servicos'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-[#121c38] rounded-xl text-left text-orange-400 font-semibold"
            >
              🛠️ Serviços de TI
            </button>
            <button
              onClick={() => { onNavigate('sobre'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-[#121c38] rounded-xl text-left"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => { onNavigate('contato'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-[#121c38] rounded-xl text-left"
            >
              Contato
            </button>
          </div>

          <a
            href={CONTACT_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full p-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold text-xs rounded-xl"
          >
            <Instagram className="w-4 h-4" />
            <span>Fale conosco pelo Instagram</span>
          </a>
        </div>
      )}
    </header>
  );
};
