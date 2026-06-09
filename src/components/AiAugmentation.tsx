import React from 'react';
import { AI_MULTIPLIER_PILLARS } from '../data';
import { BrainCircuit, Cpu, Gauge, Sparkles, Wand2, Terminal, Code } from 'lucide-react';

export default function AiAugmentation() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'optimización': return <BrainCircuit className="w-5 h-5 text-indigo-600" />;
      case 'aceleración': return <Gauge className="w-5 h-5 text-indigo-600" />;
      case 'ux-inteligente': return <Sparkles className="w-5 h-5 text-indigo-600" />;
      default: return <Wand2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section className="py-12 bg-slate-900 text-white border-b border-slate-850 relative overflow-hidden no-print" id="ai-benefit-section">
      {/* Abstract Grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Radiant Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold rounded-full uppercase tracking-wider font-mono">
            <Cpu className="w-3.5 h-3.5" />
            Productividad Exponencial
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            El Factor Diferenciador: <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">Desarrollo Aumentado con IA</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            En un ecosistema tecnológico que demanda respuestas ágiles, integro modelos de lenguaje avanzados y flujos de automatización de forma estructurada directamente en mi ciclo de desarrollo diario. No reemplazo el pensamiento lógico de la ingeniería; lo multiplico.
          </p>
        </div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AI_MULTIPLIER_PILLARS.map((pillar, idx) => (
            <div 
              key={pillar.id}
              className="p-6 bg-slate-950/60 border border-slate-800 rounded-3xl space-y-4 hover:border-indigo-500/40 hover:bg-slate-950/90 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-500/10 rounded-2xl shrink-0 border border-indigo-500/20">
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
        <div className="mt-10 p-5 rounded-2xl bg-slate-950 border border-slate-850 font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-3 text-slate-500">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>workflow-ai-terminal.sh</span>
            </div>
            <span className="text-[10px] bg-slate-850 px-2 py-0.5 rounded text-indigo-300">ACTIVO</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-indigo-400"># Ejecutando simulación de auditoría para refactorizar flujos relacionales:</p>
            <p className="text-slate-400">
              $ <span className="text-white">ia-refactor</span> --target="historias_clinicas_db.sql" --strategy="index-optimization"
            </p>
            <p className="text-emerald-400">
              ✔ Análisis completado: Se determinaron índices óptimos en campos (id_paciente, fecha_consulta).
            </p>
            <p className="text-emerald-400">
              ✔ Reducción del retardo del query: -84% estimado. Reducción en tiempo de entrega: 50% alcanzado.
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
