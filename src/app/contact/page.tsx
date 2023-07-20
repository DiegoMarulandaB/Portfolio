'use client'
import React from 'react'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import { AiOutlineMail, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-800  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center items-center justify-center mt-32">
          <h2 className=" text-2xl text-center sm:text-1xl md:text-2xl lg:text-4xl xl:text-8xl  font-bold mb-4 mt-2">
            <AnimatedText
              text="Contact me"
              className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-2 mb-2  font-bold "
            />
          </h2>
          <p className="  bg-white dark:bg-slate-800 sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mb-4 mt-10 ">
            Get in touch with me through these links!
          </p>
        </div>
        <div className=" flex-col text-center items-center justify-center   mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 ">
          <a
            href=""
            className="flex flex-col text-center items-center justify-center  px-4 py-6 border   hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg  "
          >
            <AiOutlineMail
              className="icon  text-white from-sky-500 via-sky-600 to-sky-700 hover:-translate-y-1 rounded-r-lg"
              size={30}
            />

            <span className="flex flex-col text-center items-center justify-center  text-base font-medium text-white-900 ">
              Email
            </span>
            <span className="text-sm text-white-500">diegomarulanda87@gmail.com</span>
          </a>
          <a
            href="https://twitter.com/DAMB1987"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center px-4 py-6 border   hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg  "
          >
            <AiOutlineTwitter
              className="icon  text-white from-sky-500 via-sky-600 to-sky-700 hover:-translate-y-1 rounded-r-lg"
              size={30}
            />

            <span className="flex flex-col text-center items-center justify-center  text-base font-medium text-white-500">
              Twitter
            </span>
            <span className=" text-sm text-white-500">@DAMB1987</span>
          </a>
          <a
            href="https://www.linkedin.com/in/diegomarulandabarrientos/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center px-4 py-6 border   hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg  "
          >
            <AiOutlineLinkedin
              className="icon text-white from-sky-500 via-sky-600 to-sky-700 hover:-translate-y-1 rounded-r-lg"
              size={30}
            />

            <span className="flex flex-col text-center items-center justify-center   text-base font-medium text-white-900">
              LinkedIn
            </span>
            <span className=" text-sm text-white-500">diegomarulandabarrientos</span>
          </a>
          <a
            href="https://github.com/DiegoMarulandaB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center px-4 py-6 border   hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg  "
          >
            <AiOutlineGithub
              className="icon text-white  from-sky-500 via-sky-600 to-sky-700 hover:-translate-y-1 rounded-r-lg"
              size={30}
            />
            <span className="flex flex-col items-center text-center text-base font-medium text-white-900">GitHub</span>
            <span className="flex flex-col items-center text-center text-sm text-white-500">DiegoMarulandaB</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
