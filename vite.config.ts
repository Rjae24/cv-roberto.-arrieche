import 'dotenv/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig, type Plugin } from 'vite';
import { generateIdeaReply, generateIdeaProposal } from './server/ideaService';
import { sendProposalEmails } from './server/emailService';
import type { ChatMessage, SendProposalPayload } from './src/types/ideaChat';

function readJsonBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

function sendJson(res: ServerResponse, status: number, payload: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

function localApiMiddleware(): Plugin {
  return {
    name: 'arluc-local-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'POST') return next();

        if (req.url === '/api/idea-chat') {
          try {
            const raw = await readJsonBody(req);
            const body = JSON.parse(raw || '{}') as {
              messages?: ChatMessage[];
              mode?: 'chat' | 'summarize';
            };
            const messages = Array.isArray(body.messages) ? body.messages : [];
            if (messages.length === 0) {
              return sendJson(res, 400, { error: 'Debes enviar al menos un mensaje.' });
            }
            if (body.mode === 'summarize') {
              const proposal = await generateIdeaProposal(messages);
              return sendJson(res, 200, { proposal });
            }
            const reply = await generateIdeaReply(messages);
            return sendJson(res, 200, { reply });
          } catch (err) {
            const message = err instanceof Error ? err.message : 'Error interno en idea-chat.';
            return sendJson(res, 500, { error: message });
          }
        }

        if (req.url === '/api/send-proposal') {
          try {
            const raw = await readJsonBody(req);
            const payload = JSON.parse(raw || '{}') as SendProposalPayload;
            if (!payload.clientName?.trim() || !payload.clientEmail?.trim() || !payload.proposal) {
              return sendJson(res, 400, { error: 'Nombre, correo y propuesta son obligatorios.' });
            }
            await sendProposalEmails(payload);
            return sendJson(res, 200, { ok: true });
          } catch (err) {
            const message = err instanceof Error ? err.message : 'Error enviando el correo.';
            return sendJson(res, 500, { error: message });
          }
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), localApiMiddleware()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
