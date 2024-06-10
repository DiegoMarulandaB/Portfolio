import Home from '../components/Home/Home'
import Projects from '@/s/Projects/Projects'
import About from '@/s/About/About'
import Experience from '@/s/Experience/Experience'
import Contact from '@/s/Contact/Contact'
import React from 'react'

export default function HomePage() {
  return (
    <main className="mx-auto lg:px-8 max-w-screen-lg px-4 sm:px-6 py-8 sm:py-8">
      <Home />
      <Contact />
      <Experience />
      <Projects />
      <About />
    </main>
  )
}
