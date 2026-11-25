import { generateIdeaReply, generateIdeaProposal } from '../../server/ideaService';
import type { ChatMessage } from '../../src/types/ideaChat';

interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
}

const HEADERS = {
  'Content-Type': 'application/json',
};

export const handler = async (event: NetlifyEvent) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: HEADERS,
      body: JSON.stringify({ error: 'Método no permitido' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}') as {
      messages?: ChatMessage[];
      mode?: 'chat' | 'summarize';
    };

    const messages = Array.isArray(body.messages) ? body.messages : [];
    if (messages.length === 0) {
      return {
        statusCode: 400,
        headers: HEADERS,
        body: JSON.stringify({ error: 'Debes enviar al menos un mensaje.' }),
      };
    }

    if (body.mode === 'summarize') {
      const proposal = await generateIdeaProposal(messages);
      return {
        statusCode: 200,
        headers: HEADERS,
        body: JSON.stringify({ proposal }),
      };
    }

    const reply = await generateIdeaReply(messages);
    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error interno procesando la consulta.';
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: message }),
    };
  }
};
