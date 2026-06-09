import React from 'react';
import { PERSONAL_INFO, CONTACT_INFO, TECHNOLOGIES, PROJECTS, EDUCATION } from '../data';
import { MapPin, Mail, Phone, Github, GraduationCap, Calendar, Landmark } from 'lucide-react';

export default function PrintCvLayout() {
  return (
    <div className="bg-white p-8 md:p-12 text-slate-900 leading-normal max-w-4xl mx-auto rounded-3xl shadow-sm border border-slate-100" id="cv-traditional-page-layout">
      
      {/* 1. Header Section */}
      <div className="border-b-2 border-slate-900 pb-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 font-display">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base md:text-lg font-bold text-indigo-700 uppercase tracking-wide">
              {PERSONAL_INFO.title}
            </p>
          </div>
          
          {/* Action details */}
          <div className="text-xs space-y-1 font-mono text-slate-600 md:text-right shrink-0">
            <p className="flex items-center gap-1 md:justify-end">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{PERSONAL_INFO.location}</span>
            </p>
            <p className="flex items-center gap-1 md:justify-end">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{CONTACT_INFO.email}</span>
            </p>
            <p className="flex items-center gap-1 md:justify-end">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </p>
            <p className="flex items-center gap-1 md:justify-end">
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span>github.com/Rjae24</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Summary, Projects, Education */}
        <div className="md:col-span-8 space-y-8">
          
          {/* Perfil */}
          <div className="space-y-2.5">
            <h2 className="text-base font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-205 pb-1 flex items-center gap-2">
              <span>Perfil Profesional</span>
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              {PERSONAL_INFO.profileSummary}
            </p>
          </div>

          {/* Proyectos */}
          <div className="space-y-4">
            <h2 className="text-base font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-205 pb-1">
              Casos Reales / Proyectos Destacados
            </h2>
            
            <div className="space-y-5">
              {PROJECTS.map((project) => (
                <div key={project.id} className="space-y-1.5 selection:bg-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-indigo-700 font-mono bg-indigo-50 px-2 py-0.5 rounded shrink-0">
                      Enlace: {project.productionUrl.replace("https://", "")}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 font-mono text-[10px] uppercase font-semibold">
                    Rol: {project.role} | Tecnologías: {project.technologies.join(', ')}
                  </p>
                  
                  <p className="text-slate-700 text-xs sm:text-sm text-justify">
                    <span className="font-semibold text-slate-900">Reto Resuelto:</span> {project.challengeSolved}
                  </p>

                  <ul className="list-disc pl-4 text-[11px] sm:text-xs text-slate-600 space-y-0.5">
                    {project.results.map((res, idx) => (
                      <li key={idx}>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Stack & Education brief */}
        <div className="md:col-span-4 space-y-8">
          
          {/* IA Advantage Banner */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2 border border-slate-800">
            <span className="text-[9px] font-mono font-bold text-indigo-300 uppercase tracking-widest block">
              Multiplicador Tecnológico
            </span>
            <h3 className="text-xs font-bold font-display uppercase tracking-wider text-white">
              Desarrollo Aumentado con IA
            </h3>
            <p className="text-[11px] text-slate-400 leading-tight">
              Optimización robusta a través de prompt engineering: auditoría automática, refactorización segura y aceleramiento estructurado de despliegues.
            </p>
          </div>

          {/* Categorized Skills list */}
          <div className="space-y-4">
            <h2 className="text-base font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-205 pb-1">
              Stack Tecnológico
            </h2>

            <div className="space-y-4">
              {/* Frontend */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Maquetación & Frontend:
                </span>
                <div className="flex flex-wrap gap-1">
                  {TECHNOLOGIES.filter(t => t.category === 'frontend').map(t => (
                    <span key={t.name} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded text-[10px] font-mono font-medium border border-slate-200/50">
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & DB */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Backend & Bases de Datos:
                </span>
                <div className="flex flex-wrap gap-1">
                  {TECHNOLOGIES.filter(t => t.category === 'backend').map(t => (
                    <span key={t.name} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded text-[10px] font-mono font-medium border border-slate-200/50">
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Workflow */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Flujo de Trabajo & Despliegues:
                </span>
                <div className="flex flex-wrap gap-1">
                  {TECHNOLOGIES.filter(t => t.category === 'workflow').map(t => (
                    <span key={t.name} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded text-[10px] font-mono font-medium border border-slate-200/50">
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* IA augmented tools */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Enfoques Inteligentes IA:
                </span>
                <div className="flex flex-wrap gap-1">
                  {TECHNOLOGIES.filter(t => t.category === 'ia').map(t => (
                    <span key={t.name} className="px-2.5 py-0.5 bg-indigo-50 border border-indigo-100 text-indigo-800 rounded text-[10px] font-mono font-bold">
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Educación Traditional Column */}
          <div className="space-y-3">
            <h2 className="text-base font-extrabold uppercase tracking-widest text-slate-950 border-b border-slate-205 pb-1">
              Educación
            </h2>
            
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold text-indigo-700 bg-indigo-50 rounded px-1.5 py-0.5 uppercase tracking-wider">
                5to Semestre
              </span>
              <h3 className="text-xs font-bold text-slate-900 font-display">
                {EDUCATION.degree}
              </h3>
              <p className="text-[11px] text-slate-600">
                {EDUCATION.institution} ({EDUCATION.location})
              </p>
              <p className="text-[10px] font-mono text-slate-500">
                Lara, Venezuela | {EDUCATION.period}
              </p>
            </div>
            
            <ul className="list-disc pl-4 text-[10px] text-slate-600 space-y-1">
              <li>Estructuras de Datos</li>
              <li>Ingeniería de Software</li>
              <li>Bases de Datos Relacionales</li>
              <li>Análisis Estadístico</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Footer footprint */}
      <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-500 font-mono flex items-center justify-between">
        <span>Roberto J. Arrieche Escovar | Currículum Ingenieril</span>
        <span>Generado Digitalmente — 2026</span>
      </div>

    </div>
  );
}
