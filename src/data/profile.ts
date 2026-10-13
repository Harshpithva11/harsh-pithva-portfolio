import {
  ProfileConfig,
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  ProfessionalStrength,
  LearningDirection
} from '../types';

/**
 * =========================================================================
 * SINGLE SOURCE OF TRUTH: HARSH PITHVA'S PORTFOLIO CONFIGURATION
 * =========================================================================
 * All personal details, project details, skills, social links, and contact
 * settings can be updated right here.
 * Placeholders (e.g. "[YOUR_EMAIL]") are automatically detected and hidden
 * in public views until real URLs or details are supplied.
 */

export const profileConfig: ProfileConfig = {
  fullName: "Harsh Pithva",
  shortName: "Harsh",
  monogram: "HP",
  professionalIdentity: "MCA Student | Aspiring Software Developer | AI & Web Development Enthusiast",
  tagline: "Building practical solutions through code, creativity, and continuous learning.",
  supportingParagraph: "I'm an MCA student at RV College of Engineering, Bengaluru, with a foundation in programming and web development. I enjoy exploring AI-powered applications, building user-focused digital experiences, and continuously improving my technical and professional skills.",
  availabilityText: "Open to learning opportunities, meaningful collaborations, and software development opportunities.",
  location: "Bengaluru, Karnataka / Jamnagar, Gujarat",
  careerObjective: "Build strong technical expertise, develop useful software products, gain industry experience, and contribute to real-world technology solutions.",
  
  // Resume configuration
  resumeFileName: "Harsh_Pithva_Resume.pdf",
  resumePath: "/resume.pdf", // Place your PDF in the /public folder as resume.pdf

  // Avatar / Portrait photo
  avatarUrl: "/harsh-pithva.jpg",

  // About Biography
  aboutParagraphs: [
    "I'm Harsh Pithva, a Bachelor of Computer Applications graduate from Bhavan's Shree H.J. Doshi Information Technology College, Jamnagar, Gujarat, and currently pursuing my Master of Computer Applications at RV College of Engineering, Bengaluru.",
    "My journey in technology has introduced me to programming, web development, databases, and practical application development. One of my key projects, PostPro, explores how a web application can simplify social media content creation through mood-based caption, hashtag, and song suggestions.",
    "I have also gained internship experience in Android development at Alpha Automation Company. These experiences have strengthened my interest in software development and encouraged me to explore how technology can solve everyday problems.",
    "Beyond coding, I am actively working to improve my communication, presentation, leadership, and problem-solving abilities. I believe consistent learning, practical experimentation, and collaboration are essential to becoming a capable software developer."
  ],

  // Social & Contact details from official resume
  socialLinks: {
    email: "pithvaharsh006@gmail.com",
    github: "[YOUR_GITHUB_URL]",
    linkedin: "https://www.linkedin.com/in/harsh-pithva",
    phone: "+91 9408517380"
  },
  
  // Contact form destination email
  contactEmailTarget: "pithvaharsh006@gmail.com"
};

/**
 * SKILLS & TECHNICAL TOOLKIT
 * No fake percentages. Distinguishes existing hands-on experience from ongoing learning.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    subtitle: "Core languages and programming paradigms",
    skills: [
      { name: "C", level: "Practical Experience", category: "programming" },
      { name: "Java Fundamentals", level: "Foundational & Academic", category: "programming", isCurrentlyLearning: true }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    subtitle: "Server-side and client-side web technologies",
    skills: [
      { name: "PHP", level: "Practical Project Experience", category: "web" },
      { name: "HTML & CSS", level: "Practical Layout & Styling", category: "web" },
      { name: "JavaScript", level: "Interactive DOM & Scripting", category: "web" }
    ]
  },
  {
    id: "database",
    title: "Database Systems",
    subtitle: "Relational data modeling and querying",
    skills: [
      { name: "MySQL", level: "Schema Design & Queries", category: "database" }
    ]
  },
  {
    id: "experience-skills",
    title: "Development Experience",
    subtitle: "Applied workflow and hands-on practice",
    skills: [
      { name: "Android App Development", level: "Internship Exposure", category: "experience" },
      { name: "PHP Web Application Architecture", level: "Full Project Lifecycle", category: "experience" }
    ]
  },
  {
    id: "professional",
    title: "Professional Skills",
    subtitle: "Collaboration, communication, and leadership capabilities",
    skills: [
      { name: "Communication Skills", level: "Active Focus", category: "professional" },
      { name: "Presentation Creation", level: "Structured & Visual", category: "professional" },
      { name: "Leadership Interest", level: "Initiative & Coordination", category: "professional" },
      { name: "Teamwork & Collaboration", level: "Cross-functional", category: "professional" },
      { name: "Problem-Solving", level: "Analytical Mindset", category: "professional" },
      { name: "Continuous Learning", level: "Growth Mindset", category: "professional" }
    ]
  },
  {
    id: "certifications-knowledge",
    title: "Additional Knowledge",
    subtitle: "Certified competencies & foundational tools",
    skills: [
      { name: "CCC Certification", level: "Certified", category: "certifications" },
      { name: "Tally Fundamentals", level: "Basic Operational Knowledge", category: "certifications" }
    ]
  }
];

/**
 * FEATURED AND ADDITIONAL PROJECTS
 */
