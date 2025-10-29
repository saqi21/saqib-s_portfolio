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
