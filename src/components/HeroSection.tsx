import React, { useState } from 'react';
import { 
  Flame, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { PageRoute } from '../types';

interface HeroSectionProps {
  onNavigate: (route: PageRoute, param?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "PERIFÉRICOS & SETUP",
      title: "Periféricos e Acessórios Selecionados",
      subtitle: "Mouses de precisão, teclados mecânicos e headsets para produtividade e jogos.",
      buttonText: "Ver Periféricos",
      categoryParam: "perifericos",
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80"
    },
    {
      badge: "HARDWARE & PERFORMANCE",
      title: "Processadores e Placas de Vídeo",
      subtitle: "Análise técnica de componentes, eficiência energética e compatibilidade de plataformas.",
      buttonText: "Ver Hardware",
      categoryParam: "processadores",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      badge: "ARMAZENAMENTO RÁPIDO",
      title: "SSDs NVMe e Memórias de Alto Desempenho",
      subtitle: "Recomendações de armazenamento veloz e módulos de memória para upgrades estáveis.",
      buttonText: "Ver Armazenamento",
      categoryParam: "ssd",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const slide = slides[currentSlide];

  return (
    <section className="py-6 bg-[#070d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Main Slider Card (Screenshot 4) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-[#0d162f] border border-slate-800 shadow-2xl flex flex-col justify-between min-h-[360px] p-6 sm:p-10">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-right opacity-30 sm:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d162f] via-[#0d162f]/90 to-transparent" />
            </div>

            {/* Slider Content */}
            <div className="relative z-10 max-w-lg space-y-3.5 my-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600 text-white text-[11px] font-black uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>{slide.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {slide.title}
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Buttons Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('categoria', slide.categoryParam)}
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-orange-600/30 cursor-pointer"
                >
                  <span>{slide.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('guias')}
                  className="flex items-center gap-2 bg-[#172346]/80 hover:bg-[#172346] text-orange-400 border border-orange-500/30 font-sans text-xs font-bold px-4 py-3 rounded-xl transition-all cursor-pointer backdrop-blur-sm"
                >
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span>Guias de Compra</span>
                </button>
              </div>
            </div>

            {/* Bottom Slider Dots & Navigation */}
            <div className="relative z-10 flex items-center justify-between pt-4 mt-auto">
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? 'w-7 bg-orange-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Stacked Cards (Screenshot 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {/* Top Card: Curadoria Especializada */}
            <div className="flex-1 bg-[#09122a] border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[10px] font-black tracking-wider uppercase text-orange-400">
                    CURADORIA ESPECIALIZADA
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  Custo-Benefício Real
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Avaliamos especificações técnicas, compatibilidade e confiabilidade de componentes para recomendações honestas.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Critério editorial:</span>
                <strong className="text-emerald-400 font-bold font-mono">100% Independente</strong>
              </div>
            </div>

            {/* Bottom Card: Transparência WelligtonTech (White Card in Screenshot 4) */}
            <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-xl text-slate-800">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[10px] font-black tracking-wider uppercase text-slate-500">
                    TRANSPARÊNCIA WELLIGTONTECH
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  Conformidade e Transparência
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Links com identificação clara através de <strong className="text-slate-900 font-mono">rel="sponsored"</strong> sem nenhum acréscimo de preço ao consumidor.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Divulgação de Afiliados:</span>
                <strong className="text-slate-900 font-bold">Diretrizes Oficiais</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
