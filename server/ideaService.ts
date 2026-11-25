import { GoogleGenAI } from '@google/genai';
import type { ChatMessage, ProjectProposal } from '../src/types/ideaChat';

const SYSTEM_PROMPT = `Eres el Asesor de Ideas de ARLUC Soluciones Tecnológicas (fundada por Roberto Arrieche en Barquisimeto, Venezuela).

TU ÚNICO OBJETIVO:
Ayudar a clientes SIN conocimientos tecnológicos a bajar a tierra y estructurar su IDEA de proyecto digital (página web, tienda, sistema de inventario/POS, agendamiento de citas, software para su negocio, etc.).

REGLAS ESTRICTAS:
1. Habla siempre en español claro, cercano, amable y profesional, SIN tecnicismos (no hables de React, bases de datos, APIs, frameworks ni código).
2. Enfócate SOLO en desarrollar la idea de negocio:
   - Qué hace el negocio y qué problema diario quiere resolver.
   - Quiénes usarían la solución (clientes, empleados, el dueño).
   - Qué funciones principales imagina para su día a día.
   - Qué resultado busca (vender más, ahorrar horas, evitar descuadres, dar mejor imagen).
3. Haz máximo 1 o 2 preguntas cortas y fáciles por turno para no abrumar al cliente.
4. Respuestas breves (máximo 3-4 líneas por mensaje) y SIN emojis.
5. NUNCA escribas código, tutoriales técnicos ni des cotizaciones definitivas vinculantes. Si el cliente pregunta precios, indica que Roberto le enviará una cotización exacta al recibir la propuesta.
6. Cuando ya tengas claro el negocio, el problema y al menos 2-3 funciones deseadas (normalmente en 3 o 4 intercambios), dile al cliente que su idea ya está bien formada y que puede presionar el botón "Generar Propuesta" para revisarla y enviarla por correo a ARLUC y a sí mismo.`;

const SUMMARY_PROMPT = `Con base en la conversación anterior con el cliente, genera EXCLUSIVAMENTE un objeto JSON válido (sin bloques markdown, sin texto adicional antes ni después) con esta estructura exacta:
{
  "projectTitle": "Nombre corto y claro para el proyecto",
  "businessType": "Tipo de negocio o sector del cliente",
  "problem": "Resumen claro en 1-2 oraciones del problema o necesidad actual",
  "ideaSummary": "Descripción sencilla y profesional de la idea desarrollada en 2-3 oraciones, sin tecnicismos",
  "keyFeatures": [
    "Funcionalidad clave 1 en lenguaje sencillo",
    "Funcionalidad clave 2 en lenguaje sencillo",
    "Funcionalidad clave 3 en lenguaje sencillo"
  ],
  "expectedImpact": "Beneficio concreto esperado para el negocio del cliente",
  "suggestedLine": "Una de: Landing Page / Catálogo Simple | Sitio Web Corporativo | Sistema POS / Inventario Multimoneda | Software a Medida"
}`;

function getAiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    throw new Error(
      'Falta configurar GEMINI_API_KEY en las variables de entorno del servidor (Netlify o archivo .env).'
    );
  }
  return new GoogleGenAI({ apiKey });
}

function formatConversation(messages: ChatMessage[]): string {
  return messages
    .map((m) => `${m.role === 'user' ? 'Cliente' : 'Asesor ARLUC'}: ${m.content}`)
    .join('\n');
}

export async function generateIdeaReply(messages: ChatMessage[]): Promise<string> {
  const ai = getAiClient();
  const transcript = formatConversation(messages);

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `${transcript}\nAsesor ARLUC:`,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.6,
    },
  });

  const text = response.text?.trim();
  if (!text) {
    throw new Error('No se recibió respuesta del asistente de IA.');
  }
  return text;
}

export async function generateIdeaProposal(messages: ChatMessage[]): Promise<ProjectProposal> {
  const ai = getAiClient();
  const transcript = formatConversation(messages);

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Conversación:\n${transcript}\n\n${SUMMARY_PROMPT}`,
    config: {
      systemInstruction:
        'Eres un analista de negocio de ARLUC Soluciones Tecnológicas. Redacta propuestas claras, sin tecnicismos y sin emojis. Devuelve únicamente JSON válido.',
      temperature: 0.3,
      responseMimeType: 'application/json',
    },
  });

  const raw = response.text?.trim() || '';
  const cleaned = raw.replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
  const parsed = JSON.parse(cleaned) as ProjectProposal;

  return {
    projectTitle: parsed.projectTitle || 'Propuesta de Proyecto Digital',
    businessType: parsed.businessType || 'Comercio / Servicios',
    problem: parsed.problem || 'Optimización de procesos y presencia digital.',
    ideaSummary: parsed.ideaSummary || 'Solución digital diseñada a medida para el negocio.',
    keyFeatures: Array.isArray(parsed.keyFeatures) && parsed.keyFeatures.length > 0
      ? parsed.keyFeatures
      : ['Diseño adaptado a teléfonos móviles', 'Flujo sencillo para uso diario'],
    expectedImpact: parsed.expectedImpact || 'Mayor orden operativo y captación de clientes.',
    suggestedLine: parsed.suggestedLine || 'Software a Medida',
  };
}
