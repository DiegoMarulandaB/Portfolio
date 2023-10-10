'use client'

import React, { useState } from 'react'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

interface ProjectCardsProps {
  showCard: string
  category: string
  ImageHref: string
  title: string
  button: string
  buttonHref: string
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ showCard, category, ImageHref, title, button, buttonHref }) => (
  <div
    id="projects"
    className={`w-full px-4 md:w-1/2 xl:w-1/3  ${
      showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'
    }`}
  >
    <div className="relative mb-12">
      <div className="overflow-hidden rounded-md">
        <img src={ImageHref} alt="portfolio" rel="noopener noreferrer" className="w-full mt-6" />
      </div>
      <div className="flex flex-col text-center items-center justify-center ">
        <div
          className="relative z-10 px-4 py-4 -mt-2 text-center items-center justify-center text-pink-600   mx-2 mr-2 w-26
        "
        >
          <span className="block mb-2 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-bold text-primary">
            {category}
          </span>
          <h3 className="mb-4 text-1xl font-bold text-dark">{title}</h3>
          <a
            href={buttonHref}
            rel="noopener noreferrer dns-prefetch"
            className=" inline-block text-1xl text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-4 py-4 text-1xl text-center text-1xl font-bold  mt-4 w-26 
              "
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
    <section className="pt-20  lg:pt-[100px] lg:pb-[100px]">
      <div className="flex flex-col text-center items-center justify-center mx-4 mr-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h1 className="text-center">
                <AnimatedText text="Projects" className="mx-2 mr-2 mt-4" />
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
                    showCard === 'all' ? 'activeClasses bg-primary text-cyan-500  mx-2 mr-2' : 'inactiveClasses'
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
                      ? 'activeClasses bg-primary text-cyan-500  mx-2 mr-2'
                      : 'inactiveClasses'
                  }`}
                >
                  Academic projects
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject('personal projects')}
                  className={`inline-block rounded-md py-3 px-3 text-1xl font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'personal projects'
                      ? 'activeClasses bg-primary text-cyan-500  mx-2 mr-2'
                      : 'inactiveClasses'
                  }`}
                >
                  Personal projects
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap rounded-lg -mx-4 text-1xl">
          <ProjectCards
            ImageHref="digitalBooking.jpg"
            category="Academic projects"
            title=""
            button="Read more"
            buttonHref="/academicprojects"
            showCard={showCard}
          />
          <ProjectCards
            ImageHref="calculator.jpeg"
            category="Personal projects"
            title=""
            button="Read more"
            buttonHref="/personalprojects"
            showCard={showCard}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
