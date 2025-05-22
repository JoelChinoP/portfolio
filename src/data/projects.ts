import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping experience with cart, checkout, and payment integration.',
    icon: 'globe',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=500',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    color: '#FF6B6B',
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://demo-ecommerce.com',
    status: 'completed',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing creative work and professional experience.',
    icon: 'palette',
    image: '/api/placeholder/800/500',
    tags: ['Astro', 'TypeScript', 'Tailwind', 'GSAP'],
    color: '#4ECDC4',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.com',
    status: 'completed',
  }
];