export const projectsData: Project[] = [
  {
    id: "postpro",
    title: "PostPro",
    subtitle: "AI-Simulated Caption, Hashtag & Song Generator",
    shortDescription: "Your all-in-one social media content companion.",
    fullDescription: "PostPro is a PHP-based web application designed to simplify social media content creation. Users can upload a photo, select a mood, and receive relevant caption suggestions, hashtags, and song recommendations in one convenient platform. The project focuses on making content discovery easier through a structured database, mood-based suggestions, and a user-friendly interface.",
    transparencyNote: "PostPro utilizes an AI-simulated suggestion system powered by structured mood taxonomy and relational database queries, rather than an external live third-party AI API.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Mood-based caption suggestions tailored to user imagery",
      "Relevant hashtag discovery grouped by theme and popularity",
      "Curated song recommendations associated with chosen moods",
      "User registration and secure authentication system",
      "Password reset functionality for account recovery",
      "One-click copy-to-clipboard actions for fast publishing",
      "Favorite suggestions and saved content bookmarks",
      "Clean, interactive dashboard for browsing results",
      "Database-driven content retrieval with structured MySQL schema"
    ],
    problemStatement: "Content creators and social media users frequently struggle with creative block when crafting captions, identifying trending relevant hashtags, and pairing fitting music with their posts across different platforms.",
    proposedSolution: "PostPro consolidates the entire post-creation ideation workflow into a single cohesive interface: upload an image, select a mood, and immediately receive categorized captions, copyable hashtags, and soundtrack ideas.",
    keyLearningOutcomes: [
      "Architected relational database schema in MySQL for mood taxonomies and media metadata",
      "Built server-side authentication, session state management, and password reset workflows in PHP",
      "Implemented responsive front-end dashboard interactions with vanilla JavaScript and CSS",
      "Learned practical aspects of user input sanitization and secure query execution"
    ],
    liveDemoUrl: "", // Configurable: leave empty to show "Link coming soon"
    sourceCodeUrl: "", // Configurable: leave empty to show "Link coming soon"
    isFeatured: true,
    status: "Completed"
  },
  {
    id: "future-project-1",
    title: "Future Project",
    subtitle: "Full-Stack Web / AI Exploration",
    shortDescription: "An upcoming project exploring full-stack engineering and modern web technologies during MCA coursework.",
    fullDescription: "Currently in the conceptualization and planning phase as part of ongoing Master of Computer Applications studies at RVCE.",
    techStack: ["Modern Web Stack", "API Integration", "Database Design"],
    features: [
      "Planned architecture focusing on clean design patterns",
      "Practical problem-solving for everyday software needs"
    ],
    problemStatement: "Under active definition.",
    proposedSolution: "Under development.",
    keyLearningOutcomes: [
      "Applying advanced data structures and software engineering practices"
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
    isFeatured: false,
    isFuturePlaceholder: true,
    status: "Exploring"
  }
];

/**
 * INTERNSHIP & PRACTICAL EXPERIENCE
 */
export const experienceData: ExperienceItem[] = [
  {
    id: "alpha-automation",
    position: "Android Developer Intern",
    organization: "Alpha Automation Company",
    period: "[Add internship start and end dates]",
    isPeriodPlaceholder: true,
    description: "During my Android development internship, I gained exposure to application development workflows and practical software development. This experience contributed to my understanding of building applications and strengthened my interest in developing useful digital solutions.",
    responsibilities: [
      "Gained hands-on exposure to Android application development workflows and architecture",
      "Explored practical mobile software development lifecycles and debugging techniques",
      "Collaborated on practical application modules under engineering guidance"
    ]
  }
];

