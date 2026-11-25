import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, FileText, RotateCcw, Loader2, Lightbulb, AlertCircle } from 'lucide-react';
import type { ChatMessage, ProjectProposal } from '../types/ideaChat';
import { requestIdeaReply, requestIdeaProposal } from '../services/ideaChatApi';
import IdeaProposalCard from './IdeaProposalCard';

const INITIAL_MESSAGE: ChatMessage = {
  role: 'assistant',
  content:
    'Hola, soy el Asesor de Ideas de ARLUC. No necesitas saber nada de tecnología: cuéntame en tus propias palabras qué hace tu negocio o qué problema te gustaría resolver y armamos juntos la idea de tu proyecto.',
};

const STARTER_PROMPTS = [
  'Quiero controlar el inventario y las ventas de mi negocio en dólares y bolívares',
  'Necesito una página web para atraer más clientes por Instagram y WhatsApp',
  'Quiero que mis clientes puedan agendar citas o pedir presupuestos solos',
];

export default function IdeaAssistantSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [loadingReply, setLoadingReply] = useState(false);
  const [buildingProposal, setBuildingProposal] = useState(false);
  const [proposal, setProposal] = useState<ProjectProposal | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const userMessageCount = messages.filter((m) => m.role === 'user').length;

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, loadingReply]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || loadingReply || buildingProposal) return;

    setError(null);
    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setLoadingReply(true);

    try {
      const reply = await requestIdeaReply(nextMessages);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No pudimos conectar con el asistente.');
    } finally {
      setLoadingReply(false);
    }
  };

  const handleGenerateProposal = async () => {
    if (userMessageCount === 0 || buildingProposal) return;
    setError(null);
    setBuildingProposal(true);

    try {
      const generated = await requestIdeaProposal(messages);
      setProposal(generated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo generar la propuesta.');
    } finally {
      setBuildingProposal(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setProposal(null);
    setInput('');
    setError(null);
  };

  return (
    <section
      className="py-20 bg-[#060d0a] border-b border-white/[0.06] relative overflow-hidden no-print"
      id="idea-assistant-section"
    >
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-emerald-500/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              <Lightbulb className="w-3.5 h-3.5" />
              Sin Tecnicismos · Gratis
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              ¿Tienes una idea? Armemos tu propuesta en minutos
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Conversa con nuestro asistente guiado para ordenar tu idea de negocio. Al finalizar, te enviamos el resumen directo a tu correo y al equipo de ARLUC.
            </p>
          </div>

          {userMessageCount > 0 && !proposal && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] text-slate-300 text-xs font-medium self-start md:self-auto transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar charla</span>
            </button>
          )}
        </motion.div>

        {proposal ? (
          <IdeaProposalCard
            proposal={proposal}
            onBackToChat={() => setProposal(null)}
            onReset={handleReset}
          />
        ) : (
          <div className="glass-panel rounded-3xl overflow-hidden border-emerald-400/20 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.25)]">
            {/* Chat Window Header */}
            <div className="px-5 py-3.5 bg-black/45 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-display font-bold text-white">
                  Asesor de Ideas ARLUC
                </span>
                <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                  · Enfocado solo en estructurar tu idea
                </span>
              </div>

              {userMessageCount >= 1 && (
                <button
                  type="button"
                  onClick={handleGenerateProposal}
                  disabled={buildingProposal || loadingReply}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-lime-300 disabled:opacity-50 text-slate-950 text-xs font-bold transition-all"
                >
                  {buildingProposal ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Armando propuesta...</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-3.5 h-3.5" />
                      <span>Generar Propuesta y Enviar</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Messages Area */}
            <div
              ref={scrollContainerRef}
              className="p-5 sm:p-6 space-y-4 h-[340px] sm:h-[380px] overflow-y-auto bg-[#040907]/70"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-emerald-500 text-slate-950 font-medium rounded-br-sm'
                        : 'bg-white/[0.06] border border-white/[0.08] text-slate-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loadingReply && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/[0.08] text-emerald-300 text-xs inline-flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Escribiendo...</span>
                  </div>
                </div>
              )}

              {/* Quick Starter Chips on first turn */}
              {userMessageCount === 0 && !loadingReply && (
                <div className="pt-2 space-y-2">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    O elige un ejemplo para comenzar:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {STARTER_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => sendMessage(prompt)}
                        className="text-left px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-emerald-500/15 border border-white/[0.09] hover:border-emerald-400/35 text-xs text-slate-300 hover:text-emerald-100 transition-all"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Error Banner */}
            {error && (
              <div className="mx-5 mb-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="p-4 bg-black/50 border-t border-white/[0.08] flex items-center gap-2.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loadingReply || buildingProposal}
                placeholder="Cuéntame tu idea en palabras sencillas..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] focus:border-emerald-400 focus:outline-none text-sm text-white placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || loadingReply || buildingProposal}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 text-xs font-bold transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Enviar</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
