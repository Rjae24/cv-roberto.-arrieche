import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "arluc-pos",
    shortLabel: "ARLUC POS",
    title: "ARLUC POS — Sistema de Punto de Venta & Inventario",
    sector: "Comercio Minorista / Retail",
    solutionType: "Web App / Sistema de Gestión Comercial",
    description:
      "Sistema web de punto de venta, control de inventario y cálculo multimoneda en tiempo real con impresión de tickets térmicos.",
    longDescription:
      "Plataforma comercial desarrollada para eliminar el desfase entre inventario físico y caja, permitiendo cobros ágiles en múltiples monedas y control exacto de márgenes por producto.",
    challengeSolved:
      "Negocios comerciales con desfase en inventarios físicos, lentitud al facturar en horas pico y descontrol al gestionar cobros en múltiples monedas con tasas cambiarias fluctuantes.",
    solutionApplied:
      "Plataforma web con interfaz rápida para mostrador, soporte para lectores de código de barras, integración directa con impresoras térmicas de tickets y sincronización automática del tipo de cambio oficial diario.",
    results: [
      "Reducción del tiempo promedio por transacción en caja a menos de 45 segundos.",
      "Eliminación de descuadres de caja entre divisas en efectivo, bolívares y transferencias.",
      "Control en tiempo real del stock, alertas de reposición y margen de ganancia por artículo.",
      "Emisión instantánea de tickets y comprobantes térmicos desde el navegador.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL / MySQL", "Impresión Térmica"],
    imageUrl: "/images/arluc-pos.jpg",
    role: "Arquitecto de Software & Desarrollador Full-Stack",
  },
  {
    id: "salud-integral",
    shortLabel: "Salud Integral",
    title: "Salud Integral (HAV) — Gestión de Historias Clínicas",
    sector: "Salud, Clínicas & Consultorios",
    solutionType: "Software Empresarial / Sistema Clínico",
    description:
      "Plataforma web clínica bajo estándar SOAP para digitalizar expedientes médicos, consultas y referencias entre especialistas.",
    longDescription:
      "Co-desarrollo y despliegue de una plataforma clínica creada para sustituir los archivos físicos en papel por una interfaz segura, ágil y con base de datos relacional para búsquedas instantáneas.",
    challengeSolved:
      "Centralización manual o dispersa de registros médicos en papel, riesgo de pérdida de información clínica y dificultad para coordinar interconsultas entre médicos especialistas.",
    solutionApplied:
      "Aplicación web bajo estándar SOAP (Subjetivo, Objetivo, Apreciación, Plan) con control de accesos por rol (recepción, enfermería, médicos especialistas) y módulo de referencias interdepartamentales.",
    results: [
      "Digitalización del 100% de las fichas médicas en papel en el entorno piloto.",
      "Reducción del tiempo de búsqueda de expedientes de minutos a menos de 2 segundos.",
      "Trazabilidad total del historial médico con resguardo confidencial por roles.",
      "Interfaz intuitiva apta para personal de salud sin necesidad de formación técnica previa.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bases de Datos Relacionales", "Control por Roles"],
    imageUrl: "/images/salud-integral.jpg",
    productionUrl: "https://hav-project.netlify.app",
    role: "Co-Desarrollador Full-Stack",
  },
  {
    id: "tren-nueva-segovia",
    shortLabel: "Menú El Tren",
    title: "El Tren de Nueva Segovia — Menú Digital Interactivo",
    sector: "Gastronomía & Restauración",
    solutionType: "Web App Mobile-First",
    description:
      "Menú digital interactivo de carga ultrarrápida para smartphones, diseñado para sustituir los PDFs pesados en mesa.",
    longDescription:
      "Diseño arquitectónico y maquetación de una interfaz web móvil interactiva creada como propuesta de modernización para un reconocido restaurante en Barquisimeto, Venezuela.",
    challengeSolved:
      "Eliminar la fricción del clásico menú en PDF pesado que consume demasiados datos móviles, tarda en abrir y obliga al comensal a hacer zoom constantemente.",
    solutionApplied:
      "Aplicación web ligera optimizada para redes móviles limitadas, con navegación por pestañas horizontales adaptables al pulgar y filtrado instantáneo por categorías de platos.",
    results: [
      "Carga completa en menos de 1.5 segundos incluso en conexiones móviles 3G/4G limitadas.",
      "Cero descargas requeridas para los clientes al escanear el QR en su mesa.",
      "Filtrado instantáneo por categorías sin recargar la página.",
      "Experiencia visual nocturna alineada con la identidad del local.",
    ],
    technologies: ["HTML5 Semántico", "CSS3 Avanzado", "JavaScript Nativo", "Vercel"],
    imageUrl: "/images/menu-el-tren.jpg",
    productionUrl: "https://menu-tren.vercel.app/#",
    role: "Diseñador UI & Desarrollador Frontend",
  },
  {
    id: "andreas-cleaning",
    shortLabel: "Andrea's Cleaning",
    title: "Andrea's Cleaning Service — Plataforma & Agendamiento",
    sector: "Servicios Residenciales & Corporativos (EE. UU.)",
    solutionType: "Aplicación Web de Captación & Citas",
    description:
      "Plataforma web orientada a conversión con cotizador dinámico y agendamiento automatizado para el mercado de Atlanta, EE. UU.",
    longDescription:
      "Desarrollo de una aplicación web enfocada en captación de clientes potenciales comerciales y residenciales, permitiendo cotizar por tipo de servicio y agendar citas sin fricción.",
    challengeSolved:
      "Prestadores de servicios perdiendo prospectos por falta de un canal directo y transparente para cotizar servicios y agendar citas en tiempo real fuera del horario de oficina.",
    solutionApplied:
      "Sitio web interactivo con estructura persuasiva en inglés, cotizador dinámico por tipo de servicio/espacio, llamadas a la acción persistentes en móvil y notificación automatizada al correo de operaciones.",
    results: [
      "Captación de prospectos 24/7 sin intervención manual por chat.",
      "Reducción estimada de hasta un 70% en consultas operativas repetitivas para cotizaciones iniciales.",
      "Despliegue continuo automatizado con alto puntaje en velocidad de carga.",
      "Diseño 100% responsivo con botones de contacto y reserva siempre visibles.",
    ],
    technologies: ["HTML5", "CSS3", "UI/UX de Conversión", "Automatización de Citas", "Netlify"],
    imageUrl: "/images/andreas-cleaning.jpg",
    productionUrl: "https://andreas-cleanig.netlify.app",
    role: "Desarrollador Frontend & Consultor UI/UX",
  },
];
