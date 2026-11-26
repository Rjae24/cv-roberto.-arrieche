import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, CONTACT_INFO, AGENCY_INFO } from '../data';
import ArlucLogo from './ArlucLogo';
import {
  MapPin,
  Mail,
  Phone,
  Printer,
  FileText,
  AlertTriangle,
  ExternalLink,
  X,
  ArrowRight,
  Sparkles,
  Menu,
  MessageSquare,
} from 'lucide-react';

interface HeaderProps {
  onToggleTraditionalMode: () => void;
  isTraditionalMode: boolean;
}

const NAV_ITEMS = [
  { id: 'about-me-section', label: 'Beneficios' },
  { id: 'projects-section', label: 'Proyectos' },
  { id: 'how-it-works-section', label: 'Proceso' },
  { id: 'services-pricing-section', label: 'Tarifario' },
  { id: 'idea-assistant-section', label: 'Asistente IA' },
  { id: 'policies-section', label: 'Políticas' },
];

const HERO_METRICS = [
  { value: '< 45s', label: 'Tiempo promedio en caja POS' },
  { value: '100%', label: 'Control de inventario y fiados' },
  { value: '< 1.5s', label: 'Carga rápida en celulares' },
  { value: '30 días', label: 'Garantía técnica pos-entrega' },
];

const ENABLE_CV_MODE_UI = false;

