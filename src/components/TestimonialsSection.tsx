import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

// Nota: Puedes reemplazar los nombres y citas con testimonios textuales de tus clientes cuando los recopiles.
const TESTIMONIALS = [
  {
    id: 'retail-pos',
    quote:
      'Antes perdíamos más de una hora al final del día cuadrando dólares, bolívares y fiados en cuaderno. Ahora cerramos caja en minutos y sabemos exactamente cuánto hay en calle.',
    author: 'Gerencia Comercial',
    business: 'Comercio Retail · Barquisimeto',
    solution: 'ARLUC ERP / POS',
  },
  {
    id: 'gastronomia',
    quote:
      'En horas pico el WhatsApp se nos colapsaba preguntando ingredientes y precios en bolívares. Con el menú QR los pedidos llegan listos para cocina y atendemos mucho más rápido.',
    author: 'Administración',
    business: 'El Tren Fast Food · Lara',
    solution: 'Menú QR + Comanda WhatsApp',
  },
  {
    id: 'servicios-usa',
    quote:
      'Necesitábamos una web profesional en inglés que diera confianza inmediata a clientes en Alabama y recibiera solicitudes de presupuesto sin depender de llamadas. Quedó impecable.',
    author: 'Dirección Operativa',
    business: "Andrea's Cleaning LLC · Alabama, EE. UU.",
    solution: 'Web Comercial & Reservas',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials-section"
      className="py-20 bg-[#040907] border-b border-white/[0.06] relative overflow-hidden no-print"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 max-w-2xl"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            Resultados Comprobados
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Lo que valoran los negocios que confían en ARLUC
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Impacto real en comercios locales de Barquisimeto y empresas de servicios en el exterior.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between space-y-5 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400" aria-label="5 estrellas">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-emerald-400/40" />
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-1.5">
                <p className="text-xs font-display font-bold text-white">{item.author}</p>
                <p className="text-[11px] text-slate-400">{item.business}</p>
                <span className="inline-block text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                  {item.solution}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
