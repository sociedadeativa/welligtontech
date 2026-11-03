import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const AffiliateDisclosurePage: React.FC = () => {
  return (
    <div className="py-12 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparência com o Consumidor</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Divulgação de Afiliados e Transparência
          </h1>
          <p className="text-xs text-slate-500">
            Saiba exatamente como o WelligtonTech é financiado e como garantimos a integridade de nossas recomendações.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-sm">
          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900">
              1. O que são Links de Afiliados?
            </h2>
            <p>
              O <strong>WelligtonTech</strong> é um portal gratuito mantido através de programas de afiliados. Quando você clica nos botões oficiais direcionando para a Amazon, Mercado Livre ou Shopee e realiza uma compra, o portal pode receber uma pequena comissão percentual pelo direcionamento qualificado.
            </p>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-emerald-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 text-xs">O preço do produto aumenta para você?</strong>
                <span className="text-xs text-slate-700">
                  <strong>Absolutamente NÃO!</strong> O preço do produto é rigorosamente o mesmo (ou até mais barato caso você utilize nossos cupons divulgados). A comissão é paga pelo orçamento de publicidade da própria loja parceira, sem qualquer cobrança adicional ou repasse ao consumidor.
                </span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900">
              2. Uso Obrigatório do Atributo rel="sponsored"
            </h2>
            <p>
              Em estrita conformidade com as Boas Práticas do Google para Webmasters e diretrizes de publicidade online, todos os links que apontam para páginas comerciais de varejistas afiliados são identificados no código HTML com:
            </p>
            <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 font-mono text-xs text-orange-600 font-bold">
              rel="sponsored noopener noreferrer"
            </div>
            <p>
              Isso garante máxima transparência para os motores de busca e para você, diferenciando links editoriais de links com remuneração de parceria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900">
              3. Critério Editorial Rígido
            </h2>
            <p>
              Nossa equipe <strong>NUNCA</strong> recomenda um produto ruim apenas porque a comissão é mais alta. Nosso lema é <em>"Tecnologia boa, pelo preço certo."</em>. Se um hardware tiver histórico crônico de superaquecimento, VRM de baixa qualidade ou alto índice de devoluções no Brasil, ele é sumariamente descartado da nossa curadoria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-black text-slate-900">
              4. Lojas Parceiras Oficiais
            </h2>
            <p>
              Participamos dos programas oficiais de afiliados das maiores e mais confiáveis redes de varejo de informática e tecnologia do Brasil:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-bold">Amazon Brasil</li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-bold">Mercado Livre</li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-bold">Shopee</li>
            </ul>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <span>
                Preços e condições de parcelamento podem variar conforme a data e estoque da loja parceira.
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
