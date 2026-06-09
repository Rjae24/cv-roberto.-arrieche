import { Project, Technology, Education, ContactInfo } from './types';

export const PERSONAL_INFO = {
  name: "Roberto José Arrieche Escovar",
  title: "Desarrollador Full-Stack & Estudiante de Ingeniería en Informática",
  subtitle: "Transformando líneas de código en soluciones eficientes. Especializado en optimización de procesos, desarrollo web responsive y automatización con herramientas de Inteligencia Artificial.",
  location: "Barquisimeto, Estado Lara, Venezuela",
  locationShort: "Barquisimeto, Venezuela",
  profileSummary: "Soy estudiante del 5to semestre de Ingeniería en Informática en el Instituto Universitario Jesús Obrero (IUJO). Me apasiona digitalizar problemas y resolverlos de la manera más escalable y centrada en la experiencia del usuario. Mi enfoque combina la rigurosidad lógica de la ingeniería tradicional con las metodologías modernas de desarrollo rápido. Considero que la tecnología debe ser accesible y funcional, por lo que me especializo en la filosofía de diseño Mobile-First, asegurando que cada sistema rinda al máximo en los dispositivos que las personas usan en su día a día.",
};

export const CONTACT_INFO: ContactInfo = {
  phone: "+584126796865",
  phoneFormatted: "+58 412-6796865",
  email: "robertoarrieche965@gmail.com",
  location: "Barquisimeto, Estado Lara, Venezuela",
  github: "https://github.com/robertoarrieche", // inferred based on standard github names
};

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    level: "Expert",
    description: "Estructuración semántica, accesibilidad web y SEO técnico.",
    iconName: "FileHtml",
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "Expert",
    description: "Diseño fluido, maquetación adaptativa, Flexbox, CSS Grid y CSS Variables.",
    iconName: "FileCss",
  },
  {
    name: "JavaScript Nativo",
    category: "frontend",
    level: "Advanced",
    description: "ES6+, manipulación interactiva del DOM, consumo de APIs y modularidad.",
    iconName: "FileCode",
  },
  // Backend & DB
  {
    name: "PHP",
    category: "backend",
    level: "Advanced",
    description: "Lógica server-side, conexión segura a bases de datos y desarrollo backend estructurado.",
    iconName: "Server",
  },
  {
    name: "Python",
    category: "backend",
    level: "Intermediate",
    description: "Automatización de tareas, scripts de scraping, análisis de datos y servicios REST.",
    iconName: "Terminal",
  },
  {
    name: "Bases de Datos Relacionales (MySQL / PostgreSQL)",
    category: "backend",
    level: "Advanced",
    description: "Arquitectura, normalización, índices y modelado eficiente de esquemas de datos.",
    iconName: "Database",
  },
  // Workflow & Env
  {
    name: "Git / GitHub",
    category: "workflow",
    level: "Advanced",
    description: "Control de versiones, flujos de trabajo colaborativos y gestión de ramas.",
    iconName: "GitBranch",
  },
  {
    name: "Maquetación Ágil",
    category: "workflow",
    level: "Expert",
    description: "Filosofía Mobile-First, marcos de diseño rápidos e iteración centrada en velocidad.",
    iconName: "Cpu",
  },
  {
    name: "Despliegues Continuos (Netlify / Vercel)",
    category: "workflow",
    level: "Expert",
    description: "Automatización de builds, despliegue continuo desde repositorios y optimización de assets.",
    iconName: "CloudLightning",
  },
  // IA Augmented
  {
    name: "Optimización por IA",
    category: "ia",
    level: "Expert",
    description: "Uso de prompts de ingeniería para auditorías, detección de bugs latentes y optimización de algoritmos.",
    iconName: "BrainCircuit",
  },
  {
    name: "Aceleración de Procesos",
    category: "ia",
    level: "Expert",
    description: "Generación de código estructurado base, automatización de tareas tediosas y documentación ágil.",
    iconName: "Gauge",
  },
  {
    name: "Diseño UX Inteligente",
    category: "ia",
    level: "Advanced",
    description: "Modelado de flujos interactivos adaptados y análisis heurístico asistido por IA.",
    iconName: "Sparkles",
  }
];

