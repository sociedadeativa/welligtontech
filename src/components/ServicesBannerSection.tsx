import React from 'react';
import { 
  Wrench, 
  FileText, 
  Monitor, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  MessageCircle,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { PageRoute } from '../types';
import { COMPUTER_SERVICES } from '../data/servicesData';
import { getWhatsAppServiceUrl, SERVICE_MESSAGES } from '../config/contactConfig';

interface ServicesBannerSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const ServicesBannerSection: React.FC<ServicesBannerSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-10 bg-[#09142f] border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/40 text-orange-400 text-xs font-bold">
              <Wrench className="w-3.5 h-3.5 text-orange-400" />
              <span>SUPORTE TÉCNICO 100% REMOTO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Serviços de Informática Especializados
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Atendimento técnico remoto para resolução de problemas, ajustes finos do Windows, otimização de computadores e instalação oficial do pacote Microsoft Office.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => onNavigate('servicos')}
              className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-black px-5 py-2.5 rounded-xl transition-all shadow-md shadow-orange-600/30 cursor-pointer"
            >
              <span>Ver Página de Serviços</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPUTER_SERVICES.map((serv) => {
            const whatsAppUrl = getWhatsAppServiceUrl(serv.whatsappMessage);

            return (
              <div
                key={serv.id}
                className="bg-[#0e1d42] border border-slate-700/80 hover:border-orange-500 rounded-3xl p-5 flex flex-col justify-between space-y-4 shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                      {serv.iconName === 'office' && <FileText className="w-5 h-5" />}
                      {serv.iconName === 'windows' && <Monitor className="w-5 h-5" />}
                      {serv.iconName === 'troubleshoot' && <Wrench className="w-5 h-5" />}
                      {serv.iconName === 'optimization' && <Zap className="w-5 h-5" />}
                    </div>

                    {serv.isSpecialHighlight && (
                      <span className="text-[9px] font-black uppercase tracking-wider bg-orange-600 text-white px-2 py-0.5 rounded-full">
                        Destaque
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-black text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {serv.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {serv.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-700/60">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-3 rounded-xl text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Solicitar via WhatsApp</span>
                  </a>

                  {serv.dedicatedRoute ? (
                    <button
                      onClick={() => onNavigate(serv.dedicatedRoute!)}
                      className="w-full text-center text-[11px] font-bold text-orange-400 hover:text-orange-300 py-1 transition-colors cursor-pointer"
                    >
                      Ver detalhes do Office →
                    </button>
                  ) : (
                    <button
                      onClick={() => onNavigate('servicos')}
                      className="w-full text-center text-[11px] font-bold text-slate-400 hover:text-white py-1 transition-colors cursor-pointer"
                    >
                      Mais informações →
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & License Disclaimer Strip */}
        <div className="bg-[#071026] border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              <strong>Atendimento Seguro:</strong> Você acompanha todo o procedimento na tela do seu computador em tempo real.
            </span>
          </div>

          <div className="flex items-center gap-2 text-orange-300 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <span>Instalações de Office exigem licença própria oficial do cliente (não utilizamos ativadores irregulares).</span>
          </div>
        </div>
      </div>
    </section>
  );
};
