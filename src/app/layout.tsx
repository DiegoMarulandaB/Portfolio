import '../styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from 'next-themes'
import React from 'react'


export const metadata: Metadata = {
  title: 'Diego Marulanda',
  description:
    'Portfolio where you will find different projects, whether academic or personal, related to programming.',
  keywords:
    'Next.js 13,React,TypeScript,Tailwind, Frontend Developer, Html, Css, JavaScript, Git, Github, Linux, Neovim,Visual Studio Code, Bash',
  metadataBase: new URL('https://diegomarulanda.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/og-image.jpg',
  },
}

const popps = Poppins({
  weight: ['600', '400'],
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" type="./favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* canonical */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://diegomarulanda.vercel.app/" />
        <title>DiegoMarulanda</title>
        <meta
          name="description"
          content="Portfolio where you will find different projects with different programming languages, such as Css, Html, JavaScript, React, TypeScript.
          You can also see academic projects, personal projects. with their respective repository on Github"
        ></meta>
      </head>
      <body className={`${popps.className} ligth-bg-theme dark-bg-theme`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
