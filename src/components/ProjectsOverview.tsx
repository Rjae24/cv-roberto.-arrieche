import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import {
  ExternalLink,
  CheckCircle,
  HelpCircle,
  Lightbulb,
  UserCheck,
  Wrench,
  Maximize2,
  X,
  Building,
  ChevronLeft,
  ChevronRight,
  Images,
} from 'lucide-react';

export default function ProjectsOverview() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  const activeProject = PROJECTS[activeProjectIndex];
  const slides =
    activeProject.gallery && activeProject.gallery.length > 0
      ? activeProject.gallery
      : [{ url: activeProject.imageUrl, label: activeProject.title }];

  const currentSlide = slides[activeSlideIndex] || slides[0];

  const handleSelectProject = (idx: number) => {
    setActiveProjectIndex(idx);
    setActiveSlideIndex(0);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="py-20 bg-[#060d0a] border-b border-white/[0.06] relative overflow-hidden no-print"
      id="projects-section"
    >
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 mb-10"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            Proyectos Reales · Barquisimeto &amp; Exterior
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Soluciones Funcionando en Negocios Reales
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Explora cómo ayudamos a comercios, barberías, clínicas y empresas de servicios a{' '}
            <strong className="text-slate-200">ordenar su operación, cobrar sin pérdidas y captar más clientes</strong>.
          </p>
        </motion.div>

        {/* Visual Project Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PROJECTS.map((project, idx) => {
            const isActive = activeProjectIndex === idx;
            const slideCount = project.gallery?.length || 1;
            return (
              <motion.button
                key={project.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectProject(idx)}
                className={`group text-left rounded-2xl border overflow-hidden transition-all relative ${
                  isActive
                    ? 'border-emerald-400/70 bg-emerald-500/10 shadow-[0_0_30px_-10px_rgba(16,185,129,0.65)]'
                    : 'border-white/[0.08] bg-white/[0.02] hover:border-emerald-400/30'
                }`}
              >
                <div className="aspect-video w-full overflow-hidden bg-slate-950 relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                      isActive ? 'scale-105' : 'opacity-75 group-hover:opacity-100 group-hover:scale-105'
                    }`}
                    loading="lazy"
                  />
                  {slideCount > 1 && (
                    <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/80 text-emerald-300 text-[9px] font-mono rounded-md border border-white/10 inline-flex items-center gap-1">
                      <Images className="w-2.5 h-2.5" /> {slideCount} vistas
                    </span>
                  )}
                </div>
                <div className="p-2.5">
                  <p className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {project.shortLabel}
                  </p>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">{project.sector}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Animated Active Project Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left: Case Study Sheet (Business Language) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300 font-semibold font-mono bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                    <Building className="w-3.5 h-3.5" />
                    {activeProject.sector}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-300 font-medium bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full">
                    <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                    {activeProject.role}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
                  {activeProject.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {activeProject.longDescription}
                </p>
              </div>

              {/* Problem */}
              <div className="p-4 rounded-2xl bg-amber-500/[0.07] border border-amber-400/20 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs sm:text-sm">
                  <HelpCircle className="w-4 h-4 shrink-0" />
                  <span>¿Qué problema tenía el negocio?</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeProject.challengeSolved}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-2xl bg-emerald-500/[0.07] border border-emerald-400/20 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs sm:text-sm">
                  <Wrench className="w-4 h-4 shrink-0" />
                  <span>¿Cómo lo resolvimos?</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeProject.solutionApplied}
                </p>
              </div>

              {/* Results */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                  <Lightbulb className="w-4 h-4 text-lime-300 shrink-0" />
                  <span>Beneficios Directos para el Negocio</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {activeProject.results.map((result, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature tags & Live Demo CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] text-slate-300 rounded-lg text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {activeProject.productionUrl && (
                  <a
                    href={activeProject.productionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 text-slate-950 hover:bg-emerald-400 text-xs font-bold rounded-full transition-all shadow-sm"
                  >
                    <span>Ver Sistema en Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right: Cinematic Browser Frame + Multi-Screen Gallery */}
            <div className="lg:col-span-6 space-y-3.5 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-white/[0.12] bg-[#08120e] overflow-hidden shadow-[0_25px_70px_-20px_rgba(16,185,129,0.3)]">
                {/* Browser Top Bar */}
                <div className="bg-black/60 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between text-slate-400 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="bg-white/[0.05] rounded-full px-3 py-0.5 text-[11px] font-medium text-emerald-300 truncate max-w-[260px]">
                    {currentSlide.label}
                  </div>
                  <button
                    onClick={() =>
                      setLightboxImage({
                        url: currentSlide.url,
                        title: `${activeProject.shortLabel} — ${currentSlide.label}`,
                      })
                    }
                    className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
                    title="Ampliar imagen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Main Slide View */}
                <div className="relative bg-black group">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        url: currentSlide.url,
                        title: `${activeProject.shortLabel} — ${currentSlide.label}`,
                      })
                    }
                    className="block w-full cursor-zoom-in"
                  >
                    <img
                      src={currentSlide.url}
                      alt={currentSlide.label}
                      className="w-full aspect-video object-cover object-top transition-all duration-300"
                    />
                  </button>

                  {slides.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 border border-white/15 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition shadow-lg"
                        title="Pantalla anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 border border-white/15 text-white flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition shadow-lg"
                        title="Siguiente pantalla"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Screen Thumbnails Strip (if project has multiple screenshots) */}
              {slides.length > 1 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span className="font-semibold text-emerald-300">
                      Pantalla {activeSlideIndex + 1} de {slides.length}: {currentSlide.label}
                    </span>
                    <span className="text-[11px] text-slate-500">Haz clic para cambiar de vista</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {slides.map((s, sIdx) => {
                      const active = sIdx === activeSlideIndex;
                      return (
                        <button
                          key={s.url + sIdx}
                          type="button"
                          onClick={() => setActiveSlideIndex(sIdx)}
                          className={`rounded-xl overflow-hidden border transition-all text-left ${
                            active
                              ? 'border-emerald-400 ring-2 ring-emerald-400/30 opacity-100'
                              : 'border-white/10 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={s.url}
                            alt={s.label}
                            className="w-full aspect-video object-cover object-top bg-slate-950"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0b0b14] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 text-white">
                <span className="text-sm font-semibold truncate pr-4">{lightboxImage.title}</span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="w-full max-h-[82vh] object-contain bg-black"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