export const AI_MULTIPLIER_PILLARS = [
  {
    id: "optimización",
    title: "Optimización de Código",
    benefit: "Software más robusto y seguro",
    description: "Uso de prompts avanzados para auditoría en tiempo real, detección de vulnerabilidades, resolución ágil de bugs y refactorización orientada a la mantenibilidad."
  },
  {
    id: "aceleración",
    title: "Aceleración de Despliegue",
    benefit: "Reducción de tiempos hasta un 50%",
    description: "Generación ágil de borradores de arquitectura, scripts de automatización personalizados y documentación técnica de alta calidad para agilizar la entrega."
  },
  {
    id: "ux-inteligente",
    title: "Soluciones UX Inteligentes",
    benefit: "Sistemas centrados en la venta",
    description: "Estructuración de flujos lógicos optimizados para las tasas de conversión y un diseño visual extremadamente intuitivo para el usuario final."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "salud-integral",
    title: "Sistema Piloto de Gestión de Historias Médicas (\"Salud Integral\")",
    description: "Plataforma web piloto diseñada para optimizar y digitalizar el manejo de antecedentes médicos, consultas y flujos de trabajo internos.",
    longDescription: "Co-desarrollo y despliegue de una plataforma web piloto creada para sustituir los flujos físicos en papel por una interfaz segura, ágil y con un motor de base de datos relacional para la búsqueda veloz de expedientes médicos.",
    challengeSolved: "Sustituir la gestión física en papel por una interfaz segura, rápida y con una arquitectura de datos relacional que permite búsquedas instantáneas de pacientes y resguardo eficiente de información crítica.",
    results: [
      "Digitalización del 100% de las fichas médicas en papel en el piloto actual.",
      "Reducción del tiempo de búsqueda de registros de minutos a menos de 2 segundos.",
      "Interfaz sumamente intuitiva apta para personal de salud con baja formación técnica.",
      "Disponibilidad de información remota instantánea para médicos y enfermeros autorizados."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript Nativo", "Bases de Datos Relacionales", "GitHub"],
    productionUrl: "https://hav-project.netlify.app",
    role: "Co-Desarrollador Full-Stack",
    screenshotPrompt: "Minimalist medical record dashboard with charts and tables for patients"
  },
  {
    id: "tren-nueva-segovia",
    title: "Propuesta de Menú Digital Interactivo – El Tren de Nueva Segovia",
    description: "Menú digital interactivo de alta velocidad, optimizado para smartphones, eliminando fricción del PDF estático.",
    longDescription: "Diseño arquitectónico y maquetación de una interfaz web móvil interactiva presentada como propuesta de modernización para un reconocido negocio gastronómico local en Barquisimeto, Venezuela.",
    challengeSolved: "Eliminar la fricción del clásico menú en formato PDF pesado (que consume demasiados datos móviles y ralentiza la experiencia de compra). La solución web carga instantáneamente en redes móviles limitadas y organiza los platos por categorías dinámicas muy ágiles.",
    results: [
      "Carga instantánea de menos de 1.5s incluso en conexiones móviles limitadas en Barquisimeto.",
      "Navegación sencilla mediante pestañas horizontales adaptables al pulgar (Mobile-First).",
      "Cero descargas requeridas para los clientes en su mesa.",
      "Filtrado instantáneo por categorías de platos sin recargar la página."
    ],
    technologies: ["HTML5 Semántico", "CSS3 Avanzado", "JavaScript Nativo", "Vercel"],
    productionUrl: "https://menu-tren.vercel.app/#",
    role: "Diseñador y Maquetador Web Principal",
    screenshotPrompt: "Modern mobile restaurant menu interface with food categories"
  },
  {
    id: "andreas-cleaning",
    title: "Landing Page – Andrea's Cleaning Service",
    description: "Landing page corporativa altamente optimizada para captación de clientes de servicios de limpieza en Atlanta, EE. UU.",
    longDescription: "Desarrollo de una Landing Page ('Single Page App') limpia, optimizada 100% para la conversión y captación de clientes potenciales comerciales y residenciales en el mercado de Estados Unidos.",
    challengeSolved: "Crear una estructura visual limpia, con copywriting persuasivo en inglés y llamadas a la acción (CTA) directas para agilizar el contacto del cliente internacional con la empresa proveedora de servicios.",
    results: [
      "Estructuración de embudo simple para reservas inmediatas.",
      "Despliegue y build automatizado continuo a través de Netlify.",
      "Diseño responsive impecable con llamadas de acción visibles en mobile de forma persistente.",
      "Optimización de velocidad para alcanzar altos puntajes en rendimiento de carga."
    ],
    technologies: ["HTML5", "CSS3 Extensible", "UI/UX Minimalista", "Netlify"],
    productionUrl: "https://andreas-cleanig.netlify.app",
    role: "Desarrollador Frontend & Consultor UI/UX",
    screenshotPrompt: "Sparkling clean service professional landing page with booking form"
  }
];

export const EDUCATION: Education = {
  degree: "Ingeniería en Informática",
  institution: "Instituto Universitario Jesús Obrero (IUJO)",
  location: "Extensión Barquisimeto, Lara, Venezuela",
  period: "2024 - Presente (En Curso, 5to Semestre)",
  current: true,
  courses: [
    "Estructuras de Datos y Algoritmos Avanzados",
    "Ingeniería de Software y Ciclos de Vida",
    "Análisis Estadístico Aplicado",
    "Diseño, Normalización e Implementación de Sistemas de Bases de Datos Relacionales",
    "Metodologías Ágiles de Desarrollo"
  ],
  highlight: "Enfoque en soluciones prácticas a escala local, combinando destrezas técnicas modernas y bases lógicas rigurosas."
};
