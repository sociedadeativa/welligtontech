import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050a17] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Main Footer Columns (Screenshot 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info (takes 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2.5 cursor-pointer select-none"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-black text-white text-base">
                W
              </div>
              <span className="text-xl font-black text-white">
                Welligton<span className="text-orange-500">Tech</span>
              </span>
            </div>

            <p className="text-xs font-bold text-slate-300">
              Tecnologia boa, pelo preço certo.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              O WelligtonTech é o seu portal independente de referência para encontrar as melhores ofertas em hardware, computadores, notebooks e eletrônicos no Brasil. Comparamos preços e selecionamos promoções reais para você economizar com segurança.
            </p>

            <p className="text-[11px] text-slate-400 pt-1">
              Contato editorial: <span className="text-orange-400 font-mono">contato@welligtontech.com.br</span>
            </p>
          </div>

          {/* Categorias (takes 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              CATEGORIAS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('categoria', 'notebooks')} className="hover:text-orange-400 transition-colors">
                  Notebooks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'pcs')} className="hover:text-orange-400 transition-colors">
                  PCs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'processadores')} className="hover:text-orange-400 transition-colors">
                  Processadores
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'placas-mae')} className="hover:text-orange-400 transition-colors">
                  Placas-mãe
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'placas-video')} className="hover:text-orange-400 transition-colors">
                  Placas de Vídeo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'memoria-ram')} className="hover:text-orange-400 transition-colors">
                  Memória RAM
                </button>
              </li>
            </ul>
          </div>

          {/* Mais Hardware (takes 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              MAIS HARDWARE
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('categoria', 'ssd')} className="hover:text-orange-400 transition-colors">
                  SSD
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'monitores')} className="hover:text-orange-400 transition-colors">
                  Monitores
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'gaming')} className="hover:text-orange-400 transition-colors">
                  Gaming
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'perifericos')} className="hover:text-orange-400 transition-colors">
                  Periféricos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'smartphones')} className="hover:text-orange-400 transition-colors">
                  Smartphones
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categoria', 'acessorios')} className="hover:text-orange-400 transition-colors">
                  Acessórios
                </button>
              </li>
            </ul>
          </div>

          {/* Institucional (takes 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              INSTITUCIONAL
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('servicos')} className="text-orange-400 font-bold hover:underline transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Serviços de Informática</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servico-office')} className="hover:text-orange-400 transition-colors">
                  Instalação de Microsoft Office
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sobre')} className="hover:text-orange-400 transition-colors">
                  Sobre o WelligtonTech
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('afiliados')} className="hover:text-orange-400 transition-colors">
                  Transparência & Afiliados
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guias')} className="hover:text-orange-400 transition-colors">
                  Guias de Compra
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marcas')} className="hover:text-orange-400 transition-colors">
                  Marcas Parceiras
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacidade')} className="hover:text-orange-400 transition-colors">
                  Política de Privacidade (LGPD)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contato')} className="hover:text-orange-400 transition-colors">
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Compliance Box (Screenshot 1) */}
        <div className="bg-[#081024] border border-slate-800 rounded-2xl p-5 space-y-2.5 text-[11px] leading-relaxed">
          <div className="flex items-center gap-2 text-orange-400 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Transparência & Aviso de Afiliados (Compliance):</span>
          </div>
          <p className="text-slate-400">
            O <strong>WelligtonTech</strong> é um portal brasileiro independente de curadoria, comparativo de preços e divulgação de ofertas de tecnologia e eletrônicos. Participamos de programas de afiliados comerciais (incluindo o Programa de Associados da Amazon, Programa de Afiliados KaBuM!, TerabyteShop, Pichau e Mercado Livre Afiliados). Como afiliados, podemos receber uma comissão monetária por compras qualificadas efetuadas através dos links disponibilizados neste site, identificados devidamente com a tag <code className="text-orange-300 font-mono font-bold">rel="sponsored"</code>, sem nenhum acréscimo de valor ou cobrança extra para o consumidor final.
          </p>
          <p className="text-slate-500">
            <strong>Aviso de Demonstração:</strong> Os produtos, preços, estoques e promoções exibidos nesta versão inicial são fictícios e destinados unicamente para demonstração de interface e usabilidade do portal. Os preços reais, prazos e disponibilidade são sempre confirmados nas respectivas lojas oficiais parceiras no momento da compra.
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>
            © 2026 WelligtonTech. Todos os direitos reservados. Feito para entusiastas de tecnologia no Brasil.
          </span>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => onNavigate('privacidade')} className="hover:text-white">
              Privacidade
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('afiliados')} className="hover:text-white">
              Termos de Afiliado
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