export default function Header({ onToggleTraditionalMode, isTraditionalMode }: HeaderProps) {
  const [showIframeWarning, setShowIframeWarning] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroWhatsAppUrl = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(
    'Hola Roberto, vi la web de ARLUC Soluciones Tecnológicas y quiero agendar una demo gratuita de 15 minutos.'
  )}`;

  useEffect(() => {
    if (isTraditionalMode) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);

      const triggerPoint = window.innerHeight * 0.35;
      let current = '';

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom > 100) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTraditionalMode]);

  const isInsideIframe = (() => {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  })();

  const handlePrint = () => {
    if (isInsideIframe) {
      setShowIframeWarning(true);
    } else {
      window.print();
    }
  };

  return (
    <>
      {/* Fixed Floating Glass Navbar that follows scroll & illuminates active module */}
      <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 no-print pointer-events-none">
        <div
          className={`max-w-5xl mx-auto rounded-2xl px-3.5 sm:px-4 py-2 pointer-events-auto transition-all duration-300 ${
            isScrolled || mobileMenuOpen
              ? 'bg-[#06110c]/90 backdrop-blur-2xl border border-emerald-400/20 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.85),0_0_28px_-8px_rgba(16,185,129,0.3)]'
              : 'bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            {/* ARLUC Brand Logo */}
            <a href="#" className="shrink-0" onClick={() => setMobileMenuOpen(false)}>
              <ArlucLogo />
            </a>

            {/* Desktop Scroll-Spy Navigation Links */}
            {!isTraditionalMode && (
              <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`relative px-3.5 py-1.5 rounded-xl transition-colors ${
                        isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-emerald-100'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-nav-pill"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          className="absolute inset-0 rounded-xl bg-emerald-500/20 border border-emerald-400/50 shadow-[0_0_18px_-4px_rgba(16,185,129,0.85)]"
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  );
                })}
              </nav>
            )}

            {/* Mobile Quick Actions (WhatsApp + Hamburger Menu) */}
            {!isTraditionalMode && (
              <div className="flex md:hidden items-center gap-2">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 min-h-[38px] rounded-xl bg-emerald-500/15 border border-emerald-400/35 text-emerald-200 text-xs font-bold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Cotizar</span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                  aria-expanded={mobileMenuOpen}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white hover:bg-emerald-500/15 transition-colors"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            )}

            {/* Action Buttons (CV Mode hidden by flag) */}
            {ENABLE_CV_MODE_UI && (
              <div className="flex items-center gap-2">
                <button
                  id="btn-toggle-view-mode"
                  onClick={onToggleTraditionalMode}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                    isTraditionalMode
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : 'bg-white/[0.04] hover:bg-white/[0.1] text-slate-200 border-white/[0.1]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{isTraditionalMode ? 'Vista Motion' : 'Modo CV'}</span>
                </button>

                <button
                  id="btn-print-cv"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 text-xs font-semibold transition-all"
                  title="Imprimir o guardar como PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">PDF</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Collapsible Navigation Drawer */}
          <AnimatePresence>
            {!isTraditionalMode && mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden border-t border-white/[0.08] mt-2.5 pt-2.5 pb-1"
              >
                <div className="grid grid-cols-2 gap-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-center min-h-[44px] px-3 rounded-xl text-xs font-semibold transition-colors ${
                          isActive
                            ? 'bg-emerald-500/20 border border-emerald-400/50 text-white'
                            : 'bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hero Header */}
      <header className="relative w-full overflow-hidden bg-[#040907] border-b border-white/[0.08] no-print">
        {/* Ambient Aurora & Grid */}
        <div className="absolute inset-0 motion-grid-bg opacity-75 pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.34, 0.22] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 left-1/4 w-[520px] h-[520px] bg-emerald-600/25 rounded-full blur-[130px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.24, 0.14] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute -bottom-32 right-1/5 w-[440px] h-[440px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"
        />

        {!isTraditionalMode && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Status Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-emerald-400/20 text-xs font-medium text-emerald-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  {AGENCY_INFO.brandName} · Barquisimeto &amp; Exterior
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-[11px] font-semibold text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  Demo Gratis en 15 min
                </span>
              </div>

              {/* Big Editorial Headline */}
              <div className="space-y-4 max-w-4xl">
                <h1
                  id="user-name"
                  className="text-4xl sm:text-6xl font-display font-bold tracking-tight leading-[1.05] text-white"
                >
                  Sistemas y webs que{' '}
                  <span className="gradient-text-accent">aceleran tus ventas</span> y ordenan tu negocio.
                </h1>

                <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                  {PERSONAL_INFO.subtitle}
                </p>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 hover:from-emerald-300 hover:to-lime-300 text-sm font-bold transition-all shadow-[0_0_35px_-8px_rgba(16,185,129,0.65)]"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Pedir Demo Gratis por WhatsApp</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="#projects-section"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white/[0.05] hover:bg-emerald-500/10 border border-white/[0.12] hover:border-emerald-400/35 text-white text-sm font-semibold transition-all"
                >
                  <span>Ver Proyectos Reales</span>
                </a>

                <a
                  href="#services-pricing-section"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 min-h-[44px] rounded-full text-emerald-300 hover:text-emerald-200 text-sm font-semibold transition-colors"
                >
                  <span>Ver Precios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Founder & Direct Contact Strip (Actionable tel: & mailto: links) */}
              <div className="glass-panel rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-display font-bold text-white">{PERSONAL_INFO.name}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-200">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white/[0.04] hover:bg-emerald-500/10 border border-white/[0.08] hover:border-emerald-400/25 transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="whitespace-nowrap">{CONTACT_INFO.phoneFormatted}</span>
                  </a>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white/[0.04] hover:bg-emerald-500/10 border border-white/[0.08] hover:border-emerald-400/25 transition-colors font-medium max-w-full"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>

              {/* Metric Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                {HERO_METRICS.map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + idx * 0.07 }}
                    className="glass-panel rounded-2xl p-4"
                  >
                    <span className="block text-2xl sm:text-3xl font-display font-bold gradient-text">
                      {metric.value}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-1 leading-snug">
                      {metric.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Iframe Print Warning Modal (kept hidden with CV mode) */}
        <AnimatePresence>
          {showIframeWarning && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowIframeWarning(false)}
                className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-[#0d0d16] text-slate-200 rounded-3xl border border-white/[0.12] p-6 md:p-8 max-w-lg w-full shadow-2xl z-10 space-y-5"
              >
                <button
                  onClick={() => setShowIframeWarning(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400 shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-white text-lg">
                      Abre en una pestaña nueva para imprimir
                    </h3>
                    <p className="text-xs text-slate-400">
                      El navegador bloquea <code className="text-indigo-300">window.print()</code> dentro de recuadros embebidos.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <a
                    href={window.location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all"
                  >
                    <span>Abrir en Pestaña Nueva</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setShowIframeWarning(false)}
                    className="flex-1 px-5 py-3 bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 rounded-xl text-xs font-medium transition-all"
                  >
                    Entendido
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
