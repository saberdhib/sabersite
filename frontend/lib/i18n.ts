export type Language = "en" | "fr";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Engagements",
      projects: "Projects",
      architectures: "Architectures",
      knowledge: "Knowledge",
      chat: "Chat",
      social: "Presence",
      events: "Events",
      contact: "Contact",
    },
    footer: {
      legal: "Legal",
      contact: "Contact",
      privacy: "Privacy & AI Ethics",
    },
    chat: {
      title: "Ask Saber",
      subtitle: "AI assistant coming soon",
      description:
        "This chat will soon connect to curated projects, architectures, and writing from my knowledge base.",
      placeholder:
        "Ask about architecture decisions, RAG systems, or recent projects...",
      button: "Start chat",
      toggleLabel: "Use my knowledge base",
      sending: "Searching sources...",
      sources: "Sources",
    },
    home: {
      eyebrow: "AI Solution Architect",
      headline:
        "Building calm, scalable AI systems and data platforms that teams can trust.",
      subheadline:
        "I design end-to-end architectures that turn complex data into reliable products — from strategy to deployment.",
      chips: ["AI strategy & delivery", "Data platforms", "RAG-ready architecture"],
      ctaPrimary: "Ask Saber",
      ctaSecondary: "See projects",
      previewTitle: "AI assistant preview",
      previewQuestion:
        "“How would you design a scalable RAG system for a knowledge base?”",
      previewStatus: "Generating answer",
      focusTitle: "Architectural focus",
      focusDescription:
        "Systems thinking, data lineage, and AI governance aligned to product outcomes.",
    },
    about: {
      title: "About",
      toc: [
        "Introduction",
        "Background & Journey",
        "What I Do",
        "Expertise & Skills",
        "Industries & Domains",
        "Certifications & Education",
        "Languages",
        "Values & Vision",
        "Call to Action",
      ],
      introduction: {
        heading: "Introduction",
        paragraphs: [
          "I’m an AI Solution Architect with a strong technical background in applied mathematics, data engineering, and artificial intelligence.",
          "I design AI systems that move from strategy to production, with a focus on reliability, scalability, and real business impact.",
        ],
      },
      journey: {
        heading: "Background & Journey",
        paragraphs: [
          "My background combines applied mathematics, economics, and AI engineering.",
          "I started with a bachelor’s degree in applied mathematics, followed by a master’s degree specialized in data, AI, and business.",
          "Early in my career, I worked as an Analytics Engineer at GL Events, where I helped design and deploy a data platform serving as a foundation for analytics and AI projects. This experience gave me a strong understanding of data as infrastructure, not just reporting.",
          "Today, I work as an AI Solution & Innovation specialist at ESCP Business School, supporting AI initiatives across the institution: solution design, project delivery, internal team enablement, and AI acculturation for students and staff.",
        ],
      },
      whatIDo: {
        heading: "What I Do",
        intro:
          "I specialize in turning AI ambition into delivered systems. My work typically spans:",
        items: [
          "AI & data strategy definition",
          "Architecture design (data platforms, GenAI, RAG systems)",
          "End-to-end implementation and deployment",
          "Team enablement and AI literacy",
        ],
      },
      expertise: {
        heading: "Expertise & Skills",
        items: [
          "AI strategy",
          "Solution architecture",
          "Data platforms",
          "MLOps",
          "GenAI",
          "RAG pipelines",
          "Cloud architectures",
          "Python",
          "SQL",
          "Analytics engineering",
          "System design",
        ],
      },
      domains: {
        heading: "Industries & Domains",
        items: [
          "Retail",
          "Luxury",
          "Sport",
          "Health",
          "Education",
          "Supply chain",
          "Technology",
        ],
      },
      certifications: {
        heading: "Certifications & Education",
        items: [
          "Bachelor’s degree in applied mathematics.",
          "Master’s degree in data, AI, and business.",
          "Google certifications (ongoing).",
        ],
      },
      languages: {
        heading: "Languages",
        items: ["French", "English", "Arabic"],
      },
      vision: {
        heading: "Values & Vision",
        paragraphs: [
          "I believe in human-first AI: systems designed for people, not the other way around.",
          "I’m revenue-driven but product-focused, prioritizing solutions that scale, last, and can be maintained.",
          "I also care deeply about knowledge sharing, through live sessions, courses, and content, to make AI more accessible and less opaque.",
        ],
      },
      cta: {
        heading: "Call to Action",
        text:
          "If you want to discuss an AI project, a role, or a collaboration, feel free to start a conversation or explore my projects and architectures.",
        primary: "Start a conversation",
        secondary: "View projects",
        tertiary: "View architectures",
      },
    },
    projects: {
      title: "Projects",
      intro:
        "A focused selection of delivered systems that highlight how I translate AI ambition into production-ready architecture.",
      labels: {
        problem: "Problem",
        solution: "Solution",
        tech: "Tech",
        impact: "Impact",
      },
      items: [
        {
          name: "agent-breakout",
          description:
            "A compact AI agent system designed to explore autonomous workflows and orchestration patterns.",
          tags: ["AI", "Agents", "Systems"],
          problem:
            "Needed a controllable way to test agent behaviors and planning loops without production risk.",
          solution:
            "Built a modular agent sandbox with defined roles, prompts, and evaluation hooks.",
          tech: "Python, orchestration patterns, prompt design.",
          impact:
            "Accelerated experimentation cycles and clarified the architecture for multi-agent workflows.",
        },
        {
          name: "mlops-chestxray",
          description:
            "A healthcare ML pipeline that moves from model training to deployment readiness.",
          tags: ["MLOps", "Healthcare", "Deployment"],
          problem:
            "Model experimentation lacked a reliable path to deployment and monitoring.",
          solution:
            "Designed an end-to-end MLOps workflow with repeatable training and deployable artifacts.",
          tech: "Python, ML tooling, pipelines.",
          impact:
            "Improved reproducibility and made the model lifecycle production-friendly.",
        },
        {
          name: "sabersite",
          description:
            "A full-stack personal platform built to support AI content, portfolio, and future RAG features.",
          tags: ["Full-stack", "RAG-ready", "Product"],
          problem:
            "Needed a credible, scalable personal platform beyond a static portfolio.",
          solution:
            "Built a modular web architecture with clear content structure and API layer.",
          tech: "Next.js, FastAPI, TypeScript.",
          impact:
            "Created a durable foundation for content, client interactions, and future AI features.",
        },
      ],
    },
    services: {
      title: "Engagements",
      intro:
        "I partner with organizations to move from AI intent to delivered systems, with clear outcomes and long-term ownership.",
      labels: {
        outcomes: "Outcomes",
      },
      engagements: [
        {
          title: "Strategy & Architecture",
          description:
            "Define the AI roadmap, target architecture, and the data foundation needed to scale.",
          outcomes: [
            "Clear technical direction",
            "Aligned stakeholders",
            "Delivery-ready architecture",
          ],
        },
        {
          title: "Build & Delivery",
          description:
            "Design and ship end-to-end solutions, from data pipelines to AI services in production.",
          outcomes: [
            "Production-grade systems",
            "Reliable data workflows",
            "Measurable product impact",
          ],
        },
        {
          title: "Advisory & Enablement",
          description:
            "Support teams with decisions, reviews, and the capability to own and scale AI safely.",
          outcomes: [
            "Stronger engineering maturity",
            "Risk-aware execution",
            "Sustainable AI adoption",
          ],
        },
        {
          title: "Education & Knowledge Sharing",
          description:
            "Enable teams and leaders through workshops, sessions, and practical AI training.",
          outcomes: [
            "Shared AI vocabulary",
            "Higher internal adoption",
            "Practical, applied skills",
          ],
        },
      ],
      who: {
        heading: "Who I Work With",
        text:
          "Companies, institutions, and teams looking to build reliable AI and data systems with measurable outcomes.",
      },
      cta: {
        heading: "Start a conversation",
        text:
          "If you are exploring an AI initiative or need a trusted architecture partner, let’s connect.",
        primary: "Open chat",
        secondary: "Contact",
      },
    },
    social: {
      title: "Presence",
      intro:
        "A curated set of channels where I share applied AI insights, systems thinking, and delivery learnings.",
      twitch: {
        eyebrow: "Live channel",
        title: "Twitch sessions on AI systems",
        description:
          "Live coding, architecture breakdowns, and real-time experiments focused on practical AI delivery.",
        status: "Offline",
        cta: "Watch on Twitch",
        quote: "Building in public helps keep systems honest and decisions grounded.",
        iframeTitle: "Twitch live player",
      },
      platforms: [
        {
          name: "LinkedIn",
          description: "Professional insights, architecture notes, and project updates.",
          action: "Visit",
          url: "https://www.linkedin.com/in/saberdhib/",
        },
        {
          name: "YouTube",
          description: "Long-form walkthroughs of AI systems and delivery stories.",
          action: "Watch",
          url: "#",
        },
        {
          name: "Twitch",
          description: "Live coding sessions and AI experimentation in public.",
          action: "Follow",
          url: "https://www.twitch.tv/hanoutiier",
        },
        {
          name: "X / Twitter",
          description: "Short-form ideas, notes, and architecture signals.",
          action: "Follow",
          url: "https://x.com/SaberDhib",
        },
        {
          name: "Instagram / TikTok",
          description: "Short-form distribution and behind-the-scenes learning.",
          action: "Visit",
          url: "#",
        },
      ],
      cta: {
        heading: "Stay in touch",
        text: "If a collaboration or conversation would be helpful, reach out.",
        primary: "Open chat",
        secondary: "Contact",
      },
    },
    events: {
      title: "Events",
      intro:
        "Events help me stay connected to the AI and data ecosystem while sharing practical delivery learnings.",
      labels: {
        role: "Role",
        topic: "Topic",
        location: "Location",
      },
      items: [
        {
          year: "2024",
          name: "AI & Data Community Meetup",
          context: "Peer exchange on applied AI delivery",
          role: "Participant",
          topic: "Production AI patterns",
          location: "Paris, FR",
        },
        {
          year: "2023",
          name: "Architecture Workshop",
          context: "Hands-on session with data teams",
          role: "Instructor",
          topic: "Data platform design",
          location: "Lyon, FR",
        },
        {
          year: "2023",
          name: "University Guest Session",
          context: "Academic session on AI systems",
          role: "Speaker",
          topic: "RAG systems overview",
          location: "Paris, FR",
        },
      ],
      cta: {
        heading: "Invite me",
        text: "If you are organizing an event or panel, I’m open to joining the conversation.",
        primary: "Start a conversation",
        secondary: "Contact",
      },
    },
    contact: {
      title: "Contact",
      intro:
        "The best way to reach me depends on your goal. Choose the channel that fits your context.",
      methods: [
        {
          name: "Chat (Ask Saber)",
          use: "For quick context, project direction, or first contact.",
          action: "Open chat",
          href: "/chat",
        },
        {
          name: "Email",
          use: "For detailed briefs, documents, or formal requests.",
          action: "Send email",
          href: "mailto:saberdhib@outlook.com",
        },
        {
          name: "Scheduled call",
          use: "For deeper alignment once the scope is clear.",
          action: "Request a slot",
          href: "#",
        },
        {
          name: "LinkedIn",
          use: "For professional networking and shared context.",
          action: "Connect",
          href: "https://www.linkedin.com/in/saberdhib/",
        },
      ],
      expect: {
        heading: "What to expect",
        items: [
          "A response within 2–3 business days.",
          "Clear framing on scope, timelines, and feasibility.",
          "A professional, direct, and respectful exchange.",
        ],
      },
      cta: {
        heading: "Start a conversation",
        text: "If you have a project or opportunity in mind, I’m happy to connect.",
        primary: "Let’s talk",
      },
    },
    architectures: {
      title: "Architectures",
      intro:
        "A curated gallery of AI and data architectures designed for clarity, scale, and delivery readiness.",
      filters: {
        searchPlaceholder: "Search architectures",
        allTags: "All tags",
        allTypes: "All types",
        tagLabel: "Tag",
        typeLabel: "Type",
      },
      labels: {
        summary: "Summary",
        problem: "Problem / Context",
        solution: "Proposed architecture",
        components: "Key components",
        tradeoffs: "Tradeoffs",
        artifacts: "Artifacts",
        diagram: "Architecture diagram coming soon",
        type: "Type",
        tags: "Tags",
      },
      actions: {
        viewDiagram: "View diagram",
        openPdf: "Open PDF",
        externalLink: "External link",
        openEmbed: "Open embed",
        close: "Close",
      },
      cta: {
        heading: "Discuss this architecture",
        text: "If one of these architectures aligns with your needs, let’s discuss it.",
        primary: "Open chat",
      },
      items: [
        {
          slug: "rag-knowledge-platform",
          title: "RAG Knowledge Platform",
          summary:
            "A knowledge retrieval system for internal teams with governed sources and grounded answers.",
          type: "RAG",
          tags: ["AI", "Retrieval", "Knowledge"],
          problem:
            "Information is fragmented across tools and hard to retrieve reliably.",
          solution:
            "A retrieval pipeline that indexes curated content and serves grounded answers through a secure API.",
          components: [
            "Ingestion & parsing",
            "Embedding pipeline",
            "Vector store",
            "Retrieval API",
          ],
          tradeoffs: [
            "Latency vs. relevance tuning",
            "Curation overhead for source quality",
          ],
          artifacts: {
            diagramUrl: "#",
            pdfUrl: "#",
            externalUrl: "#",
            embedUrl: "#",
          },
        },
        {
          slug: "ai-analytics-fabric",
          title: "AI Analytics Fabric",
          summary:
            "A shared semantic layer that standardizes metrics across domains with governed pipelines.",
          type: "Data Platform",
          tags: ["Data", "Governance", "Analytics"],
          problem:
            "Inconsistent definitions slow down decisions and create reporting drift.",
          solution:
            "A shared semantic layer with governed pipelines, reusable metrics, and lineage tracking.",
          components: [
            "Data modeling",
            "Orchestration",
            "Semantic layer",
            "Monitoring",
          ],
          tradeoffs: [
            "Upfront modeling effort",
            "Strict governance vs. speed",
          ],
          artifacts: {
            diagramUrl: "#",
            pdfUrl: "#",
          },
        },
        {
          slug: "production-ai-service",
          title: "Production AI Service",
          summary:
            "A service layer that moves experiments into reliable, observable AI APIs.",
          type: "MLOps",
          tags: ["AI", "MLOps", "Delivery"],
          problem:
            "Experiments do not translate into production systems or reliable APIs.",
          solution:
            "A service layer with evaluation, deployment guardrails, and observability built in.",
          components: [
            "Model registry",
            "Evaluation harness",
            "API gateway",
            "Observability",
          ],
          tradeoffs: [
            "Operational complexity",
            "More upfront platform work",
          ],
          artifacts: {
            diagramUrl: "#",
            externalUrl: "#",
          },
        },
        {
          slug: "governed-genai-suite",
          title: "Governed GenAI Suite",
          summary:
            "A secure GenAI workspace with policy controls and audit-ready outputs.",
          type: "GenAI",
          tags: ["GenAI", "Security", "Policy"],
          problem:
            "Teams need GenAI capabilities without compromising data security or compliance.",
          solution:
            "A governed workspace with access controls, monitoring, and policy enforcement.",
          components: [
            "Identity & access",
            "Prompt management",
            "Policy engine",
            "Audit logging",
          ],
          tradeoffs: [
            "User flexibility vs. policy enforcement",
            "Increased governance workload",
          ],
          artifacts: {
            diagramUrl: "#",
            pdfUrl: "#",
            externalUrl: "#",
          },
        },
      ],
    },
    knowledge: {
      title: "Intellectual Production",
      intro:
        "A structured knowledge base that captures how I think, design, and deliver AI systems.",
      labels: {
        audience: "Audience",
        example: "Example",
        comingSoon: "More content coming soon.",
      },
      categories: [
        {
          slug: "articles",
          title: "Articles",
          description:
            "Deep dives into architecture decisions, delivery tradeoffs, and AI systems design.",
          audience: "Engineers, architects",
          cta: "Read",
        },
        {
          slug: "courses",
          title: "Courses",
          description:
            "Structured learning paths to build AI architecture literacy across teams.",
          audience: "Leaders, product teams",
          cta: "Learn",
        },
        {
          slug: "reflections",
          title: "Reflections",
          description:
            "Short essays on why AI succeeds or fails in real-world organizations.",
          audience: "Executives, strategists",
          cta: "Explore",
        },
        {
          slug: "documentation",
          title: "Documentation",
          description:
            "Applied notes that connect research, metrics, and production constraints.",
          audience: "Engineers, data teams",
          cta: "Open",
        },
        {
          slug: "case-studies",
          title: "Case studies",
          description:
            "Delivery narratives that connect architecture choices to business outcomes.",
          audience: "Clients, stakeholders",
          cta: "View",
        },
      ],
      pages: {
        articles: {
          title: "Articles",
          intro:
            "Long-form writing focused on architecture, AI delivery, and systems thinking.",
          exampleTitle:
            "Designing a Production-Grade RAG System: From Prototype to Scalable Architecture",
          exampleDescription:
            "A practical walkthrough of the decisions that turn a prototype into a reliable RAG system.",
        },
        courses: {
          title: "Courses",
          intro:
            "Curated learning materials designed to align teams around AI architecture.",
          exampleTitle:
            "Introduction to AI System Architecture for Non-Technical Leaders",
          exampleDescription:
            "A clear introduction to the building blocks and constraints of AI delivery.",
        },
        reflections: {
          title: "Reflections",
          intro:
            "Opinionated notes on strategy, delivery, and the reality of AI programs.",
          exampleTitle:
            "Why Most AI Projects Fail Before the First Model Is Even Deployed",
          exampleDescription:
            "A reflection on alignment, data readiness, and product ownership.",
        },
        documentation: {
          title: "Documentation",
          intro:
            "Applied documentation that bridges research and production decisions.",
          exampleTitle:
            "From Research Paper to Production: Translating LLM Evaluation Metrics into Business KPIs",
          exampleDescription:
            "A practical mapping between research metrics and decision-ready KPIs.",
        },
        caseStudies: {
          title: "Case studies",
          intro:
            "Delivery stories that highlight how architecture enables business outcomes.",
          exampleTitle:
            "Building a Data Platform as the Foundation for AI Delivery",
          exampleDescription:
            "A case narrative focused on the data layer that enables AI at scale.",
        },
      },
    },
    privacy: {
      title: "Privacy & AI Ethics",
      intro:
        "Saber Dhib designs this site to minimize data collection and avoid tracking-heavy practices. The intent is to keep the experience focused on content and professional exchange.",
      sections: {
        principles:
          "Any information shared through contact or chat is used only to respond to the request and improve clarity of future interactions.",
        aiUse:
          "AI features on this site, including RAG, are designed to be grounded in explicit sources. The system is instructed to avoid hallucinations and to say “I don’t know based on my sources” when reliable information is missing.",
        knowledgeBase:
          "Answers are generated from curated, explicit content stored in the site’s knowledge base. The system does not invent facts or rely on hidden sources.",
        responsible:
          "Saber Dhib prioritizes transparency, source traceability, and governance in AI system design. Human oversight remains essential for decisions with business, operational, or ethical impact.",
        future:
          "This page will evolve as the site gains new features and capabilities. Any significant change in how AI is used or how data is handled will be reflected here.",
      },
    },
  },
  fr: {
    nav: {
      about: "À propos",
      services: "Engagements",
      projects: "Projets",
      architectures: "Architectures",
      knowledge: "Connaissances",
      chat: "Discutons",
      social: "Présence",
      events: "Événements",
      contact: "Contact",
    },
    footer: {
      legal: "Mentions legales",
      contact: "Contact",
      privacy: "Confidentialite & ethique IA",
    },
    chat: {
      title: "Ask Saber",
      subtitle: "Assistant IA bientot disponible",
      description:
        "Ce chat connectera bientot les projets, architectures et articles de ma base de connaissances.",
      placeholder:
        "Posez une question sur l'architecture, le RAG ou les projets...",
      button: "Demarrer le chat",
      toggleLabel: "Utiliser ma base de connaissances",
      sending: "Recherche en cours...",
      sources: "Sources",
    },
    home: {
      eyebrow: "Architecte Solution IA",
      headline:
        "Construire des systemes IA et des plateformes data calmes et evolutifs, auxquels les equipes peuvent faire confiance.",
      subheadline:
        "Je conçois des architectures de bout en bout qui transforment des donnees complexes en produits fiables, de la strategie au deploiement.",
      chips: [
        "Strategie & delivery IA",
        "Plateformes data",
        "Architecture prete pour le RAG",
      ],
      ctaPrimary: "Ask Saber",
      ctaSecondary: "Voir les projets",
      previewTitle: "Apercu de l'assistant IA",
      previewQuestion:
        "“Comment concevoir un systeme RAG evolutif pour une base de connaissances ?”",
      previewStatus: "Generation de reponse",
      focusTitle: "Focus architecture",
      focusDescription:
        "Systemes, lignage des donnees et gouvernance IA alignes sur les resultats produits.",
    },
    about: {
      title: "A propos",
      toc: [
        "Introduction",
        "Parcours",
        "Ce que je fais",
        "Expertise & competences",
        "Secteurs & domaines",
        "Certifications & formation",
        "Langues",
        "Valeurs & vision",
        "Appel a l'action",
      ],
      introduction: {
        heading: "Introduction",
        paragraphs: [
          "Je suis Architecte Solution IA, avec une solide formation en mathématiques appliquées, data engineering et intelligence artificielle.",
          "Je conçois des systèmes IA qui vont de la stratégie à la mise en production, avec un fort accent sur la fiabilité, la scalabilité et l’impact business réel.",
        ],
      },
      journey: {
        heading: "Parcours",
        paragraphs: [
          "Mon parcours combine mathématiques appliquées, économie et ingénierie IA.",
          "J’ai commencé par une licence en mathématiques appliquées, suivie d’un master spécialisé en data, IA et business.",
          "En début de carrière, j’ai travaillé comme Analytics Engineer chez GL Events, où j’ai contribué à la conception et au déploiement d’une plateforme data servant de socle pour des projets analytiques et IA. Cette expérience m’a appris à considérer la data comme une infrastructure, pas seulement comme du reporting.",
          "Aujourd’hui, je suis AI Solution & Innovation à l’ESCP Business School, où j’accompagne les projets IA de l’établissement : conception de solutions, delivery de projets, acculturation des équipes internes et formation des étudiants.",
        ],
      },
      whatIDo: {
        heading: "Ce que je fais",
        intro:
          "Je suis spécialisé dans la transformation de l’ambition IA en systèmes réellement livrés. Mon travail couvre généralement :",
        items: [
          "Définition de stratégies IA et data",
          "Conception d’architectures (plateformes data, GenAI, systèmes RAG)",
          "Implémentation et mise en production de bout en bout",
          "Acculturation et montée en compétences des équipes",
        ],
      },
      expertise: {
        heading: "Expertise & competences",
        items: [
          "Stratégie IA",
          "Architecture solution",
          "Plateformes data",
          "MLOps",
          "IA générative",
          "Pipelines RAG",
          "Architectures cloud",
          "Python",
          "SQL",
          "Data engineering",
          "Conception de systèmes",
        ],
      },
      domains: {
        heading: "Secteurs & domaines",
        items: [
          "Retail",
          "Luxe",
          "Sport",
          "Santé",
          "Éducation",
          "Supply chain",
          "Technologie",
        ],
      },
      certifications: {
        heading: "Certifications & formation",
        items: [
          "Licence en mathématiques appliquées.",
          "Master en data, IA et business.",
          "Certifications Google (en cours).",
        ],
      },
      languages: {
        heading: "Langues",
        items: ["Français", "Anglais", "Arabe"],
      },
      vision: {
        heading: "Valeurs & vision",
        paragraphs: [
          "Je crois en une IA centrée sur l’humain : des systèmes conçus pour les personnes, et non l’inverse.",
          "Je suis orienté revenu, mais guidé par le produit, avec une priorité donnée aux solutions durables, scalables et maintenables.",
          "J’accorde également une grande importance au partage des connaissances, à travers des lives, des cours et des contenus, afin de rendre l’IA plus accessible et moins opaque.",
        ],
      },
      cta: {
        heading: "Appel a l'action",
        text:
          "Si vous souhaitez échanger autour d’un projet IA, d’un poste ou d’une collaboration, vous pouvez lancer une discussion ou explorer mes projets et architectures.",
        primary: "Demarrer une discussion",
        secondary: "Voir les projets",
        tertiary: "Voir les architectures",
      },
    },
    projects: {
      title: "Projets",
      intro:
        "Une selection ciblee de systemes livres qui montrent comment je transforme l’ambition IA en architecture de production.",
      labels: {
        problem: "Probleme",
        solution: "Solution",
        tech: "Technos",
        impact: "Impact",
      },
      items: [
        {
          name: "agent-breakout",
          description:
            "Un systeme d’agents IA compact pour explorer les workflows autonomes et l’orchestration.",
          tags: ["IA", "Agents", "Systemes"],
          problem:
            "Besoin d’un environnement controle pour tester les comportements d’agents sans risque production.",
          solution:
            "Creation d’un sandbox modulaire avec roles, prompts et points d’evaluation.",
          tech: "Python, orchestration, prompt design.",
          impact:
            "Experimentation acceleree et clarification de l’architecture multi-agents.",
        },
        {
          name: "mlops-chestxray",
          description:
            "Une pipeline ML sante, de l’entrainement au deploiement.",
          tags: ["MLOps", "Sante", "Deploiement"],
          problem:
            "Les essais de modeles n’avaient pas de chemin fiable vers le deploiement.",
          solution:
            "Conception d’un workflow MLOps complet avec entrainement reproductible.",
          tech: "Python, outils ML, pipelines.",
          impact:
            "Reproductibilite renforcee et cycle de vie modele orienté production.",
        },
        {
          name: "sabersite",
          description:
            "Une plateforme personnelle full-stack pour contenu IA, portfolio et futures fonctions RAG.",
          tags: ["Full-stack", "Pret RAG", "Produit"],
          problem:
            "Besoin d’une plateforme personnelle credible et scalable, au-dela d’un portfolio statique.",
          solution:
            "Mise en place d’une architecture web modulaire avec structure de contenu et API.",
          tech: "Next.js, FastAPI, TypeScript.",
          impact:
            "Base durable pour contenu, interactions clients et futures fonctions IA.",
        },
      ],
    },
    services: {
      title: "Engagements",
      intro:
        "J’accompagne les organisations pour passer de l’intention IA a des systemes livres, avec des resultats clairs et durables.",
      labels: {
        outcomes: "Resultats",
      },
      engagements: [
        {
          title: "Strategie & architecture",
          description:
            "Definir la feuille de route IA, l’architecture cible et les fondations data pour passer a l’echelle.",
          outcomes: [
            "Direction technique claire",
            "Parties prenantes alignees",
            "Architecture prete pour le delivery",
          ],
        },
        {
          title: "Build & delivery",
          description:
            "Concevoir et livrer des solutions de bout en bout, des pipelines data aux services IA en production.",
          outcomes: [
            "Systemes de production",
            "Workflows data fiables",
            "Impact produit mesurable",
          ],
        },
        {
          title: "Advisory & enablement",
          description:
            "Accompagner les equipes avec des decisions, revues et capacites pour faire evoluer l’IA en confiance.",
          outcomes: [
            "Maturite technique renforcee",
            "Execution maitrisee",
            "Adoption IA durable",
          ],
        },
        {
          title: "Education & partage",
          description:
            "Former les equipes et dirigeants via des ateliers, sessions et formations IA pratiques.",
          outcomes: [
            "Vocabulaire IA partage",
            "Adoption interne accrue",
            "Competences applicables",
          ],
        },
      ],
      who: {
        heading: "Avec qui je travaille",
        text:
          "Entreprises, institutions et equipes qui veulent construire des systemes IA et data fiables avec des resultats mesurables.",
      },
      cta: {
        heading: "Lancer une discussion",
        text:
          "Si vous explorez une initiative IA ou recherchez un partenaire d’architecture de confiance, echangeons.",
        primary: "Ouvrir le chat",
        secondary: "Contact",
      },
    },
    social: {
      title: "Presence",
      intro:
        "Une selection de canaux ou je partage des retours d’experience IA, des systemes et du delivery.",
      twitch: {
        eyebrow: "Canal live",
        title: "Sessions Twitch sur les systemes IA",
        description:
          "Live coding, decorticage d’architectures et experimentation en temps reel.",
        status: "Hors ligne",
        cta: "Voir sur Twitch",
        quote:
          "Construire en public permet de rester rigoureux sur les choix techniques.",
        iframeTitle: "Lecteur Twitch en direct",
      },
      platforms: [
        {
          name: "LinkedIn",
          description:
            "Analyses professionnelles, notes d’architecture et mises a jour projets.",
          action: "Visiter",
          url: "https://www.linkedin.com/in/saberdhib/",
        },
        {
          name: "YouTube",
          description:
            "Formats longs sur les systemes IA et les retours de delivery.",
          action: "Regarder",
          url: "#",
        },
        {
          name: "Twitch",
          description: "Sessions live de code et experimentation IA.",
          action: "Suivre",
          url: "https://www.twitch.tv/hanoutiier",
        },
        {
          name: "X / Twitter",
          description: "Idees courtes, notes et signaux d’architecture.",
          action: "Suivre",
          url: "https://x.com/SaberDhib",
        },
        {
          name: "Instagram / TikTok",
          description:
            "Formats courts et apprentissages en coulisses.",
          action: "Visiter",
          url: "#",
        },
      ],
      cta: {
        heading: "Restons en contact",
        text: "Si une collaboration ou une discussion est utile, echangeons.",
        primary: "Ouvrir le chat",
        secondary: "Contact",
      },
    },
    events: {
      title: "Evenements",
      intro:
        "Les evenements me permettent de rester connecte a l’ecosysteme IA et data tout en partageant des retours de delivery.",
      labels: {
        role: "Role",
        topic: "Sujet",
        location: "Lieu",
      },
      items: [
        {
          year: "2024",
          name: "Meetup IA & Data",
          context: "Echange entre pairs sur l’IA appliquee",
          role: "Participant",
          topic: "Patterns IA en production",
          location: "Paris, FR",
        },
        {
          year: "2023",
          name: "Atelier d’architecture",
          context: "Session pratique avec des equipes data",
          role: "Formateur",
          topic: "Conception de plateforme data",
          location: "Lyon, FR",
        },
        {
          year: "2023",
          name: "Intervention universitaire",
          context: "Session academique sur les systemes IA",
          role: "Intervenant",
          topic: "Vue d’ensemble RAG",
          location: "Paris, FR",
        },
      ],
      cta: {
        heading: "M’inviter",
        text:
          "Si vous organisez un evenement ou un panel, je suis ouvert a la discussion.",
        primary: "Lancer une discussion",
        secondary: "Contact",
      },
    },
    contact: {
      title: "Contact",
      intro:
        "Le meilleur canal depend de votre besoin. Choisissez celui qui correspond a votre contexte.",
      methods: [
        {
          name: "Chat (Ask Saber)",
          use: "Pour un premier contact, une direction projet ou un cadrage rapide.",
          action: "Ouvrir le chat",
          href: "/chat",
        },
        {
          name: "Email",
          use: "Pour des briefs detailles, documents ou demandes formelles.",
          action: "Envoyer un email",
          href: "mailto:saberdhib@outlook.com",
        },
        {
          name: "Appel planifie",
          use: "Pour aligner en profondeur une fois le scope clarifie.",
          action: "Demander un slot",
          href: "#",
        },
        {
          name: "LinkedIn",
          use: "Pour le reseau professionnel et le contexte partage.",
          action: "Se connecter",
          href: "https://www.linkedin.com/in/saberdhib/",
        },
      ],
      expect: {
        heading: "A quoi s’attendre",
        items: [
          "Reponse sous 2–3 jours ouvrés.",
          "Cadrage clair du scope, des delais et de la faisabilite.",
          "Un echange professionnel, direct et respectueux.",
        ],
      },
      cta: {
        heading: "Lancer une discussion",
        text:
          "Si vous avez un projet ou une opportunite, je suis disponible pour echanger.",
        primary: "Parlons-en",
      },
    },
    architectures: {
      title: "Architectures",
      intro:
        "Une galerie d’architectures IA et data concues pour la clarte, l’echelle et le delivery.",
      filters: {
        searchPlaceholder: "Rechercher une architecture",
        allTags: "Tous les tags",
        allTypes: "Tous les types",
        tagLabel: "Tag",
        typeLabel: "Type",
      },
      labels: {
        summary: "Resume",
        problem: "Probleme / Contexte",
        solution: "Architecture proposee",
        components: "Composants cles",
        tradeoffs: "Arbitrages",
        artifacts: "Artefacts",
        diagram: "Schema d’architecture bientot disponible",
        type: "Type",
        tags: "Tags",
      },
      actions: {
        viewDiagram: "Voir le schema",
        openPdf: "Ouvrir le PDF",
        externalLink: "Lien externe",
        openEmbed: "Ouvrir l’embed",
        close: "Fermer",
      },
      cta: {
        heading: "Discuter cette architecture",
        text:
          "Si une de ces architectures correspond a vos besoins, discutons-en.",
        primary: "Ouvrir le chat",
      },
      items: [
        {
          slug: "rag-knowledge-platform",
          title: "Plateforme RAG de connaissance",
          summary:
            "Un systeme de retrieval pour les equipes avec sources gouvernees et reponses fiables.",
          type: "RAG",
          tags: ["IA", "Retrieval", "Connaissance"],
          problem:
            "L’information est dispersee et difficile a retrouver.",
          solution:
            "Un pipeline de retrieval qui indexe le contenu et sert des reponses fiables via une API securisee.",
          components: [
            "Ingestion & parsing",
            "Pipeline d’embedding",
            "Vector store",
            "API de retrieval",
          ],
          tradeoffs: [
            "Latence vs. pertinence",
            "Effort de curation des sources",
          ],
          artifacts: {
            diagramUrl: "#",
            pdfUrl: "#",
            externalUrl: "#",
            embedUrl: "#",
          },
        },
        {
          slug: "ai-analytics-fabric",
          title: "Fabric analytics IA",
          summary:
            "Une couche semantique partagee pour standardiser les metrics entre domaines.",
          type: "Plateforme data",
          tags: ["Data", "Gouvernance", "Analytics"],
          problem:
            "Des definitions incoherentes ralentissent les decisions.",
          solution:
            "Une couche semantique partagee avec pipelines gouvernes et lineage.",
          components: [
            "Modelisation data",
            "Orchestration",
            "Couche semantique",
            "Monitoring",
          ],
          tradeoffs: [
            "Effort initial de modelisation",
            "Gouvernance stricte vs. vitesse",
          ],
          artifacts: {
            diagramUrl: "#",
            pdfUrl: "#",
          },
        },
        {
          slug: "production-ai-service",
          title: "Service IA en production",
          summary:
            "Une couche service pour transformer les essais en APIs fiables.",
          type: "MLOps",
          tags: ["IA", "MLOps", "Delivery"],
          problem:
            "Les experiments ne passent pas en production.",
          solution:
            "Une couche service avec evaluation, garde-fous et observabilite.",
          components: [
            "Model registry",
            "Evaluation",
            "API gateway",
            "Observabilite",
          ],
          tradeoffs: [
            "Complexite operationnelle",
            "Plus d’effort plateforme",
          ],
          artifacts: {
            diagramUrl: "#",
            externalUrl: "#",
          },
        },
        {
          slug: "governed-genai-suite",
          title: "Suite GenAI gouvernee",
          summary:
            "Un espace GenAI securise avec controles et sorties auditables.",
          type: "GenAI",
          tags: ["GenAI", "Securite", "Policy"],
          problem:
            "Les equipes ont besoin de GenAI sans compromettre la securite.",
          solution:
            "Un espace gouverne avec controles d’acces, monitoring et policies.",
          components: [
            "Identite & acces",
            "Gestion des prompts",
            "Moteur de policy",
            "Audit logging",
          ],
          tradeoffs: [
            "Flexibilite utilisateur vs. policies",
            "Charge de gouvernance accrue",
          ],
          artifacts: {
            diagramUrl: "#",
            pdfUrl: "#",
            externalUrl: "#",
          },
        },
      ],
    },
    knowledge: {
      title: "Production intellectuelle",
      intro:
        "Une base de connaissances structuree qui capture ma facon de penser, concevoir et livrer des systemes IA.",
      labels: {
        audience: "Audience",
        example: "Exemple",
        comingSoon: "Plus de contenu bientot.",
      },
      categories: [
        {
          slug: "articles",
          title: "Articles",
          description:
            "Analyses approfondies sur les choix d’architecture, le delivery et les systemes IA.",
          audience: "Ingenieurs, architectes",
          cta: "Lire",
        },
        {
          slug: "courses",
          title: "Cours",
          description:
            "Parcours d’apprentissage pour renforcer la culture d’architecture IA.",
          audience: "Leaders, equipes produit",
          cta: "Apprendre",
        },
        {
          slug: "reflections",
          title: "Reflexions",
          description:
            "Essais courts sur les raisons reelles des succes et echecs IA.",
          audience: "Executifs, strateges",
          cta: "Explorer",
        },
        {
          slug: "documentation",
          title: "Documentation",
          description:
            "Notes appliquees qui relient recherche, metriques et contraintes production.",
          audience: "Ingenieurs, equipes data",
          cta: "Ouvrir",
        },
        {
          slug: "case-studies",
          title: "Cas clients",
          description:
            "Recits de delivery reliant architecture et resultats business.",
          audience: "Clients, parties prenantes",
          cta: "Voir",
        },
      ],
      pages: {
        articles: {
          title: "Articles",
          intro:
            "Ecrits longs sur l’architecture, le delivery IA et la pensee systeme.",
          exampleTitle:
            "Designing a Production-Grade RAG System: From Prototype to Scalable Architecture",
          exampleDescription:
            "Un guide pratique pour passer d’un prototype RAG a un systeme fiable.",
        },
        courses: {
          title: "Cours",
          intro:
            "Supports pedagogiques pour aligner les equipes autour de l’architecture IA.",
          exampleTitle:
            "Introduction to AI System Architecture for Non-Technical Leaders",
          exampleDescription:
            "Une introduction claire aux fondations et contraintes du delivery IA.",
        },
        reflections: {
          title: "Reflexions",
          intro:
            "Notes sur la strategie, le delivery et la realite des programmes IA.",
          exampleTitle:
            "Why Most AI Projects Fail Before the First Model Is Even Deployed",
          exampleDescription:
            "Une reflexion sur l’alignement, la data readiness et la gouvernance.",
        },
        documentation: {
          title: "Documentation",
          intro:
            "Documentation appliquee entre recherche et decisions de production.",
          exampleTitle:
            "From Research Paper to Production: Translating LLM Evaluation Metrics into Business KPIs",
          exampleDescription:
            "Un mapping pratique entre metriques de recherche et KPIs business.",
        },
        caseStudies: {
          title: "Cas clients",
          intro:
            "Recits de delivery qui montrent comment l’architecture sert les objectifs.",
          exampleTitle:
            "Building a Data Platform as the Foundation for AI Delivery",
          exampleDescription:
            "Un cas centre sur la couche data qui rend l’IA scalable.",
        },
      },
    },
    privacy: {
      title: "Confidentialite & ethique IA",
      intro:
        "Saber Dhib conçoit ce site pour minimiser la collecte de données et éviter les pratiques de suivi intrusives. L’objectif est de rester centré sur le contenu et les échanges professionnels.",
      sections: {
        principles:
          "Toute information partagée via le contact ou le chat sert uniquement à répondre à la demande et à améliorer la clarté des échanges.",
        aiUse:
          "Les fonctionnalités IA, dont le RAG, s’appuient sur des sources explicites. Le système évite les hallucinations et indique “I don’t know based on my sources” lorsque l’information manque.",
        knowledgeBase:
          "Les réponses sont générées à partir d’un contenu curé et explicite. Le système n’invente pas de faits et ne s’appuie pas sur des sources cachées.",
        responsible:
          "Saber Dhib privilégie la transparence, la traçabilité des sources et la gouvernance. La supervision humaine reste essentielle pour les décisions à impact.",
        future:
          "Cette page évoluera avec les fonctionnalités du site. Tout changement significatif sur l’usage de l’IA ou la gestion des données y sera reflété.",
      },
    },
  },
} as const;
