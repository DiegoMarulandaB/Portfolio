'use client'

import React, { useState } from 'react'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

interface ProjectCardsProps {
  showCard: string
  category: string
  ImageHref: string
  title: string
  description: string
  button: string
  buttonHref: string
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  showCard,
  category,
  ImageHref,
  title,
  description,
  button,
  buttonHref,
}) => (
  <div
    id="projects"
    className={`w-full px-4 md:w-1/2 xl:w-3/3  ${
      showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'
    }`}
  >
    <div className="flex flex-col items-center text-center text-white bg-gradient-to-r bg-white dark:bg-slate-600 rounded-3xl border-solid border-2 border-slate-400 opacity-90  px-4 py-4 mx-2 mr-2 mt-5 w-46 h-46">
      <div className="overflow-hidden">
        <img
          src={ImageHref}
          width={690}
          height={690}
          alt="portfolio"
          rel="noopener noreferrer"
          className="w-full mt-6 transition-transform duration-150 ease-in-out hover:scale-125 rounded-md  border-solid border-2 border-gray-200"
        />
      </div>
      <div className="flex flex-col text-center items-center justify-center ">
        <div
          className="relative z-10 px-4 py-4 -mt-2 text-center items-center justify-center  text-blue-800 dark:text-green-400 mx-2 mr-2 w-26 text-1xl
        "
        >
          <span className="block mb-2 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-bold text-primary">
            {category}
          </span>
          <h3 className="mb-4 text-1xl font-bold text-dark">{title}</h3>
          <h3 className="mb-4 text-1xl  text-slate-800 dark:text-slate-100 font-bold text-dark">{description}</h3>
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer dns-prefetch"
            className=" inline-block text-center  text-neutral-800 hover:text-purple-800 dark:text-neutral-50 dark:hover:text-amber-300 transition-transform mx-3cursor-pointer text-sm font-bold uppercase rounded-md px-4 py-4 mx-2 mr-2 mt-4 w-26 text-1xl"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  </div>
)

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
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h1 className="text-center pt-20">
                  <AnimatedText text="Projects" className="mx-2 mr-2 mt-5" />
                </h1>
                <p className="text-1xl text-body-color text-center mx-2 mr-2 mt-8">
                  In this section, you can find samples of my projects, i hope you enjoy exploring my work as much as i
                  enjoy creating it.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject('all')}
                    rel="noopener noreferrer dns-prefetch"
                    className={`inline-block rounded-md py-3 px-3 text-1xl font-semibold transition md:py-3 lg:px-8  ${
                      showCard === 'all'
                        ? 'activeClasses bg-primary text-blue-800 dark:text-green-400 mx-2 mr-2'
                        : 'inactiveClasses'
                    }`}
                  >
                    All Projects
                  </button>
                </li>

                <li className="mb-1">
                  <button
                    onClick={() => handleProject('academic projects')}
                    className={`inline-block rounded-md py-3 px-3 text-1xl  font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'academic projects'
                        ? 'activeClasses bg-primary text-blue-800 dark:text-green-400  mx-2 mr-2'
                        : 'inactiveClasses'
                    }`}
                  >
                    Academic Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject('personal projects')}
                    className={`inline-block rounded-md py-3 px-3 text-1xl font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'personal projects'
                        ? 'activeClasses bg-primary text-blue-800 dark:text-green-400  mx-2 mr-2'
                        : 'inactiveClasses'
                    }`}
                  >
                    Personal Projects
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap rounded-md -mx-4 text-1xl">
            <ProjectCards
              ImageHref="profileGithub.jpeg"
              category="Github"
              title="My repository"
              description="Explore my repository on GitHub, where you will find my projects."
              button="Read more →"
              buttonHref="https://github.com/DiegoMarulandaB"
              showCard={showCard}
            />
            <ProjectCards
              ImageHref="digitalBooking.jpg"
              category="Academic Projects"
              title="Digital booking"
              description="MVP to book activities in several countries. Final project of the Certified Tech developer degree."
              button="Read more →"
              buttonHref="https://github.com/DiegoMarulandaB/Digital-booking"
              showCard={showCard}
            />
            <ProjectCards
              ImageHref="calculator.jpeg"
              category="Personal Projects"
              title="Calculator basic"
              description="Created with Vite and React, inspired by the FreeCodeCamp course on React. Provide an interactive and functional experience to users."
              button="Read more →"
              buttonHref="https://github.com/DiegoMarulandaB/interactive-calculator-react"
              showCard={showCard}
            />
            <ProjectCards
              ImageHref="Final-esp-frontend-2.jpeg"
              category="Academic Projects"
              title="The simpsons application"
              description="Final project of the frontend 2 subject of the specialization in digital house. Using The Simpsons API."
              button="Read more →"
              buttonHref="https://github.com/DiegoMarulandaB/ctd-fe2-proyecto-final-base"
              showCard={showCard}
            />
            <ProjectCards
              ImageHref="counterClick.jpg"
              category="Personal Projects"
              title="Counter Click"
              description="This project is created in Vite and React, based on the FreeCodeCamp course in React."
              button="Read more →"
              buttonHref="https://github.com/DiegoMarulandaB/click-counter-freecodecampe"
              showCard={showCard}
            />
            <ProjectCards
              ImageHref="Final-esp-frontend.png"
              category="Academic Projects"
              title="Rick and Morty application"
              description="Final project of the frontend 1 subject of the specialization in digital house. Using Rick and Morty API."
              button="Read more →"
              buttonHref="https://github.com/DiegoMarulandaB/ctd-esp-fe1-final"
              showCard={showCard}
            />
            <ProjectCards
              ImageHref="frontEnd3.jpg"
              category="Academic Projects"
              title="Health application"
              description="Final project of the Frontend 3 subject, of the Certified Tech Developer degree. Health application using an API."
              button="Read more →"
              buttonHref="https://github.com/DiegoMarulandaB/finalFrontEnd"
              showCard={showCard}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
