import React from 'react';
import { AI_MULTIPLIER_PILLARS } from '../data';
import { BrainCircuit, Sparkles, Gauge, Target, Wand2, CheckCircle2 } from 'lucide-react';

const BUSINESS_OUTCOMES = [
  {
    value: 'Hasta 50%',
    label: 'Menos tiempo de espera para lanzar tu proyecto y empezar a vender.',
  },
  {
    value: '0 Plantillas',
    label: 'Cada pantalla se diseña a medida para el flujo real de tu negocio.',
  },
  {
    value: 'Soporte Directo',
    label: 'Acompañamiento real por WhatsApp después de la entrega, sin tickets eternos.',
  },
];

export default function AiAugmentation() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'optimizacion':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case 'aceleracion':
        return <Gauge className="w-5 h-5 text-teal-400" />;
      case 'ux-inteligente':
        return <Target className="w-5 h-5 text-lime-300" />;
      default:
        return <Wand2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section
      className="py-20 bg-[#040907] text-white border-b border-white/[0.06] relative overflow-hidden no-print"
      id="ai-benefit-section"
    >
      {/* Abstract Grid background */}
      <div className="absolute inset-0 motion-grid-bg opacity-50 pointer-events-none" />

      {/* Radiant Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-5 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Ventaja Competitiva
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            ¿Por qué entregamos más rápido y con{' '}
            <span className="gradient-text-accent">mejor calidad</span>?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Usamos herramientas modernas de Inteligencia Artificial junto con control de calidad manual para que tu sistema salga antes al mercado, sin errores y sin inflar el presupuesto.
          </p>
        </div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AI_MULTIPLIER_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 glass-panel glass-panel-hover rounded-3xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 rounded-2xl shrink-0 border border-emerald-500/20">
                  {getIcon(pillar.id)}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-100 text-base">
                    {pillar.title}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold block mt-0.5">
                    {pillar.benefit}
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Business Impact Strip (Non-Technical Replacement) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 p-5 sm:p-6 rounded-3xl bg-emerald-950/20 border border-emerald-400/20">
          {BUSINESS_OUTCOMES.map((item) => (
            <div key={item.value} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="text-base font-display font-bold text-white">{item.value}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
