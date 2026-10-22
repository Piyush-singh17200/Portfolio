export interface Project {
  title: string
  subtitle: string
  slug: string
  period?: string
  description: string
  bulletPoints: string[]
  tags: string[]
  category: "fullstack" | "ai" | "featured"
  featured: boolean
  image?: string
  githubUrl?: string
  liveUrl?: string
}

export interface SummerTrainingItem {
  title: string
  credentialType: string
  grade: string
  period: string
  organization: string
  location: string
  description: string
  bulletPoints: string[]
  tools: string[]
  verificationUrl?: string
}

export interface SkillCategory {
  category: string
  description: string
  skills: {
    name: string
    level: number
    highlight?: boolean
  }[]
}

export interface CertificateItem {
  title: string
  issuer: string
  date: string
  credentialType: string
  description: string
  badge?: string
  verificationUrl?: string
}

export interface EducationEntry {
  institution: string
  location: string
  degree: string
  scoreType?: "CGPA" | "Percentage"
  score?: string
  period: string
  details?: string
}

export interface TimelineItem {
  period: string
  title: string
  organization: string
  location?: string
  category: "education" | "project" | "achievement" | "certification" | "training"
  description: string
  details: string[]
  badge: string
}

export const resumeData = {
  name: "Piyush Singh",
  title: "Full-Stack Developer (MERN / Next.js)",
  initials: "PS",
  location: "Roorkee, Uttarakhand / Phagwara, Punjab, India",
  phone: "+91-7906182066",
  email: "singhp17200@gmail.com",
  linkedin: "https://www.linkedin.com/in/singh-piyush18",
  github: "https://github.com/Piyush-singh17200",
  portfolioUrl: "https://piyushsingh.tech",
  summary:
    "Full-Stack Developer experienced in building end-to-end web applications with the MERN stack, Next.js, and TypeScript, covering RESTful API design, database modeling, and responsive frontend development. Skilled in authentication, real-time application features, and independently deploying full-stack projects from schema design through production.",

  aboutMe:
    "I'm an aspiring computer science engineer and passionate full-stack developer studying at Lovely Professional University. I specialize in engineering responsive, scalable web platforms using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. From developing government scheme platforms with Gemini AI to building real-time car rental solutions with Socket.io and Stripe, I am dedicated to solving real-world challenges with clean code and intuitive user interfaces.",

  education: {
    university: {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology — Computer Science and Engineering",
      score: "",
      period: "Aug 2024 – Present",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Organization",
        "Web Technologies",
        "Software Engineering",
      ],
    },
    intermediate: {
      institution: "Sheffield School",
      location: "Roorkee, Uttarakhand",
      degree: "Intermediate (PCM)",
      score: "",
      period: "Mar 2023 – May 2024",
    },
    matriculation: {
      institution: "Sheffield School",
      location: "Roorkee, Uttarakhand",
      degree: "Matriculation",
      score: "",
      period: "Mar 2021 – May 2022",
    },
    all: [
      {
        institution: "Lovely Professional University",
        location: "Phagwara, Punjab",
        degree: "Bachelor of Technology — Computer Science and Engineering",
        period: "Aug 2024 – Present",
        details: "Core Computer Science, Full-Stack Web Development, Data Structures & Algorithms",
      },
      {
        institution: "Sheffield School",
        location: "Roorkee, Uttarakhand",
        degree: "Intermediate (PCM)",
        period: "Mar 2023 – May 2024",
        details: "Physics, Chemistry, and Mathematics",
      },
      {
        institution: "Sheffield School",
        location: "Roorkee, Uttarakhand",
        degree: "Matriculation",
        period: "Mar 2021 – May 2022",
        details: "Secondary School Examination",
      },
    ] as EducationEntry[],
  },

  skills: {
    languages: [
      { name: "JavaScript", level: 94, highlight: true },
      { name: "TypeScript", level: 90, highlight: true },
      { name: "Python", level: 82 },
      { name: "Java", level: 86, highlight: true },
      { name: "C++", level: 84 },
      { name: "C", level: 80 },
    ],
    frameworks: [
      { name: "React.js", level: 95, highlight: true },
      { name: "Next.js", level: 92, highlight: true },
      { name: "Node.js", level: 90, highlight: true },
      { name: "Express.js", level: 90, highlight: true },
      { name: "Spring Boot", level: 78 },
      { name: "Framer Motion", level: 88, highlight: true },
    ],
    databases: [
      { name: "MongoDB", level: 92, highlight: true },
      { name: "PostgreSQL", level: 86, highlight: true },
      { name: "MySQL", level: 88 },
      { name: "SQLite", level: 82 },
    ],
    tools: [
      { name: "Git", level: 92, highlight: true },
      { name: "GitHub", level: 94, highlight: true },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 92 },
      { name: "Figma", level: 88, highlight: true },
    ],
    concepts: [
      { name: "REST APIs", level: 94, highlight: true },
      { name: "JWT Authentication", level: 92, highlight: true },
      { name: "Responsive UI Design", level: 95, highlight: true },
    ],
    softSkills: [
      { name: "Problem-Solving", level: 95, highlight: true },
      { name: "Team Collaboration", level: 92 },
      { name: "Adaptability", level: 90 },
      { name: "Communication", level: 88 },
      { name: "Time Management", level: 88 },
    ],
  },

  // 3 Primary Full-Stack & AI Projects from CV
  projects: [
    {
      title: "DriveEasy",
      subtitle: "Smart Car Rental Platform",
      slug: "driveeasy",
      period: "Sep 2026",
      description:
        "Developed a full-stack car rental platform with role-based access, vehicle listings, availability tracking, bookings, and fleet management.",
      bulletPoints: [
        "Developed a full-stack car rental platform with role-based access, vehicle listings, availability tracking, bookings, and fleet management.",
        "Connected Socket.io for real-time availability, Stripe for payments, Cloudinary for vehicle images, automated emails, and an AI-powered customer assistant.",
        "Optimized the responsive React interface with Tailwind CSS and Framer Motion, using MongoDB and PostgreSQL/Prisma for reliable data and transaction workflows.",
      ],
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL/Prisma",
        "Socket.io",
        "Stripe",
        "Cloudinary",
        "Tailwind CSS",
        "Framer Motion",
      ],
      category: "fullstack",
      featured: true,
      image: "/projects/driveeasy.svg",
      githubUrl: "https://github.com/Piyush-singh17200/driveeasy",
    },
    {
      title: "YojanaSetu",
      subtitle: "Government Scheme Eligibility Platform",
      slug: "yojanasetu",
      period: "Jul 2026",
      description:
        "Built a government scheme platform that ranks recommendations using income, occupation, education, gender, category, and disability factors.",
      bulletPoints: [
        "Built a government scheme platform that ranks recommendations using income, occupation, education, gender, category, and disability factors.",
        "Implemented scheme browsing, advanced filtering, eligibility breakdowns, required documents, application steps, personalized dashboards, and deadline tracking.",
        "Integrated a Gemini-powered assistant with scheme database context to explain eligibility, documents, application steps, and timelines in plain language.",
      ],
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "Gemini AI",
        "Scheme Context DB",
        "REST APIs",
        "Tailwind CSS",
        "Recommendation Engine",
      ],
      category: "ai",
      featured: true,
      image: "/projects/yojanasetu.svg",
      githubUrl: "https://github.com/Piyush-singh17200/YojanaSetu",
    },
    {
      title: "EduAI",
      subtitle: "AI Learning & Career Development Platform",
      slug: "eduai",
      period: "Mar 2026",
      description:
        "Architected an AI-driven learning platform combining intelligent tutoring, adaptive learning paths, study planning, career-roadmap generation, and mock interviews.",
      bulletPoints: [
        "Architected an AI-driven learning platform combining intelligent tutoring, adaptive learning paths, study planning, career-roadmap generation, and mock interviews.",
        "Leveraged Gemini and OpenRouter APIs alongside JWT authentication, PDF extraction, file uploads, REST APIs, and a modular service-layer architecture.",
        "Automated resume ATS analysis, job-match scoring, DSA learning paths, career tracking, timetable-based study planning, and persistent progress across sessions.",
      ],
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "Gemini API",
        "OpenRouter",
        "JWT Auth",
        "PDF Extraction",
        "ATS Scoring",
        "DSA Roadmaps",
      ],
      category: "ai",
      featured: true,
      image: "/projects/eduai.svg",
      githubUrl: "https://github.com/Piyush-singh17200/EDUAI",
    },
  ] as Project[],

  // Summer Training from CV
  summerTraining: {
    title: "UI/UX Design and Prototyping for Web and Mobile Applications",
    credentialType: "Certificate",
    grade: "Certified",
    period: "Jun 2026 – Jul 2026",
    organization: "Centre for Professional Enhancement, Lovely Professional University",
    location: "Phagwara, India",
    description:
      "Completed certified skill-development summer training in UI/UX design and prototyping for web and mobile applications.",
    bulletPoints: [
      "Completed certified skill-development training in UI/UX design and prototyping for web and mobile applications.",
      "Practiced wireframing, high-fidelity prototyping, and usability testing principles to design intuitive user interfaces for responsive web and mobile applications.",
      "Applied user-centered design methodologies including user research, information architecture, and interaction design to translate concepts into functional prototypes.",
    ],
    tools: [
      "Figma",
      "Wireframing",
      "High-Fidelity Prototyping",
      "Usability Testing",
      "User Research",
      "Information Architecture",
      "Interaction Design",
    ],
    verificationUrl: "https://drive.google.com/file/d/14_aGE8HIejrTzqAqOP_Um-mvAlEWOb1R/view?usp=sharing",
  } as SummerTrainingItem,

  // 3 Primary Certificates from CV
  certificates: [
    {
      title: "Database Management System — Part 1",
      issuer: "Infosys Springboard",
      date: "Jul 2026",
      credentialType: "Certificate",
      description:
        "Comprehensive training in database design, relational modeling, complex SQL querying, normalization, indexing, and ACID transaction guarantees.",
      badge: "Database & SQL",
      verificationUrl: "https://drive.google.com/file/d/1IVSgfJSBUZDH_Y72cJMrREUat39xXlj_/view?usp=sharing",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "May 2026",
      credentialType: "Certificate",
      description:
        "Official Oracle certification covering artificial intelligence, machine learning concepts, deep learning, LLMs, Generative AI services, and cloud AI workloads.",
      badge: "AI & Cloud",
      verificationUrl: "https://drive.google.com/file/d/16cBn9RXPEYdrj7yXbVBLV7xyTcCX9r9H/view?usp=sharing",
    },
    {
      title: "Programming in JAVA",
      issuer: "iamNEO — An NIT Venture",
      date: "May 2026",
      credentialType: "Certificate",
      description:
        "Rigorous Java certification covering object-oriented programming, data structures, exception handling, multithreading, and collections framework.",
      badge: "Java & OOP",
      verificationUrl: "https://drive.google.com/file/d/1BTtNkPDimZjs9L278NRFUOoz85MzIwch/view?usp=sharing",
    },
  ] as CertificateItem[],

  achievements: [
    {
      title: "UI/UX Design & Prototyping Summer Training",
      category: "Summer Training",
      description:
        "Completed certified skill-development training from Centre for Professional Enhancement, Lovely Professional University.",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      category: "AI & Cloud Certification",
      description:
        "Certified in foundational artificial intelligence, large language models, machine learning, and cloud infrastructure deployment.",
    },
    {
      title: "Database Management System — Part 1 (Infosys Springboard)",
      category: "DBMS & SQL",
      description:
        "Certified by Infosys Springboard in relational databases, complex query optimization, schema normalization, and ACID properties.",
    },
    {
      title: "Programming in JAVA (iamNEO — An NIT Venture)",
      category: "Java & OOP",
      description:
        "Successfully certified in object-oriented programming, data structures, algorithms, and core Java engineering.",
    },
  ],

  timeline: [
    {
      period: "Sep 2026",
      title: "DriveEasy — Smart Car Rental Platform",
      organization: "Full-Stack Project",
      location: "Independent Development",
      category: "project",
      badge: "Full-Stack Web",
      description:
        "Built a complete car rental platform with role-based access, Socket.io real-time availability, Stripe payments, Cloudinary vehicle images, and an AI-powered assistant.",
      details: [
        "Role-based access, vehicle listings, availability tracking, bookings, and fleet management.",
        "Socket.io for live availability, Stripe for payments, Cloudinary for vehicle uploads.",
        "Responsive React interface with Tailwind CSS, Framer Motion, MongoDB, and PostgreSQL/Prisma.",
      ],
    },
    {
      period: "Jul 2026",
      title: "YojanaSetu — Government Scheme Platform",
      organization: "Full-Stack AI Project",
      location: "Independent Development",
      category: "project",
      badge: "AI & Eligibility Engine",
      description:
        "Developed a government scheme eligibility engine ranking recommendations using demographic parameters with a contextual Gemini-powered plain language assistant.",
      details: [
        "Recommendation ranking based on income, occupation, education, gender, category, and disability.",
        "Scheme browsing, advanced filtering, eligibility breakdowns, and application step tracking.",
        "Integrated Gemini-powered assistant with scheme context to explain eligibility and documents.",
      ],
    },
    {
      period: "Jun 2026 – Jul 2026",
      title: "UI/UX Design and Prototyping",
      organization: "Centre for Professional Enhancement, Lovely Professional University",
      location: "Phagwara, Punjab",
      category: "training",
      badge: "Summer Training",
      description:
        "Completed certified skill-development summer training in UI/UX design and prototyping for web and mobile applications.",
      details: [
        "Wireframing, high-fidelity interactive prototyping in Figma, and usability testing principles.",
        "Applied user-centered design, user research, and information architecture.",
      ],
    },
    {
      period: "May 2026",
      title: "Oracle Cloud AI & iamNEO Java Certifications",
      organization: "Oracle & iamNEO (An NIT Venture)",
      location: "Online / Professional Certifications",
      category: "certification",
      badge: "Certifications",
      description:
        "Earned Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate & Programming in JAVA from iamNEO.",
      details: [
        "Oracle: Artificial Intelligence, Deep Learning, LLMs, and Cloud AI Infrastructure.",
        "iamNEO: Core and Advanced Java, Object-Oriented Programming, and Data Structures.",
      ],
    },
    {
      period: "Mar 2026",
      title: "EduAI — AI Learning & Career Development Platform",
      organization: "Full-Stack AI Project",
      location: "Independent Development",
      category: "project",
      badge: "AI Platform",
      description:
        "Architected an AI-driven learning platform with intelligent tutoring, adaptive learning paths, automated resume ATS analysis, and mock interviews.",
      details: [
        "Gemini and OpenRouter APIs with JWT auth, PDF extraction, file uploads, and modular service layer.",
        "Automated resume ATS scoring, job matching, DSA roadmaps, and timetable-based study planning.",
      ],
    },
    {
      period: "Aug 2024 – Present",
      title: "Bachelor of Technology — Computer Science and Engineering",
      organization: "Lovely Professional University",
      location: "Phagwara, Punjab",
      category: "education",
      badge: "B.Tech CSE",
      description:
        "Pursuing B.Tech in CSE with a strong focus on Full-Stack Development, Data Structures, Algorithms, DBMS, and Operating Systems.",
      details: [
        "Active coursework in Data Structures, Algorithms, DBMS, and Operating Systems.",
        "Specializing in Full-Stack Web Development, REST APIs, and Cloud Systems.",
      ],
    },
    {
      period: "Mar 2023 – May 2024",
      title: "Senior Secondary / Intermediate (PCM)",
      organization: "Sheffield School",
      location: "Roorkee, Uttarakhand",
      category: "education",
      badge: "Senior Secondary",
      description:
        "Completed Intermediate education in Physics, Chemistry, and Mathematics (PCM) at Sheffield School, Roorkee.",
      details: ["Physics, Chemistry, and Mathematics specialization.", "Completed secondary curriculum."],
    },
    {
      period: "Mar 2021 – May 2022",
      title: "Secondary School Examination (10th)",
      organization: "Sheffield School",
      location: "Roorkee, Uttarakhand",
      category: "education",
      badge: "Secondary School",
      description:
        "Completed Matriculation (10th standard) at Sheffield School, Roorkee.",
      details: ["Secondary School Examination.", "Core subjects in Science and Mathematics."],
    },
  ] as TimelineItem[],
}
