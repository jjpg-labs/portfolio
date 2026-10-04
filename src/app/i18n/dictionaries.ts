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
      bottomLine: 'Almedina · ES · Exp. casi 5 años',
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
      experienceValue: 'casi 5 años',
      stack: 'Stack',
      available: 'Abierto a ofertas',
    },
    hero: {
      availability: 'Abierto a nuevas oportunidades',
      greeting: 'Hola, soy',
      role: 'Full Stack Developer',
      tagline: 'Backend sólido, frontend en React y el testing de serie.',
      description:
        'Casi 5 años de experiencia en PHP/Symfony, Node.js y React/Next.js. Lo más reciente: el motor de facturación recurrente de partners, la integración de cobros SEPA con GoCardless y librerías internas de contabilidad. Antes, en un producto con más de 1M de visitas al mes: entregas con plazo cerrado (exportación contable a Sage 50, migración a GA4 en 2 meses), integración backend con GraphQL, OpenSearch y colas de RabbitMQ, y frontend en React en proyectos de varios equipos. El testing va de serie: en frontend llevé la cobertura de 0 % a más del 75 %. Remoto desde España, abierto a híbrido.',
      btnProjects: 'Ver mis Proyectos',
      btnContact: 'Hablemos',
      btnCV: 'Descargar CV',
      calendlyHint: 'o agenda una entrevista de 30 min directamente',
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Equipos y productos en los que he construido y mantenido software en producción.',
      entries: {
        grupie: {
          role: 'Full Stack Developer',
          dates: 'Dic 2025 – Oct 2026',
          bullets: [
            'Desarrollo del producto core en PHP/Symfony y Next.js/React.',
            'Diseñé e implementé el motor de facturación recurrente de partners: ciclo diario de contratos, prorrateo de cancelaciones y recuperación ante fallos.',
            'Desarrollo de servicios backend para clientes externos con Fastify y PostgreSQL.',
            'Ayudé en la integración de la pasarela de pagos Lemonway (wallets, domiciliaciones, webhooks y KYC) e integré GoCardless para automatizar los cobros SEPA.',
            'Desarrollé de extremo a extremo el RSVP de eventos y, del resto de la funcionalidad de eventos, el frontend: editor y página pública, lista de invitados, modelo de encuesta e internacionalización en/es/fr.',
            'Creé dos librerías internas: media-url (imágenes con imgproxy) y ledgers (contabilidad y facturación con integración de Holded).',
            'En los proyectos de frontend, que no tenían tests, implanté la práctica de testing y llevé la cobertura de 0 % a más del 75 %; además, monté desde cero la suite e2e con Playwright.',
            'Implementación de flujos de desarrollo asistidos por IA con verificación en varias capas: revisión automatizada por un agente independiente, revisión manual y code review del equipo antes de integrar.',
          ],
        },
        theknot: {
          role: 'Software Engineer (full stack)',
          dates: 'Nov 2022 – Nov 2025',
          bullets: [
            'Producto con más de 1M de visitas/mes en más de 10 países, en una organización de +40 personas en tecnología y un equipo de 6 a 10.',
            'En un proyecto de varios equipos con un plazo muy ajustado, me encargué de la parte web: añadí a una aplicación React de otro equipo una ruta nueva con su página, componentes reutilizables y custom hooks, siguiendo las convenciones del proyecto.',
            'Diseñé e implementé parte de la integración backend de un proyecto transversal (HapiJS, GraphQL y OpenSearch sobre un índice de millones de documentos). En una arquitectura de más de 8 servicios comunicados por colas de RabbitMQ, añadí listeners con sus endpoints y esquemas, y creé resolvers GraphQL en PayloadCMS.',
            'Desarrollé funcionalidades detrás de feature flags y las validé con experimentos A/B en el gestor interno de la empresa.',
            'Planifiqué y ejecuté la migración de Universal Analytics a GA4 cumpliendo el plazo límite impuesto por Google, en 2 meses y sin pérdida de continuidad en el reporting de negocio.',
            'Automaticé la exportación contable B2B/B2C hacia Sage 50, eliminando más de 10 horas mensuales de trabajo manual y los errores de carga.',
          ],
        },
        tigloo: {
          role: 'Full Stack Developer',
          dates: 'Dic 2021 – Oct 2022',
          bullets: [
            'Propuse e implementé el primer pipeline de CI/CD en GitLab de la empresa, sustituyendo un despliegue manual que exigía repetir el cambio a mano en 4 máquinas desde 4 terminales simultáneas.',
            'Mantenimiento y evolución de aplicaciones de una empresa de derechos musicales en PHP 5.4/5.5 y 7.4 con Symfony y AngularJS.',
            'Diseñé, desarrollé y puse en producción, en solitario, un endpoint de recepción de datos de consumo musical de terceros, con autenticación por token de corta expiración.',
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
        full: 'SaaS multi-repo para entrenadores personales y nutricionistas: panel web, app móvil offline-first (WatermelonDB) y API REST. Gestión de clientes, planes de entreno y nutrición, check-ins y seguimiento de progreso. Desplegado en infra propia self-host (Coolify) con PostgreSQL + Cloudflare R2.',
        outcome:
          'Entrenadores gestionando clientes en hojas de cálculo → plataforma multi-repo con app móvil offline-first que centraliza planes, check-ins y progreso.',
        stack:
          'Tres repos contra una misma base PostgreSQL con Prisma: API en NestJS, panel en Next.js y app en Expo. La app escribe en local con WatermelonDB y sincroniza después, para que una sesión pueda registrarse sin cobertura. Los archivos van a Cloudflare R2, no al servidor.',
      },
      vereda: {
        home: 'SaaS no-code para organizadores de pruebas deportivas: web pública, panel admin, dominio propio. Multi-tenant.',
        full: 'Plataforma SaaS no-code para organizadores de pruebas deportivas: web pública del evento, panel de administración, dominio propio y gestión multi-tenant. Sobre infra propia self-host con PostgreSQL + Cloudflare R2.',
        outcome:
          'Organizadores montando webs de eventos a mano → SaaS no-code multi-tenant con web pública y panel propio en minutos.',
        stack:
          'Multi-tenant desde el primer día: cada organizador tiene su evento, su panel y su dominio sobre la misma instancia. El enrutado se decide por el Host de la petición —ruta, subdominio o dominio propio—, así que dar de alta el dominio de un cliente no implica desplegar nada nuevo: es una entrada más apuntando al mismo sitio.',
      },
      medina: {
        home: 'Landing oficial del II Desafío Medina Roja BTT: información del evento y recorridos GPX en mapa interactivo.',
        full: 'Landing oficial del II Desafío Medina Roja BTT (2 modalidades, 30 y 50 km, 4 jul 2026). Información del evento, recorridos GPX renderizados en mapa Leaflet interactivo, desplegado en Vercel.',
        outcome:
          'Un evento de BTT sin web propia → landing oficial en producción con recorridos GPX en mapa interactivo, información y contacto.',
        stack:
          'Los recorridos son ficheros GPX reales renderizados sobre un mapa Leaflet interactivo, no imágenes: lo que ve el ciclista es el trazado que se va a rodar. Sitio estático, desplegado en Vercel.',
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
        home: 'Plataforma educativa gamificada para niños 3–14: programación, matemáticas y ciencias con lecciones interactivas, retos, logros y progresión estilo videojuego.',
        full: 'Plataforma educativa gamificada para niños de 3–14 años: programación, matemáticas y ciencias con lecciones interactivas, editor de código, desafíos, logros y progresión estilo videojuego.',
        outcome:
          'Enseñar a programar, mates y ciencias a un niño de 3–14 años con material escrito para adultos → una plataforma donde la lección es un juego y el progreso se ve como en uno.',
        stack:
          'El estado de la partida —nivel, XP, racha diaria— vive en cliente con Zustand, y los datos de servidor los leen los Server Components contra Prisma. La interfaz está traducida con next-intl, y el contenido se adapta por tramo de edad dentro del rango de 3 a 14 años.',
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
      stackNoteLabel: 'Cómo está montado',
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
        Infraestructura: 'Infra / DevOps',
        'IA / LLMs': 'IA / LLMs',
      } as Record<string, string>,
      // One paragraph of real context per category. This is what makes /skills
      // worth its own page instead of a longer version of the home preview.
      categoryIntros: {
        'Back-End':
          'Es donde más tiempo paso. NestJS es mi opción por defecto para una API nueva —es el back de Nexfit y de Accounting Suite—, pero buena parte de mi carrera ha sido mantener y evolucionar PHP/Symfony heredado, incluido código en PHP 5.4. En The Knot Worldwide diseñé e implementé mi parte de la integración backend de un proyecto transversal con HapiJS, GraphQL y OpenSearch, y creé resolvers en PayloadCMS; en Grupie Labs combiné Symfony con servicios en Fastify.',
        'Front-End':
          'React con Next.js y TypeScript es donde construyo casi todo el producto visible. En The Knot Worldwide, en un proyecto de varios equipos con un plazo muy ajustado, añadí a una aplicación React de otro equipo una ruta nueva con su página, componentes reutilizables y custom hooks, y participé en la migración de los componentes de un equipo a su nueva librería de diseño en Next.js. Fuera de la web, la app móvil de Nexfit está en Expo con React Native y funciona offline-first: el mismo modelo mental, otra caja de herramientas.',
        'Bases de Datos':
          'PostgreSQL es mi base por defecto, con Prisma cuando el proyecto es TypeScript. La parte menos vistosa —y la que más problemas evita— es el modelado: en un SaaS multi-tenant como Vereda, decidir dónde vive el identificador de tenant condiciona todo lo que viene después. OpenSearch entró por la integración backend de un proyecto transversal en The Knot Worldwide.',
        Infraestructura:
          'Lo suficiente para llevar a producción lo que construyo y mantenerlo vivo. Docker en todos los proyectos; RabbitMQ para desacoplar lo que no debe bloquear una petición; Playwright para las pruebas que de verdad detectan regresiones. En Tigloo propuse e implementé el primer pipeline de CI/CD de la empresa. Kubernetes, AWS y Terraform aparecen en el contexto de proyectos en los que he trabajado; sé moverme en ellos, pero no los vendo como especialidad.',
        'IA / LLMs':
          'Uso IA dentro del ciclo de desarrollo, no como adorno: Claude Code integrado en el día a día, como hice en Grupie Labs, y la Claude API cuando la funcionalidad la necesita de verdad. MCP me interesa por lo que permite —conectar un modelo a herramientas y datos propios con un contrato explícito— y es donde más tiempo estoy invirtiendo ahora.',
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
    // NOTE: `servicesPage` and `dashboardServices` are intentionally kept after
    // the /services route was removed (the site now speaks only to hiring, not
    // to freelance clients). Nothing renders them today; they stay so that
    // bringing the page back is re-adding a route, not rewriting the copy.
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
        'Estoy abierto a nuevas oportunidades como Full Stack Developer: en remoto desde Almedina (Ciudad Real), y abierto a híbrido. Escríbeme por el formulario, por correo directo o reserva media hora en mi calendario: lo que te resulte más cómodo.',
      formTitle: 'Envíame un mensaje',
      calendlyTitle: '¿Prefieres hablar directamente? Reserva una llamada',
      calendlyDescription:
        'Una llamada de 30 minutos, sin compromiso, para conocernos y ver si encajo en tu equipo.',
      calendlyCta: 'Reservar llamada',
      faqTitle: 'Antes de que escribas',
      faq: [
        {
          q: '¿Qué tipo de puesto estás buscando?',
          a: 'Full Stack Developer, preferiblemente donde el backend pese tanto como el frontend. Donde más aporto es en producto que ya está en producción: entregas con plazo cerrado (la exportación contable a Sage 50, la migración a GA4 en 2 meses), integraciones de pagos y facturación, y funcionalidades completas de extremo a extremo con sus tests. Ahora mismo me atraen especialmente los equipos que van hacia arquitecturas orientadas a eventos.',
        },
        {
          q: '¿Trabajas en remoto o presencial?',
          a: 'Principalmente en remoto: vivo en Almedina (Ciudad Real) y trabajo así con equipos distribuidos desde hace años. También estoy abierto a un híbrido si el proyecto y las condiciones lo justifican, y puedo desplazarme puntualmente para un arranque o un onboarding.',
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
      subtitle: '¿Buscas un Full Stack Developer para tu equipo? ¡Hablemos!',
      location: 'Almedina, Ciudad Real · Remoto o híbrido',
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
      bottomLine: 'Almedina, ES · Exp. nearly 5 yrs',
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
      experienceValue: 'nearly 5 yrs',
      stack: 'Stack',
      available: 'Open to offers',
    },
    hero: {
      availability: 'Open to new opportunities',
      greeting: "Hi, I'm",
      role: 'Full Stack Developer',
      tagline: 'Solid backend, React frontend and testing as standard.',
      description:
        'Nearly 5 years of experience in PHP/Symfony, Node.js and React/Next.js. Most recently: a recurring partner billing engine, SEPA collections with GoCardless and internal accounting libraries. Before that, on a product with over 1M monthly visits: fixed-deadline deliveries (accounting export to Sage 50, GA4 migration in 2 months), backend integration with GraphQL, OpenSearch and RabbitMQ queues, and React frontend work in multi-team projects. Testing comes as standard: on the frontend I took coverage from 0% to over 75%. Remote from Spain, open to hybrid.',
      btnProjects: 'See my Projects',
      btnContact: "Let's talk",
      btnCV: 'Download CV',
      calendlyHint: 'or book a 30-min interview directly',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Teams and products where I have built and maintained software in production.',
      entries: {
        grupie: {
          role: 'Full Stack Developer',
          dates: 'Dec 2025 – Oct 2026',
          bullets: [
            'Core product development in PHP/Symfony and Next.js/React.',
            'Designed and implemented the recurring billing engine for partners: daily contract cycle, prorating of cancellations and failure recovery.',
            'Backend services for external clients built with Fastify and PostgreSQL.',
            'Helped integrate the Lemonway payment gateway (wallets, direct debits, webhooks and KYC) and integrated GoCardless to automate SEPA collections.',
            'Built event RSVP end to end and, for the rest of the events feature, the frontend: editor and public page, guest list, survey model and en/es/fr internationalization.',
            'Created two internal libraries: media-url (images via imgproxy) and ledgers (accounting and invoicing with Holded integration).',
            'In the frontend projects, which had no tests, I established testing practice and took coverage from 0% to over 75%; I also built the e2e suite with Playwright from scratch.',
            'AI-assisted development workflows with layered verification: automated review by an independent agent, manual review and team code review before merging.',
          ],
        },
        theknot: {
          role: 'Software Engineer (full-stack)',
          dates: 'Nov 2022 – Nov 2025',
          bullets: [
            'Product serving 1M+ monthly visits across 10+ countries, within a 40+ person engineering organization and a team of 6 to 10.',
            "In a multi-team project with a very tight deadline, I took charge of the web part: I added to another team's React application a new route with its page, reusable components and custom hooks, following the project's conventions.",
            'Designed and implemented part of the backend integration of a cross-team project (HapiJS, GraphQL and OpenSearch over an index of millions of documents). In an architecture of 8+ services communicating through RabbitMQ queues, I added listeners with their endpoints and schemas, and created GraphQL resolvers in PayloadCMS.',
            "Developed features behind feature flags and validated them with A/B experiments in the company's in-house experiment manager.",
            "Planned and carried out the Universal Analytics to GA4 migration against Google's hard deadline, in 2 months and with no loss of business reporting continuity.",
            'Automated B2B/B2C accounting exports to Sage 50, removing 10+ hours of manual work per month and the data-loading errors.',
          ],
        },
        tigloo: {
          role: 'Full Stack Developer',
          dates: 'Dec 2021 – Oct 2022',
          bullets: [
            "Proposed and implemented the company's first GitLab CI/CD pipeline, replacing a manual deploy that meant repeating the change by hand across 4 machines from 4 simultaneous terminals.",
            'Maintenance and evolution of applications for a music rights company in PHP 5.4/5.5 and 7.4 with Symfony and AngularJS.',
            'Designed, developed and put into production, on my own, an endpoint for receiving third-party music consumption data, with short-lived token authentication.',
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
        full: 'Multi-repo SaaS for personal trainers and nutritionists: web dashboard, offline-first mobile app (WatermelonDB) and REST API. Client management, training and nutrition plans, check-ins and progress tracking. Deployed on self-hosted infra (Coolify) with PostgreSQL + Cloudflare R2.',
        outcome:
          'Trainers managing clients in spreadsheets → a multi-repo platform with an offline-first mobile app that centralizes plans, check-ins and progress.',
        stack:
          'Three repos against one PostgreSQL database with Prisma: a NestJS API, a Next.js dashboard and an Expo app. The app writes locally with WatermelonDB and syncs later, so a session can be logged with no signal. Files go to Cloudflare R2, not to the server.',
      },
      vereda: {
        home: 'No-code SaaS for sports event organizers: public website, admin panel, custom domain. Multi-tenant.',
        full: 'No-code SaaS platform for sports event organizers: public event website, admin panel, custom domain and multi-tenant management. Running on self-hosted infra with PostgreSQL + Cloudflare R2.',
        outcome:
          'Organizers hand-building event sites → a no-code multi-tenant SaaS with a public site and their own panel in minutes.',
        stack:
          'Multi-tenant from day one: every organizer gets their event, their panel and their domain on the same instance. Routing is decided from the request Host — path, subdomain or the tenant\'s own domain — so onboarding a client domain deploys nothing new: it is one more entry pointing at the same instance.',
      },
      medina: {
        home: 'Official landing for the II Medina Roja BTT challenge: event info and GPX routes on an interactive map.',
        full: 'Official landing site for the II Medina Roja BTT mountain bike challenge (2 routes, 30 and 50 km, Jul 4, 2026). Event info, interactive GPX track viewer with Leaflet, deployed on Vercel.',
        outcome:
          'A mountain-bike event with no site of its own → an official landing in production with GPX routes on an interactive map, info and contact.',
        stack:
          'The routes are real GPX files rendered on an interactive Leaflet map, not images: what a rider sees is the track they will actually ride. Static site, deployed on Vercel.',
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
        home: 'Gamified educational platform for children aged 3–14: coding, maths and science through interactive lessons, challenges, achievements and video-game-style progression.',
        full: 'Gamified educational platform for children aged 3–14: coding, maths and science through interactive lessons, a code editor, challenges, achievements and video-game-style progression.',
        outcome:
          'Teaching a 3–14-year-old to code, do maths and explore science from material written for adults → a platform where the lesson is a game and progress looks like one.',
        stack:
          'Game state — level, XP, daily streak — lives on the client with Zustand, and server data is read by Server Components straight from Prisma. The interface is translated with next-intl, and content adapts by age band within the 3-14 range.',
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
      stackNoteLabel: 'How it is built',
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
        Infraestructura: 'Infra / DevOps',
        'IA / LLMs': 'AI / LLMs',
      } as Record<string, string>,
      categoryIntros: {
        'Back-End':
          'This is where I spend most of my time. NestJS is my default for a new API — it backs Nexfit and Accounting Suite — but much of my career has been maintaining and evolving legacy PHP/Symfony, PHP 5.4 included. At The Knot Worldwide I designed and implemented my part of the backend integration of a cross-team project with HapiJS, GraphQL and OpenSearch, and created resolvers in PayloadCMS; at Grupie Labs I paired Symfony with Fastify services.',
        'Front-End':
          'React with Next.js and TypeScript is where I build almost all of the visible product. At The Knot Worldwide, in a multi-team project with a very tight deadline, I added to another team\'s React application a new route with its page, reusable components and custom hooks, and took part in migrating a team\'s components to its new Next.js design library. Off the web, the Nexfit mobile app runs on Expo with React Native and works offline-first: same mental model, different toolbox.',
        'Bases de Datos':
          'PostgreSQL is my default, with Prisma when the project is TypeScript. The least glamorous part — and the one that prevents the most pain — is modelling: in a multi-tenant SaaS like Vereda, deciding where the tenant identifier lives shapes everything that comes after. OpenSearch came in through the backend integration of a cross-team project at The Knot Worldwide.',
        Infraestructura:
          'Enough to take what I build to production and keep it alive. Docker on every project; RabbitMQ to decouple whatever must not block a request; Playwright for the tests that actually catch regressions. At Tigloo I proposed and built the company\'s first CI/CD pipeline. Kubernetes, AWS and Terraform show up in the context of projects I have worked on; I can find my way around them, but I do not sell them as a specialty.',
        'IA / LLMs':
          'I use AI inside the development cycle, not as decoration: Claude Code wired into the day-to-day, as I did at Grupie Labs, and the Claude API when a feature genuinely calls for it. MCP interests me for what it enables — connecting a model to your own tools and data under an explicit contract — and it is where most of my time goes right now.',
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
    // NOTE: `servicesPage` and `dashboardServices` are intentionally kept after
    // the /services route was removed (the site now speaks only to hiring, not
    // to freelance clients). Nothing renders them today; they stay so that
    // bringing the page back is re-adding a route, not rewriting the copy.
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
        'I am open to new opportunities as a Full Stack Developer: remote from Almedina (Ciudad Real, Spain), and open to hybrid. Reach me through the form, by direct email, or book half an hour in my calendar — whichever suits you.',
      formTitle: 'Send me a message',
      calendlyTitle: 'Prefer to talk directly? Book a call',
      calendlyDescription:
        'A free, no-commitment 30-minute call to get to know each other and see if I would be a good fit for your team.',
      calendlyCta: 'Book a call',
      faqTitle: 'Before you write',
      faq: [
        {
          q: 'What kind of role are you looking for?',
          a: 'Full Stack Developer, ideally where the backend carries as much weight as the frontend. Where I add the most is on products already in production: fixed-deadline deliveries (the accounting export to Sage 50, the GA4 migration in 2 months), payment and billing integrations, and complete features built end to end with their tests. Right now I am especially drawn to teams moving toward event-driven architectures.',
        },
        {
          q: 'Do you work remotely or on-site?',
          a: 'Primarily remote: I live in Almedina (Ciudad Real, Spain) and have worked this way with distributed teams for years. I am also open to a hybrid setup when the project and the terms justify it, and I can travel occasionally for a kick-off or onboarding.',
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
      subtitle: "Looking for a Full Stack Developer for your team? Let's talk!",
      location: 'Almedina, Ciudad Real, Spain · Remote or hybrid',
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
