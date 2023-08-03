'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slide from '../../components/Slide/Slide'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

interface Project {
  name: string
  description: string
  image: string
  github: string
  link: string
}

const projects: Project[] = [
  {
    name: 'Github repository',
    description:
      'Welcome to! I invite you to explore my repository on GitHub, where you will find my projects based on courses or on the Certified Tech Developer career. Dont miss the opportunity to immerse yourself in a universe of knowledge and creativity!',
    image: '/ProfileGithub.jpg',

    github: 'https://github.com/DiegoMarulandaB?tab=repositories',
    link: 'https://github.com/DiegoMarulandaB?tab=repositories',
  },
  {
    name: 'Basic Calculator',
    description:
      'Here a basic calculator built using Vite and React, inspired by FreeCodeCamp amazing course on React. This calculator combines the best of both technologies to provide an interactive and functional experience for users.',
    image: '/calculator.jpg',

    github: 'https://github.com/DiegoMarulandaB/interactive-calculator-react',
    link: 'https://github.com/DiegoMarulandaB/interactive-calculator-react',
  },
  {
    name: 'Counter Click',
    description:
      'This counter Click project is a basic code created in Vite and React, based on the FreeCodeCamp course on React.It helped me to understand the basics of React much better.',
    image: '/counterClick.jpg',
    github: 'https://github.com/DiegoMarulandaB/click-counter-freecodecamp',
    link: 'https://github.com/DiegoMarulandaB/click-counter-freecodecamp',
  },
]

const PersonalProjects: React.FC = () => (
  <section id="projects" className="pt-20">
    <h1 className="text-center ">
      <AnimatedText text="Personal projects" className="mx-2 mr-2 mb-2 mt-4" />
    </h1>
    <div className="flex flex-col items-center justify-center space-y-26 mx-4 mt-6  ">
      {projects.map((project, idx) => (
        <div key={idx}>
          <Slide offset="-200px 0px -200px 0px">
            <div className="flex flex-col animate-slideCubiBezier animation-delay-2 md:flex-row md:space-x-8">
              <div className="md:w-3/6">
                <Link href={project.link}>
                  <Image
                    loading="lazy"
                    rel="noopener noreferrer dns-prefetch preload"
                    src={project.image}
                    alt="projects image"
                    width={390}
                    height={390}
                    className=" rounded-md  px-18 py-4 ml-auto md:mt-1  mx-4 mr-4 mt-4 "
                  />
                </Link>
              </div>
              <div className="mt-4 md:w-2/6 mx-2 mr-2">
                <h1 className="flex flex-col text-center items-center justify-center  text-2xl font-bold mb-2 mx-2 mr-2   text-pink-600">
                  {project.name}
                </h1>
                <p className="flex flex-col text-center items-center justify-center text-1xl  mx-2 mr-2 mt-4 ">
                  {project.description}
                </p>

                <div className="flex flex-col text-center items-center justify-center align-bottom space-x-4">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer dns-prefetch preload">
                    <button
                      type="button"
                      className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-4 py-4 mx-2 mr-2 mt-4 w-26 text-center text-1xl  font-bold "
                    >
                      Read more
                    </button>
                  </Link>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer dns-prefetch preload" />
                </div>
              </div>
            </div>
          </Slide>
        </div>
      ))}
    </div>
  </section>
)

export default PersonalProjects
