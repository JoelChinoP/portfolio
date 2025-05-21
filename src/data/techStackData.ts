import { Astro } from '@/components/icons/Astro'
import { Docker } from '@/components/icons/Docker'
import { Drizzle } from '@/components/icons/Drizzle'
import { Hono } from '@/components/icons/Hono'
import { Jest } from '@/components/icons/Jest'
import { Nestjs } from '@/components/icons/NestJs'
import { NextJs } from '@/components/icons/NextJs'
import { Nuxtjs } from '@/components/icons/NuxtJs'
import { Prisma } from '@/components/icons/Prisma'
import { Puppeteer } from '@/components/icons/Puppeteer'
import { ReactJs } from '@/components/icons/ReactJs'
import { Reactquery } from '@/components/icons/ReactQuery'
import { Swr } from '@/components/icons/Swr'
import { Tailwindcss } from '@/components/icons/Tailwind'
import { TypeScript } from '@/components/icons/TypeScript'
import { Vuejs } from '@/components/icons/VueJs'
import type { JSX, SVGProps } from 'react'

type TechStack = {
  name: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  description: string
}

const techStacks: TechStack[] = [
  {
    name: 'TypeScript',
    icon: TypeScript,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Next',
    icon: NextJs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'React Native',
    icon: ReactJs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'React Query',
    icon: Reactquery,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Tailwind',
    icon: Tailwindcss,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'SWR',
    icon: Swr,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Puppeteer',
    icon: Puppeteer,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Jest',
    icon: Jest,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Prisma',
    icon: Prisma,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Drizzle',
    icon: Drizzle,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Nest',
    icon: Nestjs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Hono',
    icon: Hono,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Astro',
    icon: Astro,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Vue',
    icon: Vuejs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Nuxt',
    icon: Nuxtjs,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  },
  {
    name: 'Docker',
    icon: Docker,
    description:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
  }
]

export default techStacks
