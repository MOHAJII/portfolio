export type Profession = 'ecommerce' | 'real-estate' | 'healthcare' | 'education' | 'default';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Technology {
  id: number;
  name: string;
  icon: string;
}