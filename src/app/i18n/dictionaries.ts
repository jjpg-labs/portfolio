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
    ui: {
      metaHome: '// portada · home',
      metaProjects: '// página · proyectos',
      metaServices: '// página · servicios',
      metaSkills: '// página · stack',
      metaContact: '// página · contacto',
      homeSecServices: '// 03 — índice',
      homeSecProjects: '// 04 — proyectos',
      homeSecSkills: '// 05 — stack',
      discoveryCall: '// discovery call',
      form: '// formulario',
      menu: '// menú',
      contactMarker: '// contacto',
      heroLive: 'En vivo desde Almedina · ES',
      issue: 'Issue',
      ctaContact: 'Hablemos',
    },
    a11y: {
      home: 'jjpg.dev — Inicio',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      navMenu: 'Menú de navegación',
      toDark: 'Cambiar a modo Oscuro',
      toLight: 'Cambiar a modo Claro',
      switchLanguage: 'Cambiar idioma',
      backToTop: 'Volver al inicio',
      email: 'Correo Electrónico',
      shotClose: 'Cerrar',
      shotPrev: 'Anterior',
      shotNext: 'Siguiente',
    },
    colophon: {
      year: 'Año',
      editor: 'Editor',
      role: 'Rol',
      base: 'Base',
      status: 'Estado',
      response: 'Respuesta',
      stack: 'Stack',
      available: 'Disponible',
    },
    hero: {
      availability: 'Disponible para nuevos proyectos',
      greeting: 'Hola, soy',
      role: 'Full-Stack Engineer',
      tagline: 'Construyo SaaS y dashboards modernos con Next.js, NestJS y PostgreSQL.',
      description:
        'Diseño, entrego y opero aplicaciones completas para equipos que necesitan avanzar rápido sin renunciar a la calidad. 4+ años de experiencia construyendo APIs REST, dashboards multi-tenant, integraciones complejas y arquitecturas escalables. Almedina (Ciudad Real), trabajo en remoto. Disponible para MVPs, mantenimiento continuo y consultoría puntual.',
      btnProjects: 'Ver mis Proyectos',
      btnContact: 'Hablemos',
      calendlyHint: 'o reserva 30 min de discovery call directamente',
    },
    dashboardProjects: {
      title: 'Mis Proyectos Más Recientes',
      subtitle: 'Échale un vistazo a las soluciones que he diseñado y construido.',
      seeAll: 'Ver Todos los Proyectos',
    },
    projectCopy: {
      nexfit: {
        home: 'SaaS para entrenadores personales y nutricionistas: panel web, app móvil offline-first y API REST. Clientes, planes de entreno y nutrición, check-ins y seguimiento de progreso.',
        full: 'SaaS multi-repo para entrenadores personales y nutricionistas: panel web, app móvil offline-first (WatermelonDB) y API REST. Gestión de clientes, planes de entreno y nutrición, check-ins y seguimiento de progreso. Desplegado y operado en infra propia self-host (Docker · Coolify · CI/CD) con Neon + Cloudflare R2.',
        outcome:
          'Entrenadores gestionando clientes en hojas de cálculo → plataforma multi-repo con app móvil offline-first que centraliza planes, check-ins y progreso.',
      },
      vereda: {
        home: 'SaaS no-code para organizadores de pruebas deportivas: web pública, panel admin, dominio propio. Multi-tenant.',
        full: 'Plataforma SaaS no-code para organizadores de pruebas deportivas: web pública del evento, panel de administración, dominio propio y gestión multi-tenant. Desplegada en infra propia self-host con Neon + Cloudflare R2.',
        outcome:
          'Organizadores montando webs de eventos a mano → SaaS no-code multi-tenant con web pública y panel propio en minutos.',
      },
      medina: {
        home: 'Landing oficial del II Desafío Medina Roja BTT: información del evento y recorridos GPX en mapa interactivo.',
        full: 'Landing oficial del II Desafío Medina Roja BTT (450 plazas, 2 modalidades, 4 jul 2026). Información del evento, recorridos GPX renderizados en mapa Leaflet interactivo, desplegado en Vercel.',
        outcome:
          'Un evento de BTT sin web propia → landing oficial en producción con recorridos GPX en mapa interactivo, información y contacto.',
      },
      accounting: {
        home: 'App de contabilidad para pequeños negocios: REST API en NestJS + dashboard Next.js con transacciones, presupuestos, movimientos recurrentes e informes diarios.',
        full: 'App de contabilidad para pequeños negocios con demo en vivo (solo lectura) en demo.accounting.jjpg.dev. REST API en NestJS + dashboard Next.js con transacciones, informes diarios, presupuestos y movimientos recurrentes.',
        outcome:
          'Pequeños negocios sin visibilidad de su día a día contable → dashboard con demo en vivo: transacciones, informes, presupuestos y recurrentes.',
      },
      curio: {
        home: 'Plataforma educativa gamificada para niños 3–14: aprenden a programar con lecciones interactivas, retos, logros y progresión estilo videojuego.',
        full: 'Plataforma educativa gamificada para niños de 3–14 años: lecciones interactivas, desafíos, logros y progresión estilo videojuego.',
        outcome: '',
      },
    },
    dashboardSkills: {
      title: 'Tecnologías Clave y Stack Principal',
      // Only the translatable group titles live here; the skill lists are
      // derived from the single source of truth in `skills/data.ts`
      // (`SKILL_PREVIEW_GROUPS`), keyed by these ids.
      groupTitles: {
        'back-end': 'Back-End',
        'front-end': 'Front-End',
        'db-infra': 'Bases de Datos & Infra',
        'ai-llms': 'IA / LLMs',
      } as Record<string, string>,
    },
    dashboardServices: {
      title: 'Cómo trabajamos juntos',
      subtitle: 'Disponible para nuevos proyectos. Estos son los formatos en los que colaboro habitualmente.',
      seeAll: 'Ver todos los servicios',
      packages: [
        {
          id: 'mvp',
          title: 'Desarrollo de MVP',
          summary: 'De idea a MVP en producción en 2–8 semanas.',
        },
        {
          id: 'retainer',
          title: 'Mantenimiento continuo',
          summary: 'Tu producto mantenido y evolucionando cada mes.',
        },
        {
          id: 'ai',
          title: 'Integración de IA',
          summary: 'IA que aporta valor real: chatbots, agentes y automatizaciones con Claude.',
        },
        {
          id: 'consulting',
          title: 'Consultoría técnica',
          summary: 'Criterio senior para tus decisiones de arquitectura y stack.',
          badge: 'Especialidad',
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
      outcomeLabel: 'Reto → Resultado',
      shotsLabel: 'Ver capturas',
      coverAlt: 'Portada del proyecto',
      status: {
        beta: 'Beta',
        inDev: 'En desarrollo',
        liveDemo: 'Demo en vivo',
        production: 'En producción',
      },
    },
    skillsPage: {
      title: 'Mi Stack Tecnológico',
      categories: {
        'Back-End': 'Back-End',
        'Front-End': 'Front-End',
        'Bases de Datos': 'Bases de Datos',
        Infraestructura: 'Infra / DevOps',
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
          summary: 'De idea a MVP en producción en 2–8 semanas.',
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
          summary: 'Tu producto mantenido y evolucionando cada mes.',
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
          summary: 'IA que aporta valor real: chatbots, agentes y automatizaciones con Claude.',
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
          summary: 'Criterio senior para tus decisiones de arquitectura y stack.',
          badge: 'Especialidad',
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
      location: 'Almedina, Ciudad Real (Disponible Remoto)',
    },
    contactForm: {
      name: 'Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar Mensaje',
      submitting: 'Enviando...',
      success: '¡Mensaje enviado con éxito! Te responderé pronto.',
      error: 'Hubo un error. Por favor, intenta enviar un correo directo.',
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
    ui: {
      metaHome: '// cover · home',
      metaProjects: '// page · projects',
      metaServices: '// page · services',
      metaSkills: '// page · stack',
      metaContact: '// page · contact',
      homeSecServices: '// 03 — index',
      homeSecProjects: '// 04 — projects',
      homeSecSkills: '// 05 — stack',
      discoveryCall: '// discovery call',
      form: '// form',
      menu: '// menu',
      contactMarker: '// contact',
      heroLive: 'Live from Almedina · ES',
      issue: 'Issue',
      ctaContact: "Let's talk",
    },
    a11y: {
      home: 'jjpg.dev — Home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      navMenu: 'Navigation menu',
      toDark: 'Switch to dark mode',
      toLight: 'Switch to light mode',
      switchLanguage: 'Switch language',
      backToTop: 'Back to top',
      email: 'Email',
      shotClose: 'Close',
      shotPrev: 'Previous',
      shotNext: 'Next',
    },
    colophon: {
      year: 'Year',
      editor: 'Editor',
      role: 'Role',
      base: 'Based',
      status: 'Status',
      response: 'Response',
      stack: 'Stack',
      available: 'Available',
    },
    hero: {
      availability: 'Available for new projects',
      greeting: "Hi, I'm",
      role: 'Full-Stack Engineer',
      tagline: 'I build modern SaaS apps and dashboards with Next.js, NestJS and PostgreSQL.',
      description:
        'I design, ship and operate end-to-end applications for teams that need to move fast without compromising on quality. 4+ years building REST APIs, multi-tenant dashboards, complex integrations and scalable architectures. Based in Almedina (Ciudad Real, Spain), working remotely. Available for MVPs, ongoing maintenance and on-demand consulting.',
      btnProjects: 'See my Projects',
      btnContact: "Let's talk",
      calendlyHint: 'or book a 30-min discovery call directly',
    },
    dashboardProjects: {
      title: 'My Latest Projects',
      subtitle: 'Take a look at the solutions I have designed and built.',
      seeAll: 'See All Projects',
    },
    projectCopy: {
      nexfit: {
        home: 'SaaS for personal trainers and nutritionists: web dashboard, offline-first mobile app and REST API. Clients, training and nutrition plans, check-ins and progress tracking.',
        full: 'Multi-repo SaaS for personal trainers and nutritionists: web dashboard, offline-first mobile app (WatermelonDB) and REST API. Client management, training and nutrition plans, check-ins and progress tracking. Deployed and operated on self-hosted infra (Docker · Coolify · CI/CD) with Neon + Cloudflare R2.',
        outcome:
          'Trainers managing clients in spreadsheets → a multi-repo platform with an offline-first mobile app that centralizes plans, check-ins and progress.',
      },
      vereda: {
        home: 'No-code SaaS for sports event organizers: public website, admin panel, custom domain. Multi-tenant.',
        full: 'No-code SaaS platform for sports event organizers: public event website, admin panel, custom domain and multi-tenant management. Deployed on self-hosted infra with Neon + Cloudflare R2.',
        outcome:
          'Organizers hand-building event sites → a no-code multi-tenant SaaS with a public site and their own panel in minutes.',
      },
      medina: {
        home: 'Official landing for the II Medina Roja BTT challenge: event info and GPX routes on an interactive map.',
        full: 'Official landing site for the II Medina Roja BTT mountain bike challenge (450 spots, 2 routes, Jul 4, 2026). Event info, interactive GPX track viewer with Leaflet, deployed on Vercel.',
        outcome:
          'A mountain-bike event with no site of its own → an official landing in production with GPX routes on an interactive map, info and contact.',
      },
      accounting: {
        home: 'Accounting app for small businesses: NestJS REST API + Next.js dashboard with transactions, budgets, recurring entries and daily reports.',
        full: 'Accounting app for small businesses with a read-only live demo at demo.accounting.jjpg.dev. NestJS REST API + Next.js dashboard with daily reports, transactions, budgets and recurring entries.',
        outcome:
          'Small businesses with no visibility into their day-to-day books → a dashboard with a live demo: transactions, reports, budgets and recurring entries.',
      },
      curio: {
        home: 'Gamified educational platform for children aged 3–14: they learn to code through interactive lessons, challenges, achievements and video-game-style progression.',
        full: 'Gamified educational platform for children aged 3–14: interactive lessons, challenges, achievements and video-game-style progression.',
        outcome: '',
      },
    },
    dashboardSkills: {
      title: 'Key Technologies and Main Stack',
      // Only the translatable group titles live here; the skill lists are
      // derived from the single source of truth in `skills/data.ts`
      // (`SKILL_PREVIEW_GROUPS`), keyed by these ids.
      groupTitles: {
        'back-end': 'Back-End',
        'front-end': 'Front-End',
        'db-infra': 'Databases & Infra',
        'ai-llms': 'AI / LLMs',
      } as Record<string, string>,
    },
    dashboardServices: {
      title: 'How we can work together',
      subtitle: 'Available for new projects. These are the formats I typically work in.',
      seeAll: 'See all services',
      packages: [
        {
          id: 'mvp',
          title: 'MVP Development',
          summary: 'From idea to a production MVP in 2–8 weeks.',
        },
        {
          id: 'retainer',
          title: 'Ongoing Maintenance',
          summary: 'Your product maintained and evolving every month.',
        },
        {
          id: 'ai',
          title: 'AI Integration',
          summary: 'AI that adds real value: chatbots, agents and automations with Claude.',
        },
        {
          id: 'consulting',
          title: 'Technical Consulting',
          summary: 'Senior judgment for your architecture and stack decisions.',
          badge: 'Specialty',
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
      outcomeLabel: 'Problem → Result',
      shotsLabel: 'View screenshots',
      coverAlt: 'Cover of',
      status: {
        beta: 'Beta',
        inDev: 'In development',
        liveDemo: 'Live demo',
        production: 'In production',
      },
    },
    skillsPage: {
      title: 'My Tech Stack',
      categories: {
        'Back-End': 'Back-End',
        'Front-End': 'Front-End',
        'Bases de Datos': 'Databases',
        Infraestructura: 'Infra / DevOps',
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
          summary: 'From idea to a production MVP in 2–8 weeks.',
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
          summary: 'Your product maintained and evolving every month.',
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
          summary: 'AI that adds real value: chatbots, agents and automations with Claude.',
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
          summary: 'Senior judgment for your architecture and stack decisions.',
          badge: 'Specialty',
          description:
            'One-off consulting sessions: code reviews, architecture decisions, stack choice, refactor strategy. A senior second opinion without ongoing commitment.',
          bullets: [
            'Discovery meetings',
            'Documented technical code review',
            'Prioritized recommendations document',
            'Technical roadmap when applicable',
            'Hands-on support during implementation (optional)',
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
      location: 'Almedina, Ciudad Real (Available Remotely)',
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
