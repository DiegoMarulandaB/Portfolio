'use client'

import React from 'react'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

function HomePage() {
  return (
    <section id="home" className="pt-20 lg:pt-[100px] pb-12 lg:pb-[100px] overflow-hidden">
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className=" text-center">
          <AnimatedText text="Dive into the world of code and creativity!" className=" mx-2 mr-2 mt-4" />
        </h1>

        <div className="flex flex-col items-center justify-center -mx-4">
          <div className="w-full px-4 lg:w-6/12" />
          <div className="flex flex-col text-center items-center justify-center">
            <div className="mt-18 lg:mt-0">
              <h1 className=" text-center text-4xl font-extrabold  text-pink-600  mt-8  mx-2 mr-2">Hello, I'm</h1>
              <div className="flex flex-col text-center items-center justify-center">
                <h1 className="text-center text-4xl font-extrabold text-indigo-500 mx-2 mr-2 mt-8">Diego Marulanda</h1>
                <h1 className="text-center text-4xl font-extrabold mt-8 mx-2 mr-2">Frontend Developer</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 mr-2 mt-8">
                <div className="flex flex-col text-center items-center justify-center ">
                  <a
                    href="/about"
                    rel="noopener noreferrer"
                    className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-4 py-4 mx-2 mr-2 mt-4 w-26 text-center text-1xl  font-bold"
                  >
                    About me
                  </a>
                </div>

                <div className="flex flex-col text-center items-center justify-center ">
                  <a
                    href="/projects"
                    rel="noopener noreferrer"
                    className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-4 py-4 mx-2 mr-2 mt-4 w-26 text-center text-1xl  font-bold"
                  >
                    My portfolio
                  </a>
                </div>

                <div className="flex flex-col text-center items-center justify-center ">
                  <a
                    href="/contact"
                    rel="noopener noreferrer"
                    className=" text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md px-4 py-4 mx-2 mr-2 mt-4 w-26 text-center text-1xl  font-bold"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              {/* image */}

              <div className="flex flex-col text-center items-center justify-center py-3 sm:py-4 mt-4 mx-2 mr-2 ">
                <img
                  loading="lazy"
                  src="/ProjectsWebs"
                  alt="email image"
                  className="w-80 h-96 rounded-full mx-2 mr-2 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
