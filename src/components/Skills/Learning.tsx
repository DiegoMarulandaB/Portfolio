import Image from 'next/image'
import React from 'react'

const Learning = () => {
  return (
    <div className="md:w-3/3">
      <div className="md:text-center md:justify-center mb-1 py-2 span-technologies-tools-learning mt-6">
        <span>Learning</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/tailwindcss.svg"
            alt="Tailwind Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
          <span className="text-lg xl:text-4xl"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="assets/svg/typescriptlang.svg"
            alt="Typescript Icon"
            width={100}
            height={100}
            className="h-auto max-w-full px-1 py-2 mb-1 bg-white  dark:bg-white rounded text-lg xl:text-4xl border-solid border-2 border-slate-100 aspect-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Learning
