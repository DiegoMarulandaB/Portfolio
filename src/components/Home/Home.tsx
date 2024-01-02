'use client'

import React from 'react'
import AnimatedText from '../AnimatedText/AnimatedText'
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

const HomePage = () => {
  return (
    <section id="home">
      <div className="relative w-full">
        <div className="grid place-items-center min-h-[86vh] px-8">
          <div className="container mx-auto grid place-items-center h-max text-center">
            <h1 className="bg-slate-100 dark:bg-slate-700 text-center mt-16 ">
              <AnimatedText text="Dive into the world of code and creativity!" className=" mx-2 mr-2 mt-5" />
            </h1>
            {/* card */}
            <div id="contact">
              <div className="container mx-auto mt-10 px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  {/* <!-- Text Content --> */}
                  <div className="mb-8 lg:mb-0 lg:w-1/2 justify-center">
                    <h2 className="text-3xl font-semibold mt-12">Contact Me</h2>

                    {/* <!-- Social Icons --> */}
                    <div className="flex gap-3 mt-4 justify-center">
                      <a
                        href="https://twitter.com/DAMB1987"
                        className="  hover:text-purple-800 dark:text-neutral-50 dark:hover:text-amber-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read more about my Twitter profile"
                      >
                        <RiTwitterXFill className="icon" size={32} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/diegomarulandabarrientos/"
                        className="  hover:text-purple-800 dark:text-neutral-50 dark:hover:text-amber-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read more about my profile on Linkedin"
                      >
                        <AiOutlineLinkedin className="icon " size={34} />
                      </a>
                      <a
                        href="https://github.com/DiegoMarulandaB"
                        className="  hover:text-purple-800 dark:text-neutral-50 dark:hover:text-amber-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read more about my Github profile"
                      >
                        <AiOutlineGithub className="icon " size={34} />
                      </a>
                    </div>
                  </div>
                  {/* <!-- Testimonial --> */}
                  <div className="max-w-lg">
                    <div className="mt-12 w-46 h-46">
                      <p className="text-lg">
                        Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia 🇨🇴!
                      </p>
                      {/* <!-- --> */}
                      <div className="flex mt-4 justify-end">
                        <div className="w-16 h-16 mr-4 md:w-18 md:h-18">
                          <img
                            className=" rounded-full"
                            width={120}
                            height={120}
                            src="/Diego.jpeg"
                            alt="Diego Marulanda Profile Picture"
                          />
                        </div>
                        <div className="md:text-lg">
                          <p className=" text-md">
                            <span className=" text-blue-800 dark:text-green-400"> Freelance programmer</span>
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
