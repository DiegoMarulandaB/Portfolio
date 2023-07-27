'use client' // this is a client component
// No need for 'use client' in modern React apps
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineCode, AiOutlineMail } from 'react-icons/ai'

interface Button {
  label: string
  route: string
}

const ButtonAbout: Button[] = [{ label: 'Read more', route: '/about' }]
const ButtonProjects: Button[] = [{ label: 'Read more', route: '/projects' }]
const ButtonContact: Button[] = [{ label: 'Read more', route: '/contact' }]

const Projects = () => {
  return (
    <section id="home" className="mt-8 md:mt-16">
      <div className="flex flex-col text-center items-center justify-center ">
        <h1 className="text-3xl md:text-4xl font-bold">
          <AnimatedText text="Welcome!" className="text-center mx-2 mr-2 mb-2 mt-16 font-bold" />
        </h1>
      </div>
      <div className="flex flex-col text-center items-center justify-center ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 mt-8 ">
          {/* About */}
          <div className="bg-slate-200 dark:bg-slate-600  rounded-md  shadow-md p-5 mx-2 mr-2">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/diego.jpg"
                alt="profile image"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="text-center font-semibold text-2xl mt-4">Hello, I'm Diego!</h2>
              <p className="text-cyan-600">Frontend Developer</p>
              <div className="mt-5">
                {/* <h3 className="font-semibold text-center text-2xl">Bio</h3> */}
                <p className="text-center mt-2 mx-2 mr-2">
                  <strong>Indie frontend developer based in Colombia!</strong> Passionate about technology, geopolitics,
                  general culture, and science.
                </p>
              </div>
              <div className="mt-8">
                {ButtonAbout.map((button, index) => (
                  <Link key={index} href={button.route}>
                    <button
                      type="button"
                      className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
                    >
                      {index === 0 && (
                        <AiOutlineUser
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
          <div className="bg-slate-200 dark:bg-slate-600 rounded-md  shadow-md p-5 mx-2 mr-2 ">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/projects.svg"
                alt="digitalBooking image"
                width={128}
                height={128}
                className="w-80 h-40 rounded-md mx-auto"
              />
              <h2 className="font-semibold text-2xl mt-4">My portfolio</h2>
              <div className="mt-5">
                <p className="text-center mt-2 mx-2 mr-2">
                  You can find samples of my projects. <br /> I hope you enjoy exploring my work as much as I enjoy
                  creating it!
                </p>
              </div>
              <div className="mt-8">
                {ButtonProjects.map((button, index) => (
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
          <div className="bg-slate-200 dark:bg-slate-600 rounded-md  shadow-md p-5 mx-2 mr-2">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/email.svg"
                alt="emailimage"
                width={128}
                height={128}
                className="w-80 h-40 rounded-md mx-auto"
              />
              <h2 className="font-semibold text-2xl mt-4">Contact me</h2>
              <div className="mt-5">
                <p className="text-center mt-2 mx-2 mr-2">
                  Feel free to contact me to share the details of your project and explore how we can work together to
                  achieve great results!
                </p>
              </div>
              <div className="mt-8">
                {ButtonContact.map((button, index) => (
                  <Link key={index} href={button.route}>
                    <button
                      type="button"
                      className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
                    >
                      {index === 0 && (
                        <AiOutlineMail
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
