import React, { useState } from 'react';
import { Mail, Send, Check, MapPin, AlertCircle, Loader2 } from 'lucide-react';
import { InstagramIcon as Instagram } from '../components/InstagramIcon';
import { CONTACT_CONFIG } from '../config/contactConfig';

// Configurações da API oficial do Web3Forms
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = 'ab3b74fd-7583-4290-b1a1-94fac461800f';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Dúvida sobre Hardware');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Proteção contra spam via honeypot (se preenchido/marcado por robôs, interrompe silenciosamente)
    if (botcheck) {
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Validação estrita dos campos obrigatórios
    if (!trimmedName) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      return;
    }

    if (!trimmedMessage) {
      setErrorMessage('Por favor, digite sua mensagem antes de enviar.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: trimmedName,
          email: trimmedEmail,
          subject: `Nova mensagem pelo site WelligtonTech - ${subject}`,
          message: trimmedMessage,
          from_name: 'WelligtonTech',
          replyto: trimmedEmail,
          botcheck: botcheck ? 'true' : undefined,
        }),
      });

      const data = await response.json().catch(() => null);

      // Registra apenas metadados técnicos do serviço (sem dados pessoais)
      console.log('[Web3Forms Response]', {
        httpStatus: response.status,
        success: data?.success,
        message: data?.message,
      });

      // Validação estrita: exibe sucesso APENAS quando success === true
      if (response.ok && data?.success === true) {
        setSubmitSuccess(true);
        setErrorMessage(null);
        // Limpa os campos somente após o sucesso confirmado pela API
        setName('');
        setEmail('');
        setMessage('');
        setSubject('Dúvida sobre Hardware');
      } else {
        // Exibe o erro real retornado pelo serviço e preserva todos os campos digitados
        const errorText =
          data?.message ||
          'Falha ao processar o envio pelo serviço Web3Forms. Seus dados foram preservados. Tente novamente ou use nossos canais diretos.';
        setErrorMessage(errorText);
      }
    } catch (err) {
      console.error('[Web3Forms Network Error]', err instanceof Error ? err.message : 'Falha na conexão de rede');
      setErrorMessage(
        'Não foi possível conectar ao serviço de envio no momento. Seus dados foram preservados. Por favor, tente novamente em alguns instantes ou entre em contato pelo nosso Instagram oficial ou e-mail.'
      );
    } finally {
      setIsSubmitting(false);
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
                {/* 1. Canal Principal: Instagram Oficial */}
                <a
                  href={CONTACT_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 bg-gradient-to-r from-pink-50/80 to-purple-50/50 hover:from-pink-100/90 hover:to-purple-100/70 rounded-2xl border-2 border-pink-300 transition-all group cursor-pointer shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4 text-pink-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-extrabold text-slate-900 block">Instagram Oficial</span>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink-600 text-white">
                        Principal
                      </span>
                    </div>
                    <span className="text-pink-600 font-bold block mt-0.5">{CONTACT_CONFIG.instagramHandle}</span>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Canal prioritário para atendimento rápido e dúvidas.
                    </p>
                  </div>
                </a>

                {/* 2. Canal Secundário: E-mail Comercial Oficial */}
                <a
                  href={CONTACT_CONFIG.businessEmailMailto}
                  className="flex items-start gap-3 p-3.5 bg-orange-50/70 hover:bg-orange-100/80 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all group cursor-pointer shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-extrabold text-slate-900 block">E-mail Comercial</span>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-600 text-white">
                        Secundário
                      </span>
                    </div>
                    <span className="text-orange-600 hover:text-orange-700 font-mono font-bold block mt-0.5 underline break-all">
                      {CONTACT_CONFIG.businessEmail}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Canal oficial secundário para propostas e contato direto.
                    </p>
                  </div>
                </a>

                {/* 3. E-mail Editorial */}
                <a
                  href={`mailto:${CONTACT_CONFIG.editorialEmail}`}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all group cursor-pointer shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-extrabold text-slate-900 block">E-mail Editorial</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        Editorial
                      </span>
                    </div>
                    <span className="text-slate-700 hover:text-orange-600 font-mono font-bold block mt-0.5 underline break-all">
                      {CONTACT_CONFIG.editorialEmail}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Sugestões de pautas, correções e análise editorial.
                    </p>
                  </div>
                </a>

                {/* 4. Localização */}
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
              {submitSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-emerald-800">Mensagem Enviada com Sucesso!</h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Sua mensagem foi enviada para <strong>{CONTACT_CONFIG.businessEmail}</strong>. Responderemos no endereço de e-mail informado o mais breve possível.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setErrorMessage(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Web3Forms Honeypot Spam Prevention Trap */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    checked={botcheck}
                    onChange={(e) => setBotcheck(e.target.checked)}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-black text-slate-900">
                      Envie sua Mensagem
                    </h3>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Campos com * são obrigatórios
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1 leading-relaxed">
                        <strong className="block font-bold">Atenção:</strong>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      disabled={isSubmitting}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500 disabled:bg-slate-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      disabled={isSubmitting}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: carlos@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500 disabled:bg-slate-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      disabled={isSubmitting}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500 font-medium disabled:bg-slate-100 disabled:cursor-not-allowed"
                    >
                      <option value="Dúvida sobre Hardware">Dúvida sobre Hardware ou Setup</option>
                      <option value="Sugestão de Oferta">Sugestão de Oferta / Erro de Preço</option>
                      <option value="Parceria ou Publicidade">Parceria Comercial / Afiliados</option>
                      <option value="Outro">Outro Assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      disabled={isSubmitting}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Como podemos te ajudar hoje?"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500 resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 disabled:from-slate-400 disabled:to-slate-400 text-white font-black py-3 px-6 rounded-xl text-xs transition-all shadow-md shadow-orange-600/20 disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Enviando Mensagem...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                    Envio seguro processado por Web3Forms com proteção anti-spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
