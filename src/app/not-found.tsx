'use client'
import React from 'react'
function NotFound() {
  return (
    <div className=" bg-slate-100 dark:bg-slate-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center text-center text-white bg-gradient-to-r bg-white dark:bg-slate-600 rounded-lg px-18 py-18 mx-2 mr-2 mt-10 text-2xl  font-bold ">
          <h1 className="text-start justify-start md:items-center md:text-center md:justify-center text-8xl text-slate-950 dark:text-slate-50 mx-2 mr-2 mb-2 mt-4 font-bold">
            Error 404
          </h1>
          <p className="text-start justify-start md:items-center md:text-center md:justify-center text-4xl text-blue-800 dark:text-amber-200 mb-6 mt-4 mr-2 mx-2">
            Oops! The page you are looking for doesn&apos;t exist.
          </p>
          <div className="text-start justify-start md:items-center md:text-center md:justify-center">
            <a
              href="/#home"
              rel="noopener noreferrer"
              className=" inline-block cursor-pointer mr-16 text-1xl text-white bg-slate-600 hover:bg-slate-950  font-medium rounded-lg text-sm px-4 py-4 me-1 mb-4 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100"
              aria-label="not-found"
            >
              Go Home!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
