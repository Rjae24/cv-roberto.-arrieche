import type { ChatMessage, ProjectProposal, SendProposalPayload } from '../types/ideaChat';

export async function requestIdeaReply(messages: ChatMessage[]): Promise<string> {
  const res = await fetch('/api/idea-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, mode: 'chat' }),
  });

  const data = (await res.json()) as { reply?: string; error?: string };
  if (!res.ok || !data.reply) {
    throw new Error(data.error || 'No se pudo obtener respuesta del asistente.');
  }
  return data.reply;
}

export async function requestIdeaProposal(messages: ChatMessage[]): Promise<ProjectProposal> {
  const res = await fetch('/api/idea-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, mode: 'summarize' }),
  });

  const data = (await res.json()) as { proposal?: ProjectProposal; error?: string };
  if (!res.ok || !data.proposal) {
    throw new Error(data.error || 'No se pudo generar el resumen de la propuesta.');
  }
  return data.proposal;
}

export async function submitProposalEmails(payload: SendProposalPayload): Promise<void> {
  const res = await fetch('/api/send-proposal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as { ok?: boolean; error?: string };
  if (!res.ok || !data.ok) {
    throw new Error(data.error || 'No se pudo enviar la propuesta por correo.');
  }
}
