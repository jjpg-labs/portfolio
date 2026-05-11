export type Locale = 'es' | 'en';

export const dictionaries = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      services: 'Servicios',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    footer: {
      tagline: 'Desarrollado con Next.js y amor',
    },
    hero: {
      availability: 'Disponible para nuevos proyectos',
      greeting: 'Hola, soy',
      role: 'Full-Stack Engineer',
      tagline: 'Construyo SaaS y dashboards modernos con Next.js, NestJS y PostgreSQL.',
      description:
        'Diseño y entrego aplicaciones completas para equipos que necesitan avanzar rápido sin renunciar a la calidad. 4+ años de experiencia construyendo APIs REST, dashboards multi-tenant, integraciones complejas y arquitecturas escalables. Madrid, trabajo en remoto. Disponible para MVPs, mantenimiento continuo y consultoría puntual.',
      btnProjects: 'Ver mis Proyectos',
      btnContact: 'Hablemos',
      calendlyHint: 'o reserva 30 min de discovery call directamente',
    },
    dashboardProjects: {
      title: 'Mis Proyectos Más Recientes',
      subtitle: 'Échale un vistazo a las soluciones que he diseñado y construido.',
      seeAll: 'Ver Todos los Proyectos',
      items: [
        {
          name: 'Vereda',
          description:
            'SaaS no-code para organizadores de eventos deportivos: web pública, panel admin, dominio propio. Multi-tenant.',
          stack: 'Next.js 16, Neon PostgreSQL, Vercel Blob, JWT, TypeScript.',
        },
        {
          name: 'Medina Roja BTT',
          description:
            'Landing oficial del II Desafío BTT (4 jul 2026, 450 plazas, 2 modalidades): info del evento y recorridos GPX en mapa interactivo.',
          stack: 'Next.js 16, Leaflet, GPX, Tailwind 4, TypeScript.',
        },
        {
          name: 'Accounting Suite',
          description:
            'App de contabilidad para pequeños negocios: REST API en NestJS + dashboard Next.js con transacciones, presupuestos e informes diarios.',
          stack: 'NestJS, Next.js 15, PostgreSQL, Prisma, Redux Toolkit, Chart.js.',
        },
      ],
    },
    dashboardSkills: {
      title: 'Tecnologías Clave y Stack Principal',
      groups: [
        { title: 'Back-End', skills: ['NestJS', 'Node.js', 'PHP', 'Python'] },
        {
          title: 'Front-End',
          skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'Framer Motion'],
        },
        {
          title: 'Bases de Datos & Infra',
          skills: ['PostgreSQL', 'Prisma', 'MongoDB', 'Docker', 'JWT / Auth'],
        },
        {
          title: 'IA / LLMs',
          skills: ['Claude Code', 'Claude API', 'MCP', 'Prompt engineering'],
        },
      ],
    },
    dashboardServices: {
      title: 'Cómo trabajamos juntos',
      subtitle: 'Disponible para nuevos proyectos. Estos son los formatos en los que colaboro habitualmente.',
      seeAll: 'Ver todos los servicios',
      packages: [
        {
          id: 'mvp',
          title: 'Desarrollo de MVP',
          summary: 'Aplicaciones full-stack de cero, listas para producción.',
        },
        {
          id: 'retainer',
          title: 'Mantenimiento continuo',
          summary: 'Soporte y evolución mensual de tu producto.',
        },
        {
          id: 'ai',
          title: 'Integración de IA',
          summary: 'Chatbots, agentes y automatizaciones con Claude API y MCP.',
          badge: 'Especialidad',
        },
        {
          id: 'consulting',
          title: 'Consultoría técnica',
          summary: 'Code reviews, arquitectura y decisiones de stack.',
        },
      ],
    },
    projectsPage: {
      title: 'Portafolio de Proyectos',
      subtitle:
        'Proyectos reales: SaaS multi-tenant, plataformas full-stack con Next.js y APIs REST con NestJS.',
      liveBtn: 'En Vivo',
      codeBtn: 'Código',
      privateRepo: 'Repositorio privado',
      inDevelopment: 'En desarrollo',
      items: [
        {
          shortDescription:
            'Plataforma SaaS no-code para organizadores de pruebas deportivas: web pública del evento, panel de administración, dominio propio y gestión multi-tenant. Arquitectura serverless con Neon + Vercel Blob.',
        },
        {
          shortDescription:
            'Landing oficial del II Desafío Medina Roja BTT (450 plazas, 2 modalidades, 4 jul 2026). Información del evento, recorridos GPX renderizados en mapa Leaflet interactivo, desplegado en Vercel.',
        },
        {
          shortDescription:
            'App de contabilidad para pequeños negocios con demo en vivo en accounting.jjpg.dev. REST API en NestJS + dashboard Next.js con transacciones, informes diarios, presupuestos y recurrentes.',
        },
        {
          shortDescription:
            'Plataforma educativa gamificada para niños de 3–14 años: lecciones interactivas, desafíos, logros y progresión estilo videojuego.',
        },
      ],
    },
    skillsPage: {
      title: 'Mi Stack Tecnológico',
      categories: {
        'Back-End': 'Back-End',
        'Front-End': 'Front-End',
        'Bases de Datos': 'Bases de Datos',
        Infraestructura: 'Infraestructura',
        'IA / LLMs': 'IA / LLMs',
      } as Record<string, string>,
      levels: {
        expert: 'Experto',
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico',
      },
    },
    servicesPage: {
      title: 'Servicios',
      subtitle: 'Cómo trabajamos juntos. Cada propuesta se ajusta al alcance y al contexto del proyecto.',
      ctaText: 'Solicitar presupuesto',
      ctaFootnote: '¿Algo que no encaja en ninguno de estos paquetes? Hablemos igualmente.',
      includesLabel: 'Qué incluye',
      packages: [
        {
          id: 'mvp',
          title: 'Desarrollo de MVP',
          summary: 'Aplicaciones full-stack de cero, listas para producción.',
          description:
            'Diseño y construyo aplicaciones completas desde cero, listas para producción en pocas semanas. Ideal para founders y startups que quieren validar una idea o lanzar producto sin contratar un equipo.',
          bullets: [
            'Discovery + arquitectura técnica',
            'Frontend + backend completos (Next.js + NestJS/Node)',
            'Modelo de datos y base de datos (PostgreSQL / Prisma)',
            'Autenticación y pagos cuando aplique',
            'Despliegue en Vercel, Railway o equivalente',
            'Documentación y traspaso',
          ],
          formatLabel: 'Duración típica',
          formatValue: '2-8 semanas',
        },
        {
          id: 'retainer',
          title: 'Mantenimiento continuo',
          summary: 'Soporte y evolución mensual de tu producto.',
          description:
            'Mantenimiento y evolución continua de aplicaciones existentes. Para equipos sin desarrollo interno o productos que crecen y necesitan atención dedicada cada mes.',
          bullets: [
            'Soporte priorizado y bugfixing',
            'Features pequeñas mensuales (horas garantizadas)',
            'Updates de dependencias y seguridad',
            'Monitorización y respuesta a incidentes',
            'Code reviews del equipo interno',
            'Reporte mensual de actividad y horas',
          ],
          formatLabel: 'Compromiso',
          formatValue: 'Mensual recurrente',
        },
        {
          id: 'ai',
          title: 'Integración de IA',
          summary: 'Chatbots, agentes y automatizaciones con Claude API y MCP.',
          badge: 'Especialidad',
          description:
            'Integro capacidades de IA modernas en tu producto: chatbots, agentes con herramientas, automatizaciones, RAG, generación de contenido. Trabajo con Claude API/SDK y el protocolo MCP para integraciones a medida.',
          bullets: [
            'Consultoría inicial sobre el caso de uso',
            'Diseño del flujo: prompts, herramientas, agentes',
            'Integración con Claude API u otros LLMs',
            'MCP servers a medida cuando aplique',
            'Evaluación y métricas de calidad de salida',
            'Optimización de coste por token',
          ],
          formatLabel: 'Formato',
          formatValue: 'Proyecto o consultoría',
        },
        {
          id: 'consulting',
          title: 'Consultoría técnica',
          summary: 'Code reviews, arquitectura y decisiones de stack.',
          description:
            'Sesiones de consultoría puntual: code reviews, decisiones de arquitectura, elección de stack, estrategia de refactor. Una segunda opinión senior sin compromiso continuo.',
          bullets: [
            'Reuniones de descubrimiento',
            'Code review técnico documentado',
            'Documento de recomendaciones priorizadas',
            'Roadmap técnico cuando aplique',
            'Acompañamiento durante la implementación (opcional)',
          ],
          formatLabel: 'Formato',
          formatValue: 'Sesiones puntuales',
        },
      ],
    },
    contactPage: {
      title: 'Ponte en Contacto',
      formTitle: 'Envíame un mensaje',
      calendlyTitle: '¿Quieres ir más rápido? Reserva una llamada',
      calendlyDescription:
        'Una discovery call de 30 minutos, gratis y sin compromiso. Hablamos de tu proyecto y vemos si encajamos.',
      calendlyCta: 'Reservar llamada',
    },
    contactInfo: {
      title: 'Información de Contacto',
      subtitle: '¿Tienes un proyecto en mente o una propuesta interesante? ¡Hablemos!',
      location: 'Madrid, España (Disponible Remoto)',
    },
    contactForm: {
      name: 'Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar Mensaje',
      submitting: 'Enviando...',
      success: '¡Mensaje enviado con éxito! Te responderé pronto.',
      error: 'Hubo un error. Por favor, intenta enviando un correo directo.',
      validation: {
        name: 'El nombre es requerido.',
        email: 'El email no es válido.',
        subject: 'El asunto es requerido.',
        message: 'El mensaje debe tener al menos 10 caracteres.',
      },
    },
  },

  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      skills: 'Skills',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Built with Next.js and love',
    },
    hero: {
      availability: 'Available for new projects',
      greeting: "Hi, I'm",
      role: 'Full-Stack Engineer',
      tagline: 'I build modern SaaS apps and dashboards with Next.js, NestJS and PostgreSQL.',
      description:
        'I design and ship end-to-end applications for teams that need to move fast without compromising on quality. 4+ years building REST APIs, multi-tenant dashboards, complex integrations and scalable architectures. Based in Madrid, working remotely. Available for MVPs, ongoing maintenance and on-demand consulting.',
      btnProjects: 'See my Projects',
      btnContact: "Let's talk",
      calendlyHint: 'or book a 30-min discovery call directly',
    },
    dashboardProjects: {
      title: 'My Latest Projects',
      subtitle: 'Take a look at the solutions I have designed and built.',
      seeAll: 'See All Projects',
      items: [
        {
          name: 'Vereda',
          description:
            'No-code SaaS for sports event organizers: public event website, admin panel and custom domain. Multi-tenant.',
          stack: 'Next.js 16, Neon PostgreSQL, Vercel Blob, JWT, TypeScript.',
        },
        {
          name: 'Medina Roja BTT',
          description:
            'Official landing for a mountain bike challenge (Jul 4, 2026, 450 spots, 2 routes): event info and GPX trails on interactive map.',
          stack: 'Next.js 16, Leaflet, GPX, Tailwind 4, TypeScript.',
        },
        {
          name: 'Accounting Suite',
          description:
            'Accounting app for small businesses: NestJS REST API + Next.js dashboard with transactions, budgets, recurring entries and daily reports.',
          stack: 'NestJS, Next.js 15, PostgreSQL, Prisma, Redux Toolkit, Chart.js.',
        },
      ],
    },
    dashboardSkills: {
      title: 'Key Technologies and Main Stack',
      groups: [
        { title: 'Back-End', skills: ['NestJS', 'Node.js', 'PHP', 'Python'] },
        {
          title: 'Front-End',
          skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'Framer Motion'],
        },
        {
          title: 'Databases & Infra',
          skills: ['PostgreSQL', 'Prisma', 'MongoDB', 'Docker', 'JWT / Auth'],
        },
        {
          title: 'AI / LLMs',
          skills: ['Claude Code', 'Claude API', 'MCP', 'Prompt engineering'],
        },
      ],
    },
    dashboardServices: {
      title: 'How we can work together',
      subtitle: 'Available for new projects. These are the formats I typically work in.',
      seeAll: 'See all services',
      packages: [
        {
          id: 'mvp',
          title: 'MVP Development',
          summary: 'Full-stack apps from scratch, production-ready.',
        },
        {
          id: 'retainer',
          title: 'Ongoing Maintenance',
          summary: 'Monthly support and product evolution.',
        },
        {
          id: 'ai',
          title: 'AI Integration',
          summary: 'Chatbots, agents and automations with Claude API and MCP.',
          badge: 'Specialty',
        },
        {
          id: 'consulting',
          title: 'Technical Consulting',
          summary: 'Code reviews, architecture and stack decisions.',
        },
      ],
    },
    projectsPage: {
      title: 'Project Portfolio',
      subtitle:
        'Real projects: multi-tenant SaaS, full-stack platforms with Next.js, and REST APIs with NestJS.',
      liveBtn: 'Live Demo',
      codeBtn: 'Code',
      privateRepo: 'Private repository',
      inDevelopment: 'In development',
      items: [
        {
          shortDescription:
            'No-code SaaS platform for sports event organizers: public event website, admin panel, custom domain and multi-tenant management. Serverless architecture with Neon + Vercel Blob.',
        },
        {
          shortDescription:
            'Official landing site for the II Medina Roja BTT mountain bike challenge (450 spots, 2 routes, Jul 4, 2026). Event info, interactive GPX track viewer with Leaflet, deployed on Vercel.',
        },
        {
          shortDescription:
            'Accounting app for small businesses with live demo at accounting.jjpg.dev. NestJS REST API + Next.js dashboard with daily transactions, reports, budgets and recurring entries.',
        },
        {
          shortDescription:
            'Gamified educational platform for children aged 3–14: interactive lessons, challenges, achievements and video-game-style progression.',
        },
      ],
    },
    skillsPage: {
      title: 'My Tech Stack',
      categories: {
        'Back-End': 'Back-End',
        'Front-End': 'Front-End',
        'Bases de Datos': 'Databases',
        Infraestructura: 'Infrastructure',
        'IA / LLMs': 'AI / LLMs',
      } as Record<string, string>,
      levels: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic',
      },
    },
    servicesPage: {
      title: 'Services',
      subtitle: 'How we can work together. Every proposal is tailored to the scope and context of the project.',
      ctaText: 'Request a quote',
      ctaFootnote: 'Need something that does not fit any of these packages? Let me know anyway.',
      includesLabel: "What's included",
      packages: [
        {
          id: 'mvp',
          title: 'MVP Development',
          summary: 'Full-stack apps from scratch, production-ready.',
          description:
            'I design and build complete applications from scratch, production-ready in a few weeks. Ideal for founders and startups who want to validate an idea or launch a product without hiring a full team.',
          bullets: [
            'Discovery + technical architecture',
            'Frontend + backend (Next.js + NestJS/Node)',
            'Data model and database (PostgreSQL / Prisma)',
            'Authentication and payments when applicable',
            'Deployment on Vercel, Railway or equivalent',
            'Documentation and handover',
          ],
          formatLabel: 'Typical duration',
          formatValue: '2-8 weeks',
        },
        {
          id: 'retainer',
          title: 'Ongoing Maintenance',
          summary: 'Monthly support and product evolution.',
          description:
            'Ongoing maintenance and evolution of existing applications. For teams without internal dev capacity or growing products that need dedicated attention each month.',
          bullets: [
            'Priority support and bugfixing',
            'Monthly small features (guaranteed hours)',
            'Dependency and security updates',
            'Monitoring and incident response',
            'Code reviews for the internal team',
            'Monthly activity and hours report',
          ],
          formatLabel: 'Commitment',
          formatValue: 'Recurring monthly',
        },
        {
          id: 'ai',
          title: 'AI Integration',
          summary: 'Chatbots, agents and automations with Claude API and MCP.',
          badge: 'Specialty',
          description:
            'I integrate modern AI capabilities into your product: chatbots, tool-using agents, automations, RAG, content generation. I work with Claude API/SDK and the MCP protocol for custom integrations.',
          bullets: [
            'Initial consulting on the use case',
            'Flow design: prompts, tools, agents',
            'Integration with Claude API or other LLMs',
            'Custom MCP servers when applicable',
            'Evaluation and output quality metrics',
            'Per-token cost optimization',
          ],
          formatLabel: 'Format',
          formatValue: 'Project or consulting',
        },
        {
          id: 'consulting',
          title: 'Technical Consulting',
          summary: 'Code reviews, architecture and stack decisions.',
          description:
            'One-off consulting sessions: code reviews, architecture decisions, stack choice, refactor strategy. A senior second opinion without ongoing commitment.',
          bullets: [
            'Discovery meetings',
            'Documented technical code review',
            'Prioritized recommendations document',
            'Technical roadmap when applicable',
            'Implementation accompaniment (optional)',
          ],
          formatLabel: 'Format',
          formatValue: 'One-off sessions',
        },
      ],
    },
    contactPage: {
      title: 'Get in Touch',
      formTitle: 'Send me a message',
      calendlyTitle: 'Want to move faster? Book a call',
      calendlyDescription:
        'A 30-minute discovery call, free and with no commitment. We talk about your project and see if we are a good fit.',
      calendlyCta: 'Book a call',
    },
    contactInfo: {
      title: 'Contact Information',
      subtitle: "Have a project in mind or an interesting proposal? Let's talk!",
      location: 'Madrid, Spain (Available Remotely)',
    },
    contactForm: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Message sent successfully! I will get back to you soon.',
      error: 'There was an error. Please try sending a direct email.',
      validation: {
        name: 'Name is required.',
        email: 'Email is not valid.',
        subject: 'Subject is required.',
        message: 'Message must be at least 10 characters.',
      },
    },
  },
};

export type Dictionary = (typeof dictionaries)['es'];
