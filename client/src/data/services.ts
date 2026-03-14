export type ServiceSlug = "web-apps" | "automatizacion" | "chatbots-ia" | "integraciones";

export interface ServicePageContent {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  description: string;
  servicesIncluded: string[];
}

export const SERVICES_PAGE_CONTENT: Record<ServiceSlug, ServicePageContent> = {
  "web-apps": {
    slug: "web-apps",
    title: "Desarrollo Web y Apps",
    shortDescription:
      "Páginas web modernas, aplicaciones y plataformas digitales diseñadas para crecer contigo.",
    description:
      "Desarrollamos páginas web y aplicaciones digitales modernas diseñadas para rendimiento, escalabilidad y conversión. Cada proyecto se crea pensando en la experiencia del usuario y en el crecimiento del negocio.",
    servicesIncluded: [
      "Landing pages de alta conversión",
      "Webs corporativas modernas",
      "Web apps y plataformas digitales",
      "Aplicaciones internas para empresas",
      "Optimización de velocidad y SEO técnico",
      "Diseño responsive para móvil y desktop",
    ],
  },
  automatizacion: {
    slug: "automatizacion",
    title: "Automatización de Procesos",
    shortDescription:
      "Automatizamos tareas repetitivas y conectamos herramientas para que tu negocio funcione de forma más eficiente.",
    description:
      "Diseñamos sistemas automáticos que conectan herramientas y optimizan procesos internos para reducir trabajo manual y mejorar la eficiencia del negocio.",
    servicesIncluded: [
      "Automatización de procesos internos",
      "Automatización de gestión de clientes",
      "Automatización de reservas y citas",
      "Automatización de flujos de trabajo",
      "Conexión entre herramientas y plataformas",
      "Automatización de tareas repetitivas",
    ],
  },
  "chatbots-ia": {
    slug: "chatbots-ia",
    title: "Chatbots y Sistemas con IA",
    shortDescription:
      "Asistentes inteligentes capaces de atender clientes, responder preguntas y automatizar procesos.",
    description:
      "Creamos asistentes inteligentes entrenados con la información de tu empresa para responder preguntas, asistir a clientes y automatizar procesos las 24 horas del día.",
    servicesIncluded: [
      "Chatbots para páginas web",
      "Asistentes virtuales para atención al cliente",
      "Chatbots entrenados con datos de tu empresa",
      "Automatización de respuestas y soporte",
      "Sistemas de IA para negocios",
    ],
  },
  integraciones: {
    slug: "integraciones",
    title: "Integraciones y Sistemas Digitales",
    shortDescription:
      "Conectamos plataformas y herramientas para crear ecosistemas digitales completos.",
    description:
      "Integramos herramientas, plataformas y sistemas para que toda la infraestructura digital del negocio funcione de forma sincronizada.",
    servicesIncluded: [
      "Integraciones API entre plataformas",
      "Conexión con CRM y bases de datos",
      "Integración con herramientas empresariales",
      "Sistemas digitales personalizados",
      "Automatización entre aplicaciones",
    ],
  },
};

export function getServiceBySlug(slug: string): ServicePageContent | null {
  if (slug in SERVICES_PAGE_CONTENT) {
    return SERVICES_PAGE_CONTENT[slug as ServiceSlug];
  }
  return null;
}
