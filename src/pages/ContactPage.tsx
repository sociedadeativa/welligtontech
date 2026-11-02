import React, { useState } from 'react';
import { Mail, Send, Check, MapPin } from 'lucide-react';
import { InstagramIcon as Instagram } from '../components/InstagramIcon';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Dúvida sobre Hardware');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(false);
      }, 3500);
    }
  };

  return (
    <div className="py-12 bg-[#f8fafc] min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
            <Mail className="w-4 h-4" />
            <span>Canais de Atendimento</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Fale com a Equipe WelligtonTech
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Tem dúvidas sobre compatibilidade de peças, parcerias ou encontrou um link com preço diferente? Envie sua mensagem!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Info Card */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                Informações de Contato
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <Mail className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">E-mail Editorial</span>
                    <span className="text-slate-500 font-mono">contato@welligtontech.com.br</span>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/welligtontech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 bg-pink-50/60 hover:bg-pink-50 rounded-xl border border-pink-200 transition-colors group cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-bold text-slate-900 block">Instagram Oficial</span>
                    <span className="text-pink-600 font-bold">@welligtontech</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Localização</span>
                    <span className="text-slate-500">Brasil (100% Digital)</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl text-[11px] text-orange-800">
                <strong>Horário de Atendimento:</strong> Respondemos em até 24h úteis de segunda a sexta-feira.
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="md:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black text-emerald-700">Mensagem Enviada!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Agradecemos o contato. Nossa equipe responderá no e-mail informado o mais breve possível.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-base font-black text-slate-900">
                    Envie sua Mensagem
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: carlos@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Assunto
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500 font-medium"
                    >
                      <option value="Dúvida sobre Hardware">Dúvida sobre Hardware ou Setup</option>
                      <option value="Sugestão de Oferta">Sugestão de Oferta / Erro de Preço</option>
                      <option value="Parceria ou Publicidade">Parceria Comercial / Afiliados</option>
                      <option value="Outro">Outro Assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Como podemos te ajudar hoje?"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-black py-3 px-6 rounded-xl text-xs transition-all shadow-md shadow-orange-600/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
