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
      bottomLine: 'Almedina · ES · Exp. 4,5 años',
    },
    ui: {
      metaHome: '// portada · home',
      metaProjects: '// página · proyectos',
      metaServices: '// página · servicios',
      metaSkills: '// página · stack',
      metaContact: '// página · contacto',
      homeSecExperience: '// 03 — experiencia',
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
      experience: 'Exp.',
      experienceValue: '4,5 años',
      stack: 'Stack',
      available: 'Abierto a ofertas',
    },
    hero: {
      availability: 'Abierto a nuevas oportunidades',
      greeting: 'Hola, soy',
      role: 'Full-Stack Engineer',
      tagline: 'Modernizo sistemas legados y diseño arquitecturas distribuidas.',
      description:
        '4 años y medio construyendo y rescatando productos en producción: migraciones críticas con plazo, reducción de deuda técnica, arquitecturas orientadas a eventos y transiciones de stack. Trabajo con Node.js, React/Next.js, PHP/Symfony y PostgreSQL. Vivo en Almedina (Ciudad Real) y trabajo en remoto.',
      btnProjects: 'Ver mis Proyectos',
      btnContact: 'Hablemos',
      btnCV: 'Descargar CV',
      calendlyHint: 'o agenda una entrevista de 30 min directamente',
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Equipos y productos en los que he construido y mantenido software en producción.',
      current: 'Actualidad',
      entries: {
        grupie: {
          role: 'Full Stack Developer',
          dates: 'Dic 2025 · Actualidad',
          bullets: [
            'Desarrollo del producto core en PHP/Symfony y Next.js/React, incluyendo decisiones de arquitectura.',
            'Servicios de desarrollo para clientes externos con Fastify y PostgreSQL.',
            'Flujos de trabajo guiados por IA aplicados al ciclo de desarrollo.',
          ],
        },
        theknot: {
          role: 'Full Stack Developer',
          dates: 'Nov 2022 · Dic 2025',
          bullets: [
            'Incorporación tras la adquisición, con el encargo de estabilizar el ecosistema técnico y reducir la deuda heredada.',
            'Migración de Universal Analytics a GA4 en 2 meses, dentro del plazo límite de Google y sin pérdida de continuidad en el reporting.',
            'Automatización de la exportación contable B2B/B2C hacia Sage 50, sustituyendo un proceso manual.',
            'Transición de módulos críticos a React e implantación de cultura de testing con Jest y PHPUnit en un entorno sin cobertura previa.',
            'Desde 2025, decisiones de arquitectura: integración backend con HapiJS, GraphQL y OpenSearch; resolvers en PayloadCMS con colas RabbitMQ; design system propio en Next.js.',
          ],
        },
        tigloo: {
          role: 'Full Stack Developer',
          dates: 'Ene 2022 · Oct 2022',
          bullets: [
            'Mantenimiento y evolución de aplicaciones de gestión musical en PHP 5.4/5.5 con Symfony y AngularJS.',
            'Propuse e implementé el primer pipeline de CI/CD en GitLab de la empresa, eliminando los despliegues manuales.',
            'API para stakeholders con autenticación por tokens temporales.',
          ],
        },
      } as Record<string, { role: string; dates: string; bullets: string[] }>,
    },
    dashboardProjects: {
      title: 'Mis Proyectos Más Recientes',
      subtitle: 'Échale un vistazo a las soluciones que he diseñado y construido.',
      seeAll: 'Ver Todos los Proyectos',
    },
    projectCopy: {
      nexfit: {
        home: 'SaaS para entrenadores personales y nutricionistas: panel web, app móvil offline-first y API REST. Clientes, planes de entreno y nutrición, check-ins y seguimiento de progreso.',
        full: 'SaaS multi-repo para entrenadores personales y nutricionistas: panel web, app móvil offline-first (WatermelonDB) y API REST. Gestión de clientes, planes de entreno y nutrición, check-ins y seguimiento de progreso. Desplegado en Railway + Neon + Cloudflare R2.',
        outcome:
          'Entrenadores gestionando clientes en hojas de cálculo → plataforma multi-repo con app móvil offline-first que centraliza planes, check-ins y progreso.',
        stack:
          'Tres repos contra una misma base PostgreSQL con Prisma: API en NestJS, panel en Next.js y app en Expo. La app escribe en local con WatermelonDB y sincroniza después, para que una sesión pueda registrarse sin cobertura. Los archivos van a Cloudflare R2, no al servidor.',
      },
      vereda: {
        home: 'SaaS no-code para organizadores de pruebas deportivas: web pública, panel admin, dominio propio. Multi-tenant.',
        full: 'Plataforma SaaS no-code para organizadores de pruebas deportivas: web pública del evento, panel de administración, dominio propio y gestión multi-tenant. Arquitectura serverless con Neon + Vercel Blob.',
        outcome:
          'Organizadores montando webs de eventos a mano → SaaS no-code multi-tenant con web pública y panel propio en minutos.',
        stack:
          'Multi-tenant desde el primer día: cada organizador tiene su evento, su panel y su dominio sobre la misma instancia. Serverless con Neon y Vercel Blob porque la carga de un evento se concentra en unos pocos días, así que el coste sigue al uso y no a un servidor encendido todo el año.',
      },
      medina: {
        home: 'Landing oficial del II Desafío Medina Roja BTT: información del evento y recorridos GPX en mapa interactivo.',
        full: 'Landing oficial del II Desafío Medina Roja BTT (450 plazas, 2 modalidades, 4 jul 2026). Información del evento, recorridos GPX renderizados en mapa Leaflet interactivo, desplegado en Vercel.',
        outcome:
          'Un evento de BTT sin web propia → landing oficial en producción con recorridos GPX en mapa interactivo, información y contacto.',
        stack:
          'El recorrido no es una imagen: son ficheros GPX reales sobre un mapa Leaflet interactivo, así que lo que ve el ciclista es el trazado que se va a rodar. Estático en Vercel, porque una landing de evento tiene que aguantar el pico del día en que se abren las inscripciones.',
      },
      accounting: {
        home: 'App de contabilidad para pequeños negocios: REST API en NestJS + dashboard Next.js con transacciones, presupuestos, movimientos recurrentes e informes diarios.',
        full: 'App de contabilidad para pequeños negocios con demo en vivo (solo lectura) en demo.accounting.jjpg.dev. REST API en NestJS + dashboard Next.js con transacciones, informes diarios, presupuestos y movimientos recurrentes.',
        outcome:
          'Pequeños negocios sin visibilidad de su día a día contable → dashboard con demo en vivo: transacciones, informes, presupuestos y recurrentes.',
        stack:
          'API y cliente separados —NestJS y Next.js— con Zod validando la entrada y JWT entre ambos. La demo pública corre en modo solo lectura contra su propia base con datos sintéticos: enseñar el producto no debería exponer los datos de nadie.',
      },
      curio: {
        home: 'Plataforma educativa gamificada para niños 3–14: aprenden a programar con lecciones interactivas, retos, logros y progresión estilo videojuego.',
        full: 'Plataforma educativa gamificada para niños de 3–14 años: lecciones interactivas, desafíos, logros y progresión estilo videojuego.',
        outcome:
          'Enseñar a programar a un niño de 3–14 años con material escrito para adultos → una plataforma donde la lección es un juego y el progreso se ve como en uno.',
        stack:
          'El estado de la partida (nivel, XP, racha) vive en cliente con Zustand y los datos de servidor en TanStack Query, separados a propósito: la animación de subir de nivel no debería depender de que responda la red. next-intl porque el público son niños, y a un niño de seis años no se le enseña una interfaz en un idioma que no es el suyo.',
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
        'db-infra': 'Datos & Infra',
        'messaging-apis': 'Mensajería & APIs',
        'ai-llms': 'IA / LLMs',
        notions: 'Nociones de',
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
      stackNoteLabel: 'Decisión técnica',
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
      subtitle:
        'No es una lista de todo lo que he tocado alguna vez. Es lo que uso en producción, ordenado por lo que de verdad domino, y con el contexto en el que lo he usado debajo de cada bloque.',
      categories: {
        'Back-End': 'Back-End',
        'Front-End': 'Front-End',
        'Bases de Datos': 'Bases de Datos',
        Infraestructura: 'Infraestructura',
        'IA / LLMs': 'IA / LLMs',
      } as Record<string, string>,
      // One paragraph of real context per category. This is what makes /skills
      // worth its own page instead of a longer version of the home preview.
      categoryIntros: {
        'Back-End':
          'Es donde más tiempo paso. NestJS es mi opción por defecto para una API nueva —es el back de Nexfit y de Accounting Suite—, pero buena parte de mi carrera ha sido mantener y evolucionar PHP/Symfony heredado, incluido código en PHP 5.4. En The Knot Worldwide integré servicios con HapiJS, GraphQL y resolvers sobre PayloadCMS; hoy en Grupie Labs combino Symfony con servicios en Fastify.',
        'Front-End':
          'React con Next.js y TypeScript es donde construyo casi todo el producto visible. He llevado módulos críticos de un stack heredado a React y he montado un design system propio en Next.js para un equipo. Fuera de la web, la app móvil de Nexfit está en Expo con React Native y funciona offline-first: el mismo modelo mental, otra caja de herramientas.',
        'Bases de Datos':
          'PostgreSQL es mi base por defecto, con Prisma cuando el proyecto es TypeScript. La parte menos vistosa —y la que más problemas evita— es el modelado: en un SaaS multi-tenant como Vereda, decidir dónde vive el identificador de tenant condiciona todo lo que viene después. OpenSearch entró por la capa de búsqueda de un backend que integré, y Redis por caché y trabajos en segundo plano.',
        Infraestructura:
          'Lo suficiente para llevar a producción lo que construyo y mantenerlo vivo. Docker en todos los proyectos; RabbitMQ para desacoplar lo que no debe bloquear una petición; Playwright para las pruebas que de verdad detectan regresiones. En Tigloo propuse e implementé el primer pipeline de CI/CD de la empresa. Kubernetes, AWS y Terraform los manejo, pero no los vendo como especialidad.',
        'IA / LLMs':
          'Uso IA dentro del ciclo de desarrollo, no como adorno: Claude Code integrado en el día a día en Grupie Labs, y la Claude API cuando la funcionalidad la necesita de verdad. MCP me interesa por lo que permite —conectar un modelo a herramientas y datos propios con un contrato explícito— y es donde más tiempo estoy invirtiendo ahora.',
      } as Record<string, string>,
      levels: {
        expert: 'Experto',
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico',
      },
      levelNote: {
        title: 'Cómo leer estos niveles',
        body: 'Reservo «Experto» para lo que he llevado a producción varias veces y sé depurar cuando falla de madrugada. «Avanzado» es trabajo real y continuado. «Intermedio» significa que lo he usado en proyectos concretos y sigo abriendo la documentación para lo raro. Preferí una lista corta y honesta a una larga que no dijera nada.',
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
      subtitle:
        'Estoy abierto a nuevas oportunidades como Full-Stack Engineer, en remoto desde Almedina (Ciudad Real). Escríbeme por el formulario, por correo directo o reserva media hora en mi calendario: lo que te resulte más cómodo.',
      formTitle: 'Envíame un mensaje',
      calendlyTitle: '¿Prefieres hablar directamente? Reserva una llamada',
      calendlyDescription:
        'Una llamada de 30 minutos, sin compromiso, para conocernos y ver si encajo en tu equipo.',
      calendlyCta: 'Reservar llamada',
      faqTitle: 'Antes de que escribas',
      faq: [
        {
          q: '¿Qué tipo de puesto estás buscando?',
          a: 'Full-Stack Engineer, preferiblemente donde el back pese tanto como el front. Me interesan sobre todo los equipos con sistemas heredados que hay que modernizar sin parar el negocio: migraciones con fecha límite, deuda técnica acumulada, transiciones de stack. Es lo que llevo haciendo los últimos años.',
        },
        {
          q: '¿Trabajas en remoto o presencial?',
          a: 'En remoto. Vivo en Almedina (Ciudad Real) y trabajo así con equipos distribuidos desde hace años. Puedo desplazarme puntualmente para un arranque de proyecto o un onboarding.',
        },
        {
          q: '¿Qué necesitas saber para responderme bien?',
          a: 'Con el producto, el stack y qué problema quieres resolver me sobra para darte una respuesta útil en el primer mensaje. Si hay algo del proyecto que ya sabes que duele —un monolito que nadie toca, una migración pendiente— dímelo: eso es justo lo que quiero oír.',
        },
        {
          q: '¿Cuánto tardas en responder?',
          a: 'Menos de 24 horas en días laborables. Si prefieres saltarte el correo, la llamada de 30 minutos de arriba entra directa en mi calendario.',
        },
      ],
    },
    contactInfo: {
      title: 'Información de Contacto',
      subtitle: '¿Buscas un Full-Stack Engineer para tu equipo? ¡Hablemos!',
      location: 'Almedina, Ciudad Real (Disponible Remoto)',
      emailLabel: 'Email',
      baseLabel: 'Base',
      responseLabel: 'Respuesta',
      responseValue: '< 24 h',
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
      bottomLine: 'Almedina, ES · Exp. 4.5 yrs',
    },
    ui: {
      metaHome: '// cover · home',
      metaProjects: '// page · projects',
      metaServices: '// page · services',
      metaSkills: '// page · stack',
      metaContact: '// page · contact',
      homeSecExperience: '// 03 — experience',
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
      experience: 'Exp.',
      experienceValue: '4.5 yrs',
      stack: 'Stack',
      available: 'Open to offers',
    },
    hero: {
      availability: 'Open to new opportunities',
      greeting: "Hi, I'm",
      role: 'Full-Stack Engineer',
      tagline: 'I modernize legacy systems and design distributed architectures.',
      description:
        '4.5 years building and rescuing products in production: deadline-critical migrations, technical debt reduction, event-driven architectures and stack transitions. I work with Node.js, React/Next.js, PHP/Symfony and PostgreSQL. Based in Almedina (Ciudad Real, Spain), working remotely.',
      btnProjects: 'See my Projects',
      btnContact: "Let's talk",
      btnCV: 'Download CV',
      calendlyHint: 'or book a 30-min interview directly',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Teams and products where I have built and maintained software in production.',
      current: 'Present',
      entries: {
        grupie: {
          role: 'Full Stack Developer',
          dates: 'Dec 2025 · Present',
          bullets: [
            'Development of the core product in PHP/Symfony and Next.js/React, including architecture decisions.',
            'Development services for external clients using Fastify and PostgreSQL.',
            'AI-guided workflows applied throughout the development cycle.',
          ],
        },
        theknot: {
          role: 'Full Stack Developer',
          dates: 'Nov 2022 · Dec 2025',
          bullets: [
            'Joined after the acquisition, tasked with stabilizing the technical ecosystem and paying down inherited technical debt.',
            "Migrated Universal Analytics to GA4 in 2 months, within Google's hard deadline and without any loss of reporting continuity.",
            'Automated B2B/B2C accounting exports to Sage 50, replacing a manual process.',
            'Transitioned critical modules to React and introduced a testing culture with Jest and PHPUnit in a codebase with no prior coverage.',
            'Since 2025, architecture decisions: backend integration with HapiJS, GraphQL and OpenSearch; resolvers in PayloadCMS with RabbitMQ queues; in-house design system built in Next.js.',
          ],
        },
        tigloo: {
          role: 'Full Stack Developer',
          dates: 'Jan 2022 · Oct 2022',
          bullets: [
            'Maintenance and evolution of music-management applications in PHP 5.4/5.5 with Symfony and AngularJS.',
            "Proposed and implemented the company's first CI/CD pipeline on GitLab, eliminating manual deployments.",
            'Stakeholder-facing API with temporary token authentication.',
          ],
        },
      } as Record<string, { role: string; dates: string; bullets: string[] }>,
    },
    dashboardProjects: {
      title: 'My Latest Projects',
      subtitle: 'Take a look at the solutions I have designed and built.',
      seeAll: 'See All Projects',
    },
    projectCopy: {
      nexfit: {
        home: 'SaaS for personal trainers and nutritionists: web dashboard, offline-first mobile app and REST API. Clients, training and nutrition plans, check-ins and progress tracking.',
        full: 'Multi-repo SaaS for personal trainers and nutritionists: web dashboard, offline-first mobile app (WatermelonDB) and REST API. Client management, training and nutrition plans, check-ins and progress tracking. Deployed on Railway + Neon + Cloudflare R2.',
        outcome:
          'Trainers managing clients in spreadsheets → a multi-repo platform with an offline-first mobile app that centralizes plans, check-ins and progress.',
        stack:
          'Three repos against one PostgreSQL database with Prisma: a NestJS API, a Next.js dashboard and an Expo app. The app writes locally with WatermelonDB and syncs later, so a session can be logged with no signal. Files go to Cloudflare R2, not to the server.',
      },
      vereda: {
        home: 'No-code SaaS for sports event organizers: public website, admin panel, custom domain. Multi-tenant.',
        full: 'No-code SaaS platform for sports event organizers: public event website, admin panel, custom domain and multi-tenant management. Serverless architecture with Neon + Vercel Blob.',
        outcome:
          'Organizers hand-building event sites → a no-code multi-tenant SaaS with a public site and their own panel in minutes.',
        stack:
          'Multi-tenant from day one: every organizer gets their event, their panel and their domain on the same instance. Serverless with Neon and Vercel Blob because an event\'s load lands in a handful of days, so cost follows usage instead of a server left running all year.',
      },
      medina: {
        home: 'Official landing for the II Medina Roja BTT challenge: event info and GPX routes on an interactive map.',
        full: 'Official landing site for the II Medina Roja BTT mountain bike challenge (450 spots, 2 routes, Jul 4, 2026). Event info, interactive GPX track viewer with Leaflet, deployed on Vercel.',
        outcome:
          'A mountain-bike event with no site of its own → an official landing in production with GPX routes on an interactive map, info and contact.',
        stack:
          'The route is not a picture: they are real GPX files on an interactive Leaflet map, so what a rider sees is the track they will actually ride. Static on Vercel, because an event landing has to absorb the spike on the day registration opens.',
      },
      accounting: {
        home: 'Accounting app for small businesses: NestJS REST API + Next.js dashboard with transactions, budgets, recurring entries and daily reports.',
        full: 'Accounting app for small businesses with a read-only live demo at demo.accounting.jjpg.dev. NestJS REST API + Next.js dashboard with daily reports, transactions, budgets and recurring entries.',
        outcome:
          'Small businesses with no visibility into their day-to-day books → a dashboard with a live demo: transactions, reports, budgets and recurring entries.',
        stack:
          'API and client kept separate — NestJS and Next.js — with Zod validating input and JWT between the two. The public demo runs read-only against its own database of synthetic data: showing the product should never expose anyone\'s books.',
      },
      curio: {
        home: 'Gamified educational platform for children aged 3–14: they learn to code through interactive lessons, challenges, achievements and video-game-style progression.',
        full: 'Gamified educational platform for children aged 3–14: interactive lessons, challenges, achievements and video-game-style progression.',
        outcome:
          'Teaching a 3–14-year-old to code from material written for adults → a platform where the lesson is a game and progress looks like one.',
        stack:
          'Game state (level, XP, streak) lives on the client with Zustand and server data in TanStack Query, deliberately kept apart: a level-up animation should not wait on the network. next-intl because the audience is children, and you do not hand a six-year-old an interface in someone else\'s language.',
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
        'db-infra': 'Data & Infra',
        'messaging-apis': 'Messaging & APIs',
        'ai-llms': 'AI / LLMs',
        notions: 'Working knowledge of',
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
      stackNoteLabel: 'Technical decision',
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
      subtitle:
        'Not a list of everything I have ever touched. It is what I use in production, ordered by what I actually command, with the context I used it in under each block.',
      categories: {
        'Back-End': 'Back-End',
        'Front-End': 'Front-End',
        'Bases de Datos': 'Databases',
        Infraestructura: 'Infrastructure',
        'IA / LLMs': 'AI / LLMs',
      } as Record<string, string>,
      categoryIntros: {
        'Back-End':
          'This is where I spend most of my time. NestJS is my default for a new API — it backs Nexfit and Accounting Suite — but much of my career has been maintaining and evolving legacy PHP/Symfony, PHP 5.4 included. At The Knot Worldwide I integrated services with HapiJS, GraphQL and PayloadCMS resolvers; today at Grupie Labs I pair Symfony with Fastify services.',
        'Front-End':
          'React with Next.js and TypeScript is where I build almost all of the visible product. I have moved critical modules off a legacy stack onto React and built an in-house design system in Next.js for a team. Off the web, the Nexfit mobile app runs on Expo with React Native and works offline-first: same mental model, different toolbox.',
        'Bases de Datos':
          'PostgreSQL is my default, with Prisma when the project is TypeScript. The least glamorous part — and the one that prevents the most pain — is modelling: in a multi-tenant SaaS like Vereda, deciding where the tenant identifier lives shapes everything that comes after. OpenSearch came in through the search layer of a backend I integrated, and Redis for caching and background jobs.',
        Infraestructura:
          'Enough to take what I build to production and keep it alive. Docker on every project; RabbitMQ to decouple whatever must not block a request; Playwright for the tests that actually catch regressions. At Tigloo I proposed and built the company\'s first CI/CD pipeline. I can work with Kubernetes, AWS and Terraform, but I do not sell them as a specialty.',
        'IA / LLMs':
          'I use AI inside the development cycle, not as decoration: Claude Code wired into the day-to-day at Grupie Labs, and the Claude API when a feature genuinely calls for it. MCP interests me for what it enables — connecting a model to your own tools and data under an explicit contract — and it is where most of my time goes right now.',
      } as Record<string, string>,
      levels: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic',
      },
      levelNote: {
        title: 'How to read these levels',
        body: 'I reserve "Expert" for what I have shipped to production several times and can debug when it breaks at 3am. "Advanced" is real, sustained work. "Intermediate" means I have used it on specific projects and still open the docs for the odd cases. I chose a short honest list over a long one that said nothing.',
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
      subtitle:
        'I am open to new opportunities as a Full-Stack Engineer, remote from Almedina (Ciudad Real, Spain). Reach me through the form, by direct email, or book half an hour in my calendar — whichever suits you.',
      formTitle: 'Send me a message',
      calendlyTitle: 'Prefer to talk directly? Book a call',
      calendlyDescription:
        'A free, no-commitment 30-minute call to get to know each other and see if I would be a good fit for your team.',
      calendlyCta: 'Book a call',
      faqTitle: 'Before you write',
      faq: [
        {
          q: 'What kind of role are you looking for?',
          a: 'Full-Stack Engineer, ideally where the back end carries as much weight as the front. I am most interested in teams with legacy systems that need modernizing without stopping the business: migrations with a deadline, accumulated technical debt, stack transitions. That is what I have been doing for the past few years.',
        },
        {
          q: 'Do you work remotely or on-site?',
          a: 'Remotely. I live in Almedina (Ciudad Real, Spain) and have worked this way with distributed teams for years. I can travel occasionally for a project kick-off or onboarding.',
        },
        {
          q: 'What do you need in order to give me a useful answer?',
          a: 'The product, the stack and the problem you want solved are enough for me to reply with something useful on the first message. If there is a part of the project you already know hurts — a monolith nobody touches, a migration still pending — say so: that is exactly what I want to hear.',
        },
        {
          q: 'How quickly do you reply?',
          a: 'Under 24 hours on working days. If you would rather skip email, the 30-minute call above goes straight into my calendar.',
        },
      ],
    },
    contactInfo: {
      title: 'Contact Information',
      subtitle: "Looking for a Full-Stack Engineer for your team? Let's talk!",
      location: 'Almedina, Ciudad Real (Available Remotely)',
      emailLabel: 'Email',
      baseLabel: 'Based in',
      responseLabel: 'Response',
      responseValue: '< 24h',
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
