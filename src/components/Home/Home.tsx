'use client'

import React from 'react'
import AnimatedText from '../Animations/AnimatedText/AnimatedText'
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const HomePage = () => {
  return (
    <section id="home">
      <div className="grid place-items-center px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <div className="text-center dark:text-white mx-2 mr-2 mt-28">
            <h1>
              <AnimatedText text="Dive into the world of code and creativity!" />
            </h1>
          </div>
          <div id="contact">
            <div className="container mx-auto px-4 mt-24">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-8 lg:mb-0 lg:w-5/3 justify-center">
                  <h2 className="mx-auto text-center text-3xl dark:text-white font-semibold  mr-2">Contact Me</h2>
                  <div className="flex gap-3 mt-4 justify-center">
                    <a
                      href="mailto:%20diegomjobs@gmail.com%20?Subject=Aquí%20el%20asunto%20del%20mail"
                      className=" transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide
                        text-slate-700 hover:text-slate-950  dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contact me by sending me an email"
                    >
                      <span className="relative group-hover:bg-opacity-0">
                        <AiOutlineMail className="icon mx-auto" size={34} />
                        Email
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/diegomarulandabarrientos/"
                      className="transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide  text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
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
                      className="transition-transform duration-150 ease-in-out hover:scale-125 tracking-wide  text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100  inline-flex hover:rounded-lg"
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
                <div className="max-w-lg mt-2">
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
