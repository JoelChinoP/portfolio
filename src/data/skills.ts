import ReactIcon from "devicon/icons/react/react-original.svg";
import NextjsIcon from "devicon/icons/nextjs/nextjs-original.svg";
import TypescriptIcon from "devicon/icons/typescript/typescript-original.svg";
import JavascriptIcon from "devicon/icons/javascript/javascript-original.svg";
import TailwindcssIcon from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import NodejsIcon from "devicon/icons/nodejs/nodejs-original.svg";
import NestjsIcon from "devicon/icons/nestjs/nestjs-original.svg";
import PythonIcon from "devicon/icons/python/python-original.svg";
import DjangoIcon from "devicon/icons/django/django-plain.svg";
import JavaIcon from "devicon/icons/java/java-original.svg";
import SpringIcon from "devicon/icons/spring/spring-original.svg";
import GoIcon from "devicon/icons/go/go-original-wordmark.svg";
import PostgresqlIcon from "devicon/icons/postgresql/postgresql-original.svg";
import MysqlIcon from "devicon/icons/mysql/mysql-original.svg";
import GooglecloudIcon from "devicon/icons/googlecloud/googlecloud-original.svg";
import DockerIcon from "devicon/icons/docker/docker-original.svg";
// Astro y Excel no están en devicon, usa URLs directas

export const skillCategories = [
  {
    name: "Frontend",
    color: "from-blue-500 to-purple-500",
    skills: [
      {
        name: "React",
        icon: ReactIcon,
        color: "3, 169, 244",
        proficiency: 70
      },
      {
        name: "Next.js",
        icon: NextjsIcon,
        color: "255, 255, 255",
        proficiency: 60
      },
      {
        name: "TypeScript",
        icon: TypescriptIcon,
        color: "3, 169, 244",
        proficiency: 90
      },
      {
        name: "JavaScript",
        icon: JavascriptIcon,
        color: "255, 235, 59",
        proficiency: 80
      },
      {
        name: "Tailwind CSS",
        icon: TailwindcssIcon,
        color: "3, 169, 244",
        proficiency: 80
      },
      {
        name: "Astro",
        icon: "https://seeklogo.com/images/A/astro-logo-B3B4DABB0A-seeklogo.com.png" as unknown as typeof ReactIcon,
        color: "255, 152, 0",
        proficiency: 50
      }
    ]
  },
  {
    name: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      {
        name: "Node.js",
        icon: NodejsIcon,
        color: "76, 175, 80",
        proficiency: 90
      },
      {
        name: "NestJS",
        icon: NestjsIcon,
        color: "233, 30, 99",
        proficiency: 80
      },
      {
        name: "Python",
        icon: PythonIcon,
        color: "255, 193, 7",
        proficiency: 70
      },
      {
        name: "Django",
        icon: DjangoIcon,
        color: "76, 175, 80",
        proficiency: 60
      },
      {
        name: "Java",
        icon: JavaIcon,
        color: "244, 67, 54",
        proficiency: 85
      },
      {
        name: "Spring",
        icon: SpringIcon,
        color: "76, 175, 80",
        proficiency: 70
      },
      {
        name: "Go",
        icon: GoIcon,
        color: "0, 188, 212",
        proficiency: 50
      }
    ]
  },
  {
    name: "Database & Cloud",
    color: "from-orange-500 to-red-500",
    skills: [
      {
        name: "PostgreSQL",
        icon: PostgresqlIcon,
        color: "33, 150, 243",
        proficiency: 80
      },
      {
        name: "MySQL",
        icon: MysqlIcon,
        color: "33, 150, 243",
        proficiency: 80
      },
      {
        name: "Google Cloud",
        icon: GooglecloudIcon,
        color: "255, 193, 7",
        proficiency: 60
      },
      {
        name: "Docker",
        icon: DockerIcon,
        color: "3, 169, 244",
        proficiency: 70
      }
    ]
  },
  {
    name: "Office & Tools",
    color: "from-pink-500 to-rose-500",
    skills: [
      {
        name: "Excel",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" as unknown as typeof ReactIcon,
        color: "0, 112, 192",
        proficiency: 70
      }
    ]
  }
];