import React from 'react'

const ContactButton = () => {
  return (
    <div className="flex flex-col-row items-start text-start justify-start md:items-center md:text-center md:justify-center">
      <a
        href="mailto:%20diegomjobs@gmail.com%20?Subject=Aquí%20el%20asunto%20del%20mail"
        className="text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me by email"
      >
        <span className="relative text-center cursor-pointer mr-4 mt-2 ml-3  text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
          Email →
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/diegomarulandabarrientos/"
        className="text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-slate-50 inline-flex hover:rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <span className="relative text-center cursor-pointer mr-4 mt-2 ml-3  text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
          Linkedin →
        </span>
      </a>
      <a
        href="https://github.com/DiegoMarulandaB"
        className="text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-slate-50 inline-flex hover:rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <span className="relative text-center cursor-pointer mr-4 mt-2 ml-3 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
          Github →
        </span>
      </a>
    </div>
  )
}

export default ContactButton
