import React from 'react';
import { Lock } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
            <Lock className="w-4 h-4" />
            <span>Segurança & Conformidade Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Política de Privacidade (LGPD)
          </h1>
          <p className="text-xs text-slate-500">
            Última atualização: Novembro de 2026. Em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-sm">
          <section className="space-y-2">
            <h2 className="text-base font-black text-slate-900">
              1. Visão Geral e Compromisso
            </h2>
            <p>
              O portal <strong>WelligtonTech</strong> respeita profundamente a privacidade de seus visitantes. Esta política detalha como tratamos e protegemos seus dados ao navegar em nosso website e interagir com nossos conteúdos de tecnologia e hardware.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black text-slate-900">
              2. Coleta de Dados e Navegação Anônima
            </h2>
            <p>
              O WelligtonTech é um portal estático informativo e de curadoria. <strong>Não solicitamos cadastro prévio, criação de senhas ou dados financeiros (cartões de crédito/banco) para consultar nossos conteúdos e ofertas.</strong> Todo o processamento de compras ocorre exclusivamente nos servidores seguros das lojas parceiras (KaBuM!, Amazon, TerabyteShop, Pichau, Mercado Livre).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black text-slate-900">
              3. Cookies e Rastreamento de Afiliados
            </h2>
            <p>
              Ao clicar em links de ofertas sinalizados com o atributo <code className="font-mono text-orange-600 font-bold">rel="sponsored"</code>, a loja de destino poderá instalar um cookie temporário no seu navegador para registrar que o direcionamento originou-se do portal WelligtonTech. Esse cookie não armazena dados de identificação pessoal sigilosa e serve unicamente para comissionamento técnico da venda.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black text-slate-900">
              4. Formulários de Contato e Comunidade
            </h2>
            <p>
              Caso você utilize voluntariamente o formulário de contato, utilizaremos seu nome e endereço de e-mail exclusivamente para responder à solicitação encaminhada. Nós nunca venderemos, alugaremos ou repassaremos seus dados para terceiros ou listas de spam.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black text-slate-900">
              5. Direitos do Titular de Dados
            </h2>
            <p>
              Sob a LGPD, você tem direito a confirmar a existência de tratamento, solicitar correção ou eliminação de eventuais dados cadastrais. Para exercer qualquer direito, entre em contato pelo e-mail <strong>contato@welligtontech.com.br</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
