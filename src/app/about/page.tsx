'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

const About = () => {
  return (
    <section id="about">
      <h1 className="text-center pt-20 ">
        <AnimatedText text="About me" className="mx-2 mr-2 mb-2 mt-4 " />
      </h1>

      <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
        <div className="md:w-3/6">
          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-6  text-pink-600 text-2xl  ">
            About Diego
          </span>
          <Image
            loading="lazy"
            src="/Diego.jpeg"
            alt="profile image"
            width={148}
            height={148}
            className="w-40 h-40 rounded-full mx-auto mt-4 "
          />
          <p className="text-center text-1xl mx-4 mr-4 mt-4">
            <strong className="text-indigo-400 text-1xl ">
              Hello! I'm Diego, a passionate freelance frontend developer based in Colombia.
            </strong>
          </p>
          <p className="text-center text-1xl mx-4 mr-4 mt-4">
            {' '}
            My fascination with technology is combined with a deep interest in geopolitics, general culture and science,
            giving me a unique perspective on the digital world.
          </p>

          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-6  text-pink-600 text-2xl  ">
            Experience
          </span>
          <Image
            loading="lazy"
            src="/personal_site.svg"
            alt=" personal_site image"
            width={148}
            height={148}
            className="w-40 h-40 mx-auto rounded-full mt-4 "
          />
          <p className="text-center text-1xl mx-4 mr-4 mt-4">Of course i have experience in some areas.</p>
          <p className="text-center text-1xl mx-6 mr-6 mt-4">
            But at the moment i have not had the opportunity to enter the technology sector. Therefore, i will get my
            experience through the different projects that i carry out.
          </p>

          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-6  text-pink-600 text-2xl ">
            Studies
          </span>
          <Image
            loading="lazy"
            src="/Studying.svg"
            alt="Studying image"
            width={148}
            height={148}
            className="w-40 h-40 mx-auto rounded-full mt-4"
          />

          <p className="text-center text-1xl mx-4 mr-4 mt-4">
            I recently completed the Certified Tech Developer degree at Digital House, in agreement with Mercado Libre
            and Globant.
          </p>

          <p className="text-center text-1xl mx-4 mr-4 mt-4">
            I am now excited to delve into the Frontend specialization, with plans to learn and maximize my knowledge.
          </p>
          <p className="text-center text-1xl mx-4 mr-4 mt-4">
            I'm excited about what the future holds and look forward to connecting with other professionals who are
            passionate about technology and innovation!
          </p>

          <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-6 text-2xl  text-pink-600  ">
            Hobbies
          </span>
          <Image
            loading="lazy"
            src="/book.svg"
            alt="gaming image"
            width={148}
            height={148}
            className="w-40 h-40 mx-auto rounded-full mt-4"
          />
          <p className="text-center text-1xl mx-4 mr-4 mt-4">
            My hobbies are listening to rock music, video games, books on different themes.
          </p>
          <p className="text-center text-1xl mx-6 mr-6 mt-4"> My favorite writer is Brandon Sanderson.</p>
        </div>
        <div className="md:w-1/4">
          <h1 className="text-center text-3xl  mt-4 mx-2 mr-2 font-bold">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center md:justify-center">
            <div className="md:w-3/3">
              <h2 className="text-center text-2xl mt-4 mx-2 mr-2 mb-1 py-2 text-pink-600">Languages</h2>
              <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mx-4 mr-4 mt-4">
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    loading="lazy"
                    alt="Css Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded-lg  text-lg xl:text-5xl"
                  />
                  <span className="text-center text-1xl mx-6 mr-6 mt-4">Css</span>
                </div>
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    loading="lazy"
                    alt="Html Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg   text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-4 mr-4 mt-4">Html</span>
                </div>

                <div>
                  <Image
                    src="/javascript.svg"
                    loading="lazy"
                    alt="JavaScript Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mt-4">JavaScript</span>
                </div>

                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    loading="lazy"
                    alt="React Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg   text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-4 mr-4 mt-4">React</span>
                </div>
              </div>
            </div>

            <div className="md:w-3/3 md:mt-8">
              <h2 className="text-center text-2xl mb-1 py-2 text-pink-600">Tools</h2>
              <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mx-4 mr-4 mt-4">
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
                    loading="lazy"
                    alt="Git Bash Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-4 mr-4 mt-4">Bash</span>
                </div>

                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    loading="lazy"
                    alt="Git Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-6 mr-6 mt-4">Git</span>
                </div>

                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                    loading="lazy"
                    alt="Github Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-4 mr-4 mt-4">Github</span>
                </div>

                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg"
                    loading="lazy"
                    alt="Linux Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-4 mr-4 mt-4">Linux</span>
                </div>

                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/neovimio/neovimio-icon.svg"
                    loading="lazy"
                    alt="Neovim Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-2 mr-2 mt-4">Neovim</span>
                </div>

                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    loading="lazy"
                    alt="Postman Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-1 mr-1 mt-4">Postman</span>
                </div>

                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
                    loading="lazy"
                    alt="Vscode Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-2 mr-2 mt-4">Vs Code</span>
                </div>
              </div>
            </div>

            <div className="md:w-3/2 md:mt-8">
              <h2 className="text-center text-2xl mt-2 mx-2 mr-2 mb-1 py-2 text-pink-600">Learning</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mx-4 mr-4 mt-4">
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    loading="lazy"
                    alt="Tailwind Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mx-2 mr-2 mt-4">Tailwind</span>
                </div>

                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
                    loading="lazy"
                    alt="Typescript Icon"
                    width={80}
                    height={80}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl"
                  />
                  <span className="text-center text-1xl mt-4">TypeScript</span>
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
