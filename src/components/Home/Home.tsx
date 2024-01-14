'use client'

import React from 'react'
import AnimatedText from '../Animations/AnimatedText/AnimatedText'
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const HomePage = () => {
  return (
    <section id="home">
      <div className="mx-auto lg:px-8 max-w-screen-lg px-4 sm:px-6 py-8">
        <div className="mx-auto mr-2 mt-20">
          <h1>
            <AnimatedText text="Dive into the world of code and creativity!" />
          </h1>
        </div>
        <div className="container mx-auto grid place-items-center h-max text-center">
          <div id="contact">
            <div className="mx-auto lg:px-8 max-w-screen-lg px-4 sm:px-6 py-8 mt-20">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-8 lg:mb-0 lg:w-5/3 justify-center">
                  <h2 className="mx-auto text-center text-3xl font-semibold  mr-2">Contact Me</h2>
                  <div className="flex gap-3 mt-4 justify-center">
                    <a
                      href="mailto:diegomarulanda87@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail"
                      className=" transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide
                        text-slate-900 dark:text-slate-50 inline-flex hover:rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Send email"
                    >
                      <span className="relative group-hover:bg-opacity-0">
                        <AiOutlineMail className="icon mx-auto" size={34} />
                        Email
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/diegomarulandabarrientos/"
                      className="transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 inline-flex hover:rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Read more about my profile on Linkedin"
                    >
                      <span className="relative group-hover:bg-opacity-0">
                        <AiOutlineLinkedin className="icon mx-auto" size={34} />
                        Linkedin
                      </span>
                    </a>
                    <a
                      href="https://github.com/DiegoMarulandaB"
                      className="transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide text-slate-900 dark:text-slate-50 inline-flex hover:rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Read more about my Github profile"
                    >
                      <span className="relative group-hover:bg-opacity-0">
                        <AiOutlineGithub className="icon mx-auto" size={34} />
                        Github
                      </span>
                    </a>
                  </div>
                </div>
                <div className="max-w-lg">
                  <div className="w-46 h-46">
                    <p className="text-lg">
                      Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia 🇨🇴!
                    </p>
                    <div className="flex mt-4 justify-end lg:mb-0 lg:w-5/6">
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
    </section>
  )
}

export default HomePage
