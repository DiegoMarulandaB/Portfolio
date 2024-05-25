import Image from 'next/image'
import React from 'react'

const MySkills = () => {
  return (
    <div className="md:w-1/2 mt-[-52px]">
      <div className=" flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mr-4 mt-1 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
        <h2>My Skills</h2>
      </div>
      <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
        {/* copia */}
        <div className="md:w-3/3">
          <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center text-2xl mr-2 mt-2 py-2 text-blue-800 dark:text-amber-200">
            <h2>Technologies </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/w3_css-icon.svg"
                loading="lazy"
                alt="Git Bash Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Css</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/html5-icon.svg"
                loading="lazy"
                alt="Git Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Html</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/javascript.svg"
                loading="lazy"
                alt="Github Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Js</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/reactjs-icon.svg"
                loading="lazy"
                alt="Linux Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-center text-1xl">React</span>
            </div>
          </div>
        </div>

        {/* fin copia */}
        <div className="md:w-3/3">
          <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center text-2xl mb-1 py-2 text-blue-800 dark:text-amber-200 mt-2">
            <h2>Tools</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/gnu_bash-icon.svg"
                loading="lazy"
                alt="Git Bash Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Bash</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/git-scm-icon.svg"
                loading="lazy"
                alt="Git Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Git</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/github-icon.svg"
                loading="lazy"
                alt="Github Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Github</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/linux-icon.svg"
                loading="lazy"
                alt="Linux Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-center text-1xl">Linux</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/neovimio-icon.svg"
                loading="lazy"
                alt="Neovim Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Neovim</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/getpostman-icon.svg"
                loading="lazy"
                alt="Postman Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Postman</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/visualstudio_code-icon.svg"
                loading="lazy"
                alt="Vscode Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">VsCode</span>
            </div>
          </div>
        </div>
        <div className="md:w-3/3">
          <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center text-2xl mt-2 mb-1 py-2  text-blue-800 dark:text-amber-200">
            <h2>Learning</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/tailwindcss-icon.svg"
                loading="lazy"
                alt="Tailwind Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">Tailwind</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/typescriptlang-icon.svg"
                loading="lazy"
                alt="Typescript Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills
