export interface Project {
  title: string;
  description: string;
  icon: any;
  image: string;
  tags: string[];
  color: string;
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress' | 'planned';
}