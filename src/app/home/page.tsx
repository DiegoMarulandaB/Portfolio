'use client'

import React from 'react'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

const HomePage = () => {
  return (
    <section id="home">
      <div className="pt-20 lg:pt-[100px] pb-12 lg:pb-[100px] overflow-hidden">
        <div className="flex flex-col text-center items-center justify-center">
          <h1 className=" text-center">
            <AnimatedText text="Dive into the world of code and creativity!" className=" mx-2 mr-2 mt-4" />
          </h1>
          <div className="px-4 bg-slate-50 dark:bg-slate-600 mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-10">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="text-center  font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight bg-slate-50 dark:bg-slate-600 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Diego Marulanda
                  </h2>
                  <p
                    className="text-center text-neutral-80 dark:text-neutral-50  
                 mt-1"
                  >
                    Frontend Developer
                  </p>
                  <span className="text-center  flex justify-center mt-5">Contact me</span>
                  <div className="flex justify-center mt-5">
                    <a
                      href="mailto:diegomarulanda87@gmail.com"
                      className="text-center  text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3"
                    >
                      Email
                    </a>
                    <a
                      href="https://twitter.com/DAMB1987"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-center  text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3"
                    >
                      X
                    </a>

                    <a
                      href="https://www.linkedin.com/in/diegomarulandabarrientos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center   text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/DiegoMarulandaB?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3"
                    >
                      Github
                    </a>
                  </div>
                  {/* bio */}
                  <div className="mt-5">
                    <h3 className="text-center  text-xl font-semibold text-pink-600">Bio</h3>
                    <p
                      className=" text-neutral-800 dark:text-neutral-50 
                   transition-transform  mt-2"
                    >
                      <strong className=" text-center  text-indigo-400 text-1xl ">
                        Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia!
                      </strong>
                    </p>
                    <p className="text-center  flex justify-center mt-5">
                      My technology stack is CSS, Git, Github, Html, JavaScript, React.
                    </p>
                  </div>
                </div>
                <div className="space-x-4">
                  <button className="text-neutral-800  text-lg font-medium inline-flex items-center">
                    <a
                      href="/about"
                      rel="noopener noreferrer"
                      className=" text-white bg-gradient-to-r from-cyan-500 
                         via-cyan-600 to-cyan-700 rounded-md px-4 py-4 mx-2 mr-2 
                          mt-4 w-26 text-center text-1xl  font-bold"
                    >
                      About me
                    </a>
                  </button>
                </div>
              </div>
              {/* foto */}
              <img className="w-48 h-48 rounded-full mx-auto" src="/Diego.jpeg" alt="Profile picture" />
            </div>
          </div>
          <div className="px-4  bg-slate-50 dark:bg-slate-600 mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-10">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <img className="w-48 h-48 rounded-full mx-auto" src="/projects.png" alt="Profile picture" />

              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className=" text-center  font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-pink-600 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Projects
                  </h2>
                  <strong className=" text-center  text-indigo-400 text-1xl mt-5">
                    My web development projects are captivating creations that fuse exceptional functionality, design
                    and performance.
                  </strong>
                  <p className=" text-center  flex justify-center mt-5">
                    {' '}
                    Each website is a custom-made masterpiece designed to captivate your audience and highlight your
                    unique vision.
                  </p>
                </div>
                <div className="space-x-4">
                  <button className="text-neutral-800  text-lg font-medium inline-flex items-center">
                    <a
                      href="/projects"
                      rel="noopener noreferrer"
                      className=" text-white bg-gradient-to-r from-cyan-500

via-cyan-600 to-cyan-700 rounded-md px-4 py-4 mx-2 mr-2

mt-4 w-26 text-center text-1xl font-bold"
                    >
                      Projects
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
