'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slide from '@/components/Slide/Slide'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import React, { useEffect, useRef, ReactNode } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'

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
    description: 'You can enter my public profile of my repositories on Github.',
    image: '/ProfileGithub.jpg',
    // alt:"final project image",
    github: 'https://github.com/DiegoMarulandaB',
    link: 'https://github.com/DiegoMarulandaB',
  },
  {
    name: 'Digital booking',
    description:
      'This is the final project of the Certified Tech Developer career that was carried out together with other colleagues, to obtain the Professional Developer diploma at Digital House. Presentation of the demo to a Globant representative. 04/06/2023.',
    image: '/digitalBooking.jpg',
    // alt:"final project image",
    github: 'https://github.com/DiegoMarulandaB/Digital-booking',
    link: 'https://github.com/DiegoMarulandaB/Digital-booking',
  },
  {
    name: 'Health application',
    description:
      'Final project of the third level Frontend subject of the Certified Tech Developer career in Digital House.',
    image: '/frontEnd3.jpg',
    github: 'https://github.com/DiegoMarulandaB/finalFrontEnd',
    link: 'https://github.com/DiegoMarulandaB/finalFrontEnd',
  },
  // {
  //   name: "",
  //   description:
  //     ".",
  //   image: "",
  //   github: "",
  //   link: "",
  // },
  // {
  //   name: "",
  //   description:
  //     ".",
  //   image: "",
  //   github: "",
  //   link: "",
  // },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="my-20 pb-1 md:pt-12 md:pb-1">
      <h1 className="text-center text-2xl">
        <AnimatedText text="My portfolio" className="text-center   mr-2 mb-2 mt-6 font-bold " />
      </h1>
      <div className="flex flex-col space-y-28 mx-2 mt-8 ">
        {projects.map((project, idx) => (
          <div key={idx}>
            <Slide offset="-200px 0px -200px 0px">
              <div className="flex flex-col animate-slideCubiBezier animation-delay-2 md:flex-row md:space-x-8">
                <div className="md:w-3/6">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt="img projects"
                      width={390}
                      height={390}
                      className=" rounded-md bg-slate-200 dark:bg-slate-600 rounded-md  px-18 py-4 ml-auto md:mt-1 mx-2 "
                    />
                  </Link>
                </div>
                <div className="mt-6 md:w-2/6 mx-2">
                  <h1 className="text-center sm:text-1xl md:text-4xl lg:text-4xl xl:text-8xl font-bold mb-4  text-2xl">
                    {project.name}
                  </h1>
                  <p className="text-center sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mr-2 mb-4 ">
                    {project.description}
                  </p>
                  {/* iconos de github */}
                  <div className="flex flex-col text-center items-center justify-center align-bottom space-x-4">
                    <Link href={project.github} target="_blank" rel="noopener">
                      <button
                        type="button"
                        className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md  px-3 py-3 mt-2 w-26 "
                      >
                        <AiOutlineGithub className="icon text-white mr-2 " size={32} />
                        Github
                      </button>
                    </Link>
                    <Link href={project.link} target="_blank" rel="noopener" />
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

export default Projects
