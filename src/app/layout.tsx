'use client'

import React from 'react'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from 'next-themes'

const metadata: Metadata = {
  title: 'Diego Marulanda',
  description: 'Diego Marulanda Portfolio',
  keywords:
    'Next.js 13,React,TypeScript,Tailwind, Frontend Developer, Html, Css, JavaScript, Git, Github, Linux, Visual Studio Code, Bash',
}

export const popps = Poppins({
  weight: ['600', '400'],
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
        <title>DiegoMarulanda</title>
      </head>
      <body className={`${popps.className} bg-slate-100 dark:bg-slate-700`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
