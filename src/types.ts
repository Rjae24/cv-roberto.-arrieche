export interface Project {
  id: string;
  shortLabel: string;
  title: string;
  sector: string;
  solutionType: string;
  description: string;
  longDescription: string;
  challengeSolved: string;
  solutionApplied: string;
  results: string[];
  technologies: string[];
  imageUrl: string;
  productionUrl?: string;
  githubUrl?: string;
  role: string;
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'workflow' | 'ia';
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar';
  description: string;
  iconName: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current: boolean;
  courses: string[];
  highlight: string;
}

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  email: string;
  location: string;
  github: string;
  linkedin?: string;
}

export interface ServicePackage {
  id: string;
  line: string;
  title: string;
  tagline: string;
  deliverables: string[];
  localPrice: string;
  localNote?: string;
  corporatePrice: string;
  corporateNote?: string;
  differenceNote: string;
  highlighted?: boolean;
}

export interface PricingScheme {
  id: string;
  title: string;
  idealFor: string;
  advantage: string;
  structure: string;
}

export interface CommercialPolicy {
  id: string;
  title: string;
  summary: string;
  iconName: 'CreditCard' | 'RefreshCw' | 'Server' | 'ShieldCheck' | 'FileCheck';
}
