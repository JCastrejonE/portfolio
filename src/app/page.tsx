import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoOracle from '@/images/logos/oracle.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoxBacked from '@/images/logos/xbacked.jpeg'
import logoRooftop from '@/images/logos/rooftop.jpeg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpeg'
import image5 from '@/images/photos/image-5.jpeg'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function RocketIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg className="w-6 h-6 fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.806 5.614-4.251.362-2.244 2.243a1.058 1.058 0 0 0 .6 1.8l3.036.356m9.439 1.819-.362 4.25-2.243 2.245a1.059 1.059 0 0 1-1.795-.6l-.449-2.983m9.187-12.57a1.536 1.536 0 0 0-1.26-1.26c-1.818-.313-5.52-.7-7.179.96-1.88 1.88-5.863 9.016-7.1 11.275a1.05 1.05 0 0 0 .183 1.25l.932.939.937.936a1.049 1.049 0 0 0 1.25.183c2.259-1.24 9.394-5.222 11.275-7.1 1.66-1.663 1.275-5.365.962-7.183Zm-3.332 4.187a2.115 2.115 0 1 1-4.23 0 2.115 2.115 0 0 1 4.23 0Z"/>
  </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link target="_blank" className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
      <span className="ml-4">{children}</span>
    </Link>
  )
}

function SocialLinkHorizontal({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4 ">{children}</span>
      </Link>
    </li>
  )
}


interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7  rounded-full" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'xBacked',
      title: 'Core Contributor',
      logo: logoxBacked,
      start: 'Sep 2021',
      end: 'Jun 2023',
    },
    {
      company: 'Facebook',
      title: 'Production Engineer Intern',
      logo: logoFacebook,
      start: 'Jun 2020',
      end: 'Sep 2020',
    },
    {
      company: 'Oracle',
      title: 'Software Engineer Intern',
      logo: logoOracle,
      start: 'Jul 2019',
      end: 'Jan 2020',
    },
    {
      company: 'Rooftop Ventures LLC',
      title: 'Full stack developer',
      logo: logoRooftop,
      start: 'Mar 2017',
      end: 'Jan 2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/CV_JuanCarlosCastrejon.pdf" target="_blank" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image5, image2, image3].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 h-auto flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:h-96 sm:w-72 sm:rounded-2xl',
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-11">
          <div className="flex flex-col col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Computer scientist, entrepreneur and tech enthusiast.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-justify">
              Hello there, I'm Juan, a tech enthusiast and software innovator based in Guadalajara, Mexico.
              My most recent adventure in the world of blockchain led me to be a core contributor at <a href='https://xbacked.io' className='underline text-teal-500' target='_blank'>xBacked</a>,
              a pioneering lending protocol on the Algorand blockchain.
              <br/><br/>
              Having completed internships at leading companies, I've developed a broad range of skills.
              My path in the tech industry has been defined by a self-starter attitude,
              continually seeking for innovative challenges and creative solutions.
              <br/><br/>
              Driven by a passion for technology and its potential to change the world,
              I am on a constant pursuit to empower communities through software.
              <br/><br/>
              Feel free to reach out if you're interested in developing software, blockchain or tech innovation. Let's explore what's possible together!
            </p>
            <div className="mt-6 grid grid-cols-2">
              <div className='flex gap-6 col-span-2 sm:col-span-1'>
                <SocialLink
                  href="https://linkedin.com/in/jcastrejone"
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
                <SocialLink
                  href="https://github.com/jcastrejone"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href="https://x.com/dr_ntropy"
                  aria-label="Follow on X"
                  icon={XIcon}
                />
                <SocialLink
                  href="https://instagram.com/jc_castrejon"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
              </div>
              <div className=''>
                <SocialLinkHorizontal
                  href="mailto:jcastrejone@gmail.com"
                  icon={MailIcon}
                  className="border-zinc-100 dark:border-zinc-700/40"
                >
                  jcastrejone@gmail.com
                </SocialLinkHorizontal>
              </div>
            </div>
          </div>
          <div className="space-y-5 lg:pl-8 xl:pl-12 col-span-5">
            <Resume />
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <RocketIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Entrepreneurship</span>
              </h2>
              <Button href="/projects" className="group mt-6 w-full">
                See projects
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
