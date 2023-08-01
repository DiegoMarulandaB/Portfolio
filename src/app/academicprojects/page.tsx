'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slide from '@/components/Slide/Slide'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import React from 'react'

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
    name: 'Digital booking',
    description:
      'This is the final project of the Certified Tech Developer career that was carried out together with other colleagues, to obtain the Professional Developer diploma at Digital House. Presentation of the demo to a Globant representative. 04/06/2023.',
    image: '/digitalBooking.jpg',

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
]

const AcademicProjects: React.FC = () => {
  return (
    <section id="projects" className="pt-20">
      <h1 className="text-center">
        <AnimatedText text="Academic projects" className=" mx-2 mr-2 mb-2 mt-4" />
      </h1>
      <div className="flex flex-col items-center justify-center space-y-28 mx-4 mt-8">
        {projects.map((project, idx) => (
          <div key={idx}>
            <Slide offset="-200px 0px -200px 0px">
              <div className="flex flex-col animate-slideCubiBezier animation-delay-2 md:flex-row md:space-x-8">
                <div className="flex flex-col text-center items-center justify-center"></div>
                <div className="md:w-3/6 ">
                  <Link href={project.link}>
                    <Image
                      loading="lazy"
                      rel="dns-prefetch  preload"
                      src={project.image}
                      alt="projects image"
                      width={390}
                      height={390}
                      className=" rounded-md  px-18 py-4 ml-auto md:mt-1 flex flex-col text-center items-center justify-center  mx-4 mr-4"
                    />
                  </Link>
                </div>
                <div className="mt-6 md:w-2/6 mx-2 mr-2">
                  <h1 className="text-center text-2xl font-bold mb-4  mx-2 mr-2  text-pink-600">{project.name}</h1>
                  <p className="text-center text-1xl  mx-2 mr-2 mb-4 ">{project.description}</p>

                  <div className="flex flex-col text-center items-center justify-center align-bottom space-x-4">
                    <Link href={project.github} target="_blank" rel="noopener dns-prefetch preload">
                      <button
                        type="button"
                        className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-4 py-4 text-1xl text-center text-1xl font-bold  mx-2 mr-2 mt-2 w-26 "
                      >
                        Read more
                      </button>
                    </Link>
                    <Link href={project.link} target="_blank" rel="noopener dns-prefetch preload" />
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
