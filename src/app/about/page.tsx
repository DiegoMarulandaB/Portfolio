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
          <Image
            loading="lazy"
            src="/diego.jpg"
            alt="profile image"
            rel="dns-prefetch"
            width={148}
            height={148}
            className="w-40 h-40 rounded-full mx-auto mt-6 "
          />
          <p className="text-center mx-2 mr-2 mt-4">
            Hello! Allow me to introduce myself:{' '}
            <strong className="text-indigo-400">
              I am Diego Marulanda, an indie frontend developer based in Colombia!
            </strong>{' '}
            <br />
            <br />
            Passionate about technology, geopolitics, general culture, and science.
          </p>
          <br />
          <br />
          {/* experiencia */}
          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-8  text-2xl text-pink-600 sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl font-light ">
            Experience
          </span>
          <br />
          <Image
            loading="lazy"
            src="/personal_site.svg"
            alt=" personal_site image"
            rel="dns-prefetch"
            width={148}
            height={148}
            className="w-40 h-40 mx-auto rounded-full "
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
          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-8 text-2xl  text-pink-600 sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl font-light ">
            Studies
          </span>
          <br />
          <Image
            loading="lazy"
            src="/Studying.svg"
            alt="Studying image"
            rel="dns-prefetch"
            width={148}
            height={148}
            className="w-40 h-40 mx-auto rounded-full"
          />
          <p className="text-center mx-2 mr-2 mt-4">
            2021 - 2023
            <br /> I received a scholarship in the Certified Tech Developer program at Digital House, in partnership
            with Mercado Libre and Globant.
            <br />
            <br />
            07 - 24 - 2023 <br />
            I started specializing in frontend in the same academy.
            <br />
            <br />
            For more information about my studies in programming, I invite you to visit my LinkedIn profile.
          </p>
          <br />
          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-8 text-2xl  text-pink-600 sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl font-light ">
            Hobbies
          </span>
          <br />
          <Image
            loading="lazy"
            src="/gaming.svg"
            alt="gaming image"
            rel="dns-prefetch"
            width={148}
            height={148}
            className="w-40 h-40 mx-auto rounded-full"
          />
          <p className="text-center mx-2 mr-2 mt-6">
            My hobbies are rock music, videogames, playing sports, they already occupy an important place in my life.
            <br />
            <br />
            Because you must be in good physical condition to spend several hours in front of a computer.
          </p>
          <br />
          <Image
            loading="lazy"
            src="/book.svg"
            alt="book image"
            rel="dns-prefetch"
            width={148}
            height={148}
            className="w-40 h-40 mx-auto rounded-full"
          />
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
        </div>

        <div className="md:w-1/4 md:text-left">
          <h1 className="text-center text-3xl lg:text-4xl xl:text-6xl mt-4 mx-2 mr-2 font-bold">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center md:justify-start">
            <div className="md:w-3/3">
              <h2 className="text-center text-2xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-4 mx-2 mr-2 font-light mb-1 py-2 text-pink-600">
                Languages
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mx-4 mr-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Css Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded-lg  text-lg xl:text-5xl"
                  />
                </div>
                {/* Add more language icons here */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Html Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg   text-lg xl:text-4xl"
                  />
                </div>
                {/* javascript */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="JavaScript Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* react */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="React Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg   text-lg xl:text-4xl"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/3 md:mt-8">
              <h2 className="text-center text-2xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-2 mx-2 mr-2 font-light mb-1 py-2 text-pink-600">
                Tools
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mx-4 mr-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Git Bash Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* Add more tools icons here */}
                {/* git */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Git Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* github */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/github/github-ar21.svg"
                    rel="dns-prefetch"
                    alt="Github Icon preload"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* linux */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/linux/linux-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Linux Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* neovim */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/neovimio/neovimio-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Neovim Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl"
                  />
                </div>
                {/* postman */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Postman Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl"
                  />
                </div>
                {/* vscode */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Vscode Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/2 md:mt-8">
              <h2 className="text-center text-2xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-2 mx-2 mr-2 font-light mb-1 py-2 text-pink-600">
                Learning
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mx-4 mr-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Tailwind Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                </div>
                {/* Add more learning icons here */}
                {/* typescript */}
                <div>
                  <Image
                    loading="lazy"
                    src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg"
                    rel="dns-prefetch preload"
                    alt="Typescript Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
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
