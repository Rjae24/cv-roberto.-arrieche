import React from 'react';
import { AI_MULTIPLIER_PILLARS } from '../data';
import { BrainCircuit, Cpu, Gauge, Target, Wand2, Terminal } from 'lucide-react';

export default function AiAugmentation() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'optimizacion': return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case 'aceleracion': return <Gauge className="w-5 h-5 text-teal-400" />;
      case 'ux-inteligente': return <Target className="w-5 h-5 text-lime-300" />;
      default: return <Wand2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#040907] text-white border-b border-white/[0.06] relative overflow-hidden no-print" id="ai-benefit-section">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 motion-grid-bg opacity-50 pointer-events-none" />
      
      {/* Radiant Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider font-mono">
            <Cpu className="w-3.5 h-3.5" />
            Productividad Exponencial
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            El Factor Diferenciador: <span className="gradient-text-accent">Desarrollo Aumentado con IA</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            En un ecosistema tecnológico que demanda respuestas ágiles, integro modelos de lenguaje avanzados y flujos de automatización de forma estructurada directamente en mi ciclo de desarrollo diario. No reemplazo el pensamiento lógico de la ingeniería; lo multiplico.
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

        {/* Prompt Demonstration Showcase */}
        <div className="mt-10 p-5 rounded-2xl bg-black/50 border border-white/[0.08] font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3 text-slate-500">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>workflow-ai-terminal.sh</span>
            </div>
            <span className="text-[10px] bg-emerald-500/15 border border-emerald-400/25 px-2 py-0.5 rounded text-emerald-300">ACTIVO</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-emerald-300"># Ejecutando simulación de auditoría para refactorizar flujos relacionales:</p>
            <p className="text-slate-400">
              $ <span className="text-white">ia-refactor</span> --target="historias_clinicas_db.sql" --strategy="index-optimization"
            </p>
            <p className="text-emerald-400">
              [OK] Análisis completado: Se determinaron índices óptimos en campos (id_paciente, fecha_consulta).
            </p>
            <p className="text-emerald-400">
              [OK] Reducción del retardo del query: -84% estimado. Reducción en tiempo de entrega: 50% alcanzado.
            </p>
            <p className="text-slate-500 mt-2">
              // Todo el software es validado manualmente bajo bases de ingeniería de software estructuradas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
