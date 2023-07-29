'use client' // this is a client component
// No need for 'use client' in modern React apps
import React from 'react'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const CircleIcon = () => (
  <svg
    className="absolute -right-7 -bottom-7 z-[-1]"
    width={134}
    height={106}
    viewBox="0 0 134 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* ... SVG circles ... */}
  </svg>
)

const HomePage = () => {
  return (
    <section id="home" className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
      <div className="flex flex-col text-center items-center justify-center">
        <div className="flex flex-col text-center items-center justify-center ">
          <h1 className="text-4xl md:text-4xl font-bold">
            <AnimatedText text="Welcome!" className="text-center mx-2 mr-2 mb-2 mt-26 font-bold" />
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12"></div>
          <div className="flex flex-col text-center items-center justify-center">
            <div className="mt-10 lg:mt-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-2  font-bold">
                <AnimatedText
                  text="Hello, I'm"
                  className="text-center text-pink-600 sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl mt-2 mx-2 mr-2 "
                />
              </h1>
              <div className="flex flex-col text-center items-center justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-2 mt-4 font-bold">
                  <AnimatedText
                    text="D"
                    className="text-center text-indigo-400  sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl mt-2 mx-2 mr-2 animate-bounce"
                  />
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-2 mt-4 font-bold">
                  <AnimatedText
                    text="i"
                    className="text-center text-indigo-400 sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl mt-2 mx-2 mr-2 animate-bounce "
                  />
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-2 mt-4 font-bold">
                  <AnimatedText
                    text="e"
                    className="text-center text-indigo-400 sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl mt-2 mx-2 mr-2 animate-bounce"
                  />
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-2 mt-4 font-bold">
                  <AnimatedText
                    text="g"
                    className="text-center text-indigo-400 sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl mt-2 mx-2 mr-2 animate-bounce"
                  />
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-2 mt-4 font-bold">
                  <AnimatedText
                    text="o"
                    className="text-center text-indigo-400 sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl mt-2 mx-2 mr-2 animate-bounce"
                  />
                </h1>
              </div>

              {/* botones */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 mr-2 mt-6">
                <div className="flex flex-col text-center items-center justify-center ">
                  <a
                    href="/about"
                    className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-4 py-4 mx-2 mr-2 mt-2 w-26"
                  >
                    About me
                  </a>
                </div>
                {/* my portfolio */}
                <div className="flex flex-col text-center items-center justify-center ">
                  <a
                    href="/projects"
                    className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-4 py-4 mx-2 mr-2 mt-2 w-26"
                  >
                    My portfolio
                  </a>
                </div>

                {/* contact me */}

                <div className="flex flex-col text-center items-center justify-center ">
                  <a
                    href="/contact"
                    className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md px-4 py-4 mx-2 mr-2 mt-2 w-26"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              {/* image */}

              <div className="flex flex-col text-center items-center justify-center py-3 sm:py-4 mt-2 mx-2 mr-2 ">
                <img src="/projects.svg" alt="email image" className="w-64 h-64 rounded-full mx-2 mr-2 mt-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
