import type { Project } from '@/types/project';
import CalendarDays from "lucide-static/icons/calendar-days.svg";
import GamePad from "lucide-static/icons/gamepad-2.svg";
import Datanase from "lucide-static/icons/database-zap.svg";
import Bot from "lucide-static/icons/bot.svg";
import KeyRound from 'lucide-static/icons/key-round.svg';
import Wind from 'lucide-static/icons/wind.svg';
import Presentation from 'lucide-static/icons/presentation.svg';

export const projects: Project[] = [
  {
    title: 'Gestión de Horarios Universitarios',
    description: 'Sistema para gestionar horarios de clases en la universidad: creación, visualización y eliminación de cursos.',
    icon: CalendarDays,
    image: 'img/projects/proyecto_horario.jpg',
    tags: ['Next.js', 'React', 'Node.js', 'MySQL', 'Backend'],
    color: '#1E3A8A', // azul oscuro
    github: 'https://github.com/JoelChinoP/Horario_con_NextJS.git',
    demo: 'https://horario-dg.vercel.app/',
    status: 'completed',
  },
  {
    title: 'Juego de Lengua de Señas con IA',
    description: 'Juego del ahorcado con reconocimiento de señas usando IA y cámara. Interacción por voz y visión por computadora.',
    icon: GamePad,
    image: 'img/projects/proyecto_lenguaje_senias.jpeg',
    tags: ['Python', 'IA', 'Visión Computacional', 'Chat de Voz'],
    color: '#92400E', // ámbar oscuro
    github: 'https://github.com/AdMu2838/Proyecto-Arquitectura-de-computadora.git',
    status: 'completed',
  },
  {
    title: 'Backend CEPRUNSA - Gestión Académica',
    description: 'Sistema para automatizar la asignación de docentes, salones y horarios del CEPRUNSA.',
    icon: Datanase,
    image: 'img/projects/proyecto_cpu_cepr.jpeg',
    tags: ['NestJS', 'PostgreSQL', 'Prisma', 'Drizzle', 'Node.js'],
    color: '#065F46', // verde oscuro
    demo: 'https://horarios-cepre-back-581122223714.southamerica-west1.run.app/swagger',
    status: 'in-progress',
  },
  {
    title: 'Bot de Automatización WhatsApp',
    description: 'Bot para enviar mensajes automáticos, encuestas y más en WhatsApp usando Selenium.',
    icon: Bot,
    image: 'img/projects/proyecto_bot_wsp.jpeg',
    tags: ['Python', 'Selenium', 'Automatización'],
    color: '#374151', // gris oscuro
    github: 'https://github.com/JoelChinoP/Reportes.git',
    status: 'completed',
  },
  {
    title: 'Login con OAuth y Google',
    description: 'Sistema de autenticación usando Google OAuth, React en el frontend y Go en el backend.',
    icon: KeyRound,
    image: 'img/projects/proyecto_login_auth.jpeg',
    tags: ['React', 'Golang', 'OAuth', 'Login'],
    color: '#312E81', // índigo oscuro
    github: 'https://github.com/JoelChinoP/OAuth-with-Go.git',
    status: 'completed',
  },
  {
    title: 'Monitoreo de Calidad del Aire',
    description: 'Proyecto de monitoreo ambiental con nodos distribuidos usando Python, C++ y Qt.',
    icon: Wind,
    image: 'img/projects/proyecto_calidad_aire.jpeg',
    tags: ['Python', 'C++', 'Qt', 'IoT', 'Aire'],
    color: '#064E3B', // verde esmeralda oscuro
    github: 'https://github.com/JoelChinoP/AirQualityMonitor.git',
    status: 'completed',
  },
  {
    title: 'Landing Page - Ponencia Lenguaje R',
    description: 'Landing page informativa para una ponencia académica sobre el lenguaje R.',
    icon: Presentation,
    image: 'img/projects/proyecto_landing_r.jpeg',
    tags: ['React', 'Landing Page', 'R'],
    color: '#701A75', // fucsia oscuro
    github: 'https://github.com/JoelChinoP/ieeecsunsa-awspro.git',
    demo: 'https://r-programming-lab.vercel.app/',
    status: 'completed',
  }
];
