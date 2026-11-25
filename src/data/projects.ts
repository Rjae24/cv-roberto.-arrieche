import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "arluc-pos",
    shortLabel: "ARLUC ERP / POS",
    title: "ARLUC ERP — Facturación, Inventario Multimoneda & Cuentas por Cobrar",
    sector: "Comercios, Abastos, Bodegones & Retail",
    solutionType: "Sistema ERP / Punto de Venta Web",
    description:
      "Sistema comercial completo con inventario por unidad/peso/combo, tasa BCV automática, control de fiados (CxC) y cierre de caja multimoneda.",
    longDescription:
      "Plataforma comercial creada para que el dueño de negocio tenga control absoluto de su mercancía, sus cobros en dólares y bolívares, las cuentas pendientes por cobrar y el arqueo exacto de caja al final del día.",
    challengeSolved:
      "Comercios que pierden dinero por cambios en la tasa del dólar, descontrol en los 'fiados' o créditos a clientes, productos vendidos por peso o combo que no cuadran en inventario y cierres de caja lentos a mano.",
    solutionApplied:
      "Sistema todo-en-uno con sincronización directa a la tasa oficial del BCV, inventario inteligente (por unidad, por peso en Kg/gramos, detallado o combos), módulo de Cuentas por Cobrar con días en calle y cobro directo por WhatsApp, y arqueo diario separando Efectivo USD, Efectivo Bs, Punto de Venta, Pago Móvil y Zelle.",
    results: [
      "Cierre de caja diario claro y sin descuadres entre dólares en efectivo, bolívares, Pago Móvil y Zelle.",
      "Control total de fiados (Cuentas por Cobrar) con antigüedad de deuda y botón de recordatorio por WhatsApp.",
      "Precios siempre actualizados en bolívares gracias a la conexión en línea con la tasa oficial BCV.",
      "Configuración fiscal lista para imprimir tickets térmicos con RIF y datos del negocio.",
    ],
    technologies: ["Facturación USD/Bs", "Tasa BCV Automática", "Control de Fiados (CxC)", "Inventario por Peso/Unidad", "Tickets Térmicos"],
    imageUrl: "/images/arluc-erp-cierre-1.png",
    gallery: [
      { url: "/images/arluc-erp-cierre-1.png", label: "Cierre de Caja y Arqueo Diario" },
      { url: "/images/arluc-erp-cxc.png", label: "Cuentas por Cobrar / Control de Fiados" },
      { url: "/images/arluc-erp-bcv.png", label: "Tasa de Cambio conectada al BCV" },
      { url: "/images/arluc-erp-inventario.png", label: "Inventario Multimoneda (USD / Bs)" },
      { url: "/images/arluc-erp-nuevo-prod.png", label: "Productos por Unidad, Peso o Combo" },
      { url: "/images/arluc-erp-config-1.png", label: "Datos Fiscales y Vista Previa de Ticket" },
    ],
    productionUrl: "https://arluc.netlify.app",
    role: "Producto Propio ARLUC",
  },
  {
    id: "cartel-251-barberia",
    shortLabel: "Cartel 251 · Barbería",
    title: "Cartel 251 — Sistema de Citas, Comisiones de Barberos & Fidelización QR",
    sector: "Barberías, Peluquerías & Salones",
    solutionType: "Web de Reservas + Panel de Gestión y Lealtad",
    description:
      "Plataforma integral con reserva de citas online, cálculo automático de comisión por barbero y tarjeta digital QR (6 cortes + 7mo al 80% OFF).",
    longDescription:
      "Sistema diseñado para modernizar barberías: combina una página web con personalidad propia para captar reservas 24/7 y un panel interno donde el dueño controla las ganancias del local y cada barbero registra sus cortes.",
    challengeSolved:
      "Dueños de barberías sin claridad de cuánto produce cada barbero ni cuánto toca pagarle de comisión, agendas desordenadas por WhatsApp y clientes que no regresan por falta de un programa de fidelidad moderno.",
    solutionApplied:
      "Web de agendamiento directo por barbero y horario, panel de Administrador con porcentaje de comisión editable por barbero (ej. 50% inicial y luego 60%), panel individual donde cada barbero ve únicamente su ganancia y su cartera personal de clientes, y tarjeta digital con código QR que premia el 7mo corte con 80% de descuento.",
    results: [
      "Cálculo automático e instantáneo de cuánto dinero queda para el local y cuánto corresponde a cada barbero.",
      "Privacidad total: cada barbero ve solo sus propias ganancias, su historial y sus clientes.",
      "Verificación de pagos por Pago Móvil con número de referencia y foto de comprobante.",
      "Mayor retención de clientes gracias a la tarjeta digital de 6 sellos con QR.",
    ],
    technologies: ["Agenda Online 24/7", "Comisiones por Barbero", "Tarjeta Fidelidad QR", "Control de Pago Móvil", "Historial por Cliente"],
    imageUrl: "/images/cartel251-landing-1.png",
    gallery: [
      { url: "/images/cartel251-landing-1.png", label: "Landing Page & Propuesta Urbana" },
      { url: "/images/cartel251-landing-2.png", label: "Catálogo de Servicios y Tarifas" },
      { url: "/images/cartel251-landing-4.png", label: "Equipo de Barberos y Reserva de Turno" },
      { url: "/images/cartel251-admin-barberos.png", label: "Admin: Gestión de Barberos y % Comisión" },
      { url: "/images/cartel251-admin-servicios.png", label: "Admin: Catálogo Editable de Servicios" },
    ],
    role: "Sistema Integral a Medida",
  },
  {
    id: "andreas-cleaning",
    shortLabel: "Andrea's Cleaning (EE. UU.)",
    title: "Andrea's Cleaning LLC — Plataforma Comercial & Solicitud de Estimados",
    sector: "Servicios Residenciales & Corporativos (Alabama, EE. UU.)",
    solutionType: "Sitio Web de Captación & Reservas",
    description:
      "Plataforma comercial en inglés para el mercado de Alabama (EE. UU.) con galería de resultados, planes recurrentes y agendamiento de estimados.",
    longDescription:
      "Sitio web comercial desarrollado para una empresa de limpieza en Alabama (Madison, Huntsville, Hampton Cove), enfocado en generar confianza inmediata en propietarios estadounidenses y convertir visitas en solicitudes de presupuesto.",
    challengeSolved:
      "Captar clientes en el mercado de Estados Unidos exige una presencia digital impecable que explique con claridad qué incluye cada visita, qué zonas cubre la empresa y cómo solicitar una cotización sin depender de llamadas.",
    solutionApplied:
      "Web comercial en inglés con galería visual de trabajos reales, desglose interactivo de tareas por habitación (Regular, Deep Cleaning, Move Out/In), planes por frecuencia con descuentos y formulario directo para agendar estimados gratuitos.",
    results: [
      "Recepción de solicitudes de presupuesto 24/7 con tipo de servicio, frecuencia, zona y fecha preferida.",
      "Transparencia total del servicio mediante listas interactivas por área del hogar.",
      "Posicionamiento local claro para las ciudades atendidas en Alabama.",
      "Imagen corporativa sólida adaptada al estándar de clientes en EE. UU.",
    ],
    technologies: ["Mercado EE. UU. (Inglés)", "Captación de Clientes 24/7", "Checklist Interactivo", "Planes Recurrentes", "Formulario de Cotización"],
    imageUrl: "/images/andreas-web-1.png",
    gallery: [
      { url: "/images/andreas-web-1.png", label: "Inicio & Propuesta de Valor (Inglés)" },
      { url: "/images/andreas-web-2.png", label: "Galería de Resultados Reales" },
      { url: "/images/andreas-web-3.png", label: "Checklist por Habitación y Frecuencias" },
      { url: "/images/andreas-web-4.png", label: "Cobertura en Alabama y Formulario de Cita" },
    ],
    productionUrl: "https://andreas-cleaning.netlify.app",
    role: "Diseño & Desarrollo Web Internacional",
  },
  {
    id: "salud-integral",
    shortLabel: "Salud Integral · Clínica",
    title: "Salud Integral (HAV) — Sistema Clínico, Recepción/Caja & Expedientes SOAP",
    sector: "Hospitales, Clínicas, Centros Médicos & Consultorios",
    solutionType: "Plataforma Clínica Multi-Rol (Admin · Recepción · Médico)",
    description:
      "Sistema hospitalario completo: recepción y caja en USD/Bs, check-in a sala de espera, historia clínica SOAP con alertas de alergias, interconsultas entre médicos y reportes gerenciales.",
    longDescription:
      "Plataforma integral desarrollada para el Hospital Adventista de Venezuela (HAV) que conecta desde la llegada del paciente en recepción y el pago de la consulta, hasta la atención médica en el consultorio y la auditoría financiera de la dirección.",
    challengeSolved:
      "Clínicas y centros médicos con historias en papel que tardan minutos en encontrarse, descontrol entre los cobros de recepción y los pacientes que pasan a consulta, falta de alertas visibles de alergias y dificultad para derivar pacientes entre especialistas.",
    solutionApplied:
      "Sistema dividido en 3 portales seguros: 1) Recepción y Caja (agenda, cobro en Efectivo/Pago Móvil/Zelle/Punto, check-in a Sala de Espera, cronograma de guardias con cupos por médico y arqueo PDF), 2) Consultorio Médico (cola en tiempo real, alertas rojas de alergias, formulario SOAP + signos vitales, recetas PDF y red de interconsultas), y 3) Dirección Médica (censo, bloqueo de horarios, facturación por especialista y gráficos de demanda).",
    results: [
      "Control total desde que el paciente paga en caja y pasa a Sala de Espera hasta que el médico cierra la consulta.",
      "Privacidad garantizada: Recepción gestiona citas y pagos sin poder ver diagnósticos ni antecedentes médicos confidenciales.",
      "Expediente digital instantáneo con alertas de alergias, línea de tiempo clínica e interconsultas entre especialistas.",
      "Reportes gerenciales listos para exportar a Excel y PDF (arqueo de caja, honorarios médicos y demanda por especialidad).",
    ],
    technologies: ["Consultorio SOAP & Recetas PDF", "Recepción, Caja & Check-in", "Red de Interconsultas", "Cronograma de Guardias", "Reportes & Honorarios Médicos"],
    imageUrl: "/images/hav-medico-soap.png",
    gallery: [
      { url: "/images/hav-medico-soap.png", label: "Consultorio Médico: Nota SOAP, Signos Vitales y Alerta de Alergias" },
      { url: "/images/hav-recepcion-caja.png", label: "Recepción y Caja: Cobros USD, Check-in y Sala de Espera" },
      { url: "/images/hav-guardias-horarios.png", label: "Cronograma Visual de Guardias y Cupos por Especialista" },
      { url: "/images/hav-expediente-paciente.png", label: "Expediente del Paciente, Seguro y Contacto de Emergencia" },
      { url: "/images/hav-linea-tiempo.png", label: "Línea de Tiempo Clínica, Diagnósticos e Interconsultas" },
      { url: "/images/hav-demanda-especialidades.png", label: "Dirección Médica: Demanda por Especialidad (SVG / Excel)" },
      { url: "/images/hav-admin-resumen.png", label: "Panel Ejecutivo Súper Admin: Personal y Actividad" },
    ],
    productionUrl: "https://hav-project.netlify.app",
    role: "Co-Desarrollo de Plataforma Hospitalaria",
  },
  {
    id: "tren-nueva-segovia",
    shortLabel: "El Tren · Menú & Comanda",
    title: "El Tren Fast Food — Menú Digital QR, Personalizador & Comanda a WhatsApp",
    sector: "Restaurantes, Food Trucks & Comida Rápida",
    solutionType: "Menú Interactivo QR + Constructor de Pedidos (Mesa / Delivery)",
    description:
      "Menú digital de carga instantánea con precios en USD y Bolívares (Tasa BCV), personalización de ingredientes y envío de comanda directa a WhatsApp.",
    longDescription:
      "Plataforma creada para sustituir los pesados menús en PDF y evitar que el encargado pierda hasta 10 minutos por cliente en WhatsApp preguntando qué ingredientes quitar, cuál es la mesa o qué método de pago usará.",
    challengeSolved:
      "En horas pico los restaurantes colapsan respondiendo preguntas repetitivas por WhatsApp y los clientes en mesa se frustran descargando PDFs pesados que consumen sus datos móviles y obligan a hacer zoom.",
    solutionApplied:
      "Menú web ultraligero con navegación rápida por categorías (Pepitos, Hamburguesas, Broaster, Tequeños, Ensaladas y Bebidas), buscador instantáneo, conversión automática a Bolívares según tasa BCV, personalizador de cada plato ('Sin cebolla', 'Salsas aparte') y comanda digital para Mesa, Pick-up o Delivery que envía el pedido estructurado al WhatsApp del local.",
    results: [
      "Reducción del tiempo de toma de pedido de 10 minutos de chat a un solo mensaje listo para cocina.",
      "Precios siempre claros tanto en dólares como en bolívares a tasa BCV del día.",
      "Funciona tanto para clientes escaneando el QR en su mesa como para pedidos de Pick-up y Delivery.",
      "Cero descargas de PDFs pesados: abre en menos de 2 segundos desde cualquier teléfono.",
    ],
    technologies: ["Menú QR sin PDF", "Comanda a WhatsApp", "Precios USD / Bs (BCV)", "Personalizador de Platos", "Mesa · Pick-up · Delivery"],
    imageUrl: "/images/tren-hero-categorias.png",
    gallery: [
      { url: "/images/tren-hero-categorias.png", label: "Inicio, Barra de Categorías, Buscador y Tasa BCV" },
      { url: "/images/tren-catalogo-platos.png", label: "Catálogo con Fotos Reales, Tiempos y Precios USD/Bs" },
      { url: "/images/tren-personalizar-plato.png", label: "Personalizador de Plato (Quitar Ingredientes y Notas)" },
      { url: "/images/tren-comanda-digital.png", label: "Comanda Digital: Mesa, Pick-up o Delivery directo a WhatsApp" },
    ],
    productionUrl: "https://menu-tren.vercel.app/#",
    role: "Diseño & Desarrollo Web Gastronómico",
  },
];
