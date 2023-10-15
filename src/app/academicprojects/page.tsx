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
    image: '/profileGithub.jpeg',

    github: 'https://github.com/DiegoMarulandaB?tab=repositories',
    link: 'https://github.com/DiegoMarulandaB?tab=repositories',
  },
  {
    name: 'Rick and Morty application',
    description:
      'Final project of the Frontend subject of the Digital House specialization (cloned repository of said academy). Developed in TypeScript, Redux, Thunk and their best practices, using the Rick and Morty API. 09/21/2023.',
    image: '/Final-esp-frontend.png',

    github: 'https://github.com/DiegoMarulandaB/ctd-esp-fe1-final',
    link: 'https://github.com/DiegoMarulandaB/ctd-esp-fe1-final',
  },
  {
    name: 'Digital booking',
    description:
      'Digital booking MVP final project of the Certified Tech Developer degree at Digital House. Website that offers to book tours and activities in different countries. The agile methodology (Scrum) was used, with 4 sprints. CSS, HTML, React, Java, Postman, MYSQL, AWS technologies stack. Presentation of the demonstration before a Globant representative. 04/06/2023.',
    image: '/digitalBooking.jpg',

    github: 'https://github.com/DiegoMarulandaB/Digital-booking',
    link: 'https://github.com/DiegoMarulandaB/Digital-booking',
  },
  {
    name: 'Health application',
    description:
      'Final project of the Frontend 3 subject, of the Certified Tech Developer career. Health application connected with the jsonplaceholder.typicode.com API. Tools that use Vite and React.js',
    image: '/frontEnd3.jpg',
    github: 'https://github.com/DiegoMarulandaB/finalFrontEnd',
    link: 'https://github.com/DiegoMarulandaB/finalFrontEnd',
  },

]

const AcademicProjects = () => {
  return (
    <section id="AcademicProjects">
      <h1 className="text-center pt-20">
        <AnimatedText text="Academic projects" className=" mx-2 mr-2 mb-2 mt-5" />
      </h1>
      <div className="flex flex-col items-center justify-center space-y-26 mx-4 mt-6">
        {projects.map((project, idx) => (
          <div key={idx}>
            <Slide offset="-200px 0px -200px 0px">
              <div className="flex flex-col items-center text-center text-white px-4 bg-white dark:bg-slate-600 mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-8">
                <div className="flex flex-col animate-slideCubiBezier animation-delay-2 md:flex-row md:space-x-8">
                  <div className="md:w-3/6">
                    <Link href={project.link}>
                      <Image
                        loading="lazy"
                        rel="noopener noreferrer dns-prefetch preload"
                        src={project.image}
                        alt="projects image"
                        width={590}
                        height={590}
                        className=" rounded-md  px-18 py-4 ml-auto md:mt-1  mx-4 mr-4 mt-4  transition-transform duration-150 ease-in-out hover:scale-125"
                      />
                    </Link>
                  </div>
                  <div className="mt-4 md:w-3/5 mx-2 mr-2">
                    <h1 className="flex flex-col text-center items-center justify-center  text-3xl font-bold mb-2 mx-2 mr-2 mt-2  text-pink-600">
                      {project.name}
                    </h1>
                    <p className="flex flex-col text-center items-center justify-center text-1xl mx-2 mr-2 mt-4 text-neutral-800 dark:text-neutral-50  text-1xl">
                      {project.description}
                    </p>

                    <div className="flex flex-col text-center items-center justify-center align-bottom space-x-4 mt-2">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer dns-prefetch preload">
                        <button
                          type="button"
                          className="text-center  text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3cursor-pointer text-sm font-bold uppercase rounded-md px-4 py-4 mx-2 mr-2 
                          mt-4 w-26  text-1xl"
                        >
                          Read more →
                        </button>
                      </Link>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer dns-prefetch preload" />
                    </div>
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

export default AcademicProjects
