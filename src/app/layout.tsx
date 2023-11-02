import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - JC Castrejón',
    default:
      "JC Castrejón - Computer Scientist",
  },
  description:
    "Hello there, I'm Juan Carlos, a tech enthusiast and software engineer based in Guadalajara, Mexico.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
