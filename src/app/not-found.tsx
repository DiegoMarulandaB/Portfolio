
export default function NotFound() {
  return (
    <div className=" bg-slate-200 dark:bg-slate-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700    p-8 rounded-md shadow-lg ">
          <h1 className="text-white-900 text-4xl font-bold mb-4">Error 404</h1>
          <p className="text-white-700  mb-6">Oops! The page you are looking for doesn't exist.</p>
          <a
            href="/"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40 border-2 border-white-500"
          >
            Go Home!
          </a>
        </div>
      </div>
    </div>
  )
}