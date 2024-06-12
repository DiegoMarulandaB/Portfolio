import Image from 'next/image'
import React from 'react'

const Tools = () => {
  return (
    <div className="md:w-3/3">
      <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mb-1 py-2 span-technologies-tools-learning">
        <span className="mt-5">Tools</span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/bash.svg"
            loading="lazy"
            alt="Git Bash Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/docker.svg"
            loading="lazy"
            alt="Docker Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/git.svg"
            loading="lazy"
            alt="Git Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/github.svg"
            loading="lazy"
            alt="Github Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/gitlab.svg"
            loading="lazy"
            alt="GitLab Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/kubernetes.svg"
            loading="lazy"
            alt="Kubernetes Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/linux.svg"
            loading="lazy"
            alt="Linux Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/mysql.svg"
            loading="lazy"
            alt="Mysql Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/neovimio.svg"
            loading="lazy"
            alt="Neovim Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/postman.svg"
            loading="lazy"
            alt="Postman Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/vsCode.svg"
            loading="lazy"
            alt="Vscode Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Tools
