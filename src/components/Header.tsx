import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, CONTACT_INFO } from '../data';
import { MapPin, Mail, Phone, Github, Printer, Copy, Check, Sparkles, FileText, AlertTriangle, ExternalLink, X } from 'lucide-react';

interface HeaderProps {
  onToggleTraditionalMode: () => void;
  isTraditionalMode: boolean;
}

export default function Header({ onToggleTraditionalMode, isTraditionalMode }: HeaderProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showIframeWarning, setShowIframeWarning] = useState(false);

  // Control detection for preview iframes
  const isInsideIframe = (() => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  })();

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handlePrint = () => {
    if (isInsideIframe) {
      setShowIframeWarning(true);
    } else {
      window.print();
    }
  };

  return (
    <header className="relative w-full overflow-hidden bg-white border-b border-slate-100 py-12 md:py-16 no-print">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-50/30 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Main Info */}
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              {/* Specialized Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Desarrollo Aumentado por IA
              </div>
              
              <h1 id="user-name" className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-indigo-600 font-display">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <p className="text-slate-600 max-w-2xl leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.subtitle}
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-500 font-mono">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{PERSONAL_INFO.locationShort}</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-slate-700 shrink-0" />
                <a 
                  href={CONTACT_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors underline decoration-slate-300"
                >
                  github.com/Rjae24
                </a>
              </div>

              <div className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <button 
                  onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
                  className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors text-left"
                  title="Copiar correo electrónico"
                >
                  <span className="truncate">{CONTACT_INFO.email}</span>
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 animate-scale" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                <button 
                  onClick={() => copyToClipboard(CONTACT_INFO.phone, 'phone')}
                  className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors text-left"
                  title="Copiar número de teléfono"
                >
                  <span>{CONTACT_INFO.phoneFormatted}</span>
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 animate-scale" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons Panel */}
          <div className="flex flex-row md:flex-col gap-3 min-w-[200px] w-full md:w-auto self-stretch md:self-start justify-start md:justify-center">
            <button
              id="btn-toggle-view-mode"
              onClick={onToggleTraditionalMode}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-sm font-semibold transition-all ${
                isTraditionalMode
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-100 hover:bg-indigo-700'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-200 hover:text-indigo-600 shadow-sm'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{isTraditionalMode ? "Vista Interactiva" : "Modo Currículum"}</span>
            </button>

            <button
              id="btn-print-cv"
              onClick={handlePrint}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir CV / PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Elegant Warning Modal for Iframe / Sandboxed environments */}
      <AnimatePresence>
        {showIframeWarning && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowIframeWarning(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-3xl border border-slate-100 p-6 md:p-8 max-w-lg w-full shadow-2xl z-10 space-y-6"
            >
              <button 
                onClick={() => setShowIframeWarning(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl text-amber-600 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg leading-tight">
                    Restricción de Seguridad del Navegador
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase tracking-wider">
                    Vista previa de AI Studio
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>¡Hola Roberto!</strong> Por motivos de seguridad, los navegadores (como Chrome) <strong>bloquean silenciosamente</strong> la llamada de impresión <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">window.print()</code> cuando se ejecuta dentro de este recuadro de vista previa (sandbox iframe).
                </p>
                <p>
                  Para solucionarlo, solo debes seguir este sencillo paso:
                </p>
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex gap-3 text-indigo-950 text-xs text-justify">
                  <div className="font-bold flex items-center justify-center w-5 h-5 bg-indigo-200 text-indigo-800 rounded-full shrink-0">1</div>
                  <p>
                    Haz clic en el botón de <strong>"Abrir en pestaña nueva" ↗</strong> ubicado en la esquina superior derecha del editor de AI Studio (o en la barra del reproductor). Una vez que la página cargue en pantalla completa, la función de impresión de tu navegador funcionará perfectamente.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={window.location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  <span>Abrir Portafolio en una Pestaña</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setShowIframeWarning(false)}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-all"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
