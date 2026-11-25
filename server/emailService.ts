import nodemailer from 'nodemailer';
import type { SendProposalPayload } from '../src/types/ideaChat';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildProposalHtml(payload: SendProposalPayload, isOwnerCopy: boolean): string {
  const { clientName, clientEmail, clientPhone, proposal } = payload;
  const featuresHtml = proposal.keyFeatures
    .map(
      (feat) =>
        `<li style="margin-bottom:8px;color:#1e293b;font-size:14px;line-height:1.5;">${escapeHtml(feat)}</li>`
    )
    .join('');

  const introText = isOwnerCopy
    ? `Has recibido una nueva propuesta de idea generada desde el asistente web de <strong>ARLUC Soluciones Tecnológicas</strong>.`
    : `Hola <strong>${escapeHtml(clientName)}</strong>, aquí tienes el resumen de la idea que desarrollaste con nuestro asistente. Roberto Arrieche (ARLUC Soluciones Tecnológicas) también recibió una copia y se pondrá en contacto contigo muy pronto.`;

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background-color:#f4f7f5;padding:24px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #d1fae5;">
        <div style="background:#062318;padding:24px 28px;color:#ffffff;">
          <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6ee7b7;font-weight:bold;">
            ARLUC SOLUCIONES TECNOLÓGICAS
          </p>
          <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#ffffff;">
            ${escapeHtml(proposal.projectTitle)}
          </h1>
        </div>

        <div style="padding:28px;">
          <p style="margin:0 0 20px;font-size:14px;color:#334155;line-height:1.6;">
            ${introText}
          </p>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin-bottom:20px;">
            <p style="margin:0 0 6px;font-size:12px;color:#059669;font-weight:bold;text-transform:uppercase;">
              Datos del Cliente
            </p>
            <p style="margin:4px 0;font-size:14px;color:#0f172a;"><strong>Nombre:</strong> ${escapeHtml(clientName)}</p>
            <p style="margin:4px 0;font-size:14px;color:#0f172a;"><strong>Correo:</strong> ${escapeHtml(clientEmail)}</p>
            ${
              clientPhone
                ? `<p style="margin:4px 0;font-size:14px;color:#0f172a;"><strong>WhatsApp / Teléfono:</strong> ${escapeHtml(clientPhone)}</p>`
                : ''
            }
            <p style="margin:4px 0;font-size:14px;color:#0f172a;"><strong>Sector / Negocio:</strong> ${escapeHtml(proposal.businessType)}</p>
            <p style="margin:4px 0;font-size:14px;color:#0f172a;"><strong>Línea ARLUC sugerida:</strong> ${escapeHtml(proposal.suggestedLine)}</p>
          </div>

          <h2 style="font-size:15px;color:#064e3b;margin:0 0 8px;">Problema o Necesidad Identificada</h2>
          <p style="margin:0 0 18px;font-size:14px;color:#334155;line-height:1.6;">
            ${escapeHtml(proposal.problem)}
          </p>

          <h2 style="font-size:15px;color:#064e3b;margin:0 0 8px;">Resumen de la Idea</h2>
          <p style="margin:0 0 18px;font-size:14px;color:#334155;line-height:1.6;">
            ${escapeHtml(proposal.ideaSummary)}
          </p>

          <h2 style="font-size:15px;color:#064e3b;margin:0 0 8px;">Funcionalidades Clave</h2>
          <ul style="margin:0 0 18px;padding-left:20px;">
            ${featuresHtml}
          </ul>

          <h2 style="font-size:15px;color:#064e3b;margin:0 0 8px;">Impacto Esperado</h2>
          <p style="margin:0 0 24px;font-size:14px;color:#334155;line-height:1.6;">
            ${escapeHtml(proposal.expectedImpact)}
          </p>

          <div style="border-top:1px solid #e2e8f0;padding-top:16px;font-size:12px;color:#64748b;">
            <p style="margin:0 0 4px;"><strong>ARLUC Soluciones Tecnológicas</strong> · Roberto José Arrieche Escovar</p>
            <p style="margin:0;">WhatsApp: +58 412-6796865 · Correo: robertoarrieche965@gmail.com · Barquisimeto, Venezuela</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function sendProposalEmails(payload: SendProposalPayload): Promise<void> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const ownerEmail = process.env.OWNER_EMAIL || gmailUser || 'robertoarrieche965@gmail.com';

  if (!gmailUser || !gmailAppPassword) {
    throw new Error(
      'Falta configurar GMAIL_USER y GMAIL_APP_PASSWORD en las variables de entorno para enviar correos.'
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  // 1. Send to Roberto (ARLUC owner)
  await transporter.sendMail({
    from: `"ARLUC Soluciones Tecnológicas" <${gmailUser}>`,
    to: ownerEmail,
    replyTo: payload.clientEmail,
    subject: `Nueva Propuesta de Idea: ${payload.proposal.projectTitle} (${payload.clientName})`,
    html: buildProposalHtml(payload, true),
  });

  // 2. Send copy to the client
  await transporter.sendMail({
    from: `"ARLUC Soluciones Tecnológicas" <${gmailUser}>`,
    to: payload.clientEmail,
    replyTo: ownerEmail,
    subject: `Tu Propuesta de Idea — ${payload.proposal.projectTitle} | ARLUC`,
    html: buildProposalHtml(payload, false),
  });
}
