import Image from 'next/image'
import React from 'react'

const Technologies = () => {
  return (
    <div className="md:w-3/3">
      <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mr-2 mt-2 py-2 span-about">
        <h2 className= "mt-4">Technologies </h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/css.svg"
            loading="lazy"
            alt="Git Bash Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded  text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/html5.svg"
            loading="lazy"
            alt="Git Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded  text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/javascript.svg"
            loading="lazy"
            alt="JavaScript Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/reactjs.svg"
            loading="lazy"
            alt="React Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-center text-1xl"></span>
        </div>
      </div>
    </div>
  )
}

export default Technologies
