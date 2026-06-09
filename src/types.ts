export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  challengeSolved: string;
  results: string[];
  technologies: string[];
  productionUrl: string;
  githubUrl?: string;
  role: string;
  screenshotPrompt: string; // Used to describe the visual context
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
