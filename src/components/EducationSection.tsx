import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION } from '../data';
import { GraduationCap, Landmark, Calendar, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section
      className="py-20 bg-[#040907] border-b border-white/[0.06] no-print"
      id="education-section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-8">
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            Respaldo Académico
          </span>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Educación & Formación Continua
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/15 border border-emerald-400/25 rounded-2xl shrink-0 text-emerald-300">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-400/25 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    EN CURSO — 5to Semestre
                  </span>

                  <h3 id="degree-title" className="text-lg sm:text-xl font-display font-bold text-white leading-tight">
                    {EDUCATION.degree}
                  </h3>

                  <p className="text-slate-300 text-sm flex flex-wrap items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-slate-400" />
                    <span>{EDUCATION.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{EDUCATION.location}</span>
                  </p>

                  <p className="text-slate-400 text-xs font-mono flex items-center gap-1.5 pt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{EDUCATION.period}</span>
                  </p>
                </div>
              </div>

              <div className="pl-0 md:pl-16">
                <p className="text-slate-300 text-sm border-l-2 border-emerald-400/60 pl-4 italic bg-white/[0.02] py-2.5 pr-3 rounded-r-xl">
                  “{EDUCATION.highlight}”
                </p>
              </div>
            </div>

            <div className="w-full md:w-80 bg-black/40 rounded-2xl p-5 border border-white/[0.08] space-y-3.5">
              <span className="text-xs uppercase tracking-wider font-mono text-emerald-300 font-bold flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Enfoque Académico Clave
              </span>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {EDUCATION.courses.map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
