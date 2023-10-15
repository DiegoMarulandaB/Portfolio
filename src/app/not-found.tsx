'use client'
import AnimatedText from '../components/AnimatedText/AnimatedText'
export default function NotFound() {
  return (
    <div className=" bg-slate-100 dark:bg-slate-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center text-center text-white bg-gradient-to-r bg-white dark:bg-slate-600 rounded-3xl px-4 py-4 mx-2 mr-2 mt-10 w-26 text-2xl  font-bold ">
          <h1 className="text-center text-8xl text-neutral-800 dark:text-neutral-50  font-bold mb-4">
            <AnimatedText text="Error 404" className="mx-2 mr-2 mb-2 mt-6 " />
          </h1>
          <p className="text-center text-4xl text-pink-600  mb-6">Oops! The page you are looking for doesn't exist.</p>
          <a
            href="/"
            rel="noopener noreferrer"
            className=" hover:text-cyan-500 text-neutral-800 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform  text-center text-3xl font-bold uppercase cursor pointer"
          >
            Go Home!
          </a>
        </div>
      </div>
    </div>
  )
}
