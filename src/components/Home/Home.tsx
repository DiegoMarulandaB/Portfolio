'use client'

import React from 'react'
import AnimatedText from '../Animations/AnimatedText/AnimatedText'
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const HomePage = () => {
  return (
    <section id="home">
      <div className="relative w-full">
        <div className="grid place-items-center px-8">
          <div className="container mx-auto grid place-items-center h-max text-center">
            <h1 className="text-center mx-2 mr-2 mt-28">
              <AnimatedText text="Dive into the world of code and creativity!" />
            </h1>
            <div id="contact">
              <div className="container mx-auto px-4 mt-24">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="mb-8 lg:mb-0 lg:w-1/2 justify-center">
                    <h2 className="text-center text-3xl font-semibold mx-2 mr-2">Contact Me</h2>
                    <div className="flex gap-3 mt-4 justify-center">
                      <a
                        href="mailto:diegomarulanda87@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail"
                        className="transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide text-slate-900 dark:text-slate-50 font-bold rounded  hover:border-slate-50 hover:bg-gray-600 hover:text-slate-50 inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Send email"
                      >
                        <AiOutlineMail className="icon" size={34} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/diegomarulandabarrientos/"
                        className="transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide text-slate-900 dark:text-slate-50 font-bold rounded  hover:border-blue-600 hover:bg-blue-600 hover:text-white inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read more about my profile on Linkedin"
                      >
                        <AiOutlineLinkedin className="icon " size={34} />
                      </a>
                      <a
                        href="https://github.com/DiegoMarulandaB"
                        className="transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide text-slate-900 dark:text-slate-50 font-bold rounded  hover:border-slate-50 hover:bg-slate-900 hover:text-slate-50 inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read more about my Github profile"
                      >
                        <AiOutlineGithub className="icon " size={34} />
                      </a>
                    </div>
                  </div>
                  <div className="max-w-lg">
                    <div className="w-46 h-46">
                      <p className="text-lg">
                        Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia 🇨🇴!
                      </p>
                      <div className="flex mt-4 justify-end">
                        <div className="w-16 h-16 mr-4 md:w-18 md:h-18">
                          <img
                            loading="lazy"
                            className=" rounded-full"
                            width={120}
                            height={120}
                            src="/Diego.jpeg"
                            alt="Diego Marulanda Profile Picture"
                          />
                        </div>
                        <div className="md:text-lg">
                          <p className=" text-md">
                            <span className=" text-blue-800 dark:text-amber-200"> Freelance programmer</span>
                          </p>
                        </div>
                      </div>
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
