export const languages = {
  ca: "Català",
  en: "English",
  es: "Español",
};

export const defaultLang = "ca";

export const ui = {
  ca: {
    // META
    meta: {
      description:
        "Portfolio professional de Ernest Anguera, enginyer informàtic amb enfocament en experiències digitals modernes, React, JavaScript i Astro.",
    },

    // NAV
    heroNav: [
      { title: "Projectes", label: "Projectes", href: "#projects" },
      { title: "Experiència", label: "Experiència", href: "#experience" },
      { title: "Sobre mi", label: "Sobre mi", href: "#about" },
      { title: "Contacte", label: "Contacte", href: "#contact" },
    ],

    // TÍTULOS
    titles: {
      about: "Sobre mi",
      projects: "Projectes",
      experience: "Experiència",
      contact: "Contacte",
      about_me: "Sobre mi",
      skills: "Habilitats",
      stats: "Disponible per a projectes",
      viewGithub: "Veure a GitHub",
      language: "Idioma",
    },

    // PROFILE
    profile: {
      intro: "Hola, sóc",
      name: "Ernest Anguera",
      role: "Enginyer Informàtic",
      location: "Barcelona, Espanya",
      tagline:
        "Graduat en Enginyeria Informàtica amb experiència en desenvolupament de programari i passió per la ciberseguretat.",
      available: true,
      talk: "Parlem",
      github: "https://github.com/ernang",
      email: "nestanguera@gmail.com",
    },

    // STATS
    stats: [
      { value: "4+", label: "Anys programant", color: "#7c5cff" },
      { value: "15+", label: "Projectes", color: "#00c2a8" },
      { value: "∞", label: "Ganes d'aprendre", color: "#ff7a45" },
    ],

    // PROJECTS
    projects: [
      {
        title: "ClimaMania - La teva app del temps",
        description:
          "Aplicació mòbil per consultar el temps. Desenvolupada amb React Native i Expo.",
        github: "https://github.com/eur1p3des/climaMania",
        image: "/images/projects/climamania.png",
        tags: [
          {
            value: "TAGS.EXPO",
          },
          {
            value: "TAGS.REACT_NATIVE",
          },
          {
            value: "TAGS.TAILWIND",
          },
        ],
      },
      {
        title: "Checkers - Jugador IDS",
        description: "Jugador de dames utilitzant l'algorisme IDS amb MinMax.",
        github: "https://github.com/eur1p3des/Checkers",
        image: "/images/projects/checkers.webp",
        tags: [
          {
            value: "TAGS.JAVA",
          },
        ],
      },
      {
        title: "THC - Terrible Hackiemos Cracktool",
        description:
          "Cracktool per identificar vulnerabilitats i millorar la seguretat d'un sistema.",
        github: "https://github.com/eur1p3des/THC",
        image: "/images/projects/thc.webp",
        tags: [
          {
            value: "TAGS.JAVASCRIPT",
          },
          {
            value: "TAGS.SHELL",
          },
          {
            value: "TAGS.HTML",
          },
          {
            value: "TAGS.CSS",
          },
        ],
      },
    ],

    // EXPERIENCE
    experience: [
      {
        company: "EY",
        role: "Desenvolupador ABAP Junior",
        period: "Març 2025 — Actualitat",
        detail:
          "Desenvolupament i manteniment de mòduls SAP per a clients del sector hoteler.",
        mark: "EY",
        color: "bg-[#ffe600]",
      },
      {
        company: "Carrefour",
        role: "Auxiliar de Caixa",
        period: "Juliol 2024 — Agost 2024",
        detail:
          "Contracte temporal d'estiu. Atenció al client i gestió de caixa.",
        mark: "CF",
        color: "bg-[#e2231a]",
      },
      {
        company: "Kereis Iberia",
        role: "Tècnic de Xarxes i Equips",
        period: "Febrer 2021 — Maig 2021",
        detail:
          "Contracte en pràctiques. Muntatge, configuració i suport de la xarxa interna.",
        mark: "KI",
        color: "bg-[#2f7fd1]",
      },
    ],

    // ABOUT
    about: {
      title: "Sobre mi",
      text1:
        "Soc enginyer informàtic i m'apassiona entendre com funcionen les coses per dins, sobretot quan es trenquen. Vaig començar remenant xarxes i equips, i vaig acabar enamorant-me del desenvolupament de programari i de la ciberseguretat.",
      text2:
        "Actualment treballo amb SAP i ABAP, però continuo construint projectes propis a les tardes: aplicacions mòbils, algorismes de joc i eines de seguretat. Sempre buscant aprendre alguna cosa nova.",
    },

    // SKILLS
    skills: [
      {
        group: "Llenguatges",
        items: [
          { name: "JavaScript", color: "bg-[#b8a11c]", text: "text-[#141310]" },
          { name: "TypeScript", color: "bg-[#2f6fc0]", text: "text-[#ffffff]" },
          { name: "Java", color: "bg-[#1f4b7a]", text: "text-[#ffffff]" },
          { name: "Python", color: "bg-[#3a6ea5]", text: "text-[#ffffff]" },
          { name: "ABAP", color: "bg-[#5b5bd6]", text: "text-[#ffffff]" },
          {
            name: "Ruby on Rails",
            color: "bg-[#cc342d]",
            text: "text-[#ffffff]",
          },
        ],
      },
      {
        group: "Tecnologies",
        items: [
          { name: "React", color: "bg-[#177f8f]", text: "text-[#ffffff]" },
          {
            name: "React Native",
            color: "bg-[#0b6e8c]",
            text: "text-[#ffffff]",
          },
          { name: "Node.js", color: "bg-[#3d7a34]", text: "text-[#ffffff]" },
          { name: "SAP", color: "bg-[#0a6ed1]", text: "text-[#ffffff]" },
          { name: "Git", color: "bg-[#c04a26]", text: "text-[#ffffff]" },
          { name: "Astro", color: "bg-[#8F0595]", text: "text-[#ffffff]" },
        ],
      },
      {
        group: "IT & Sistemes",
        items: [
          { name: "Linux", color: "bg-[#5a5a2e]", text: "text-[#ffffff]" },
          { name: "Xarxes", color: "bg-[#3f6b8f]", text: "text-[#ffffff]" },
          { name: "Docker", color: "bg-[#2496ED]", text: "text-[#ffffff]" },
          {
            name: "Virtualització",
            color: "bg-[#6b4fa3]",
            text: "text-[#ffffff]",
          },
          {
            name: "Bases de Dades",
            color: "bg-[#2d7d46]",
            text: "text-[#ffffff]",
          },
          {
            name: "Ciberseguretat",
            color: "bg-[#a63d55]",
            text: "text-[#ffffff]",
          },
        ],
      },
    ],

    // CONTACT
    contact: {
      title: "Contacte",
      text1: "Treballem ",
      text2: "junts",
      text3: "?",
      text4:
        "Estic obert a nous projectes i oportunitats. Escriu-me i et respondré aviat.",
    },

    // SOCIAL
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/ernang",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#30363d] text-white bg-[linear-gradient(90deg,#24292e,#3d444d)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:bg-[linear-gradient(90deg,#3d444d,#24292e)]",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ernestanguera/",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#0a66c2] text-white bg-[linear-gradient(90deg,#0a66c2,#378fe9)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/40 hover:bg-[linear-gradient(90deg,#378fe9,#0a66c2)]",
      },
      {
        label: "Currículum",
        href: "https://cv-ernest-anguera.netlify.app/",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#ea4335] text-white bg-[linear-gradient(90deg,#ea4335,#fbbc05)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-900/40 hover:bg-[linear-gradient(90deg,#fbbc05,#ea4335)]",
      },
    ],
    footer: {
      text: "Fet amb Astro i Tailwind CSS · Barcelona",
    },
  },
  es: {
    // META
    meta: {
      description:
        "Portfolio profesional de Ernest Anguera, ingeniero informático con enfoque en experiencias digitales modernas, React, JavaScript y Astro.",
    },

    // NAV
    heroNav: [
      { title: "Proyectos", label: "Proyectos", href: "#projects" },
      { title: "Experiencia", label: "Experiencia", href: "#experience" },
      { title: "Sobre", label: "Sobre", href: "#about" },
      { title: "Contacto", label: "Contacto", href: "#contact" },
    ],

    // TÍTULOS
    titles: {
      about: "Sobre",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      about_me: "Sobre mí",
      skills: "Habilidades",
      stats: "Disponible para proyectos",
      viewGithub: "Ver en GitHub",
      language: "Idioma",
    },

    // PROFILE
    profile: {
      intro: "Hola, soy",
      name: "Ernest Anguera",
      role: "Ingeniero Informático",
      location: "Barcelona, España",
      tagline:
        "Graduado en Ingeniería Informática con experiencia en desarrollo de software y pasión por la ciberseguridad.",
      available: true,
      talk: "Hablemos",
      github: "https://github.com/ernang",
      email: "nestanguera@gmail.com",
    },

    // STATS
    stats: [
      { value: "4+", label: "Años programando", color: "#7c5cff" },
      { value: "15+", label: "Proyectos", color: "#00c2a8" },
      { value: "∞", label: "Ganas de aprender", color: "#ff7a45" },
    ],

    // PROJECTS
    projects: [
      {
        title: "ClimaMania - Tu app del tiempo",
        description:
          "Aplicación móbil para consultar el tiempo. Desarrollada con React Native y Expo.",
        github: "https://github.com/eur1p3des/climaMania",
        image: "/images/projects/climamania.png",
        tags: [
          {
            value: "TAGS.EXPO",
          },
          {
            value: "TAGS.REACT_NATIVE",
          },
          {
            value: "TAGS.TAILWIND",
          },
        ],
      },
      {
        title: "Checkers - Jugador IDS",
        description: "Jugador de Damas usando el algoritmo IDS con MinMax.",
        github: "https://github.com/eur1p3des/Checkers",
        image: "/images/projects/checkers.webp",
        tags: [
          {
            value: "TAGS.JAVA",
          },
        ],
      },
      {
        title: "THC - Terrible Hackiemos Cracktool",
        description:
          "Cracktool para identificar vulnerabilidades y mejorar la seguridad de un sistema.",
        github: "https://github.com/eur1p3des/THC",
        image: "/images/projects/thc.webp",
        tags: [
          {
            value: "TAGS.JAVASCRIPT",
          },
          {
            value: "TAGS.SHELL",
          },
          {
            value: "TAGS.HTML",
          },
          {
            value: "TAGS.CSS",
          },
        ],
      },
    ],

    // EXPERIENCE
    experience: [
      {
        company: "EY",
        role: "ABAP Junior Developer",
        period: "Marzo 2025 — Actualidad",
        detail:
          "Desarrollo y mantenimiento de módulos SAP para clientes del sector hotelero.",
        mark: "EY",
        color: "bg-[#ffe600]",
      },
      {
        company: "Carrefour",
        role: "Auxiliar de Caja",
        period: "Julio 2024 — Agosto 2024",
        detail:
          "Contrato temporal de verano. Atención al cliente y gestión de caja.",
        mark: "CF",
        color: "bg-[#e2231a]",
      },
      {
        company: "Kereis Iberia",
        role: "Técnico de Redes y Equipos",
        period: "Febrero 2021 — Mayo 2021",
        detail:
          "Contrato en prácticas. Montaje, configuración y soporte de red interna.",
        mark: "KI",
        color: "bg-[#2f7fd1]",
      },
    ],

    // ABOUT
    about: {
      title: "Sobre mí",
      text1:
        "Soy ingeniero informático y me apasiona entender cómo funcionan las cosas por dentro — sobre todo cuando se rompen. Empecé trasteando con redes y equipos, y acabé enamorado del desarrollo de software y de la ciberseguridad.",
      text2:
        "Actualmente trabajo con SAP y ABAP, pero sigo construyendo proyectos propios por las tardes: apps móviles, algoritmos de juego y herramientas de seguridad. Siempre buscando aprender algo nuevo.",
    },

    // SKILLS
    skills: [
      {
        group: "Lenguajes",
        items: [
          { name: "JavaScript", color: "bg-[#b8a11c]", text: "text-[#141310]" },
          { name: "TypeScript", color: "bg-[#2f6fc0]", text: "text-[#ffffff]" },
          { name: "Java", color: "bg-[#1f4b7a]", text: "text-[#ffffff]" },
          { name: "Python", color: "bg-[#3a6ea5]", text: "text-[#ffffff]" },
          { name: "ABAP", color: "bg-[#5b5bd6]", text: "text-[#ffffff]" },
          {
            name: "Ruby on Rails",
            color: "bg-[#cc342d]",
            text: "text-[#ffffff]",
          },
        ],
      },
      {
        group: "Tecnologías",
        items: [
          { name: "React", color: "bg-[#177f8f]", text: "text-[#ffffff]" },
          {
            name: "React Native",
            color: "bg-[#0b6e8c]",
            text: "text-[#ffffff]",
          },
          { name: "Node.js", color: "bg-[#3d7a34]", text: "text-[#ffffff]" },
          { name: "SAP", color: "bg-[#0a6ed1]", text: "text-[#ffffff]" },
          { name: "Git", color: "bg-[#c04a26]", text: "text-[#ffffff]" },
          { name: "Astro", color: "bg-[#8F0595]", text: "text-[#ffffff]" },
        ],
      },
      {
        group: "IT & Sistemas",
        items: [
          { name: "Linux", color: "bg-[#5a5a2e]", text: "text-[#ffffff]" },
          { name: "Redes", color: "bg-[#3f6b8f]", text: "text-[#ffffff]" },
          { name: "Docker", color: "bg-[#2496ED]", text: "text-[#ffffff]" },
          {
            name: "Virtualización",
            color: "bg-[#6b4fa3]",
            text: "text-[#ffffff]",
          },
          {
            name: "Bases de Datos",
            color: "bg-[#2d7d46]",
            text: "text-[#ffffff]",
          },
          {
            name: "Ciberseguridad",
            color: "bg-[#a63d55]",
            text: "text-[#ffffff]",
          },
        ],
      },
    ],

    // CONTACT
    contact: {
      title: "Contacto",
      text1: "¿Trabajamos ",
      text2: "juntos",
      text3: "?",
      text4:
        "Estoy abierto a nuevos proyectos y oportunidades. Escríbeme y te respondo pronto.",
    },

    // SOCIAL
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/ernang",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#30363d] text-white bg-[linear-gradient(90deg,#24292e,#3d444d)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:bg-[linear-gradient(90deg,#3d444d,#24292e)]",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ernestanguera/",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#0a66c2] text-white bg-[linear-gradient(90deg,#0a66c2,#378fe9)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/40 hover:bg-[linear-gradient(90deg,#378fe9,#0a66c2)]",
      },
      {
        label: "Currículum",
        href: "https://cv-ernest-anguera.netlify.app/es",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#ea4335] text-white bg-[linear-gradient(90deg,#ea4335,#fbbc05)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-900/40 hover:bg-[linear-gradient(90deg,#fbbc05,#ea4335)]",
      },
    ],

    footer: {
      text: "Hecho con Astro y Tailwind CSS · Barcelona",
    },
  },

  en: {
    // META
    meta: {
      description:
        "Professional portfolio of Ernest Anguera, computer engineer focused on modern digital experiences, React, JavaScript, and Astro.",
    },

    // NAV
    heroNav: [
      { title: "Projects", label: "Projects", href: "#projects" },
      { title: "Experience", label: "Experience", href: "#experience" },
      { title: "About", label: "About", href: "#about" },
      { title: "Contact", label: "Contact", href: "#contact" },
    ],

    // TITLES
    titles: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      about_me: "About Me",
      skills: "Skills",
      stats: "Available for projects",
      viewGithub: "View on GitHub",
      language: "Language",
    },
    // PROFILE
    profile: {
      intro: "Hi, I'm",
      name: "Ernest Anguera",
      role: "Software Engineer",
      location: "Barcelona, Spain",
      tagline:
        "Computer Engineering graduate with software development experience and a passion for cybersecurity.",
      available: true,
      talk: "Let's talk",
      github: "https://github.com/ernang",
      email: "nestanguera@gmail.com",
    },

    stats: [
      { value: "4+", label: "Years Coding", color: "#7c5cff" },
      { value: "15+", label: "Projects", color: "#00c2a8" },
      { value: "∞", label: "Desire to Learn", color: "#ff7a45" },
    ],

    projects: [
      {
        title: "ClimaMania - Your weather app",
        description:
          "Mobile application to check the weather. Developed with React Native and Expo.",
        github: "https://github.com/eur1p3des/climaMania",
        image: "/images/projects/climamania.png",
        tags: [
          {
            value: "TAGS.EXPO",
          },
          {
            value: "TAGS.REACT_NATIVE",
          },
          {
            value: "TAGS.TAILWIND",
          },
        ],
      },
      {
        title: "Checkers - IDS Player",
        description: "Automatic Checkers player using IDS and MinMax pruning.",
        github: "https://github.com/eur1p3des/Checkers",
        image: "/images/projects/checkers.webp",
        tags: [
          {
            value: "TAGS.JAVA",
          },
        ],
      },
      {
        title: "THC - Terrible Hackiemos Cracktool",
        description:
          "Cracktool to identify vulnerabilities and improve the security of a system.",
        github: "https://github.com/eur1p3des/THC",
        image: "/images/projects/thc.webp",
        tags: [
          {
            value: "TAGS.JAVASCRIPT",
          },
          {
            value: "TAGS.SHELL",
          },
          {
            value: "TAGS.HTML",
          },
          {
            value: "TAGS.CSS",
          },
        ],
      },
    ],

    experience: [
      {
        company: "EY",
        role: "ABAP Junior Developer",
        period: "March 2025 — Present",
        detail:
          "Development and maintenance of SAP modules for hospitality clients.",
        mark: "EY",
        color: "bg-[#ffe600]",
      },
      {
        company: "Carrefour",
        role: "Cashier Assistant",
        period: "July 2024 — August 2024",
        detail:
          "Temporary summer contract. Customer service and cash register management.",
        mark: "CF",
        color: "bg-[#e2231a]",
      },
      {
        company: "Kereis Iberia",
        role: "Network & Hardware Technician",
        period: "February 2021 — May 2021",
        detail:
          "Internship focused on network deployment and technical support.",
        mark: "KI",
        color: "bg-[#2f7fd1]",
      },
    ],

    about: {
      title: "About Me",
      text1:
        "I am a computer engineer with a passion for understanding how things work internally — especially when they break. I started tinkering with networks and hardware, and eventually fell in love with software development and cybersecurity.",
      text2:
        "Currently, I work with SAP and ABAP, but I continue to build personal projects in my free time: mobile apps, game algorithms, and security tools. Always looking to learn something new.",
    },

    skills: [
      {
        group: "Languages",
        items: [
          { name: "JavaScript", color: "bg-[#b8a11c]", text: "text-[#141310]" },
          { name: "TypeScript", color: "bg-[#2f6fc0]", text: "text-[#ffffff]" },
          { name: "Java", color: "bg-[#1f4b7a]", text: "text-[#ffffff]" },
          { name: "Python", color: "bg-[#3a6ea5]", text: "text-[#ffffff]" },
          { name: "ABAP", color: "bg-[#5b5bd6]", text: "text-[#ffffff]" },
          {
            name: "Ruby on Rails",
            color: "bg-[#cc342d]",
            text: "text-[#ffffff]",
          },
        ],
      },
      {
        group: "Technologies",
        items: [
          { name: "React", color: "bg-[#177f8f]", text: "text-[#ffffff]" },
          {
            name: "React Native",
            color: "bg-[#0b6e8c]",
            text: "text-[#ffffff]",
          },
          { name: "Node.js", color: "bg-[#3d7a34]", text: "text-[#ffffff]" },
          { name: "SAP", color: "bg-[#0a6ed1]", text: "text-[#ffffff]" },
          { name: "Git", color: "bg-[#c04a26]", text: "text-[#ffffff]" },
          { name: "Astro", color: "bg-[#8F0595]", text: "text-[#ffffff]" },
        ],
      },
      {
        group: "IT & Systems",
        items: [
          { name: "Linux", color: "bg-[#5a5a2e]", text: "text-[#ffffff]" },
          { name: "Networking", color: "bg-[#3f6b8f]", text: "text-[#ffffff]" },
          { name: "Docker", color: "bg-[#2496ED]", text: "text-[#ffffff]" },
          {
            name: "Virtualization",
            color: "bg-[#6b4fa3]",
            text: "text-[#ffffff]",
          },
          {
            name: "Databases",
            color: "bg-[#2d7d46]",
            text: "text-[#ffffff]",
          },
          {
            name: "Cybersecurity",
            color: "bg-[#a63d55]",
            text: "text-[#ffffff]",
          },
        ],
      },
    ],

    contact: {
      title: "Contact",
      text1: "Shall we ",
      text2: "work",
      text3: " together?",
      text4:
        "I am open to new projects and opportunities. Drop me a message and I will get back to you soon.",
    },

    socials: [
      {
        label: "GitHub",
        href: "https://github.com/ernang",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#30363d] text-white bg-[linear-gradient(90deg,#24292e,#3d444d)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:bg-[linear-gradient(90deg,#3d444d,#24292e)]",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ernestanguera/",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#0a66c2] text-white bg-[linear-gradient(90deg,#0a66c2,#378fe9)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/40 hover:bg-[linear-gradient(90deg,#378fe9,#0a66c2)]",
      },
      {
        label: "Resume",
        href: "https://cv-ernest-anguera.netlify.app/en",
        style:
          "inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-sm font-medium no-underline border border-[#ea4335] text-white bg-[linear-gradient(90deg,#ea4335,#fbbc05)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-900/40 hover:bg-[linear-gradient(90deg,#fbbc05,#ea4335)]",
      },
    ],
    footer: {
      text: "Made with Astro & Tailwind CSS · Barcelona",
    },
  },
} as const;
