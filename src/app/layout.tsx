'use client'

import '../styles/globals.css'
import { metadata } from '../app/metadata'
import { Poppins } from 'next/font/google'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { ThemeProvider } from 'next-themes'
import React from 'react'

const poppins = Poppins({
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://diegomarulanda.vercel.app/" />
        {/* <title>{String(metadata.title)}</title> */}
        <title>{metadata && metadata.title ? String(metadata.title) : 'Diego Marulanda'}</title>
        <meta name="description" content={String(metadata.description)} />
        <meta name="keywords" content={String(metadata.keywords)} />
        <meta property="og:title" content={String(metadata.openGraph?.title)} />
        <meta property="og:description" content={String(metadata.openGraph?.description)} />
        <meta property="og:type" content={String(metadata.openGraph?.type)} />
        <meta property="og:image" content="https://diegomarulanda.vercel.app/opengraph-image.png" />
        <meta property="og:image:alt" content="Programming portfolio" />
        <meta property="og:site_name" content="https://diegomarulanda.vercel.app/" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:title" content="Portfolio Diego Marulanda" />
        <meta name="twitter:image" content="https://diegomarulanda.vercel.app/twitter-image.png" />
        <meta property="twitter:image:alt" content="Programming portfolio" />
        <meta
          property="twitter:description"
          content="Portfolio where you will find different projects with different programming languages, such as Css, Html, JavaScript, React, TypeScript"
        />
        <meta property="twitter:site_name" content="diegomarulanda.vercel.app/" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>
      <body className={`${poppins.className} ligth-bg-theme dark-bg-theme`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
