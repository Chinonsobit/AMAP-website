export interface TeamMember {
  name: string;
  role: string;
  email: string;
  image: string;
  bio: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface CurriculumModule {
  title: string;
  description: string;
  topics: string[];
}