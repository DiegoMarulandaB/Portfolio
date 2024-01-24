'use client'

import React, { useState } from 'react'
import ProjectCards from '../ProjectsCards/ProjectsCards'

const Projects: React.FC = () => {
  const [showCard, setShowCard] = useState<string>('all')

  const handleProject = (category: string) => {
    setShowCard(category)
  }

  return (
    <section id="projects" className="pt-28">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className=" text-start justify-start ml-2 mx-1 mr-1 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
          <h1>Projects</h1>
        </div>
        <div className="min-h-screen flex">
          <div className="items-start justify-start">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full flex flex-wrap text-center justify-start -mx-2">
                <ul className="flex flex-wrap justify-start mb-2 space-x-1 mt-4">
                  <li className="mb-1 ml-6">
                    <button
                      onClick={() => handleProject('all')}
                      className={`inline-block py-2 px-2 text-1xl font-semibold  md:py-2 lg:px-1${
                        showCard === 'all'
                          ? 'activeClasses text-start cursor-pointer mx-2 mr-2 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2 py-2 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100'
                          : 'inactiveClasses'
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

            <div className=" mb-[60px] max-w-[794px] ml-2 mx-1 mr-1">
              <div className="flex flex-wrap -mx-4 text-1xl">
                <ProjectCards
                  loading="lazy"
                  ImageHref="profileGithub.webp"
                  category="All Projects"
                  title="My repository on Github"
                  description="Browse all my repositories on GitHub, where you can discover a variety of projects from my academic programming background, and my most relevant personal projects!"
                  button="Github →"
                  buttonHref="https://github.com/DiegoMarulandaB"
                  href="https://github.com/DiegoMarulandaB"
                  showCard={showCard}
                />
                <ProjectCards
                  loading="lazy"
                  ImageHref="digitalBooking.webp"
                  category="Academic Projects"
                  title="Digital booking"
                  description="MVP to book tours and different activities in various countries. Technologies: Git, Gitlab,React, Java v. 17, JWT, Gradle, Spring Boot, MySQL, AWS, Jest.JS, Postman, Selenium IDE."
                  button="Github →"
                  buttonHref="https://github.com/DiegoMarulandaB/Digital-booking"
                  href="https://github.com/DiegoMarulandaB/Digital-booking"
                  showCard={showCard}
                />
                <ProjectCards
                  loading="lazy"
                  ImageHref="calculator.webp"
                  category="Personal Projects"
                  title="Calculator basic"
                  description="Project inspired by the FreeCodeCamp course on basic React. Provides an interactive and functional experience for the user. Technologies: Vite compiler, React library."
                  button="Github →"
                  buttonHref="https://github.com/DiegoMarulandaB/interactive-calculator-react"
                  href="https://github.com/DiegoMarulandaB/interactive-calculator-react"
                  showCard={showCard}
                />
                <ProjectCards
                  loading="lazy"
                  ImageHref="Final-esp-frontend-2.webp"
                  category="Academic Projects"
                  title="The simpsons application"
                  description="Final project of the frontend 2 subject of the frontend specialization in Digital House. Using The Simpsons API with solid principles, clean code, validations. Technologies: Typescript, unit testing."
                  button="Github →"
                  buttonHref="https://github.com/DiegoMarulandaB/ctd-fe2-proyecto-final-base"
                  href="https://github.com/DiegoMarulandaB/ctd-fe2-proyecto-final-base"
                  showCard={showCard}
                />
                <ProjectCards
                  loading="lazy"
                  ImageHref="Final-esp-frontend.webp"
                  category="Academic Projects"
                  title="Rick and Morty application"
                  description="Final project of the frontend subject 1 of the frontend specialization in Digital House. Using the Rick and Morty API with documentation. Technologies: TypeScript, Redux, Thunk."
                  button="Github →"
                  buttonHref="https://github.com/DiegoMarulandaB/ctd-esp-fe1-final"
                  href="https://github.com/DiegoMarulandaB/ctd-esp-fe1-final"
                  showCard={showCard}
                />
                <ProjectCards
                  loading="lazy"
                  ImageHref="frontEnd3.webp"
                  category="Academic Projects"
                  title="Health application"
                  description="Final project of the Frontend 3 subject, of the Certified Tech Developer degree. Health application using an API, error validations and submit. Technologies: React, Vite."
                  button="Github →"
                  buttonHref="https://github.com/DiegoMarulandaB/finalFrontEnd"
                  href="https://github.com/DiegoMarulandaB/finalFrontEnd"
                  showCard={showCard}
                />

                <ProjectCards
                  loading="lazy"
                  ImageHref="counterclick.webp"
                  category="Personal Projects"
                  title="Counter Click"
                  description="Project inspired by the FreeCodeCamp course on basic React. Provides an interactive and functional experience for the user. Technologies: Vite compiler, React library."
                  button="Github →"
                  buttonHref="https://github.com/DiegoMarulandaB/click-counter-freecodecamp"
                  href="https://github.com/DiegoMarulandaB/click-counter-freecodecamp"
                  showCard={showCard}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
