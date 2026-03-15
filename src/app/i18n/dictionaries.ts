export type Locale = 'es' | 'en';

export const dictionaries = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    footer: {
      tagline: 'Desarrollado con Next.js y amor',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Full-Stack Developer',
      specializationPrefix: 'Especializado en',
      specialization: 'Arquitectura de Back-End',
      btnProjects: 'Ver mis Proyectos',
      btnContact: 'Contáctame',
    },
    dashboardProjects: {
      title: 'Mis Proyectos Más Recientes',
      subtitle: 'Échale un vistazo a las soluciones que he diseñado y construido.',
      seeAll: 'Ver Todos los Proyectos',
      items: [
        {
          name: 'Accounting Suite',
          description:
            'App de contabilidad para pequeños negocios: REST API en NestJS + dashboard Next.js con transacciones, presupuestos e informes diarios.',
          stack: 'NestJS, Next.js 15, PostgreSQL, Prisma, Redux Toolkit, Chart.js.',
        },
        {
          name: 'Curio',
          description:
            'Plataforma educativa gamificada para niños de 3–14 años con lecciones interactivas, editor de bloques y progresión estilo videojuego.',
          stack: 'Next.js 16, Prisma, Zustand, TanStack Query, TypeScript.',
        },
        {
          name: 'Soluciones Integrales',
          description:
            'Sistema de gestión de aseguradoras multi-rol con registro de asegurados y averías. PHP con patrón MVC.',
          stack: 'PHP, MVC, MySQL, HTML/CSS.',
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
      ],
    },
    projectsPage: {
      title: 'Portafolio de Proyectos',
      subtitle:
        'Proyectos reales: APIs REST con NestJS, plataformas full-stack con Next.js y sistemas con patrón MVC.',
      liveBtn: 'En Vivo',
      codeBtn: 'Código',
      items: [
        {
          shortDescription:
            'App de contabilidad para pequeños negocios con demo en vivo en accounting.jjpg.dev. REST API en NestJS + dashboard Next.js con transacciones, informes diarios, presupuestos y recurrentes.',
        },
        {
          shortDescription:
            'Plataforma educativa gamificada para niños de 3–14 años: lecciones interactivas, desafíos, logros y progresión estilo videojuego.',
        },
        {
          shortDescription:
            'Gestión de aseguradoras con sistema multi-rol (admin / empresa), registro de asegurados y averías. PHP con patrón MVC.',
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
      } as Record<string, string>,
      levels: {
        expert: 'Experto',
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico',
      },
    },
    contactPage: {
      title: 'Ponte en Contacto',
      formTitle: 'Envíame un mensaje',
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
      skills: 'Skills',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Built with Next.js and love',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full-Stack Developer',
      specializationPrefix: 'Specialized in',
      specialization: 'Back-End Architecture',
      btnProjects: 'See my Projects',
      btnContact: 'Contact me',
    },
    dashboardProjects: {
      title: 'My Latest Projects',
      subtitle: 'Take a look at the solutions I have designed and built.',
      seeAll: 'See All Projects',
      items: [
        {
          name: 'Accounting Suite',
          description:
            'Accounting app for small businesses: NestJS REST API + Next.js dashboard with transactions, budgets, recurring entries and daily reports.',
          stack: 'NestJS, Next.js 15, PostgreSQL, Prisma, Redux Toolkit, Chart.js.',
        },
        {
          name: 'Curio',
          description:
            'Gamified educational platform for children aged 3–14 with interactive lessons, block editor, and video-game-style progression.',
          stack: 'Next.js 16, Prisma, Zustand, TanStack Query, TypeScript.',
        },
        {
          name: 'Soluciones Integrales',
          description:
            'Multi-role insurance management system with insured and breakdown registration. PHP with MVC pattern.',
          stack: 'PHP, MVC, MySQL, HTML/CSS.',
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
      ],
    },
    projectsPage: {
      title: 'Project Portfolio',
      subtitle:
        'Real projects: REST APIs with NestJS, full-stack platforms with Next.js, and MVC systems.',
      liveBtn: 'Live Demo',
      codeBtn: 'Code',
      items: [
        {
          shortDescription:
            'Accounting app for small businesses with live demo at accounting.jjpg.dev. NestJS REST API + Next.js dashboard with daily transactions, reports, budgets and recurring entries.',
        },
        {
          shortDescription:
            'Gamified educational platform for children aged 3–14: interactive lessons, challenges, achievements and video-game-style progression.',
        },
        {
          shortDescription:
            'Insurance company management with a multi-role system (admin / company), insured and breakdown registration. PHP with MVC pattern.',
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
      } as Record<string, string>,
      levels: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic',
      },
    },
    contactPage: {
      title: 'Get in Touch',
      formTitle: 'Send me a message',
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
