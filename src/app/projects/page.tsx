import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoSailova from '@/images/logos/logoSailova.jpg'
import logoxBacked from '@/images/logos/xbacked.jpeg'
import logoNetlab from '@/images/logos/logoNetlab.png'
import logoMC from '@/images/logos/logoMC.png'
import logoSustentum from '@/images/logos/logoSustentum.png'

const projects = [
  {
    name: 'Sailova',
    title: 'Co-founder',
    description:
      `Sailova is a platform to enable yacht rental with a very easy and friendly process. It aims to
      solve the problem of reservations in general expanding to any type of product or service.
      `,
    link: { href: 'https://sailova.com', label: 'sailova.com' },
    logo: logoSailova,
  },
  {
    name: 'xBacked',
    title: 'Core Contributor',
    description:
      'A fully decentralized lending protocol that allows borrowing a stablecoin backed by tokens (goBTC, goETH, and many more) in the Algorand ecosystem.',
    link: { href: 'https://xbacked.io', label: 'xbacked.io' },
    logo: logoxBacked,
  },
  {
    name: 'Netlab',
    title: 'Co-founder',
    description:
      `An ecommerce for PC parts and electronics focused in the importance of a well designed
      PC part configurator, and a super fast marketplace. (In construction 🚧).
      `,
      link: { href: 'http://netlab.mx', label: 'netlab.mx' },
    logo: logoNetlab,
  },
  {
    name: 'Mundo Cognitivo',
    title: 'Co-founder',
    description:
      'A consultory focused in the development of tailor made AI solutions and courses for companies in Mexico.',
    link: { href: 'https://www.mundocognitivo.com', label: 'mundocognitivo.com' },
    logo: logoMC,
  },
  {
    name: 'Sustentum',
    title: 'Co-founder',
    description:
      `A crowdfunding platform for sustainable real estate projects in Mexico, powered by crypto to
      enable speed, transparency and trust. (Abandoned 🪦)
      `,
    link: { href: '', label: 'sustentum.io' },
    logo: logoSustentum,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I've been working on over the years."
      intro="Here are some of the projects where I have been taking an essential role in the last years. All of them
      represent their own challenges in an specific field of knowledge, and I'm very proud of them."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <div className='text-sm text-zinc-500 dark:text-zinc-400'>
              <Card.Link href={project.link.href}>{project.title}</Card.Link>
            </div>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