/**
 * ACADEMIC EDUCATION
 */
export const educationData: EducationItem[] = [
  {
    id: "mca-rvce",
    degree: "Master of Computer Applications (MCA)",
    institution: "RV College of Engineering (RVCE)",
    location: "Bengaluru, Karnataka",
    period: "2026 - Present",
    isPeriodPlaceholder: false,
    status: "Pursuing",
    description: "Focusing on advanced computing concepts, software engineering practices, database systems, and application architecture at one of India's premier technical institutions."
  },
  {
    id: "bca-doshi",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bhavans Shri H.J Doshi Information Technology Institute",
    location: "Jamnagar, Gujarat",
    period: "2023 - 2026",
    isPeriodPlaceholder: false,
    status: "Graduated",
    description: "Built strong foundations in computer science principles, C programming, database management systems, and web application development."
  }
];

/**
 * CERTIFICATIONS & VERIFIED CREDENTIALS
 */
export const certificationsData: CertificationItem[] = [
  {
    id: "ai-modern",
    title: "Introduction to Modern AI",
    description: "Foundational concepts in modern artificial intelligence, machine learning concepts, and intelligent system paradigms."
  },
  {
    id: "ccc-cert",
    title: "Course on Computer Concepts (CCC)",
    description: "Certification covering computer fundamentals, digital literacy, operating system navigation, office applications, and internet essentials."
  },
  {
    id: "tally-prime",
    title: "Tally Prime",
    description: "Comprehensive foundational certification in computerized financial accounting and operational business workflows using Tally Prime."
  },
  {
    id: "cyber-drill",
    title: "Cyber Drill – Phishing, Malware & Ransomware",
    description: "Practical security awareness and defensive preparedness against phishing attack vectors, malware threats, and ransomware mitigation."
  }
];

/**
 * PROFESSIONAL STRENGTHS
 */
export const professionalStrengths: ProfessionalStrength[] = [
  {
    id: "practical-problem-solving",
    title: "Practical Problem-Solving",
    description: "I enjoy understanding a problem, exploring possible approaches, and turning ideas into practical solutions.",
    iconName: "puzzle"
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description: "I am committed to strengthening my technical foundations and exploring emerging technologies through consistent practice.",
    iconName: "sparkles"
  },
  {
    id: "communication-presentations",
    title: "Communication & Presentations",
    description: "I am actively improving my ability to communicate ideas clearly and present technical concepts effectively.",
    iconName: "message-square"
  },
  {
    id: "creative-thinking-collaboration",
    title: "Creative Thinking & Collaboration",
    description: "I enjoy combining logical thinking with creativity and working with others to develop useful ideas.",
    iconName: "users"
  }
];

/**
 * LEARNING JOURNEY ("Currently Exploring")
 */
export const learningDirections: LearningDirection[] = [
  {
    id: "dsa",
    topic: "Data Structures & Algorithms",
    description: "Deepening algorithmic efficiency, problem decomposition, and competitive coding foundations.",
    status: "Currently Exploring"
  },
  {
    id: "java-core",
    topic: "Java & Object-Oriented Principles",
    description: "Strengthening core Java, concurrency fundamentals, and scalable design patterns.",
    status: "Currently Exploring"
  },
  {
    id: "fullstack",
    topic: "Full-Stack Web Development",
    description: "Expanding from PHP & MySQL into modern component-driven frontends and RESTful API engineering.",
    status: "Currently Exploring"
  },
  {
    id: "ai-applications",
    topic: "AI-Powered Application Development",
    description: "Understanding practical integrations of intelligent algorithms into web tools and workflows.",
    status: "Currently Exploring"
  },
  {
    id: "genai",
    topic: "Generative AI Concepts",
    description: "Exploring prompt engineering, language model capabilities, and real-world assistant architectures.",
    status: "Upcoming Focus"
  },
  {
    id: "se-practices",
    topic: "Software Engineering Practices",
    description: "Adopting version control discipline, clean code conventions, and agile delivery principles.",
    status: "Upcoming Focus"
  }
];

/**
 * UTILITY HELPERS
 */
export function isConfiguredValue(value?: string): boolean {
  if (!value) return false;
  const trimmed = value.trim();
  if (trimmed === "") return false;
  // If it still has placeholder syntax like [YOUR_EMAIL] or [Add start date], it's not configured
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) return false;
  return true;
}

export function isValidUrl(url?: string): boolean {
  if (!isConfiguredValue(url)) return false;
  try {
    const parsed = new URL(url!);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}
