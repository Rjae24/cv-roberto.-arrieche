import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, AGENCY_INFO } from '../data';
import { BookOpen, Smartphone, Zap, Building2 } from 'lucide-react';

const VALUE_PILLARS = [
  {
    icon: Smartphone,
    title: 'Diseño Mobile-First Real',
    desc: 'Interfaces ligeras que cargan rápido en redes móviles limitadas y responden al uso real en mostrador o calle.',
    accent: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
  },
  {
    icon: Zap,
    title: 'Orientado a Retorno (ROI)',
    desc: 'No vendemos líneas de código: resolvemos inventarios, cobros multimoneda y captación automatizada de clientes.',
    accent: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: BookOpen,
    title: 'Respaldo & Formalidad',
    desc: 'Ingeniería en curso (IUJO), garantía técnica de 30 días, código limpio y soporte continuo sin abandonos.',
    accent: 'text-lime-300 bg-lime-500/10 border-lime-500/20',
  },
];

export default function AboutMe() {
  return (
    <section className="py-20 border-b border-white/[0.06] relative no-print" id="about-me-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Main Bento Card: Value Proposition */}
          <div className="lg:col-span-7 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                <Building2 className="w-3.5 h-3.5" />
                Propuesta de Valor · {AGENCY_INFO.shortBrand}
              </span>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                Tecnología formal para dejar atrás el trabajo manual y las plantillas frágiles.
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed font-medium border-l-2 border-emerald-400/60 pl-4">
                “{AGENCY_INFO.valueProposition}”
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-1.5 relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Sobre el Fundador
              </span>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {PERSONAL_INFO.profileSummary}
              </p>
            </div>
          </div>

          {/* Right Bento Stack: 3 Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {VALUE_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-start gap-4 flex-1"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${item.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-display font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
