export interface Project {
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  color: string;
  github: string;
  demo: string;
  status: 'completed' | 'in-progress' | 'planned';
}