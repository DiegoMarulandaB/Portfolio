'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slide from '@/components/Slide/Slide'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import React, { useEffect, useRef, ReactNode } from 'react'


interface Project {
  name: string
  description: string
  image: string
  github: string
  link: string
}

const projects: Project[] = [
  {
    name: 'Digital booking',
    description:
      'This is the final project of the Certified Tech Developer career that was carried out together with other colleagues, to obtain the Professional Developer diploma at Digital House. Presentation of the demo before a Globant representative. 04/06/2023.',
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
        <AnimatedText
          text="Projects"
          className="text-center sm:text-1xl md:text-6xl lg:text-7xl xl:text-6xl mr-2 mb-2 font-bold "
        />
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
                      width={400}
                      height={400}
                      className=" rounded-r-lg border-2 bg-gray-100 px-18 py-4 ml-auto md:mt-1 mx-2 "
                    />
                  </Link>
                </div>
                <div className="mt-6 md:w-2/6 mx-2">
                  <h1 className="text-left sm:text-1xl md:text-4xl lg:text-4xl xl:text-8xl font-bold mb-4  text-2xl">
                    {project.name}
                  </h1>
                  <p className="text-left sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mr-2 mb-4 ">
                    {project.description}
                  </p>
                  {/* iconos de github */}
                  <div className="flex flex-col text-center items-center justify-center align-bottom space-x-4">
                    <Link href={project.github} target="_blank" rel="noopener">
                      <button
                        type="button"
                        className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg px-2 py-2 sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl"
                      >
                        <svg
                          className="w-4 h-4 mr-2 sm:text-1xl md:text-1xl lg:text-2xl xl:text-4xl"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                            clipRule="evenodd"
                          />
                        </svg>
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
