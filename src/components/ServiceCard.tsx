import React from 'react';
import { 
  FileText, 
  Monitor, 
  Wrench, 
  Zap, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { ServiceItem, PageRoute } from '../types';
import { getWhatsAppServiceUrl } from '../config/contactConfig';

interface ServiceCardProps {
  service: ServiceItem;
  onNavigate?: (route: PageRoute) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
  const getIcon = () => {
    switch (service.iconName) {
      case 'office':
        return <FileText className="w-6 h-6 text-orange-600" />;
      case 'windows':
        return <Monitor className="w-6 h-6 text-sky-600" />;
      case 'troubleshoot':
        return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'optimization':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      default:
        return <Wrench className="w-6 h-6 text-orange-600" />;
    }
  };

  const whatsAppUrl = getWhatsAppServiceUrl(service.whatsappMessage);

  return (
    <div className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-xl ${
      service.isSpecialHighlight 
        ? 'border-orange-500/80 ring-2 ring-orange-500/20' 
        : 'border-slate-200/90 hover:border-orange-500/50'
    }`}>
      {/* Top Banner if highlighted */}
      {service.isSpecialHighlight && (
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[10px] uppercase font-black tracking-wider py-1.5 px-4 flex items-center justify-between">
          <span>Serviço Mais Solicitado</span>
          <span className="flex items-center gap-1 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Suporte Remoto Homologado
          </span>
        </div>
      )}

      <div className="p-6 sm:p-7 space-y-4">
        {/* Icon & Title */}
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-inner">
            {getIcon()}
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 block">
              Suporte Remoto Especializado
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* What is included */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
            O que está incluso no atendimento:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {service.includedItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements & License alert */}
        {service.requirements.length > 0 && (
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold text-[11px]">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span>Requisitos prévios:</span>
            </div>
            <ul className="list-disc list-inside text-[11px] space-y-0.5 text-slate-500">
              {service.requirements.map((req, rIdx) => (
                <li key={rIdx}>{req}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 space-y-2">
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 active:scale-[0.98] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Solicitar Atendimento via WhatsApp</span>
        </a>

        {service.dedicatedRoute && onNavigate && (
          <button
            onClick={() => onNavigate(service.dedicatedRoute!)}
            className="w-full flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
          >
            <span>Conhecer detalhes da instalação do Office</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
          </button>
        )}
      </div>
    </div>
  );
};
