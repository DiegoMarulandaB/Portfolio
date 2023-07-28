//!2024
'use client'
import React from 'react'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText/AnimatedText'

const About = () => {
  return (
    <section id="about" className="my-20 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-2 mt-4 font-bold">
        <AnimatedText
          text="About me"
          className="text-center sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl mt-2 mx-2 mr-2 "
        />
      </h1>

      <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
        <div className="md:w-3/6">
          {/* <h1 className="text-4xl lg:text-6xl xl:text-6xl text-left mb-6 mx-2 mr-2 mt-2">
            About Diego 
          </h1> */}
          <Image src="/Hello.svg" alt=" Welcome image" width={148} height={148} className="w-40 h-40 mx-auto " />
          <p className="text-center mx-2 mr-2 mt-4">
            Hello! Welcome. Allow me to introduce myself: I am Diego Marulanda, an indie frontend developer based in
            Colombia!
          </p>
          <br />
          <br />
          {/* experiencia */}
          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-8">Experience</span>
          <br />
          <Image
            src="/personal_site.svg"
            alt=" personal_site image"
            width={148}
            height={148}
            className="w-40 h-40 mx-auto "
          />
          <p className="text-center mx-2 mr-2 mt-4">
            Of course I have experience in some areas.
            <br />
            <br />
            But at the moment I have not had the opportunity to enter the technology sector. Therefore, I will get my
            experience through the different projects that I carry out.
          </p>
          <br />

          {/* Studying */}
          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-8">Studies</span>
          <br />
          <Image src="/Studying.svg" alt="Studying image" width={148} height={148} className="w-40 h-40 mx-auto" />
          <p className="text-center mx-2 mr-2 mt-4">
            06/2024
            <br /> I received a scholarship in the Certified Tech Developer program at Digital House, in partnership
            with Mercado Libre and Globant.
            <br />
            <br />
            07/2024 <br />
            I started specializing in frontend in the same academy.
            <br />
            <br />
            For more information about my studies in programming, I invite you to visit my LinkedIn profile.
          </p>
          <br />
          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-8">Hobbies</span>
          <br />
          <Image src="/gaming.svg" alt="gaming image" width={148} height={148} className="w-40 h-40 mx-auto" />
          <p className="text-center mx-2 mr-2 mt-6">
            My hobbies are rock music, videogames, playing sports, they already occupy an important place in my life.
            <br />
            <br />
            Because you must be in good physical condition to spend several hours in front of a computer.
          </p>
          <br />
          <Image src="/book.svg" alt="book image" width={148} height={148} className="w-40 h-40 mx-auto" />
          <p className="text-center mx-2 mr-2 mt-2">
            I like to read,{' '}
            <span className="font-bold">
              I believe that in the world of technology, it is essential to expand knowledge through books
            </span>
            , since it is a sector with different branches of learning, and my favorite genre is currently fantasy.
            <br />
            <br /> My favorite writer is Brandon Sanderson.
          </p>
          <br />
          <Image src="/web.svg" alt="web image" width={148} height={148} className="w-40 h-40 mx-auto" />
          <p className="text-center mx-2 mr-2 mt-6">
            On this portfolio website, you can find samples of my projects. I hope you enjoy exploring my work as much
            as I enjoy creating it.
          </p>
        </div>

        <div className="md:w-1/4 md:text-center">
          <h1 className="text-center text-2xl lg:text-4xl xl:text-6xl mt-4 mx-2 mr-2 font-bold">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center md:justify-start">
            <div className="md:w-3/3">
              <h2 className="text-center sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-4 mx-2 mr-2 font-light mb-1 py-2">
                Languages
              </h2>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mx-4 mr-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg"
                    alt="Css Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-5xl"
                  />
                </div>
                {/* Add more language icons here */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg"
                    alt="Html Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg   text-lg xl:text-4xl"
                  />
                </div>
                {/* javascript */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg"
                    alt="JavaScript Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* react */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
                    alt="React Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg   text-lg xl:text-4xl"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/3 md:mt-8">
              <h2 className="text-center sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-2 mx-2 mr-2 font-light mb-1 py-2">
                Tools
              </h2>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mx-4 mr-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21.svg"
                    alt="Git Bash Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* Add more tools icons here */}
                {/* git */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
                    alt="Git Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* github */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/github/github-ar21.svg"
                    alt="Github Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* linux */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/linux/linux-ar21.svg"
                    alt="Linux Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* neovim */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/neovimio/neovimio-ar21.svg"
                    alt="Neovim Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg text-lg xl:text-4xl"
                  />
                </div>
                {/* postman */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg"
                    alt="Postman Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg text-lg xl:text-4xl"
                  />
                </div>
                {/* vscode */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg"
                    alt="Vscode Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/2 md:mt-8">
              <h2 className="text-center sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-2 mx-2 mr-2 font-light mb-1 py-2">
                Learning
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 mr-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg"
                    alt="Tailwind Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* Add more learning icons here */}
                {/* typescript */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg"
                    alt="Typescript Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-200 dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
