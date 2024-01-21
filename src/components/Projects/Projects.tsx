'use client'

import React, { useState } from 'react'
import ProjectCards from '../ProjectsCards/ProjectsCards'

const Projects: React.FC = () => {
  const [showCard, setShowCard] = useState<string>('all')

  const handleProject = (category: string) => {
    setShowCard(category)
  }

  return (
    <section id="projects">
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col mx-4 mr-4">
          <div className="">
            <div className="mx-auto mb-[56px] max-w-[510px]">
              <h1 className=" text-center mx-2 mr-2 mt-24 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
                Projects
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li>
                  <button
                    onClick={() => handleProject('all')}
                    className={`inline-block py-3 px-3 text-1xl font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'all'
                        ? 'activeClasses text-slate-600 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 mx-2 mr-2'
                        : 'inactiveClasses'
                    }`}
                  >
                    All Projects
                  </button>
                </li>

                <li className="mb-1">
                  <button
                    onClick={() => handleProject('academic projects')}
                    className={`inline-block py-3 px-3 text-1xl font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'academic projects'
                        ? 'activeClasses text-slate-600 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 mx-2 mr-2'
                        : 'inactiveClasses'
                    }`}
                  >
                    Academic Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject('personal projects')}
                    className={`inline-block py-3 px-3 text-1xl font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'personal projects'
                        ? 'activeClasses text-slate-600 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 mx-2 mr-2'
                        : 'inactiveClasses'
                    }`}
                  >
                    Personal Projects
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-[60px] max-w-[810px]">
            <div className="flex flex-wrap -mx-4 text-1xl">
              <ProjectCards
                loading="lazy"
                ImageHref="profileGithub.webp"
                category="All Projects"
                title="My repository on Github"
                description="Browse all my GitHub repositories, where you can discover a variety of projects from my academic training in programming. And my most relevant personal projects!"
                button="Github →"
                buttonHref="https://github.com/DiegoMarulandaB"
                href="https://github.com/DiegoMarulandaB"
                showCard={showCard}
              />
              <ProjectCards
                loading="lazy"
                ImageHref="digitalBooking.jpg"
                category="Academic Projects"
                title="Digital booking"
                description="MVP to book tours and different activities in various countries. Technologies: Git, Gitlab, CSS, React, Java version 17, JWT, Gradle, Spring Boot, MySQL, AWS, Jest.JS, Postman, Selenium IDE."
                button="Github →"
                buttonHref="https://github.com/DiegoMarulandaB/Digital-booking"
                href="https://github.com/DiegoMarulandaB/Digital-booking"
                showCard={showCard}
              />
              <ProjectCards
                loading="lazy"
                ImageHref="calculator.jpeg"
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
                ImageHref="Final-esp-frontend-2.jpg"
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
                ImageHref="Final-esp-frontend.jpg"
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
                ImageHref="frontEnd3.jpg"
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
                ImageHref="counterclick.jpeg"
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
    </section>
  )
}

export default Projects
