// 'use client'

interface ProjectCardsProps {
  showCard: string
  category: string
  ImageHref: string
  title: string
  description: string
  button: string
  buttonHref: string
  loading?: 'eager' | 'lazy' | undefined
  href: string
}

export default ProjectCardsProps
