export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  phone?: string;
}

export interface ProfileConfig {
  fullName: string;
  shortName: string;
  monogram: string;
  professionalIdentity: string;
  tagline: string;
  supportingParagraph: string;
  availabilityText: string;
  location: string;
  careerObjective: string;
  resumeFileName: string;
  resumePath: string;
  aboutParagraphs: string[];
  socialLinks: SocialLinks;
  contactEmailTarget?: string;
  avatarUrl?: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Practical Experience", "Core Fundamentals", "Coursework & Practice", "Certified"
  category: 'programming' | 'web' | 'database' | 'experience' | 'professional' | 'certifications';
  isCurrentlyLearning?: boolean;
  notes?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  transparencyNote?: string;
  techStack: string[];
  features: string[];
  problemStatement: string;
  proposedSolution: string;
  keyLearningOutcomes: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  isFeatured: boolean;
  isFuturePlaceholder?: boolean;
  status: 'Completed' | 'In Development' | 'Exploring' | 'Planned';
}

export interface ExperienceItem {
  id: string;
  position: string;
  organization: string;
  period: string; // e.g. "[Add internship start and end dates]" or real date
  isPeriodPlaceholder: boolean;
  location?: string;
  description: string;
  responsibilities?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string; // editable placeholder
  isPeriodPlaceholder: boolean;
  status: 'Pursuing' | 'Graduated';
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuingOrganization?: string;
  completionYear?: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
}

export interface ProfessionalStrength {
  id: string;
  title: string;
  description: string;
  iconName: 'puzzle' | 'sparkles' | 'message-square' | 'users';
}

export interface LearningDirection {
  id: string;
  topic: string;
  description: string;
  status: 'Currently Exploring' | 'Upcoming Focus';
}
