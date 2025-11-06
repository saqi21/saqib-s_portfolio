// Types and interfaces for the portfolio
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  title: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: SocialLink[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level: number;
}

export interface Language {
  name: string;
  level: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  likes: number;
  comments: number;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Statistics {
  hoursPerDay: number;
  projectsFinished: number;
  happyClients: number;
  coffeeDrinked: number;
}

export interface Project {
  id?: string;
  name: string;
  url?: string;
  logo?: string; // Path to project logo/image
  description?: string;
  technologies?: string[];
  screenshots?: string[];
  githubUrl?: string;
  liveUrl?: string;
  challenges?: string[];
  results?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
  project?: string;
  date?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  challenges: string[];
  screenshots?: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  teamSize?: string;
  // Extended fields for detailed case studies
  role?: string;
  keyContributions?: Array<{
    title: string;
    description: string;
    highlights?: string[];
    example?: string;
  }>;
  techStackDetails?: Array<{
    category: string;
    tools: string[];
  }>;
  achievements?: string[];
  impactSummary?: Array<{
    metric: string;
    before: string;
    after: string;
  }>;
  leadership?: string;
  keyTakeaways?: string[];
  detailedSummary?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
