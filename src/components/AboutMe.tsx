import React from 'react';
import { PERSONAL_INFO } from '../data';
import { ShieldAlert, BookOpen, Smartphone, Shield, Laptop, Zap } from 'lucide-react';

export default function AboutMe() {
  return (
    <section className="py-12 border-b border-slate-100 no-print" id="about-me-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Main profile text */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
              Perfil Profesional
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.profileSummary}
            </p>
          </div>

          {/* Core Philosophy Highlights */}
          <div className="bg-gradient-to-br from-indigo-50/50 to-violet-50/30 border border-indigo-50/80 rounded-2xl p-6 space-y-5">
            <h3 className="text-sm font-semibold text-indigo-900 uppercase tracking-wider font-mono">
              Filosofía de Trabajo
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="p-2 bg-white rounded-lg border border-indigo-100 shrink-0 text-indigo-600 shadow-sm">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Maquetación Mobile-First</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Sistemas que rinden de forma óptima en el día a día real de la gente.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-white rounded-lg border border-indigo-100 shrink-0 text-indigo-600 shadow-sm">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Soluciones Ágiles</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Iteración rápida y despliegues incrementales con valor medible inmediato.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-white rounded-lg border border-indigo-100 shrink-0 text-indigo-600 shadow-sm">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Rigurosidad Lógica</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Pensamiento analítico derivado de la formación académica constante.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
