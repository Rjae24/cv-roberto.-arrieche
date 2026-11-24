import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICE_PACKAGES, PRICING_SCHEMES, CONTACT_INFO } from '../data';
import { CheckCircle2, MessageSquare, Award, Info, Layers, ArrowUpRight } from 'lucide-react';

type TierView = 'local' | 'corporate' | 'compare';

const TIER_TABS: { id: TierView; label: string }[] = [
  { id: 'local', label: 'Emprendedor / Local' },
  { id: 'corporate', label: 'Empresa Consolidada' },
  { id: 'compare', label: 'Comparar' },
];

export default function ServicesPricing() {
  const [tierView, setTierView] = useState<TierView>('local');

  const buildWhatsAppLink = (packageTitle: string) => {
    const tierLabel =
      tierView === 'corporate'
        ? 'Empresa / Negocio Consolidado'
        : 'Emprendedor / Comercio Local';
    const text = `Hola Roberto, me interesa cotizar el servicio "${packageTitle}" (${tierLabel}) de ARLUC Soluciones Tecnológicas.`;
    return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      className="py-20 bg-[#040907] border-b border-white/[0.06] relative overflow-hidden no-print"
      id="services-pricing-section"
    >
      <div className="absolute top-24 right-0 w-96 h-96 bg-emerald-600/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header + Animated LayoutId Tier Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Inversión Transparente (USD)
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Catálogo de Soluciones & Tarifario
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precios referenciales ajustados al mercado venezolano. Cambia de perfil para ver el alcance ideal para tu negocio.
            </p>
          </div>

          <div className="inline-flex p-1.5 glass-panel rounded-2xl self-start md:self-auto">
            {TIER_TABS.map((tab) => {
              const active = tierView === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setTierView(tab.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                    active ? 'text-slate-950' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="pricing-tier-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_20px_-4px_rgba(16,185,129,0.75)]"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-emerald-950/65 via-[#071610] to-[#050d0a] border border-emerald-400/45 shadow-[0_0_50px_-15px_rgba(16,185,129,0.5)]'
                  : 'glass-panel glass-panel-hover'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/25 blur-3xl rounded-full pointer-events-none" />
              )}

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                    {pkg.line}
                  </span>
                  {pkg.highlighted && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-lime-400/15 text-lime-300 border border-lime-400/30 px-2.5 py-1 rounded-full">
                      <Award className="w-3 h-3" />
                      Más Solicitado
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                {tierView === 'compare' ? (
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/40 border border-white/[0.08]">
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-emerald-300">
                        Emprendedor / Local
                      </span>
                      <span className="text-lg font-display font-bold text-white block mt-0.5">
                        {pkg.localPrice}
                      </span>
                      {pkg.localNote && (
                        <span className="text-[10px] text-slate-400 block">{pkg.localNote}</span>
                      )}
                    </div>
                    <div className="pl-3 border-l border-white/[0.08]">
                      <span className="block text-[10px] font-mono uppercase text-lime-300">
                        Empresa Consolidada
                      </span>
                      <span className="text-lg font-display font-bold text-white block mt-0.5">
                        {pkg.corporatePrice}
                      </span>
                      {pkg.corporateNote && (
                        <span className="text-[10px] text-slate-400 block">
                          {pkg.corporateNote}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08]">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-display font-bold gradient-text">
                        {tierView === 'local' ? pkg.localPrice : pkg.corporatePrice}
                      </span>
                      <span className="text-xs font-mono text-emerald-300">
                        {tierView === 'local' ? pkg.localNote : pkg.corporateNote}
                      </span>
                    </div>
                  </div>
                )}

                {/* Deliverables */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold block">
                    Alcance & Entregables
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {pkg.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Difference Note */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <span>{pkg.differenceNote}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-5 mt-5 border-t border-white/[0.08] relative z-10">
                <a
                  href={buildWhatsAppLink(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-lime-300 text-slate-950 shadow-[0_0_25px_-5px_rgba(16,185,129,0.75)]'
                      : 'bg-white/[0.06] hover:bg-emerald-400 text-white hover:text-slate-950 border border-white/[0.1]'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Solicitar Cotización</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Billing Schemes */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-display font-bold text-white">
              Esquemas de Contratación Disponibles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRICING_SCHEMES.map((scheme) => (
              <div
                key={scheme.id}
                className="glass-panel glass-panel-hover rounded-2xl p-5 space-y-2.5"
              >
                <h4 className="font-display font-bold text-white text-sm">{scheme.title}</h4>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-200">Ideal para:</strong> {scheme.idealFor}
                </p>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-200">Ventaja:</strong> {scheme.advantage}
                </p>
                <div className="pt-2.5 border-t border-white/[0.08] text-xs font-semibold text-emerald-300">
                  {scheme.structure}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
