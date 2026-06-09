import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data';
import { Technology } from '../types';
import { LayoutGrid, Server, GitBranch, Sparkles, Code2, Layers, Cpu, CheckCircle } from 'lucide-react';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'workflow' | 'ia'>('all');

  const categories = [
    { id: 'all', name: 'Todos los campos', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: LayoutGrid },
    { id: 'backend', name: 'Backend & Datos', icon: Server },
    { id: 'workflow', name: 'Flujo & Git', icon: GitBranch },
    { id: 'ia', name: 'Desarrollo IA', icon: Sparkles },
  ] as const;

  const filteredTechnologies = selectedCategory === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(tech => tech.category === selectedCategory);

  return (
    <section className="py-12 bg-white border-b border-slate-100 no-print" id="skills-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
              Stack Tecnológico & Especialización
            </h2>
            <p className="text-slate-500 text-sm max-w-xl">
              Tecnologías y herramientas dominadas e implementadas en producción, organizadas por capas de arquitectura.
            </p>
          </div>

          {/* Pill filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-100'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="p-5 border border-slate-100 rounded-2xl hover:border-indigo-100 hover:bg-indigo-50/10 transition-all duration-300 card-hover-effect flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-slate-800 text-sm font-display tracking-tight">
                    {tech.name}
                  </h3>
                  
                  {/* Skill level badge */}
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold font-mono ${
                    tech.level === 'Expert' ? 'bg-orange-50 text-orange-700 border border-orange-100/70' :
                    tech.level === 'Advanced' ? 'bg-indigo-50 text-indigo-700 border border-indigo-100/70' :
                    tech.level === 'Intermediate' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100/70' :
                    'bg-slate-50 text-slate-600'
                  }`}>
                    {tech.level}
                  </span>
                </div>
                
                <p className="text-slate-500 text-xs leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Sub-tag indicator */}
              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="uppercase tracking-wider">
                  {tech.category === 'frontend' ? 'Interfaz de Usuario' :
                   tech.category === 'backend' ? 'Servicios & Backend' :
                   tech.category === 'workflow' ? 'Control & Despliegues' :
                   'Multiplicador de IA'}
                </span>
                <CheckCircle className="w-3 h-3 text-indigo-500/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
