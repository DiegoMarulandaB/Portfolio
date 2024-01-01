import Home from '../components/Home/Home'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6">
      <Home />
      <About />
      <Projects />
    </main>
  )
}
