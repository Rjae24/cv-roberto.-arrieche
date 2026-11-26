import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';
import { MessageSquare, FileCheck2, Rocket, ArrowRight } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Nos cuentas tu problema en 15 min',
    description:
      'Hablamos por WhatsApp o llamada en palabras sencillas: qué te quita tiempo hoy, cómo cobras y qué quieres lograr. Cero tecnicismos.',
  },
  {
    step: '02',
    icon: FileCheck2,
    title: 'Recibes demo y precio cerrado',
    description:
      'Te mostramos soluciones reales parecidas a tu negocio y te enviamos una propuesta clara en USD con tiempos reales y pagos por hitos.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Instalamos y capacitamos a tu equipo',
    description:
      'Dejamos tu sistema o página funcionando en celular y PC, te enseñamos a usarlo paso a paso y cuentas con 30 días de garantía directa.',
  },
];

export default function HowItWorks() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(
    'Hola Roberto, quiero agendar una conversación rápida de 15 minutos para ver cómo digitalizar mi negocio.'
  )}`;

  return (
    <section
      id="how-it-works-section"
      className="py-20 bg-[#050b08] border-b border-white/[0.06] relative overflow-hidden no-print"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Proceso Simple · Sin Enredos
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              ¿Cómo trabajamos contigo?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              No necesitas saber nada de tecnología. Te acompañamos en 3 pasos claros desde la idea hasta que tu negocio esté vendiendo y ordenado.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-emerald-500/15 hover:bg-emerald-400 text-emerald-200 hover:text-slate-950 border border-emerald-400/35 text-xs font-bold transition-all self-start md:self-auto"
          >
            <span>Empezar Paso 1 por WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-display font-bold text-white/10 select-none">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-display font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
