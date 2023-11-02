import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Cloud server">
            When I'm traveling it is sometimes difficult to keep all settings and files in sync
            between my different machines. I've been using a cloud server to solve this problem,
            it is just very comfortable to login using ssh and access my work station from anywhere.
            It runs Ubuntu 22 with the following specs:
            CPU: 4 vCore
            RAM:8 GB
            SSD: 160 GB
          </Tool>
          <Tool title="MacBook Pro 13-inch, 2017">
            After spending most of my college years using a very basic HP running Arch Linux, I decided to
            invest in a MacBook for mobile development, there is something about the ease of installation
            combined with the Unix environment that makes it confortable enough. The last thing you want when
            projects stack up is to fine tune that one program that you need to run.
          </Tool>
          <Tool title="Custom built PC">
            The first computer I built back in 2015 is still my gaming rig. It features a not impressive
            anymore Nvidia GTX 970. Back in the day this was great value for money, now it is just a
            reminder of how fast technology moves. I'm very proud it still holds for most of the recent AAA
            titles. Of course this one runs Windows to achieve the trifecta of OS.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code" href='https://code.visualstudio.com'>
            Over the years I've been using most of the mainstream editors as well as the
            "git gud" ones (emacs, vim). There's no doubt that VSCode just
            makes everything easier. These days it is hard to find someone that
            doesn't know VSCode.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Obsidian" href='https://obsidian.md'>
            I've been using Obsidian for all of my note-taking for the past year
            or so and it's been a game-changer. I really like the graph view,
            which makes it easy to see how ideas connect to each other.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Gadgets">
          <Tool title="Corsair K70 RGB">
            I'm a huge nerd when it comes to keyboards. And this one was my very first and it is still
            my main keyboard. It uses Cherry MX Brown switches, which are tactile and not too loud.
            Corsair was a great brand for great quality peripherals, I'm not sure it still holds true.
          </Tool>
          <Tool title="Keychron K6">
            Again, I've invested a good amount of time in keyboards. This one is great for portability as it is 65%.
            It also features a hot-swappable PCB, which means I can change the switches without soldering. I went on
            and combined some Cherry MX Black and Blue switches to make it very funky but interesting.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
