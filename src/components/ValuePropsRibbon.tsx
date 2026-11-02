import React from 'react';
import { Zap, ShieldCheck, Lock, Award } from 'lucide-react';

export const ValuePropsRibbon: React.FC = () => {
  return (
    <div className="bg-[#050b1a] border-y border-slate-800/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Item 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-500 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-black text-white block">
                Menor Preço Real
              </strong>
              <span className="text-[11px] text-slate-400">
                Varredura contínua de lojas
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-black text-white block">
                Lojas Homologadas
              </strong>
              <span className="text-[11px] text-slate-400">
                Apenas parceiros confiáveis
              </span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-black text-white block">
                Links Seguros
              </strong>
              <span className="text-[11px] text-slate-400">
                Redirecionamento oficial direto
              </span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-black text-white block">
                100% Gratuito
              </strong>
              <span className="text-[11px] text-slate-400">
                Sem taxas ou cobranças
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
