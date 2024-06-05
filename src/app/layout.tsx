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
    'Welcome to my portfolio. Here you can explore a variety of projects developed with cutting-edge technologies such as CSS, HTML, JavaScript, React and TypeScript.',
  keywords:
    'Next.js 14,React,TypeScript,Tailwind, Frontend Developer, Html, Css, JavaScript, Git, Github, Linux, Neovim,Visual Studio Code, Bash, testing',
  metadataBase: new URL('https://diegomarulanda.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://diegomarulanda.vercel.app/',
    title: 'Diego Marulanda',
    description:
      'Welcome to my portfolio. Here you can explore a variety of projects developed with cutting-edge technologies such as CSS, HTML, JavaScript, React and TypeScript.',
    images: [
      {
        url: 'https://diegomarulanda.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'opengraph image from my portfolio',
        type: 'image/png',
      },
    ],
    siteName: 'diegomarulanda.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Marulanda',
    description:
      'Welcome to my portfolio. Here you can explore a variety of projects developed with cutting-edge technologies such as CSS, HTML, JavaScript, React and TypeScript.',
    images: [
      {
        url: 'https://diegomarulanda.vercel.app/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'image to post on twitter from my portfolio',
      },
    ],
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
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="android-chrome" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome" type="image/png" sizes="512x512" href="/android-chrome-512x512.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://diegomarulanda.vercel.app/" />
        <title>DiegoMarulanda</title>
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
