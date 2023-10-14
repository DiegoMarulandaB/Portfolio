
export default function NotFound() {
  return (
    <div className=" bg-slate-100 dark:bg-slate-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto  ">
          <h1 className="text-neutral-800 dark:text-neutral-50 text-4xl font-bold mb-4">Error 404</h1>
          <p className="text-pink-600  mb-6">Oops! The page you are looking for doesn't exist.</p>
          <a
            href="/"
            rel="noopener noreferrer"
            className="bg-slate-100 dark:bg-slate-700  hover:text-cyan-500 text-neutral-800 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform text-1xl"
          >
            Go Home!
          </a>
        </div>
      </div>
    </div>
  )
}