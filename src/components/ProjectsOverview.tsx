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
            <div className={`transition-all duration-500 aspect-video md:aspect-square flex flex-col justify-between font-sans relative overflow-hidden select-none ${
              activeProject.id === 'salud-integral' ? 'bg-gradient-to-br from-[#1b434d] via-[#103038] to-[#1f594a]' :
              activeProject.id === 'tren-nueva-segovia' ? 'bg-[#0b0b0b] text-[#fbfbfb]' :
              'bg-gradient-to-b from-[#10565f] via-[#1a4a51] to-[#0d343b] text-white'
            }`}>
              
              {/* Background patterns */}
              {activeProject.id === 'tren-nueva-segovia' && (
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              )}
              {activeProject.id === 'andreas-cleaning' && (
                <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent pointer-events-none" />
              )}

              {/* SALUD INTEGRAL (HAV) CUSTOM REPLICA */}
              {activeProject.id === 'salud-integral' && (
                <div className="flex-1 flex flex-col p-4 justify-between items-center z-10 text-slate-200">
                  {/* Top Logo Container */}
                  <div className="bg-[#112f36]/70 border border-[#1d4c57]/50 rounded-xl px-4 py-2 mt-2 flex items-center gap-2.5 max-w-xs justify-center shadow-lg shadow-black/10">
                    <div className="w-6 h-6 bg-cyan-600 rounded-lg flex items-center justify-center text-white shrink-0 shadow-inner">
                      <span className="text-[10px] font-bold">♥</span>
                    </div>
                    <div className="text-left leading-none">
                      <span className="block text-[11px] font-extrabold font-display text-white tracking-wider">HAV</span>
                      <span className="text-[7.5px] text-slate-350 tracking-tight font-mono">HOSPITAL ADVENTISTA DE VENEZUELA</span>
                    </div>
                  </div>

                  {/* Accessible personal login card */}
                  <div className="bg-white rounded-2xl p-5 w-full max-w-[270px] shadow-2xl shadow-black/35 text-slate-800 space-y-3.5 my-3 border border-slate-100 relative">
                    <div className="text-center space-y-1">
                      <h4 className="text-slate-900 font-display font-extrabold text-sm sm:text-base leading-tight">
                        Acceso Personal
                      </h4>
                      <p className="text-slate-400 text-[9.5px]">
                        Ingrese sus credenciales corporativas
                      </p>
                    </div>

                    <div className="space-y-2 text-left">
                      <div>
                        <label className="block text-[8.5px] font-semibold text-slate-600 mb-0.5">Correo institucional</label>
                        <div className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[9px] text-slate-400 font-mono truncate">
                          usuario@hav.edu.ve
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label className="block text-[8.5px] font-semibold text-slate-600 mb-0.5">Contraseña</label>
                          <span className="text-[8px] text-cyan-700 hover:underline">¿Problemas?</span>
                        </div>
                        <div className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[9px] text-slate-300 font-mono flex items-center justify-between">
                          <span>••••••••</span>
                          <span className="text-[9px]">👁</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-[#1e5863] text-white hover:bg-[#1a4b54] font-bold text-xs py-2 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5">
                      <span>Iniciar Sesión</span>
                      <span className="text-[9px]">➔</span>
                    </button>
                  </div>

                  {/* Small legal footer */}
                  <div className="text-center text-[7.5px] text-slate-400 leading-tight bg-[#0e272e]/50 py-1.5 px-3 rounded-full">
                    <span className="block">© 2026 Hospital Adventista de Venezuela</span>
                    <span className="text-slate-500">Sistema seguro de control de historias clínicas</span>
                  </div>
                </div>
              )}

              {/* EL TREN DE NUEVA SEGOVIA REPLICA */}
              {activeProject.id === 'tren-nueva-segovia' && (
                <div className="flex-1 flex flex-col p-4 justify-between relative z-10">
                  {/* Fake Navigation Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-white text-black font-extrabold flex items-center justify-center rounded-lg text-[9px] tracking-tighter">
                        TREN
                      </div>
                      <div className="leading-none text-left">
                        <span className="block text-[9.5px] font-black uppercase tracking-wider text-white font-display">EL TREN</span>
                        <span className="text-[7.5px] text-orange-500 font-bold tracking-wider font-mono">FAST FOOD</span>
                      </div>
                    </div>
                    <span className="text-[7px] bg-[#128c7e] text-white font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <span className="w-1 h-1 bg-white rounded-full animate-ping" />
                      Pedir WhatsApp
                    </span>
                  </div>

                  {/* Main Hero Slogan */}
                  <div className="text-center py-4 space-y-2">
                    <span className="inline-flex items-center gap-1 bg-zinc-900 border border-orange-500/30 text-emerald-400 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest font-mono">
                      ● COCINA ABIERTA & LISTO
                    </span>
                    
                    <h4 className="text-lg sm:text-2xl font-black tracking-tight font-display text-white uppercase leading-none">
                      EL SABOR <span className="text-orange-500 filter drop-shadow-[0_0_5px_rgba(249,115,22,0.4)]">CLANDESTINO</span> DE LA CIUDAD
                    </h4>
                    
                    <p className="text-[9px] text-zinc-400 leading-normal max-w-xs mx-auto">
                      ¡Súbete al tren del sabor! Explora nuestro menú y prepárate para un viaje de puro placer.
                    </p>

                    <div className="text-[7.5px] text-orange-400/80 font-mono">
                      📍 Calle 3 & Carrera 1, Barquisimeto
                    </div>
                  </div>

                  {/* Overlay Polaroid Mockup Stack */}
                  <div className="flex justify-center items-center gap-2 pt-2 pb-1">
                    <div className="bg-zinc-900/95 border border-zinc-800 p-1.5 rounded-lg rotate-[-6deg] w-16 text-center shrink-0 shadow-lg">
                      <div className="aspect-square bg-amber-500/10 rounded flex items-center justify-center text-xs">🥗</div>
                      <span className="text-[6.5px] text-zinc-400 block mt-1 font-mono">César</span>
                    </div>

                    <div className="bg-zinc-900/95 border border-zinc-700 p-2 rounded-xl z-25 scale-110 w-20 text-center shrink-0 shadow-2xl">
                      <div className="aspect-square bg-orange-500/15 rounded-lg flex items-center justify-center text-base">🍟</div>
                      <span className="text-[7px] font-bold text-white block mt-1">Súper Papas</span>
                    </div>

                    <div className="bg-zinc-900/95 border border-zinc-800 p-1.5 rounded-lg rotate-[8deg] w-16 text-center shrink-0 shadow-lg">
                      <div className="aspect-square bg-amber-500/10 rounded flex items-center justify-center text-xs">🍔</div>
                      <span className="text-[6.5px] text-zinc-400 block mt-1 font-mono">Burgers</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ANDREA'S CLEANING SERVICE REPLICA */}
              {activeProject.id === 'andreas-cleaning' && (
                <div className="flex-1 flex flex-col p-4 justify-between relative z-10 text-white">
                  {/* Top Phone Ribbon */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 bg-white/10 rounded-md flex items-center justify-center text-[10px]">✨</div>
                      <span className="font-display font-extrabold text-[10px] tracking-wide">Andrea's Cleaning</span>
                    </div>

                    <div className="bg-teal-950/50 border border-teal-500/20 rounded-full px-2.5 py-0.5 text-[8px] font-mono text-teal-300">
                      📞 Calls: +58 (412) 988-4955
                    </div>
                  </div>

                  {/* Main Heading Overlay */}
                  <div className="text-center py-6 space-y-3 my-auto max-w-[280px] mx-auto">
                    <span className="inline-block bg-[#00adb5]/20 border border-[#00adb5]/50 text-[#00adb5] text-[7.5px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                      📍 Atlanta, GA & Surrounding Areas
                    </span>

                    <h4 className="text-lg sm:text-xl font-bold font-display tracking-tight leading-tight text-white">
                      Andrea's Cleaning Services — <span className="text-teal-300">Professional Home Care</span>
                    </h4>

                    <p className="text-[9.5px] text-slate-300 leading-relaxed font-sans">
                      Enjoy a fresh, spotless, and welcoming home. We make your house shine, one room at a time.
                    </p>
                  </div>

                  {/* Bottom Double Call To Actions & Trust badges */}
                  <div className="space-y-3">
                    <div className="flex gap-2 justify-center">
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-teal-950 font-extrabold text-[9px] px-3.5 py-1.8 rounded-full shadow-md transition-all flex items-center gap-1">
                        <span>Reservar Visita</span>
                        <span>➔</span>
                      </button>

                      <button className="bg-transparent border border-white/40 text-white font-semibold text-[9px] px-3.5 py-1.8 rounded-full hover:bg-white/10 transition-all">
                        Mensaje de texto
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-3 border-t border-white/5 pt-2 text-[7px] text-slate-400 font-mono">
                      <span>✓ 100% Satisfaction</span>
                      <span>✓ Fully Insured</span>
                      <span>✓ Locally owned</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical footprint footer */}
              <div className={`pt-2.5 pb-2.5 px-4 border-t flex items-center justify-between text-[8px] font-mono shrink-0 ${
                activeProject.id === 'salud-integral' ? 'border-[#143138]/60 bg-[#0c1a1e] text-slate-500' :
                activeProject.id === 'tren-nueva-segovia' ? 'border-zinc-900 bg-black text-zinc-500' :
                'border-teal-950/40 bg-teal-950/80 text-teal-400/80'
              }`}>
                <span>INTEGRACIÓN: ROBERTO ARRIECHE</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  PRODUCCIÓN ONLINE
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
