import Metadata from '../types/Metadata.types'

export const metadata: Metadata = {
  title: 'DiegoMarulanda',
  description:
    'Author Diego Marulanda. Portfolio made with TypeScript, Tailwind, Next.js 14. Where you will find different projects, whether academic or personal, related to programming.',
  keywords:
    'Next.js 14,React,TypeScript,Tailwind, Frontend Developer, Html, Css, JavaScript, Git, Github, Linux, Neovim, Visual Studio Code, Bash',
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Diego Marulanda',
    description:
      'Portfolio where you will find different projects, whether academic or personal, related to programming.',
    type: 'website',
    images: [
      {
        url: new URL('./opengraph-image.png', 'https://diegomarulanda.vercel.app/'),
        width: 1200,
        height: 630,
        alt: 'Open Graph Image Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
    title: 'Diego Marulanda',
    description:
      'Portfolio where you will find different projects, whether academic or personal, related to programming.',
    images: [new URL('./twitter-image.png', 'http://localhost:3000')],
  },
}