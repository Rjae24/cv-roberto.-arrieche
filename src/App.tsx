import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import AiAugmentation from './components/AiAugmentation';
import ProjectsOverview from './components/ProjectsOverview';
import EducationSection from './components/EducationSection';
import PrintCvLayout from './components/PrintCvLayout';
import { PERSONAL_INFO, CONTACT_INFO } from './data';
import { Mail, Phone, ArrowUpRight, Github, Heart, MessageSquare } from 'lucide-react';

export default function App() {
  const [isTraditionalMode, setIsTraditionalMode] = useState(false);

  const toggleViewMode = () => {
    setIsTraditionalMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-indigo-500/10 selection:text-indigo-600">
      
      {/* 1. Global Header (no-print) */}
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-0"
            >
              {/* Profile Intro section */}
              <AboutMe />

              {/* Unique IA Multiplier section */}
              <AiAugmentation />

              {/* Technologies grids */}
              <TechStack />

              {/* Real projects container */}
              <ProjectsOverview />

              {/* Academic profile */}
              <EducationSection />
            </motion.div>
          ) : (
            <motion.div
              key="traditional-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100/60"
            >
              {/* Back to Interactive Notice (no-print) */}
              <div className="max-w-4xl mx-auto mb-6 bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 no-print shadow-sm">
                <div className="flex items-center gap-2 text-indigo-900 text-sm">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-605"></span>
                  </span>
                  <span>Estas en el <strong>modo Currículum / Versión de Impresión</strong>. Listo para papel o exportar como PDF.</span>
                </div>
                <button
                  onClick={toggleViewMode}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  Volver a Vista Interactiva
                </button>
              </div>

              {/* Pristine letterhead printable resume paper */}
              <PrintCvLayout />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. Screen View For printing (Only visible to printer driver) */}
        <div className="hidden print:block bg-white text-black p-0 m-0">
          <PrintCvLayout />
        </div>
      </main>

      {/* 4. Action CTA Ribbon on Interactive Dashboard (no-print) */}
      {!isTraditionalMode && (
        <section className="py-16 bg-slate-900 text-white border-t border-slate-800 text-center relative overflow-hidden no-print">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <h3 className="text-3xl font-display font-semibold tracking-tight">
              ¿Listo para potenciar tu próximo proyecto?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Trabajemos juntos para llevar tu idea al mercado con software ultra veloz, maquetación adaptada a dispositivos móviles reales e integración estratégica de pipelines de IA.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
              >
                <Mail className="w-4.5 h-4.5" />
                <span>Contactar vía Correo</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
              >
                <MessageSquare className="w-4.5 h-4.5 text-emerald-400" />
                <span>Hablemos en WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 5. Minimal footer (no-print) */}
      <footer className="bg-slate-950 text-slate-500 py-8 px-4 border-t border-slate-900 text-xs text-center font-mono space-y-2 no-print">
        <p className="flex items-center justify-center gap-1.5">
          <span>Diseñado y construido con</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>por Roberto J. Arrieche Escovar. © 2026</span>
        </p>
        <p className="text-slate-600">
          Desarrollado en React, Tailwind CSS y optimizado bajo metodologías de Desarrollo Aumentado por IA.
        </p>
      </footer>

    </div>
  );
}
