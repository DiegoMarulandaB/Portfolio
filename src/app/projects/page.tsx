'use client' // this is a client component
// No need for 'use client' in modern React apps
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import Link from 'next/link'
import { AiOutlineGithub, AiOutlineCode } from 'react-icons/ai'

interface Button {
  label: string
  route: string
}

const ButtonGithub: Button[] = [{ label: 'Read more', route: 'https://github.com/DiegoMarulandaB?tab=repositories' }]
const ButtonAcademicProjects: Button[] = [{ label: 'Read more', route: '/academicprojects' }]
const ButtonPersonalProjects: Button[] = [{ label: 'Read more', route: '/personalprojects' }]

const Projects = () => {
  return (
    <section id="projects" className="mt-8 md:mt-16">
      <div className="flex flex-col text-center items-center justify-center ">
        <h1 className="text-3xl md:text-4xl font-bold">
          <AnimatedText text="My portfolio" className="text-center mr-2 mb-2 mt-16 font-bold" />
        </h1>
      </div>

      <div className="flex flex-col text-center items-center justify-center ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-8 mx-4 mr-4">
          {/* About */}
          <div className="bg-slate-200 dark:bg-slate-600  rounded-md  shadow-md p-5 w-80 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/ProfileGithub.jpg"
                alt="ProfileGithub picture"
                width={128}
                height={128}
                className="w-80 h-40 rounded-md mx-auto"
              />
              <h2 className="text-center font-semibold text-2xl mt-4">Github repository</h2>
              {/* <p className="text-cyan-600">Frontend Developer</p> */}
              <div className="mt-5">
                {/* <h3 className="font-semibold text-center text-2xl">Bio</h3> */}
                <p className="text-center mt-2 mx-2 mr-2">
                  You can enter my public profile of my repositories on Github.
                </p>
              </div>
              <div className="mt-8">
                {ButtonGithub.map((button, index) => (
                  <Link key={index} href={button.route} target="_blank" rel="noopener">
                    <button
                      type="button"
                      className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
                    >
                      {index === 0 && (
                        <AiOutlineGithub
                          className="icon text-white text-center items-center justify-center mb-1 mr-2"
                          size={32}
                        />
                      )}
                      {button.label}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-slate-200 dark:bg-slate-600 rounded-md  shadow-md p-5 w-80 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/digitalBooking.jpg"
                alt="digitalBooking image"
                width={128}
                height={128}
                className="w-80 h-40 rounded-md mx-auto"
              />
              <h2 className="font-semibold text-2xl mt-4">Academic projects</h2>
              <div className="mt-5">
                <p className="text-center mt-2 mx-2 mr-2">
                  Here you can find the projects I have done in the academic part
                </p>
              </div>
              <div className="mt-8">
                {ButtonAcademicProjects.map((button, index) => (
                  <Link key={index} href={button.route}>
                    <button
                      type="button"
                      className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
                    >
                      {index === 0 && (
                        <AiOutlineCode
                          className="icon text-white text-center items-center justify-center mb-1 mr-2"
                          size={32}
                        />
                      )}
                      {button.label}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-slate-200 dark:bg-slate-600 rounded-md  shadow-md p-5 w-80 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/counterClick.jpg"
                alt="counterClick image"
                width={128}
                height={128}
                className="w-80 h-40 rounded-md mx-auto"
              />
              <h2 className="font-semibold text-2xl mt-4">Personal projects</h2>
              <div className="mt-5">
                <p className="text-center mt-2 mx-2 mr-2">
                  In this section, I will host the projects created personally
                </p>
              </div>
              <div className="mt-8">
                {ButtonPersonalProjects.map((button, index) => (
                  <Link key={index} href={button.route}>
                    <button
                      type="button"
                      className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
                    >
                      {index === 0 && (
                        <AiOutlineCode
                          className="icon text-white text-center items-center justify-center mb-1 mr-2 "
                          size={32}
                        />
                      )}
                      {button.label}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
