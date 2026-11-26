import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, AGENCY_INFO } from '../data';
import {
  ShieldCheck,
  Smartphone,
  Zap,
  Building2,
  XCircle,
  CheckCircle2,
} from 'lucide-react';

const VALUE_PILLARS = [
  {
    icon: Smartphone,
    title: 'Pensado para el Celular',
    desc: 'Sistemas ligeros que cargan rápido con datos móviles y funcionan igual de bien en mostrador, PC o teléfono.',
    accent: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
  },
  {
    icon: Zap,
    title: 'Hecho para Vender Más',
    desc: 'No te vendemos código: resolvemos inventarios, cobros en USD/Bs y captación automática de clientes.',
    accent: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Respaldo & Trato Directo',
    desc: 'Comunicación directa sin intermediarios, capacitación incluida, garantía de 30 días y soporte real.',
    accent: 'text-lime-300 bg-lime-500/10 border-lime-500/20',
  },
];

const BEFORE_ITEMS = [
  'Cuadernos, hojas de cálculo rotas y errores al cuadrar caja al final del día.',
  'Pérdidas silenciosas cada vez que cambia la tasa oficial del BCV.',
  'Fiados olvidados y tiempo perdido persiguiendo pagos uno por uno.',
  'Clientes que escriben por WhatsApp y se van porque tardas en responder.',
];

const AFTER_ITEMS = [
  'Ventas y cierre de caja exacto en menos de 45 segundos (USD, Bs, Pago Móvil, Zelle).',
  'Precios actualizados automáticamente en bolívares según la tasa del día.',
  'Control de cuentas por cobrar con recordatorio en 1 clic directo a WhatsApp.',
  'Tu catálogo, agenda o menú abierto 24/7 captando pedidos desde el celular.',
];

export default function AboutMe() {
  return (
    <section className="py-20 border-b border-white/[0.06] relative no-print" id="about-me-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
                Deja atrás el desorden manual y haz que tu negocio trabaje para ti.
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed font-medium border-l-2 border-emerald-400/60 pl-4">
                “{AGENCY_INFO.valueProposition}”
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-1.5 relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Trato Directo con el Fundador
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

        {/* Before vs After Visual Hook */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="rounded-3xl p-6 sm:p-7 bg-rose-950/15 border border-rose-500/20 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-rose-300 font-semibold">
                Sin Sistema
              </span>
              <span className="text-xs text-rose-200/70">Operación manual</span>
            </div>
            <h3 className="text-lg font-display font-bold text-white">
              Lo que hoy te hace perder tiempo y dinero
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {BEFORE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-emerald-950/45 to-[#06110c] border border-emerald-400/35 shadow-[0_0_40px_-15px_rgba(16,185,129,0.4)] space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-300 font-semibold">
                Con {AGENCY_INFO.shortBrand}
              </span>
              <span className="text-xs text-emerald-200/80">Control y ventas</span>
            </div>
            <h3 className="text-lg font-display font-bold text-white">
              Cómo opera tu negocio al digitalizarlo
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
