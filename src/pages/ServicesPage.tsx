import React from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Lock, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Monitor,
  HelpCircle,
  FileText
} from 'lucide-react';
import { PageRoute } from '../types';
import { COMPUTER_SERVICES } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { getWhatsAppServiceUrl, SERVICE_MESSAGES, CONTACT_CONFIG } from '../config/contactConfig';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const generalWhatsAppUrl = getWhatsAppServiceUrl(SERVICE_MESSAGES.general);

  return (
    <div className="py-10 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Hero Header */}
        <div className="bg-[#09122a] border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Suporte Técnico Especializado</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Serviços de Informática <span className="text-orange-500">100% Remotos</span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
              Atendimento técnico prático e seguro para o seu computador, sem necessidade de deslocamento ou taxa de visita. Conexão remota transparente e autorizada por você.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/30 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com Técnico no WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('servico-office')}
                className="flex items-center gap-2 bg-[#121c38] hover:bg-[#19274d] text-orange-400 border border-orange-500/30 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Instalação do Microsoft Office</span>
              </button>
            </div>
          </div>
        </div>

        {/* License Compliance Callout Banner */}
        <div className="bg-amber-50 border border-amber-300/80 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-sm font-bold text-amber-950">
                Aviso Importante sobre Licenciamento de Softwares
              </h3>
              <p className="text-xs text-amber-900/90 leading-relaxed max-w-3xl">
                A WelligtonTech atua em total conformidade legal e ética. <strong>Não vendemos, distribuímos ou instalamos softwares com ativadores irregulares ("cracks" ou pirataria).</strong> Toda instalação de Microsoft Office ou Windows requer que o usuário possua ou adquira sua própria licença original oficial.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('servico-office')}
            className="flex-shrink-0 text-xs font-bold text-amber-900 hover:text-orange-700 underline flex items-center gap-1 cursor-pointer"
          >
            <span>Ver requisitos do Office</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Catálogo de Serviços Remotos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Selecione o serviço desejado e inicie o contato direto com mensagem pré-preenchida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPUTER_SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>

        {/* How Remote Support Works Step-by-Step */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-orange-600">
              Passo a Passo
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Como funciona o atendimento remoto?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Processo direto, seguro e assistido do início ao fim pelo cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-black text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="text-sm font-bold text-slate-900">Contato Inicial</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Você entra em contato via WhatsApp informando qual serviço precisa e descrevendo eventuais mensagens de erro.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-black text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="text-sm font-bold text-slate-900">Alinhamento</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Confirmamos se seu computador atende aos requisitos básicos e combinamos o horário ideal para a conexão.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-black text-xs flex items-center justify-center">
                3
              </span>
              <h3 className="text-sm font-bold text-slate-900">Conexão Segura</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Você baixa um aplicativo seguro (como AnyDesk ou TeamViewer) e autoriza a sessão gerando um código único temporário.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-black text-xs flex items-center justify-center">
                4
              </span>
              <h3 className="text-sm font-bold text-slate-900">Execução e Teste</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                O serviço é executado com você acompanhando cada clique na tela. Realizamos testes práticos para certificar o funcionamento.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Guarantees Note */}
        <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-black flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              <span>Privacidade e Segurança em Primeiro Lugar</span>
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Você pode encerrar a sessão remota a qualquer instante com um clique. Não temos acesso ao seu computador sem a sua autorização explícita em cada atendimento.
            </p>
          </div>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-5 py-3 rounded-xl text-xs transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp: {CONTACT_CONFIG.whatsappDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
