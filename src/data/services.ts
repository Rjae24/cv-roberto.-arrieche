import { ServicePackage, PricingScheme, CommercialPolicy } from '../types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "landing-page",
    line: "Presencia & Conversión",
    title: "Landing Page / Catálogo Simple",
    tagline: "Ideal para captar clientes por redes sociales, pauta o WhatsApp.",
    deliverables: [
      "Diseño UI/UX moderno y 100% responsivo (Mobile-First).",
      "Hasta 5 secciones clave (Hero, Beneficios, Servicios, Prueba Social, FAQ).",
      "Formulario o botón automatizado hacia WhatsApp / correo.",
      "Optimización SEO técnica, velocidad de carga y despliegue.",
    ],
    localPrice: "$80 – $150",
    localNote: "Pago único · Estructura ágil",
    corporatePrice: "$180 – $300",
    corporateNote: "Pago único · Diseño exclusivo",
    differenceNote:
      "En el nivel Emprendedor se utilizan estructuras probadas de despliegue rápido; en Empresa Consolidada se incluye copywriting de venta, SEO local avanzado y diseño visual a medida.",
  },
  {
    id: "corporate-web",
    line: "Presencia Corporativa",
    title: "Sitio Web Corporativo / Institucional",
    tagline: "Para empresas que necesitan autoridad, catálogo y autogestión.",
    deliverables: [
      "Hasta 5 páginas completas (Inicio, Nosotros, Servicios, Casos, Contacto).",
      "Catálogo de productos o servicios navegable por categorías.",
      "Integración directa con canales de mensajería y ubicación.",
      "Panel administrativo básico para autogestión de contenidos.",
    ],
    localPrice: "$200 – $350",
    localNote: "Pago único",
    corporatePrice: "$400 – $650",
    corporateNote: "Pago único · Multi-sucursal",
    differenceNote:
      "La versión corporativa amplía la cantidad de vistas, arquitectura de marca, catálogo autogestionable completo y soporte para múltiples sucursales.",
  },
  {
    id: "pos-inventory",
    line: "Sistemas & Operativa",
    title: "Sistema POS / Inventario Multimoneda",
    tagline: "Controla stock, caja, divisas y tickets térmicos sin descuadres.",
    deliverables: [
      "Módulo de inventario, stock mínimo y alertas de reposición.",
      "Punto de venta (POS) ágil compatible con lector de código de barras.",
      "Cálculo multimoneda (USD / Bs) con tasa cambiaria en tiempo real.",
      "Emisión de tickets térmicos y control de usuarios por roles.",
    ],
    localPrice: "$250 – $450",
    localNote: "Instalación + $20–$40/mes soporte",
    corporatePrice: "$600 – $1,200",
    corporateNote: "Desarrollo propio / Licencia base",
    differenceNote:
      "Esquema híbrido pensado para Venezuela: un comercio local puede arrancar con una inversión inicial accesible más mensualidad de soporte; empresas consolidadas adquieren licencia o desarrollo dedicado.",
    highlighted: true,
  },
  {
    id: "custom-software",
    line: "Software a Medida",
    title: "Sistema a Medida / Procesos Críticos",
    tagline: "Clínicas, distribuidoras y flujos B2B donde el software sustituye trabajo manual.",
    deliverables: [
      "Flujos especializados (historias clínicas SOAP, cotizadores, B2B).",
      "Base de datos relacional dedicada y API REST propia.",
      "Reportes analíticos avanzados y exportación en PDF / Excel.",
      "Auditoría por usuario, manual de uso y capacitación al equipo.",
    ],
    localPrice: "$600 – $1,200",
    localNote: "Según alcance inicial",
    corporatePrice: "$1,500 – $3,500+",
    corporateNote: "Arquitectura empresarial",
    differenceNote:
      "Escala según la complejidad de reglas de negocio, integraciones externas, cantidad de departamentos y nivel de trazabilidad requerido.",
  },
  {
    id: "retainer-support",
    line: "Continuidad Operativa",
    title: "Plan de Soporte & Mantenimiento",
    tagline: "Tranquilidad operativa: respaldos, monitoreo y ajustes continuos.",
    deliverables: [
      "Monitoreo de disponibilidad del servidor (uptime).",
      "Respaldos automáticos semanales de base de datos.",
      "Actualizaciones de seguridad, tasas y parches de dependencias.",
      "Bolsa de 3 a 5 horas mensuales para ajustes o mejoras menores.",
    ],
    localPrice: "$25 – $40 / mes",
    localNote: "Mensual recurrente",
    corporatePrice: "$60 – $120 / mes",
    corporateNote: "Mensual · Atención prioritaria",
    differenceNote:
      "El plan empresarial incluye tiempos de respuesta prioritarios, respaldos más frecuentes y mayor bolsa de horas para evolución continua.",
  },
];

