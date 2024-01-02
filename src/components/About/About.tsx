'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedText from '../../components/AnimatedText/AnimatedText'

const About = () => {
  return (
    <section id="about">
      <h1 className="text-center pt-6 ">
        <AnimatedText text="About me" className="mx-2 mr-2 mb-2 mt-12 " />
      </h1>

      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
          <div className="md:w-3/6">
            <p className="text-center text-1xl mx-4 mr-4 mt-4">
              {' '}
              My fascination for technology is combined with a deep interest for geopolitics, general culture and
              science, which gives me a different perspective in this industry.
            </p>

            <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-6 text-blue-800 dark:text-green-400 text-2xl  ">
              Experience
            </span>

            <p className="text-center text-1xl mx-4 mr-4 mt-4">Of course i have experience in some areas.</p>
            <p className="text-center text-1xl mx-6 mr-6 mt-4">
              But at the moment i have not had the opportunity to enter the technology sector. Therefore, i will get my
              experience through the different projects that i carry out.
            </p>

            <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-6  text-blue-800 dark:text-green-400 text-2xl ">
              Studies
            </span>

            <p className="text-center text-1xl mx-4 mr-4 mt-4">
              Complete the Certified Tech Developer degree at Digital House, in agreement with Mercado Libre and
              Globant.
            </p>

            <p className="text-center text-1xl mx-4 mr-4 mt-4">Start the Frontend specialization in Digital House.</p>
            <p className="text-center text-1xl mx-4 mr-4 mt-4">New challenges to enhance my knowledge!.</p>

            <span className="flex flex-col items-center justify-center mx-4 mr-4 mt-6  text-blue-800 dark:text-green-400 text-2xl   ">
              Hobbies
            </span>

            <p className="text-center text-1xl mx-4 mr-4 mt-4">
              My hobbies are listening to rock music, video games, books on different themes.
            </p>
            <p className="text-center text-1xl mx-6 mr-6 mt-4"> My favorite writer is Brandon Sanderson.</p>
          </div>
          <div className="md:w-1/3 justify-between">
            <h1 className="text-center text-2xl  mt-2 mx-2 mr-2 font-bold">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-center">
              <div className="md:w-3/3">
                <h2 className="text-center text-2xl mt-2 mx-2 mr-2 mb-1 py-2  text-blue-800 dark:text-green-400">
                  Languages
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mx-4 mr-4 mt-4">
                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                      loading="lazy"
                      alt="Css Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-4 mr-6 mt-4">Css</span>
                  </div>
                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                      loading="lazy"
                      alt="Html Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg   text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-4 mr-4 mt-4">Html</span>
                  </div>

                  <div>
                    <Image
                      src="/javascript.svg"
                      loading="lazy"
                      alt="JavaScript Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mt-2">JavaScript</span>
                  </div>

                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                      loading="lazy"
                      alt="React Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg   text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-4 mr-4 mt-4">React</span>
                  </div>
                </div>
              </div>

              <div className="md:w-3/3">
                <h2 className="text-center text-2xl mb-1 py-2 text-blue-800 dark:text-green-400 mt-2">Tools</h2>
                <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mx-4 mr-4 mt-4">
                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
                      loading="lazy"
                      alt="Git Bash Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-4 mr-4 mt-4">Bash</span>
                  </div>

                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                      loading="lazy"
                      alt="Git Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-6 mr-6 mt-4">Git</span>
                  </div>

                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                      loading="lazy"
                      alt="Github Icon"
                      width={68}
                      height={68}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-2 mr-6 mt-4">Github</span>
                  </div>

                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg"
                      loading="lazy"
                      alt="Linux Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-4 mr-4 mt-4">Linux</span>
                  </div>

                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/neovimio/neovimio-icon.svg"
                      loading="lazy"
                      alt="Neovim Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-2 mr-2 mt-4">Neovim</span>
                  </div>

                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                      loading="lazy"
                      alt="Postman Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-1 mr-1 mt-4">Postman</span>
                  </div>

                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
                      loading="lazy"
                      alt="Vscode Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mx-2 mr-2 mt-4">Vs Code</span>
                  </div>
                </div>
              </div>

              <div className="md:w-3/3">
                <h2 className="text-center text-2xl mt-2 mx-2 mr-2 mb-1 py-2  text-blue-800 dark:text-green-400">
                  Learning
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mx-4 mr-4 mt-4">
                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      loading="lazy"
                      alt="Tailwind Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className="justify-center text-1xl mt-4">Tailwind</span>
                  </div>

                  <div>
                    <Image
                      src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
                      loading="lazy"
                      alt="Typescript Icon"
                      width={75}
                      height={75}
                      className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl border-solid border-2 border-slate-100"
                    />
                    <span className=" justify-center text-1xl mt-4">TypeScript</span>
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

export default About
