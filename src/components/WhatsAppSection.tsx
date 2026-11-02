import React, { useState } from 'react';
import { Send, Check, CheckCircle2, ArrowRight } from 'lucide-react';
import { InstagramIcon as Instagram } from './InstagramIcon';
import { CONTACT_CONFIG } from '../config/contactConfig';

export const WhatsAppSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSignedUp(true);
      setTimeout(() => {
        setEmail('');
        setSignedUp(false);
      }, 3000);
    }
  };

  return (
    <section className="py-10 bg-[#070d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0c1836] border border-slate-800/90 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (Screenshot 1) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-wider uppercase">
                COMUNIDADE OFICIAL GRATUITA
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Receba as melhores ofertas <span className="text-orange-500">direto no seu celular</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                As promoções mais agressivas de hardware e tecnologia duram poucos minutos. Participe dos nossos canais e seja avisado no exato instante da queda de preço.
              </p>

              {/* 4 Checklist Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Bugs de preço e cupons relâmpago</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Links 100% seguros de lojas oficiais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero spam: apenas descontos reais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Comparativos e avaliações sinceras</span>
                </div>
              </div>
            </div>

            {/* Right Column Card (Screenshot 1) */}
            <div className="lg:col-span-5 bg-[#081024] border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <span>🔔</span>
                <span>Escolha por onde prefere receber:</span>
              </h3>

              {/* Instagram Button */}
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white font-extrabold p-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-pink-600/25 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-5 h-5" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold block text-pink-200">INSTAGRAM OFICIAL</span>
                    <span>Fale conosco pelo Instagram</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Blue Telegram Button */}
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-sky-600 hover:bg-sky-500 text-white font-extrabold p-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-sky-600/25 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Send className="w-5 h-5" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold block text-sky-200">CANAL DE ALERTAS</span>
                    <span>Entrar no Canal Telegram</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Newsletter form */}
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-400 block mb-2">
                  Ou receba o resumo semanal de ofertas por e-mail:
                </span>

                {signedUp ? (
                  <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-center text-xs font-bold text-emerald-400">
                    E-mail cadastrado com sucesso!
                  </div>
                ) : (
                  <form onSubmit={handleNewsletter} className="flex items-center gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      className="flex-1 px-3 py-2 bg-[#0c1630] border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-orange-600 hover:bg-orange-500 text-white font-black px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Cadastrar
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
