export type Lang = "es" | "en";

export const translations: Record<Lang, Record<string, unknown>> = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      aboutMe: "Sobre Mí",
      viewProjects: "Ver Proyectos",
    },
    hero: {
      badge: "APIORA · AI & Automation",
      title1: "Sistemas inteligentes",
      title2: "para negocios digitales",
      subtitle: "IA, automatización, páginas web y apps para empresas modernas.",
      cta1: "Descubre Servicios",
      cta2: "Ver Proyectos",
    },
    services: {
      badge: "Lo que hago",
      title: "Servicios",
      titleHighlight: "Principales",
      subtitle: "Soluciones tecnológicas de extremo a extremo para negocios que quieren crecer en el mundo digital.",
      moreCta: "Ver más",
      items: {
        "web-apps": {
          title: "Desarrollo Web y Apps",
          description: "Páginas web modernas, aplicaciones y plataformas digitales diseñadas para crecer contigo.",
        },
        automatizacion: {
          title: "Automatización de Procesos",
          description: "Automatizamos tareas repetitivas y conectamos herramientas para que tu negocio funcione de forma más eficiente.",
        },
        "chatbots-ia": {
          title: "Chatbots y Sistemas con IA",
          description: "Asistentes inteligentes capaces de atender clientes, responder preguntas y automatizar procesos.",
        },
        integraciones: {
          title: "Integraciones y Sistemas Digitales",
          description: "Conectamos plataformas y herramientas para crear ecosistemas digitales completos.",
        },
      },
    },
    projects: {
      badge: "Portfolio",
      title: "Proyectos",
      titleHighlight: "Desarrollados",
      subtitle: "Sistemas funcionales que ayudan a optimizar procesos y hacer crecer negocios reales.",
      items: {
        0: {
          title: "CleanNova Home Services",
          description: "Diseño optimizado para conversión orientado a captar clientes de limpieza profesional.",
          tag: "Web Corporativa",
        },
        1: {
          title: "Gabrielle Canal",
          description: "Diseño elegante y minimalista para una artista y facilitadora de yoga, voz y respiración.",
          tag: "Web Personal",
        },
        2: {
          title: "Impostor Game",
          description: "Plataforma interactiva para configurar jugadores y gestionar el juego del impostor.",
          tag: "Aplicación Web",
        },
        3: {
          title: "Infinity Project",
          description: "Ecosistema digital centrado en soluciones tecnológicas avanzadas y plataformas escalables.",
          tag: "Plataforma Digital",
        },
      },
    },
    about: {
      badge: "Fundador y Desarrollador Digital",
      name: "Ami Cranz",
      paragraph1:
        "Soy un desarrollador digital especializado en crear soluciones tecnológicas modernas para negocios y proyectos digitales. Trabajo combinando diseño web, automatización, inteligencia artificial y desarrollo de sistemas digitales.",
      paragraph2:
        "Mi enfoque no es solo crear páginas web bonitas, sino desarrollar productos digitales que realmente funcionen y ayuden a las empresas a crecer.",
      stats: { projects: "Proyectos", satisfaction: "Satisfacción", support: "Soporte IA" },
    },
    cta: {
      badge: "Hablemos",
      title: "¿Tienes un proyecto en mente?",
      subtitle:
        "Cuéntame tu idea y te ayudo a convertirla en un producto digital real. Sin compromiso. O escríbeme por el chatbot y agenda una llamada.",
      email: "Enviar Email",
      more: "Saber más",
    },
    footer: {
      copyright: "Todos los derechos reservados.",
    },
    servicePage: {
      badge: "APIORA · Servicios",
      requestInfo: "Solicitar información",
      bookCall: "Reserva una cita",
      whatIncludes: "¿Qué incluye este servicio?",
      detailTitle: "Detalle del servicio",
      notFound: "Servicio no encontrado.",
    },
    serviceContent: {
      "web-apps": {
        title: "Desarrollo Web y Apps",
        shortDescription: "Páginas web modernas, aplicaciones y plataformas digitales diseñadas para crecer contigo.",
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
        title: "Integraciones y Sistemas Digitales",
        shortDescription: "Conectamos plataformas y herramientas para crear ecosistemas digitales completos.",
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
    },
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      aboutMe: "About Me",
      viewProjects: "View Projects",
    },
    hero: {
      badge: "APIORA · AI & Automation",
      title1: "Smart systems",
      title2: "for digital businesses",
      subtitle: "AI, automation, websites and apps for modern businesses.",
      cta1: "Discover Services",
      cta2: "View Projects",
    },
    services: {
      badge: "What I do",
      title: "Main",
      titleHighlight: "Services",
      subtitle: "End-to-end tech solutions for businesses that want to grow in the digital world.",
      moreCta: "Learn more",
      items: {
        "web-apps": {
          title: "Web & App Development",
          description: "Modern websites, apps and digital platforms designed to grow with you.",
        },
        automatizacion: {
          title: "Process Automation",
          description: "We automate repetitive tasks and connect tools so your business runs more efficiently.",
        },
        "chatbots-ia": {
          title: "Chatbots & AI Systems",
          description: "Smart assistants that can serve customers, answer questions and automate processes.",
        },
        integraciones: {
          title: "Integrations & Digital Systems",
          description: "We connect platforms and tools to build complete digital ecosystems.",
        },
      },
    },
    projects: {
      badge: "Portfolio",
      title: "Developed",
      titleHighlight: "Projects",
      subtitle: "Real systems that help optimize processes and grow real businesses.",
      items: {
        0: {
          title: "CleanNova Home Services",
          description: "Conversion-optimized design for professional cleaning clients.",
          tag: "Corporate Website",
        },
        1: {
          title: "Gabrielle Canal",
          description: "Elegant, minimalist design for an artist and yoga, voice and breath facilitator.",
          tag: "Personal Website",
        },
        2: {
          title: "Impostor Game",
          description: "Interactive platform to set up players and run the impostor game.",
          tag: "Web App",
        },
        3: {
          title: "Infinity Project",
          description: "Digital ecosystem focused on advanced tech solutions and scalable platforms.",
          tag: "Digital Platform",
        },
      },
    },
    about: {
      badge: "Founder & Digital Developer",
      name: "Ami Cranz",
      paragraph1:
        "I'm a digital developer focused on building modern tech solutions for businesses and digital projects. I work with web design, automation, artificial intelligence and digital systems development.",
      paragraph2:
        "My goal isn't just pretty websites—it's building digital products that actually work and help businesses grow.",
      stats: { projects: "Projects", satisfaction: "Satisfaction", support: "AI Support" },
    },
    cta: {
      badge: "Let's talk",
      title: "Have a project in mind?",
      subtitle:
        "Tell me your idea and I'll help you turn it into a real digital product. No commitment. Or use the chatbot to schedule a call.",
      email: "Send Email",
      more: "Learn more",
    },
    footer: {
      copyright: "All rights reserved.",
    },
    servicePage: {
      badge: "APIORA · Services",
      requestInfo: "Request information",
      bookCall: "Book a call",
      whatIncludes: "What does this service include?",
      detailTitle: "Service details",
      notFound: "Service not found.",
    },
    serviceContent: {
      "web-apps": {
        title: "Web & App Development",
        shortDescription: "Modern websites, apps and digital platforms designed to grow with you.",
        description:
          "We build modern websites and digital apps focused on performance, scalability and conversion. Every project is designed with user experience and business growth in mind.",
        servicesIncluded: [
          "High-conversion landing pages",
          "Modern corporate websites",
          "Web apps and digital platforms",
          "Internal business applications",
          "Speed and technical SEO optimization",
          "Responsive design for mobile and desktop",
        ],
      },
      automatizacion: {
        title: "Process Automation",
        shortDescription:
          "We automate repetitive tasks and connect tools so your business runs more efficiently.",
        description:
          "We design automated systems that connect tools and streamline internal processes to reduce manual work and improve business efficiency.",
        servicesIncluded: [
          "Internal process automation",
          "Customer management automation",
          "Booking and appointment automation",
          "Workflow automation",
          "Connecting tools and platforms",
          "Repetitive task automation",
        ],
      },
      "chatbots-ia": {
        title: "Chatbots & AI Systems",
        shortDescription:
          "Smart assistants that can serve customers, answer questions and automate processes.",
        description:
          "We create smart assistants trained on your company's data to answer questions, support customers and automate processes 24/7.",
        servicesIncluded: [
          "Chatbots for websites",
          "Virtual assistants for customer support",
          "Chatbots trained on your company data",
          "Response and support automation",
          "AI systems for business",
        ],
      },
      integraciones: {
        title: "Integrations & Digital Systems",
        shortDescription: "We connect platforms and tools to build complete digital ecosystems.",
        description:
          "We integrate tools, platforms and systems so your business's entire digital infrastructure works in sync.",
        servicesIncluded: [
          "API integrations between platforms",
          "CRM and database connections",
          "Enterprise tool integration",
          "Custom digital systems",
          "Application automation",
        ],
      },
    },
  },
};

function get(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function t(lang: Lang, path: string): string {
  const value = get(translations[lang], path);
  if (typeof value === "string") return value;
  return (translations.es && get(translations.es, path) as string) ?? path;
}

export function getTranslation<T = unknown>(lang: Lang, path: string): T | undefined {
  const value = get(translations[lang], path);
  return value as T | undefined;
}
