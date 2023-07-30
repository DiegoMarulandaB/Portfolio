'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slide from '@/components/Slide/Slide'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import React from 'react'
// import { AiOutlineGithub } from 'react-icons/ai'

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
    // alt:"final project image",
    github: 'https://github.com/DiegoMarulandaB?tab=repositories',
    link: 'https://github.com/DiegoMarulandaB?tab=repositories',
  },
  {
    name: 'Basic Calculator',
    description:
      'Here a basic calculator built using Vite and React, inspired by FreeCodeCamp amazing course on React. This calculator combines the best of both technologies to provide an interactive and functional experience for users.',
    image: '/calculator.jpg',
    // alt:"final project image",
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

const PersonalProjects: React.FC = () => {
  return (
    <section id="projects" className="my-20 pb-1 md:pt-12 md:pb-1">
      <h1 className="text-center text-2xl">
        <AnimatedText text="Personal projects" className="text-center mx-2  mr-2 mb-2 mt-6 font-bold " />
      </h1>
      <div className="flex flex-col items-center justify-center space-y-28 mx-4 mt-8  ">
        {projects.map((project, idx) => (
          <div key={idx}>
            <Slide offset="-200px 0px -200px 0px">
              <div className="flex flex-col animate-slideCubiBezier animation-delay-2 md:flex-row md:space-x-8">
                <div className="md:w-3/6">
                  <Link href={project.link}>
                    <Image
                      loading="lazy"
                      rel="dns-prefetch preload"
                      src={project.image}
                      alt="img projects"
                      width={390}
                      height={390}
                      className=" rounded-md bg-slate-200 dark:bg-slate-600  px-18 py-4 ml-auto md:mt-1  mx-2 mr-2 "
                    />
                  </Link>
                </div>
                <div className="mt-6 md:w-2/6 mx-2 mr-2">
                  <h1 className="flex flex-col text-center items-center justify-center  sm:text-1xl md:text-4xl lg:text-4xl xl:text-8xl font-bold mb-4 mx-2 mr-2 text-2xl  text-pink-600">
                    {project.name}
                  </h1>
                  <p className="flex flex-col text-center items-center justify-center  sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mx-2 mr-2 mb-4 ">
                    {project.description}
                  </p>
                  {/* icons of github */}
                  <div className="flex flex-col text-center items-center justify-center align-bottom space-x-4">
                    <Link href={project.github} target="_blank" rel="noopener dns-prefetch  preload">
                      <button
                        type="button"
                        className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-4 py-4 mx-2 mr-2 mt-2 w-26 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-bold "
                      >
                        Read more
                      </button>
                    </Link>
                    <Link href={project.link} target="_blank" rel="noopener dns-prefetch  preload" />
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PersonalProjects
