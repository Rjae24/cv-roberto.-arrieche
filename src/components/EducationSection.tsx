import React from 'react';
import { EDUCATION } from '../data';
import { GraduationCap, Landmark, Calendar, BookOpen, Layers, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-100 no-print" id="education-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
            Educación & Formación Continua
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Sólida fundamentación lógica combinada con autoaprendizaje continuo guiado por estándares universitarios.
          </p>
        </div>

        {/* Education Timeline/Container */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 hover:shadow-md transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            {/* Degree, Institution & Timeline */}
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-2xl shrink-0 text-indigo-600 shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-indigo-600 bg-indigo-50/70 border border-indigo-100/50 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    EN CURSO — 5to Semestre
                  </span>
                  
                  <h3 id="degree-title" className="text-lg sm:text-xl font-display font-bold text-slate-950 leading-tight">
                    {EDUCATION.degree}
                  </h3>
                  
                  <p className="text-slate-700 text-sm flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-slate-400" />
                    <span>{EDUCATION.institution}</span>
                    <span className="text-slate-300">•</span>
                    <span>{EDUCATION.location}</span>
                  </p>

                  <p className="text-slate-500 text-xs sm:text-sm font-mono flex items-center gap-1.5 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{EDUCATION.period}</span>
                  </p>
                </div>
              </div>

              {/* Highlight Callout */}
              <div className="pl-0 md:pl-16">
                <p className="text-slate-600 text-sm border-l-2 border-indigo-200 pl-4 italic bg-slate-50/50 py-2.5 pr-2.5 rounded-r-lg">
                  "{EDUCATION.highlight}"
                </p>
              </div>
            </div>

            {/* Core Subject lists */}
            <div className="w-full md:w-80 bg-slate-50/70 rounded-2xl p-5 border border-slate-100 space-y-3.5">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500 font-bold flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Enfoque Académico Clave
              </span>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {EDUCATION.courses.map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-550 mt-2 shrink-0" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
