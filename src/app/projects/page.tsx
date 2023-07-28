'use client' // this is a client component
// No need for 'use client' in modern React apps

import AnimatedText from '@/components/AnimatedText/AnimatedText'
import { AiOutlineGithub, AiOutlineCode } from 'react-icons/ai'
import React, { useState } from 'react'

interface PortfolioCardProps {
  showCard: string
  category: string
  ImageHref: string
  title: string
  button: string
  buttonHref: string
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ showCard, category, ImageHref, title, button, buttonHref }) => {
  return (
    <div
      id="projects"
      className={`w-full px-4 md:w-1/2 xl:w-1/3  ${
        showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-md">
          <img src={ImageHref} alt="portfolio" className="w-full" />
        </div>
        <div className="flex flex-col text-center items-center justify-center ">
          <div
            className="relative z-10 px-3 -mt-2 text-center items-center justify-center bg-white rounded-md shadow-md mx-2 mr-2 py-2
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
         text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700
        "
          >
            <span className="block mb-2 text-sm font-semibold text-primary">{category}</span>
            <h3 className="mb-4 text-xl font-bold text-dark">{title}</h3>
            <a
              href={buttonHref}
              className=" inline-block py-3 text-sm font-semibold transition  border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white
              
                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
         text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 mx-2 mr-2
              "
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects: React.FC = () => {
  const [showCard, setShowCard] = useState<string>('all')

  const handleProject = (category: string) => {
    setShowCard(category)
  }

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="flex flex-col text-center items-center justify-center mx-4 mr-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h1 className="text-3xl md:text-4xl font-bold">
                <AnimatedText text="My portfolio" className="text-center mx-2 mr-2 mb-2 mt-18 font-bold" />
              </h1>
              <p className="text-base text-body-color text-center mx-2 mr-2">
                In this section you will find my Github repository as well as the different projects that I have carried
                out
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              <li className="mb-1 ">
                <button
                  onClick={() => handleProject('all')}
                  className={`inline-block rounded-md py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'all'
                      ? 'activeClasses bg-primary text-cyan-400 no-underline hover:underline mx-2 mr-2'
                      : 'inactiveClasses'
                  }`}
                >
                  All Projects
                </button>
              </li>

              <li className="mb-1">
                <button
                  onClick={() => handleProject('academic projects')}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'academic projects'
                      ? 'activeClasses bg-primary text-cyan-400 no-underline hover:underline mx-2 mr-2'
                      : 'inactiveClasses'
                  }`}
                >
                  Academic projects
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject('personal projects')}
                  className={`inline-block rounded-lg py-4 px-4 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === 'personal projects'
                      ? 'activeClasses bg-primary text-cyan-400 no-underline hover:underline mx-2 mr-2'
                      : 'inactiveClasses'
                  }`}
                >
                  Personal projects
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <PortfolioCard
            ImageHref="ProfileGithub.jpg"
            category="Github repository"
            title=" "
            button="Read more"
            buttonHref="https://github.com/DiegoMarulandaB?tab=repositories"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="digitalBooking.jpg"
            category="Academic projects"
            title=""
            button="Read more"
            buttonHref="/academicprojects"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="counterClick.jpg"
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
