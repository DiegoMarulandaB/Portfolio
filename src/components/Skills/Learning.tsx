import Image from 'next/image'
import React from 'react'

const Learning = () => {
  return (
    <div className="md:w-3/3">
      <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center text-2xl mt-7 mb-1 py-2  text-blue-800 dark:text-amber-200">
        <h2>Learning</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/tailwindcss.svg"
            loading="lazy"
            alt="Tailwind Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/typescriptlang.svg"
            loading="lazy"
            alt="Typescript Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="justify-center text-1xl"></span>
        </div>
      </div>
    </div>
  )
}

export default Learning
