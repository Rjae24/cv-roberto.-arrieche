import { Technology, Education, ContactInfo } from '../types';

export const AGENCY_INFO = {
  brandName: "ARLUC Soluciones Tecnológicas",
  shortBrand: "ARLUC",
  tagline: "Desarrollo de Software, Sistemas de Gestión & Plataformas Web",
  valueProposition:
    "Desarrollo de software a medida, aplicaciones web y plataformas de conversión orientadas a optimizar la operativa, acelerar ventas y automatizar procesos de negocio con tecnología moderna, robusta y escalable.",
  founderRole: "Fundador & Desarrollador Full-Stack",
};

export const PERSONAL_INFO = {
  name: "Roberto José Arrieche Escovar",
  title: "Fundador de ARLUC Soluciones Tecnológicas",
  subtitle:
    "Transformamos procesos manuales en sistemas web rápidos, seguros y listos para vender. Especializados en sistemas de gestión (POS, inventarios, historias clínicas), aplicaciones web y páginas de alta conversión.",
  location: "Barquisimeto, Estado Lara, Venezuela",
  locationShort: "Barquisimeto, Venezuela",
  profileSummary:
    "Fundador de ARLUC Soluciones Tecnológicas. Ayudo a comercios, clínicas, barberías y empresas de servicios a dejar atrás el desorden operativo y las plantillas genéricas mediante soluciones digitales rápidas, intuitivas y pensadas para el día a día real desde el celular o mostrador.",
};

export const CONTACT_INFO: ContactInfo = {
  phone: "+584126796865",
  phoneFormatted: "+58 412-6796865",
  email: "robertoarrieche965@gmail.com",
  location: "Barquisimeto, Estado Lara, Venezuela",
  github: "https://github.com/Rjae24",
};

export const TECHNOLOGIES: Technology[] = [
  {
    name: "HTML5 & React / TypeScript",
    category: "frontend",
    level: "Expert",
    description: "Interfaces modernas, rápidas, accesibles y optimizadas para SEO técnico y conversión.",
    iconName: "FileHtml",
  },
  {
    name: "CSS3 & Tailwind CSS",
    category: "frontend",
    level: "Expert",
    description: "Diseño UI/UX 100% responsivo bajo filosofía Mobile-First adaptable a cualquier pantalla.",
    iconName: "FileCss",
  },
  {
    name: "JavaScript Nativo (ES6+)",
    category: "frontend",
    level: "Advanced",
    description: "Lógica interactiva en cliente, consumo de APIs REST y experiencias fluidas sin recargas.",
    iconName: "FileCode",
  },
  {
    name: "Node.js / PHP",
    category: "backend",
    level: "Advanced",
    description: "Lógica server-side segura, APIs propias, autenticación por roles y reglas de negocio.",
    iconName: "Server",
  },
  {
    name: "Python",
    category: "backend",
    level: "Intermediate",
    description: "Automatización de procesos, scripts de integración, análisis de datos y servicios REST.",
    iconName: "Terminal",
  },
  {
    name: "MySQL / PostgreSQL",
    category: "backend",
    level: "Advanced",
    description: "Bases de datos relacionales normalizadas, auditoría, respaldos y consultas de alta velocidad.",
    iconName: "Database",
  },
  {
    name: "Git / GitHub",
    category: "workflow",
    level: "Advanced",
    description: "Control de versiones profesional, trazabilidad de cambios y flujos de entrega seguros.",
    iconName: "GitBranch",
  },
  {
    name: "Integración Hardware & Tasas",
    category: "workflow",
    level: "Expert",
    description: "Lectores de código de barras, impresoras térmicas de tickets y sincronización multimoneda.",
    iconName: "Cpu",
  },
  {
    name: "Despliegue Continuo (Vercel / Netlify)",
    category: "workflow",
    level: "Expert",
    description: "Puesta en producción automatizada, SSL, dominios personalizados y alta disponibilidad.",
    iconName: "CloudLightning",
  },
  {
    name: "Auditoría & Calidad con IA",
    category: "ia",
    level: "Expert",
    description: "Detección temprana de errores, pruebas de borde y código limpio de alta mantenibilidad.",
    iconName: "BrainCircuit",
  },
  {
    name: "Aceleración de Entrega",
    category: "ia",
    level: "Expert",
    description: "Reducción de tiempos de desarrollo hasta un 50% manteniendo arquitectura sólida.",
    iconName: "Gauge",
  },
  {
    name: "UX Orientada a Conversión",
    category: "ia",
    level: "Advanced",
    description: "Flujos claros pensados para que el usuario entienda, confíe y ejecute acciones rápido.",
    iconName: "Sparkles",
  },
];

export const AI_MULTIPLIER_PILLARS = [
  {
    id: "optimizacion",
    title: "Software Robusto y Sin Fallas",
    benefit: "Calidad auditada desde el día uno",
    description:
      "Combinamos ingeniería tradicional con auditoría asistida por IA para detectar bugs latentes, proteger datos críticos y entregar sistemas estables.",
  },
  {
    id: "aceleracion",
    title: "Entregas hasta 50% Más Rápidas",
    benefit: "Menor tiempo de espera para tu negocio",
    description:
      "Aceleramos la construcción de módulos, validaciones y documentación técnica para que tu empresa empiece a operar y recuperar la inversión antes.",
  },
  {
    id: "ux-inteligente",
    title: "Enfoque en Retorno de Inversión",
    benefit: "Diseñado para vender y ahorrar horas",
    description:
      "No entregamos código genérico: estructuramos cada pantalla para reducir errores operativos, agilizar cobros y convertir visitas en clientes.",
  },
];

export const EDUCATION: Education = {
  degree: "Ingeniería en Informática",
  institution: "Instituto Universitario Jesús Obrero (IUJO)",
  location: "Extensión Barquisimeto, Lara, Venezuela",
  period: "Presente (En Curso, 5to Semestre)",
  current: true,
  courses: [
    "Estructuras de Datos y Algoritmos Avanzados",
    "Ingeniería de Software y Ciclos de Vida",
    "Análisis Estadístico Aplicado",
    "Diseño, Normalización e Implementación de Bases de Datos Relacionales",
    "Metodologías Ágiles de Desarrollo",
  ],
  highlight:
    "Formación académica aplicada directamente a soluciones reales para comercios y empresas venezolanas.",
};
