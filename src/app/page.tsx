import Home from '../components/Home/Home'
import Projects from '@/s/Projects/Projects'
import About from '@/s/About/About'
import Experience from '@/s/Experience/Experience'


export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6">
      <Home />
      <Experience />
      <Projects />
      <About />
    </main>
  )
}
