import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, CONTACT_INFO } from '../data';
import { MapPin, Mail, Phone, Github, Printer, Copy, Check, Sparkles, FileText } from 'lucide-react';

interface HeaderProps {
  onToggleTraditionalMode: () => void;
  isTraditionalMode: boolean;
}

export default function Header({ onToggleTraditionalMode, isTraditionalMode }: HeaderProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
                  github.com/robertoarrieche
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
              onClick={() => window.print()}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir CV / PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
