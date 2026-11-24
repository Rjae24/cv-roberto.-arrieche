import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TECHNOLOGIES } from '../data';
import { LayoutGrid, Server, GitBranch, Cpu, Layers, CheckCircle } from 'lucide-react';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'workflow' | 'ia'>('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: LayoutGrid },
    { id: 'backend', name: 'Backend & Datos', icon: Server },
    { id: 'workflow', name: 'Flujo & Hardware', icon: GitBranch },
    { id: 'ia', name: 'IA', icon: Cpu },
  ] as const;

  const filteredTechnologies =
    selectedCategory === 'all'
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((tech) => tech.category === selectedCategory);

  return (
    <section
      className="py-20 bg-[#060d0a] border-b border-white/[0.06] no-print"
      id="skills-section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Arquitectura & Herramientas
            </span>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Stack Tecnológico
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Tecnologías modernas implementadas en producción para garantizar velocidad, seguridad y mantenibilidad.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1.5 glass-panel rounded-2xl">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                    active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="tech-category-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-emerald-500/25 border border-emerald-400/45"
                    />
                  )}
                  <IconComponent className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTechnologies.map((tech) => (
            <motion.div
              layout
              key={tech.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-white text-sm font-display tracking-tight">
                    {tech.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold font-mono shrink-0 ${
                      tech.level === 'Expert'
                        ? 'bg-lime-400/15 text-lime-300 border border-lime-400/25'
                        : tech.level === 'Advanced'
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/25'
                        : 'bg-teal-500/15 text-teal-300 border border-teal-400/25'
                    }`}
                  >
                    {tech.level}
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{tech.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span className="uppercase tracking-wider">
                  {tech.category === 'frontend'
                    ? 'Interfaz de Usuario'
                    : tech.category === 'backend'
                    ? 'Servicios & Datos'
                    : tech.category === 'workflow'
                    ? 'Despliegue & Hardware'
                    : 'Aceleración IA'}
                </span>
                <CheckCircle className="w-3 h-3 text-emerald-400/70" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
