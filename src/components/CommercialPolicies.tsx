import React from 'react';
import { motion } from 'motion/react';
import { COMMERCIAL_POLICIES, PAYMENT_METHODS } from '../data';
import {
  CreditCard,
  RefreshCw,
  Server,
  ShieldCheck,
  FileCheck,
  Wallet,
  Check,
} from 'lucide-react';

const ICON_MAP = {
  CreditCard,
  RefreshCw,
  Server,
  ShieldCheck,
  FileCheck,
};

export default function CommercialPolicies() {
  return (
    <section
      className="py-20 bg-[#060d0a] border-b border-white/[0.06] no-print"
      id="policies-section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            Reglas Claras & Respaldo
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Políticas Comerciales, Garantía & Pagos
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Condiciones transparentes desde el primer día para proteger tu inversión, tus tiempos de entrega y la propiedad de tu software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMERCIAL_POLICIES.map((policy, idx) => {
            const IconComponent = ICON_MAP[policy.iconName];
            return (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover p-5 rounded-2xl space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-white text-sm">{policy.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{policy.summary}</p>
              </motion.div>
            );
          })}

          {/* Payment Methods Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-[#0a1314] to-[#080811] border border-emerald-400/30 space-y-3.5 shadow-[0_0_35px_-12px_rgba(16,185,129,0.4)]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400">
                <Wallet className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-white text-sm">
                Medios de Pago Aceptados
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-emerald-100/90">
              {PAYMENT_METHODS.map((method) => (
                <li key={method} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
