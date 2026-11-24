import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import AiAugmentation from './components/AiAugmentation';
import ProjectsOverview from './components/ProjectsOverview';
import ServicesPricing from './components/ServicesPricing';
import CommercialPolicies from './components/CommercialPolicies';
import EducationSection from './components/EducationSection';
import PrintCvLayout from './components/PrintCvLayout';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { PERSONAL_INFO, CONTACT_INFO, AGENCY_INFO } from './data';
import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [isTraditionalMode, setIsTraditionalMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleViewMode = () => {
    setIsTraditionalMode((prev) => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen flex flex-col relative ${
        isTraditionalMode ? 'bg-slate-100 text-slate-900' : 'bg-[#040907] text-slate-100'
      }`}
    >
      {/* Top Scroll Progress Line */}
      {!isTraditionalMode && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-300 origin-left z-50 no-print"
        />
      )}

      {/* 1. Global Header & Hero (no-print) */}
      <Header
        isTraditionalMode={isTraditionalMode}
        onToggleTraditionalMode={toggleViewMode}
      />

      {/* 2. Primary Layout Render */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {!isTraditionalMode ? (
            <motion.div
              key="interactive-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <AboutMe />
              <ProjectsOverview />
              <ServicesPricing />
              <CommercialPolicies />
              <AiAugmentation />
              <TechStack />
              <EducationSection />
            </motion.div>
          ) : (
            <motion.div
              key="traditional-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100"
            >
              {/* Back to Interactive Notice (no-print) */}
              <div className="max-w-4xl mx-auto mb-6 bg-indigo-50 border border-indigo-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 no-print shadow-sm">
                <div className="flex items-center gap-2.5 text-indigo-950 text-sm">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600" />
                  </span>
                  <span>
                    Estás en el <strong>Modo Currículum / Impresión</strong>. Listo para exportar como PDF.
                  </span>
                </div>
                <button
                  onClick={toggleViewMode}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  Volver a Vista Interactiva
                </button>
              </div>

              <PrintCvLayout />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. Screen View For printing */}
        <div className="hidden print:block bg-white text-black p-0 m-0">
          <PrintCvLayout />
        </div>
      </main>

      {/* 4. MotionSites Final CTA Banner (no-print) */}
      {!isTraditionalMode && (
        <section className="py-24 relative overflow-hidden border-t border-white/[0.08] no-print">
          <div className="absolute inset-0 motion-grid-bg opacity-60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[280px] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-emerald-400/20 text-xs font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Agenda abierta · {AGENCY_INFO.brandName}
            </span>

            <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-tight gradient-text leading-tight">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </h3>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Cuéntame qué proceso quieres automatizar o qué proyecto deseas lanzar. Te envío una propuesta clara, tiempos reales y opciones adaptadas a tu presupuesto.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(
                  'Hola Roberto, revisé el dossier de ARLUC Soluciones Tecnológicas y quiero agendar una conversación sobre un proyecto.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-sm font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(16,185,129,0.65)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hablemos por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white text-sm font-semibold rounded-full transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-300" />
                <span>Enviar Correo</span>
              </a>
            </div>
          </motion.div>
        </section>
      )}

      {/* 5. Minimal Dark Footer (no-print) */}
      <footer className="bg-[#020504] text-slate-500 py-8 px-4 border-t border-white/[0.06] text-xs text-center font-mono space-y-2 no-print">
        <p className="text-slate-400">
          {AGENCY_INFO.brandName} · {PERSONAL_INFO.name} © 2026
        </p>
        <p className="text-slate-600">
          Dossier Comercial, Portafolio Interactivo & Tarifario · Barquisimeto, Venezuela.
        </p>
      </footer>

      {/* 6. Floating WhatsApp Button (bottom-right, follows scroll) */}
      {!isTraditionalMode && <FloatingWhatsApp />}
    </div>
  );
}
