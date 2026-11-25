import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Loader2, ArrowLeft, AlertCircle } from 'lucide-react';
import type { ProjectProposal } from '../types/ideaChat';
import { submitProposalEmails } from '../services/ideaChatApi';
import { CONTACT_INFO } from '../data';

interface IdeaProposalCardProps {
  proposal: ProjectProposal;
  onBackToChat: () => void;
  onReset: () => void;
}

export default function IdeaProposalCard({
  proposal,
  onBackToChat,
  onReset,
}: IdeaProposalCardProps) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      await submitProposalEmails({
        clientName,
        clientEmail,
        clientPhone,
        proposal,
      });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el correo.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    const whatsappSummary = `Hola Roberto, acabo de enviar mi propuesta "${proposal.projectTitle}" desde el asistente de ARLUC (${clientEmail}).`;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel rounded-3xl p-6 sm:p-8 text-center space-y-5 border-emerald-400/35"
      >
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-display font-bold text-white">
            Propuesta enviada con éxito
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Enviamos una copia a <strong className="text-emerald-300">{clientEmail}</strong> y otra directamente a{' '}
            <strong className="text-white">ARLUC Soluciones Tecnológicas</strong>. Roberto la revisará y te responderá muy pronto.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(whatsappSummary)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 text-xs font-bold hover:from-emerald-300 hover:to-lime-300 transition-all"
          >
            Avisar también por WhatsApp
          </a>
          <button
            type="button"
            onClick={onReset}
            className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-200 text-xs font-semibold transition-all"
          >
            Crear otra idea
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6"
    >
      {/* Proposal Summary Preview */}
      <div className="lg:col-span-7 glass-panel rounded-3xl p-6 space-y-5 border-emerald-400/25">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 bg-emerald-500/15 border border-emerald-400/25 px-2.5 py-1 rounded-full">
              {proposal.suggestedLine}
            </span>
            <h3 className="text-xl font-display font-bold text-white mt-3">
              {proposal.projectTitle}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{proposal.businessType}</p>
          </div>

          <button
            type="button"
            onClick={onBackToChat}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-300 transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Seguir ajustando</span>
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded-2xl bg-black/35 border border-white/[0.07] space-y-1">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">
              Necesidad Actual
            </span>
            <p className="text-slate-300 leading-relaxed">{proposal.problem}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/35 border border-white/[0.07] space-y-1">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">
              Resumen de tu Idea
            </span>
            <p className="text-slate-200 leading-relaxed">{proposal.ideaSummary}</p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
              Funcionalidades Clave
            </span>
            <ul className="space-y-1.5">
              {proposal.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-500/[0.08] border border-emerald-400/20 space-y-1">
            <span className="text-[10px] font-mono uppercase text-lime-300 font-semibold">
              Impacto Esperado
            </span>
            <p className="text-slate-200 leading-relaxed">{proposal.expectedImpact}</p>
          </div>
        </div>
      </div>

      {/* Email Form */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-5 glass-panel rounded-3xl p-6 flex flex-col justify-between space-y-5"
      >
        <div className="space-y-4">
          <div className="space-y-1">
            <h4 className="text-base font-display font-bold text-white">
              Recibe esta propuesta en tu correo
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Te enviaremos una copia exacta y otra a Roberto (ARLUC) para preparar tu cotización sin compromiso.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Tu nombre *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ej. María González"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Tu correo electrónico *
              </label>
              <input
                type="email"
                required
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                WhatsApp / Teléfono (opcional)
              </label>
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="+58 412-0000000"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder:text-slate-500"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-lime-300 disabled:opacity-60 text-slate-950 text-xs font-bold transition-all shadow-[0_0_25px_-5px_rgba(16,185,129,0.7)]"
        >
          {sending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Enviando propuesta...</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" />
              <span>Enviar Propuesta a mi Correo y a ARLUC</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
