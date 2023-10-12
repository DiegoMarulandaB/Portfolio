'use client'

import React from 'react'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

const HomePage = () => {
  return (
    <section id="home">
      <div className="pt-20 lg:pt-[100px] pb-12 lg:pb-[100px] overflow-hidden">
        <div className="flex flex-col text-center items-center justify-center">
          <h1 className=" text-center">
            <AnimatedText text="Dive into the world of code and creativity!" className=" mx-2 mr-2 mt-5" />
          </h1>
          {/* card */}
          <div className="flex flex-col items-center justify-center -mx-4">
            <div className="w-full px-4 lg:w-6/12" />
            <div
              className="flex flex-col text-center items-center justify- 
             center"
            >
              {' '}
              <span className="flex justify-center mt-6">Contact me</span>
              <div className="flex justify-center mt-6">
                <a
                  href="https://twitter.com/DAMB1987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3"
                >
                  X
                </a>

                <a
                  href="https://www.linkedin.com/in/diegomarulandabarrientos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/DiegoMarulandaB?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3"
                >
                  Github
                </a>
              </div>
              <div className="max-w-lg mx-2 mr-2 mt-6   ">
                <img
                  className="w-40 h-40 rounded-full mx-auto bg-slate-50 dark:bg-slate-700 border-2 border-double border-slate-700 mt-6 "
                  src="/Diego.jpeg"
                  alt="Profile picture"
                />
                <h2 className="text-center text-2xl font-semibold mt-6">Diego Marulanda</h2>
                <p
                  className="text-center text-neutral-80 dark:text-neutral-50  
                 mt-6"
                >
                  Frontend Developer
                </p>
                <div className="text-center mt-6">
                  <h3 className="text-xl font-semibold text-pink-600">Bio</h3>
                  <p
                    className=" text-neutral-800 dark:text-neutral-50 
                   transition-transform  mt-6"
                  >
                    <strong className="text-indigo-400 text-1xl ">
                      Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia!
                    </strong>
                  </p>
                  <p className="flex justify-center mt-6">
                    My technology stack is CSS, Git, Github, Html, JavaScript, React.
                  </p>
                </div>

                <div className="mt-18 lg:mt-0">
                  <div
                    className="flex flex-col text-center items-center 
                   justify-center"
                  ></div>

                  <div
                    className="grid grid-cols-1 md:grid-cols-1 gap-4 mx-2 mr- 
                   2 mt-10"
                  >
                    <div
                      className="flex flex-col text-center items-center 
                     justify-center "
                    >
                      <a
                        href="/about"
                        rel="noopener noreferrer"
                        className="text-center  text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform mx-3cursor-pointer text-sm font-bold uppercase rounded-md px-4 py-4 mx-2 mr-2 
                          mt-6 w-26  text-1xl"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>

                {/* fin botones */}
              </div>
              {/* projects */}
              <div className="text-center max-w-lg mx-2 mr-2 my-10 ">
                <img className="w-40 h-40 rounded-full mx-auto mt-6" src="/projects.png" alt="Profile picture" />
                <div className="mt-5">
                  <h2 className="text-center text-2xl font-semibold mt-6">Web development</h2>
                  <h3 className="text-center mt-6 text-xl font-semibold text-pink-600">Projects</h3>
                  <p className="text-center text-neutral-800 dark:text-neutral-50 transition-transform  mt-2">
                    <strong className="text-indigo-400 text-1xl mt-6">
                      My web development projects are captivating creations that fuse exceptional functionality, design
                      and performance.
                    </strong>
                  </p>
                  <p className="flex justify-center mt-6">
                    {' '}
                    Each website is a custom-made masterpiece designed to captivate your audience and highlight your
                    unique vision.
                  </p>
                </div>

                <div className="mt-18 lg:mt-0">
                  <div
                    className="flex flex-col text-center items-center 
                   justify-center"
                  ></div>

                  <div
                    className="grid grid-cols-1 md:grid-cols-1 gap-4 mx-2 mr- 
                   2 mt-10"
                  >
                    <div
                      className="flex flex-col text-center items-center 
                     justify-center "
                    >
                      <a
                        href="/projects"
                        rel="noopener noreferrer"
                        className=" text-center  text-neutral-800 hover:text-cyan-500 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform  cursor-pointer text-sm font-bold uppercase rounded-md px-4 py-4 mx-2 mr-2 
                          mt-6 w-26  text-1xl"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
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
