'use client'

import React, { useState } from 'react'
import AnimatedText from '../Animations/AnimatedText/AnimatedText'
import ProjectCards from '../ProjectsCards/ProjectsCards'



const Projects: React.FC = () => {
  const [showCard, setShowCard] = useState<string>('all')

  const handleProject = (category: string) => {
    setShowCard(category)
  }

  return (
    <section id="projects">
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col text-center items-center justify-center mx-4 mr-4">
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h1>
                <AnimatedText text="Projects" className="text-center mx-2 mr-2 mt-24" />
              </h1>
              <p className="text-1xl text-body-color text-center mx-2 mr-2 mt-8">
                In this section, you can find samples of my projects, i hope you enjoy exploring my work as much as i
                enjoy creating it.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject('all')}
                    className={`inline-block py-3 px-3 text-1xl font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'all'
                        ? 'activeClasses hover:text-purple-950 dark:text-slate-100 dark:hover:text-green-300 transition-transform duration-150 ease-in-out hover:scale-125  mx-2 mr-2'
                        : 'inactiveClasses'
                    }`}
                  >
                    All Projects
                  </button>
                </li>

                <li className="mb-1">
                  <button
                    onClick={() => handleProject('academic projects')}
                    className={`inline-block py-3 px-3 text-1xl  font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'academic projects'
                        ? 'activeClasses hover:text-purple-950 dark:text-slate-100 dark:hover:text-green-300 transition-transform duration-150 ease-in-out hover:scale-125  mx-2 mr-2'
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
                        ? 'activeClasses hover:text-purple-950 dark:text-slate-100 dark:hover:text-green-300 transition-transform duration-150 ease-in-out hover:scale-125 mx-2 mr-2'
                        : 'inactiveClasses'
                    }`}
                  >
                    Personal Projects
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto holder w-5/6 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
            <ProjectCards
              loading="lazy"
              ImageHref="profileGithub.jpg"
              category="All Projects"
              title="My repository"
              description="Browse my repository on GitHub, where you will find all my projects from my academic training at Digital House, Alura, MisionTic. And my most relevant personal projects!"
              button="Read More →"
              buttonHref="https://github.com/DiegoMarulandaB"
              href="https://github.com/DiegoMarulandaB"
              showCard={showCard}
            />
            <ProjectCards
              loading="lazy"
              ImageHref="digitalBooking.jpeg"
              category="Academic Projects"
              title="Digital booking"
              description="MVP to book activities in several countries.  Technologies: Git, Gitlab, React, Java v. 17, JWT, Gradle,  Spring Boot, MySQL, AWS, Jest.js, Postman, Selenium."
              button="Read More →"
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
              button="Read More →"
              buttonHref="https://github.com/DiegoMarulandaB/interactive-calculator-react"
              href="https://github.com/DiegoMarulandaB/interactive-calculator-react"
              showCard={showCard}
            />
            <ProjectCards
              loading="lazy"
              ImageHref="Final-esp-frontend-2.jpeg"
              category="Academic Projects"
              title="The simpsons application"
              description="Final project of the frontend 2 subject of the frontend specialization in Digital House. Using The Simpsons API. Technologies: Typescript, unit testing, solid principles, validations."
              button="Read More →"
              buttonHref="https://github.com/DiegoMarulandaB/ctd-fe2-proyecto-final-base"
              href="https://github.com/DiegoMarulandaB/ctd-fe2-proyecto-final-base"
              showCard={showCard}
            />
            <ProjectCards
              loading="lazy"
              ImageHref="Final-esp-frontend.png"
              category="Academic Projects"
              title="Rick and Morty application"
              description="Final project of the frontend 1 subject of the frontend specialization in Digital House. Using the Rick and Morty API. Technologies: TypeScript, documentation, Redux, Thunk."
              button="Read More →"
              buttonHref="https://github.com/DiegoMarulandaB/ctd-esp-fe1-final"
              href="https://github.com/DiegoMarulandaB/ctd-esp-fe1-final"
              showCard={showCard}
            />
            <ProjectCards
              loading="lazy"
              ImageHref="frontEnd3.jpeg"
              category="Academic Projects"
              title="Health application"
              description="Final project of the Frontend 3 subject, of the Certified Tech Developer degree. Health application using an API.
              Tecnologies: React, Vite."
              button="Read More →"
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
              button="Read More →"
              buttonHref="https://github.com/DiegoMarulandaB/click-counter-freecodecamp"
              href="https://github.com/DiegoMarulandaB/click-counter-freecodecamp"
              showCard={showCard}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
