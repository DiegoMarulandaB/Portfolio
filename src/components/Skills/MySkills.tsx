import Image from 'next/image'
const MySkills = () => {
  return (
    <div className="md:w-1/3 mt-[-52px]">
      <div className=" flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center text-2xl mt-2 font-bold">
        <h2>My Skills</h2>
      </div>
      <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center text-2xl mr-2 mt-2 py-2  text-blue-800 dark:text-amber-200">
        <h2>Technologies</h2>
      </div>
      <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
        <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mt-4 md:w-3/3">
          <div>
            <Image
              src="/w3_css-icon.svg"
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
              src="/html5-icon.svg"
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
            <span className="justify-center text-1xlmt-2">JavaScript</span>
          </div>
          <div>
            <Image
              src="/reactjs-icon.svg"
              loading="lazy"
              alt="React Icon"
              width={75}
              height={75}
              className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg   text-lg xl:text-4xl border-solid border-2 border-slate-100"
            />
            <span className="justify-center text-1xl mx-4 mr-4 mt-4">React</span>
          </div>
        </div>
        <div className="md:w-3/3">
          <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center text-2xl mb-1 py-2 text-blue-800 dark:text-amber-200 mt-2">
            <h2>Tools</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Image
                src="/gnu_bash-icon.svg"
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
                src="/git-scm-icon.svg"
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
                src="/github-icon.svg"
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
                src="/linux-icon.svg"
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
                src="/neovimio-icon.svg"
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
                src="/getpostman-icon.svg"
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
                src="/visualstudio_code-icon.svg"
                loading="lazy"
                alt="Vscode Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl mx-1 mr-1 mt-4">VsCode</span>
            </div>
          </div>
        </div>
        <div className="md:w-3/3">
          <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center text-2xl mt-2 mb-1 py-2  text-blue-800 dark:text-amber-200">
            <h2>Learning</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Image
                src="/tailwindcss-icon.svg"
                loading="lazy"
                alt="Tailwind Icon"
                width={75}
                height={75}
                className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded-lg  text-lg xl:text-4xl border-solid border-2 border-slate-100"
              />
              <span className="justify-center text-1xl mx-1">Tailwind</span>
            </div>
            <div>
              <Image
                src="/typescriptlang-icon.svg"
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
  )
}

export default MySkills
