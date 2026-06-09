import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ExternalLink, CheckCircle, ChevronRight, HelpCircle, Lightbulb, UserCheck, Calendar } from 'lucide-react';

export default function ProjectsOverview() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = PROJECTS[activeProjectIndex];

  return (
    <section className="py-12 bg-white border-b border-slate-100 no-print" id="projects-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
            Casos de Uso Real & Portafolio
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Sistemas implementados con retos resueltos en producción, enfocados en velocidad de carga y experiencias sin fricción.
          </p>
        </div>

        {/* Tab Selection Row for Desktop/Tablet */}
        <div className="flex border-b border-slate-100 mb-8 overflow-x-auto pb-1 gap-2 scrollbar-none">
          {PROJECTS.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap border-b-2 flex items-center gap-2 ${
                activeProjectIndex === idx
                  ? 'border-indigo-600 text-indigo-600 bg-indigo-50/20'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeProjectIndex === idx ? 'bg-indigo-600' : 'bg-slate-300'}`} />
              <span>{project.id === 'salud-integral' ? '⚕️ Salud Integral' : project.id === 'tren-nueva-segovia' ? '🍔 Menú El Tren' : '🧹 Andrea\'s Cleaning'}</span>
            </button>
          ))}
        </div>

        {/* Deep Project Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Text and Spec Sheet */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-indigo-600 font-semibold font-mono bg-indigo-50 px-3 py-1 rounded-full">
                <UserCheck className="w-3.5 h-3.5" />
                Rol: {activeProject.role}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 leading-tight">
                {activeProject.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeProject.longDescription}
              </p>
            </div>

            {/* Challenge Block */}
            <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs sm:text-sm">
                <HelpCircle className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                <span>El Reto Técnico Resuelto</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {activeProject.challengeSolved}
              </p>
            </div>

            {/* Results achieved */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-slate-800 font-semibold text-xs sm:text-sm">
                <Lightbulb className="w-4.5 h-4.5 text-indigo-500 shrink-0" />
                <span>Resultados & Impacto Concreto</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {activeProject.results.map((result, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action link & technologies pills */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[10px] font-semibold font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={activeProject.productionUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 text-xs font-bold rounded-xl transition-all shadow-sm"
              >
                <span>Visitar Sitio Web</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Screen Preview Mockup */}
          <div className="lg:col-span-5 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl shadow-slate-100">
            {/* Top Bar of browser */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-850 flex items-center justify-between text-slate-500 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-slate-900 rounded px-3 py-1 text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                {activeProject.productionUrl.replace('https://', '')}
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-0" />
            </div>

            {/* Screen Simulator Content */}
            <div className="p-6 bg-slate-950 aspect-video md:aspect-square flex flex-col justify-between text-slate-350 font-sans relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-600 rounded-lg flex items-center justify-center text-xs text-white">*</span>
                    <span className="text-white text-xs font-bold font-display">{activeProject.id === 'salud-integral' ? 'Salud Integral' : activeProject.id === 'tren-nueva-segovia' ? 'El Tren Gastro' : 'Andrea\'s Clean'}</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-mono">100% ONLINE</span>
                </div>

                {/* Simulated visual layout */}
                {activeProject.id === 'salud-integral' && (
                  <div className="space-y-2 text-[10px] sm:text-xs">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="block text-slate-500 text-[8px] uppercase">Pacientes</span>
                        <span className="text-white font-bold font-mono">1,240</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="block text-slate-500 text-[8px] uppercase">Consultas</span>
                        <span className="text-white font-bold font-mono">3,892</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="block text-slate-500 text-[8px] uppercase">Retardo</span>
                        <span className="text-emerald-400 font-bold font-mono">&lt;2s</span>
                      </div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1.5">
                      <span className="text-slate-400 font-semibold block text-[10px]">Historial de Consultas Recientes</span>
                      <div className="h-1.5 w-full bg-slate-850 rounded" />
                      <div className="h-1.5 w-11/12 bg-slate-850 rounded" />
                    </div>
                  </div>
                )}

                {activeProject.id === 'tren-nueva-segovia' && (
                  <div className="space-y-2.5 text-[10px] sm:text-xs">
                    <p className="text-slate-400 text-center font-semibold">⚡ Carga instantánea sin descargar pesados PDFs</p>
                    <div className="flex gap-1.5 justify-center">
                      <span className="px-2 py-0.5 bg-indigo-950 text-indigo-400 rounded-full text-[9px] font-semibold border border-indigo-900">Hamburguesas</span>
                      <span className="px-2 py-0.5 bg-slate-900 text-slate-400 rounded-full text-[9px]">Bebidas</span>
                      <span className="px-2 py-0.5 bg-slate-900 text-slate-400 rounded-full text-[9px]">Postres</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center space-y-1">
                        <div className="aspect-video bg-amber-500/20 rounded-lg flex items-center justify-center font-display font-extrabold text-[9px]">🍔</div>
                        <span className="block text-white font-semibold text-[9px]">Premium Burger</span>
                        <span className="text-emerald-400 text-[9px] font-mono">$8.99</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 text-center space-y-1">
                        <div className="aspect-video bg-emerald-500/20 rounded-lg flex items-center justify-center font-display font-extrabold text-[9px]">🍻</div>
                        <span className="block text-white font-semibold text-[9px]">Artesanal IPA</span>
                        <span className="text-emerald-400 text-[9px] font-mono">$4.50</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeProject.id === 'andreas-cleaning' && (
                  <div className="space-y-2 text-[10px] sm:text-xs text-center">
                    <p className="text-white font-display text-sm font-bold">Sparkling Clean Home & Office</p>
                    <p className="text-slate-400 text-[9px]">Premium quality cleaning services in Atlanta, Georgia.</p>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 max-w-xs mx-auto space-y-2 mt-2">
                      <span className="text-emerald-400 text-[9px] uppercase tracking-wider block font-bold font-mono">CTA 100% PERSUASIVO</span>
                      <div className="bg-emerald-600 text-white font-bold py-1.5 px-3 rounded-lg text-[9.5px]">BOOK ONLINE NOW</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Technical footprint footer */}
              <div className="pt-4 border-t border-slate-850/80 flex items-center justify-between text-[8px] text-slate-500 font-mono">
                <span>ESTRUCTURADO POR ROBERTO</span>
                <span>DESPLEGADO EN PROD</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
