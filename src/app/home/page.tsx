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
              <div className="max-w-lg mx-2 mr-2 mt-6   "></div>
            </div>
          </div>

          <div className="px-4 bg-white dark:bg-slate-600 mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-pink-600 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    About me
                  </h2>
                  <p className="text-black text-base md:text-lg">
                    {' '}
                    <strong className="text-neutral-800 dark:text-neutral-50  text-1xl ">
                      Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia!
                    </strong>
                  </p>
                </div>
                <div className="space-x-4">
                  <a
                    href="/about"
                    rel="noopener noreferrer"
                    className="text-center hover:text-cyan-500 text-neutral-800 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform cursor-pointer text-sm font-bold uppercase rounded-md px-4 py-4 mx-2 mr-2 
                          mt-6 w-26  text-1xl"
                  >
                    Read more →
                  </a>
                </div>
              </div>
              <img alt="avatar profile" width="420" height="120" src="/avatarProfile.jpeg" />
            </div>
          </div>

          <div className="px-4 bg-white  dark:bg-slate-600 mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <img alt="avatar projects" width="420" height="120" src="/avatarProjects.jpeg" />

              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-pink-600 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Projects
                  </h2>
                  <p className="text-black text-base md:text-lg">
                    <strong className="text-neutral-800 dark:text-neutral-50  text-1xl mt-6">
                      My web development projects are captivating creations that fuse exceptional functionality, design
                      and performance.
                    </strong>
                  </p>
                </div>
                <div className="space-x-4">
                  <a
                    href="/projects"
                    rel="noopener noreferrer"
                    className=" text-center hover:text-cyan-500 text-neutral-800 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform  cursor-pointer text-sm font-bold uppercase rounded-md px-4 py-4 mx-2 mr-2 
                          mt-6 w-26  text-1xl"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 bg-white  dark:bg-slate-600  mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight sm:text-4xl sm:leading-none max-w-lg mb-6 text-pink-600">
                    Contact me
                  </h2>
                  <p className="text-black text-base md:text-lg">
                    <strong className="text-neutral-800 dark:text-neutral-50  text-1xl mt-6">
                      If you are looking for a passionate and creative web developer, you have come to the right place!
                      Feel free to contact me to discuss your projects, ideas or any questions you may have.
                    </strong>
                  </p>
                </div>
                <div className="space-x-4">
                  <a
                    href="/contact"
                    rel="noopener noreferrer"
                    className=" text-center  hover:text-cyan-500 text-neutral-800 dark:text-neutral-50 dark:hover:text-cyan-400 transition-transform  cursor-pointer text-sm font-bold uppercase rounded-md px-4 py-4 mx-2 mr-2 
                          mt-6 w-26  text-1xl"
                  >
                    Read more →
                  </a>
                </div>
              </div>
              <img alt="logo" width="420" height="120" src="/avatarContact.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
