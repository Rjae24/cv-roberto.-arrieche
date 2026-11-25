import { sendProposalEmails } from '../../server/emailService';
import type { SendProposalPayload } from '../../src/types/ideaChat';

interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
}

const HEADERS = {
  'Content-Type': 'application/json',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const handler = async (event: NetlifyEvent) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: HEADERS,
      body: JSON.stringify({ error: 'Método no permitido' }),
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}') as SendProposalPayload;

    if (!payload.clientName?.trim() || !payload.clientEmail?.trim() || !payload.proposal) {
      return {
        statusCode: 400,
        headers: HEADERS,
        body: JSON.stringify({ error: 'Nombre, correo y propuesta son obligatorios.' }),
      };
    }

    if (!EMAIL_REGEX.test(payload.clientEmail.trim())) {
      return {
        statusCode: 400,
        headers: HEADERS,
        body: JSON.stringify({ error: 'Por favor ingresa un correo electrónico válido.' }),
      };
    }

    await sendProposalEmails({
      clientName: payload.clientName.trim(),
      clientEmail: payload.clientEmail.trim(),
      clientPhone: payload.clientPhone?.trim(),
      proposal: payload.proposal,
    });

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'No se pudo enviar el correo.';
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: message }),
    };
  }
};