export const PRICING_SCHEMES: PricingScheme[] = [
  {
    id: "fixed",
    title: "Precio Fijo por Proyecto",
    idealFor: "Landing pages, sitios corporativos y sistemas de alcance cerrado.",
    advantage: "Certeza total de presupuesto desde el día uno, sin sorpresas.",
    structure: "50% de anticipo al iniciar y 50% contra entrega en servidor de pruebas.",
  },
  {
    id: "hybrid",
    title: "Modelo Híbrido (Setup + Mensualidad)",
    idealFor: "Sistemas POS, inventarios y plataformas de citas para comercios.",
    advantage: "Reduce la barrera de inversión inicial y garantiza soporte continuo.",
    structure: "Pago único de instalación/configuración + cuota mensual accesible.",
  },
  {
    id: "milestones",
    title: "Esquema por 3 Hitos (Gran Escala)",
    idealFor: "Software a medida, clínicas, distribuidoras o plataformas B2B.",
    advantage: "Avance transparente validando entregas funcionales por etapa.",
    structure: "40% al inicio · 30% en versión alfa · 30% al desplegar a producción.",
  },
];

export const COMMERCIAL_POLICIES: CommercialPolicy[] = [
  {
    id: "payments",
    title: "Hitos de Pago Claros",
    summary:
      "Proyectos cerrados: 50% anticipo al aprobar inicio y 50% contra demostración funcional previo al despliegue final. Proyectos de gran escala: 40% inicio, 30% versión alfa y 30% producción.",
    iconName: "CreditCard",
  },
  {
    id: "revisions",
    title: "Ciclo de Revisiones",
    summary:
      "Cada propuesta incluye hasta 2 rondas formales de ajustes dentro del alcance acordado. Módulos nuevos o cambios de arquitectura se cotizan como Addendum independiente.",
    iconName: "RefreshCw",
  },
  {
    id: "infrastructure",
    title: "Costos de Infraestructura",
    summary:
      "El cliente cubre directamente servicios de terceros a su nombre (dominio, hosting/VPS, SSL de pago o APIs externas). ARLUC brinda asesoría técnica y configuración inicial.",
    iconName: "Server",
  },
  {
    id: "warranty",
    title: "Garantía Pos-Lanzamiento (30 Días)",
    summary:
      "Otorgamos 30 días de garantía técnica tras la entrega final para corregir sin costo cualquier defecto atribuible al código desarrollado.",
    iconName: "ShieldCheck",
  },
  {
    id: "validity-ip",
    title: "Vigencia & Propiedad Intelectual",
    summary:
      "Las cotizaciones tienen una vigencia de 15 días continuos. La cesión de derechos, código fuente y credenciales maestras se entrega al liquidar el 100% del proyecto.",
    iconName: "FileCheck",
  },
];

export const PAYMENT_METHODS = [
  "Pago Móvil / Transferencia Bs (Tasa oficial BCV)",
  "Binance Pay (USDT)",
  "Zelle",
  "Transferencias Bancarias Internacionales",
];
