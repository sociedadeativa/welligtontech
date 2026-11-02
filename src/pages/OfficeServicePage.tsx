import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  MessageCircle, 
  ArrowLeft, 
  HelpCircle,
  Laptop,
  Check,
  Lock,
  ExternalLink
} from 'lucide-react';
import { PageRoute } from '../types';
import { getWhatsAppServiceUrl, SERVICE_MESSAGES, CONTACT_CONFIG } from '../config/contactConfig';

interface OfficeServicePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const OfficeServicePage: React.FC<OfficeServicePageProps> = ({ onNavigate }) => {
  const whatsAppOfficeUrl = getWhatsAppServiceUrl(SERVICE_MESSAGES.officeInstallation);

  const includedApps = [
    { name: 'Microsoft Word', desc: 'Editor de documentos e textos com formatações e modelos oficiais.' },
    { name: 'Microsoft Excel', desc: 'Planilhas eletrônicas, fórmulas, tabelas dinâmicas e gráficos.' },
    { name: 'Microsoft PowerPoint', desc: 'Apresentações visuais profissionais para reuniões e estudos.' },
    { name: 'Microsoft Outlook', desc: 'Configuração de contas de e-mail corporativo ou pessoal e calendário.' },
    { name: 'Microsoft OneNote', desc: 'Bloco de anotações digital integrado entre computador e celular.' },
    { name: 'OneDrive', desc: 'Configuração do backup na nuvem para sincronização dos seus arquivos.' },
  ];

  const steps = [
    {
      step: '1',
      title: 'Verificação da Licença',
      desc: 'Confirmamos se você já possui chave de 25 dígitos ou login com assinatura ativa (Microsoft 365 ou Office perpétuo).'
    },
    {
      step: '2',
      title: 'Início da Sessão Remota',
      desc: 'Com sua permissão, iniciamos a conexão via software seguro (AnyDesk ou TeamViewer) enquanto você acompanha na tela.'
    },
    {
      step: '3',
      title: 'Instalação Oficial e Limpa',
      desc: 'Baixamos os arquivos originais diretamente dos servidores da Microsoft para evitar arquivos corrompidos ou malwares.'
    },
    {
      step: '4',
      title: 'Ativação e Validação dos Aplicativos',
      desc: 'Vinculamos sua licença original aos programas e testamos a abertura do Word, Excel e Outlook na sua máquina.'
    }
  ];

  return (
    <div className="py-10 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <button
          onClick={() => onNavigate('servicos')}
          className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-orange-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para todos os serviços</span>
        </button>

        {/* Hero Header */}
        <div className="bg-[#09122a] border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>SUPORTE REMOTO ESPECIALIZADO</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Instalação e Configuração do <span className="text-orange-500">Microsoft Office</span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl">
            Assistência técnica remota para download oficial, instalação limpa, configuração de contas de e-mail no Outlook e ativação regular do pacote Office utilizando a sua licença original.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={whatsAppOfficeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/30 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Instalação via WhatsApp</span>
            </a>

            <span className="text-xs text-slate-400 bg-[#121c38] px-3.5 py-3 rounded-xl border border-slate-700/80">
              Atendimento agendado • {CONTACT_CONFIG.whatsappDisplay}
            </span>
          </div>
        </div>

        {/* MANDATORY LICENSE EXPLANATION (CRITICAL REQUIREMENT) */}
        <div className="bg-amber-50 border-2 border-amber-400/90 rounded-3xl p-6 sm:p-8 text-amber-950 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-amber-950">
                Condição Obrigatória: Requisito de Licença Válida
              </h2>
              <span className="text-xs font-semibold text-amber-800">
                Transparência e conformidade com a legislação de direitos autorais e software
              </span>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-amber-900 leading-relaxed border-t border-amber-200/80 pt-3">
            <p>
              Para a realização deste serviço, <strong>é indispensável que o cliente possua uma licença original, chave de ativação genuína de 25 caracteres ou assinatura ativa da Microsoft</strong> (como planos Microsoft 365 Family, Personal ou Business, ou licenças perpétuas Office Home & Student / Home & Business).
            </p>
            <p>
              <strong>A WelligtonTech NÃO fornece, comercializa ou instala softwares modificados, ativadores piratas ("KMS", "cracks") ou chaves irregulares.</strong> Nosso trabalho é estritamente técnico: prestar auxílio na instalação limpa oficial, resolução de erros e configuração adequada no seu computador.
            </p>
            <div className="p-3 bg-white/80 rounded-xl border border-amber-300 text-xs text-amber-950 font-medium">
              Caso você ainda não possua uma licença, podemos orientar você sobre como e onde adquirir a versão oficial diretamente pela Microsoft ou em revendedores homologados no Brasil.
            </div>
          </div>
        </div>

        {/* Included Applications Grid */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-orange-600">
              Softwares Atendidos
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Aplicativos configurados durante o atendimento
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Conforme a versão e plano de licença que você possui:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {includedApps.map((app, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-black text-slate-900">{app.name}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-orange-600">
              Fluxo do Atendimento
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Como realizamos a instalação remota do Office
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, i) => (
              <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="w-8 h-8 rounded-full bg-orange-600 text-white font-black text-xs flex items-center justify-center">
                  {st.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-requisites Checklist */}
        <div className="bg-[#0b1633] text-white border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-black">
              O que você precisa ter pronto antes de iniciar:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="p-3 bg-[#121c38] rounded-xl border border-slate-700/80">
              <strong className="text-white block mb-1">1. Licença Oficial</strong>
              <span>Chave de ativação de 25 dígitos ou conta Microsoft com plano ativo.</span>
            </div>
            <div className="p-3 bg-[#121c38] rounded-xl border border-slate-700/80">
              <strong className="text-white block mb-1">2. Internet Estável</strong>
              <span>Conexão ativa para baixar o instalador oficial e realizar a sessão remota.</span>
            </div>
            <div className="p-3 bg-[#121c38] rounded-xl border border-slate-700/80">
              <strong className="text-white block mb-1">3. Windows 10 ou 11</strong>
              <span>Sistema operacional instalado e funcionando no computador.</span>
            </div>
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">
            Pronto para configurar seu Microsoft Office com suporte técnico?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Clique no botão abaixo para nos enviar uma mensagem no WhatsApp. O texto com a sua solicitação já estará pré-preenchido.
          </p>

          <div className="pt-2">
            <a
              href={whatsAppOfficeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black px-8 py-4 rounded-2xl text-sm transition-all shadow-xl shadow-emerald-600/30 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar Instalação pelo WhatsApp</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400">
            Atendimento técnico remoto • WelligtonTech Suporte de Informática
          </p>
        </div>
      </div>
    </div>
  );
};
