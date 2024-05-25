'use client'

import React, { useState } from 'react'
import ProjectsCardsDescription from './ProjectsCardsDescription'

const Projects: React.FC = () => {
  const [showCard, setShowCard] = useState<string>('all')

  const handleProject = (category: string) => {
    setShowCard(category)
  }

  return (
    <section id="projects" className="pt-28">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className=" text-start justify-start ml-2 mx-1 mr-1 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
          <h2>Projects</h2>
        </div>
        <div className="min-h-screen flex">
          <div className="items-start justify-start">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full flex flex-wrap text-center justify-start -mx-2">
                <ul className="flex flex-wrap justify-start mb-2 space-x-1 mt-4">
                  <li className="mb-1 ml-6">
                    <button
                      onClick={() => handleProject('all')}
                      className={`inline-block py-2 px-2 text-1xl font-semibold  md:py-2 lg:px-1 ${
                        showCard === 'all'
                          ? 'activeClasses text-start cursor-pointer mx-2 mr-2 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2 py-2 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100'
                          : 'inactiveClasses '
                      }`}
                    >
                      All Projects
                    </button>
                  </li>

                  <li className="mb-1 pl-5">
                    <button
                      onClick={() => handleProject('academic projects')}
                      className={`inline-block py-2 px-2 text-1xl  font-semibold md:py-2 lg:px-1${
                        showCard === 'academic projects'
                          ? 'activeClasses text-center cursor-pointer mx-2 mr-2 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2 py-2 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100'
                          : 'inactiveClasses'
                      }`}
                    >
                      Academic Projects
                    </button>
                  </li>
                  <li className="mb-1 pl-5">
                    <button
                      onClick={() => handleProject('personal projects')}
                      className={`inline-block py-2 px-2 text-1xl font-semibold  md:py-2 lg:px-1${
                        showCard === 'personal projects'
                          ? 'activeClasses text-center cursor-pointer mx-2 mr-2 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100'
                          : 'inactiveClasses'
                      }`}
                    >
                      Personal Projects
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <ProjectsCardsDescription showCard={showCard} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
