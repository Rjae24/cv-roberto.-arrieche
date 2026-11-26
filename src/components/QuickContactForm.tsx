import React, { useState } from 'react';
import { CONTACT_INFO } from '../data';
import { MessageSquare, Mail, ArrowUpRight } from 'lucide-react';

export default function QuickContactForm() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [need, setNeed] = useState('');

  const buildMessage = () => {
    const parts = [
      `Hola Roberto, soy ${name.trim() || 'un interesado'}.`,
      business.trim() ? `Mi negocio es: ${business.trim()}.` : '',
      need.trim()
        ? `Me gustaría cotizar / ver una demo para: ${need.trim()}.`
        : 'Me gustaría agendar una demo gratuita de 15 minutos con ARLUC.',
    ].filter(Boolean);
    return parts.join(' ');
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    const subject = `Solicitud de cotización ARLUC${business.trim() ? ` - ${business.trim()}` : ''}`;
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage())}`;
  };

  return (
    <form
      onSubmit={handleWhatsAppSubmit}
      className="max-w-2xl mx-auto glass-panel rounded-3xl p-5 sm:p-7 text-left space-y-4 mt-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="space-y-1.5">
          <label htmlFor="qc-name" className="block text-xs font-semibold text-slate-300">
            Tu nombre
          </label>
          <input
            id="qc-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Carlos Pérez"
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] focus:border-emerald-400/60 focus:outline-none text-sm text-white placeholder:text-slate-500"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="qc-business" className="block text-xs font-semibold text-slate-300">
            Tipo de negocio
          </label>
          <input
            id="qc-business"
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="Ej. Bodegón, Barbería, Clínica..."
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] focus:border-emerald-400/60 focus:outline-none text-sm text-white placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="qc-need" className="block text-xs font-semibold text-slate-300">
          ¿Qué te gustaría resolver o lanzar?
        </label>
        <input
          id="qc-need"
          type="text"
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          placeholder="Ej. Controlar inventario y fiados, menú QR, página web..."
          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] focus:border-emerald-400/60 focus:outline-none text-sm text-white placeholder:text-slate-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-sm font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(16,185,129,0.65)] cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>Enviar por WhatsApp</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </button>

        <button
          type="button"
          onClick={handleEmailClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white text-sm font-semibold rounded-full transition-all cursor-pointer"
        >
          <Mail className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>Enviar por Correo</span>
        </button>
      </div>
    </form>
  );
}
