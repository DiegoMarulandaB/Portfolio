'use client'
import React from 'react'
import { AiOutlineMail, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import AnimatedText from '@/components/AnimatedText/AnimatedText'

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-center items-center justify-center mt-32">
          <h2 className="text-2xl text-center font-bold mb-4 ">
            <AnimatedText text="Contact me" className="text-1xl text-left  mr-2 mb-2  mt-2 font-bold" />
          </h2>
          <p className="bg-white dark:bg-slate-800  mb-4 mt-10">Get in touch with me through these links!</p>
        </div>
        <div className=" flex-col text-center items-center justify-center mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          <a
            href="mailto:diegomarulanda87@gmail.com"
            className="flex flex-col text-center items-center justify-center px-4 py-6 border transform transition-transform hover:-translate-y-1 cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md "
          >
            <AiOutlineMail className="icon text-white" size={40} />
            <span className="text-1xl font-medium text-white">Email</span>
            <span className="text-sm text-white">diegomarulanda87@gmail.com</span>
          </a>
          <a
            href="https://twitter.com/DAMB1987"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center px-4 py-6 border transform transition-transform hover:-translate-y-1 cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md "
          >
            <AiOutlineTwitter className="icon text-white" size={40} />
            <span className="text-1xl font-medium text-white">Twitter</span>
            <span className="text-sm text-white">@DAMB1987</span>
          </a>
          <a
            href="https://www.linkedin.com/in/diegomarulandabarrientos/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center px-4 py-6 border transform transition-transform hover:-translate-y-1 cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md "
          >
            <AiOutlineLinkedin className="icon text-white" size={40} />
            <span className="text-1xl font-medium text-white">LinkedIn</span>
            <span className="text-sm text-white">diegomarulandabarrientos</span>
          </a>
          <a
            href="https://github.com/DiegoMarulandaB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center px-4 py-6 border transform transition-transform hover:-translate-y-1 cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md "
          >
            <AiOutlineGithub className="icon text-white" size={40} />
            <span className="text-1xl font-medium text-white">GitHub</span>
            <span className="text-sm text-white">DiegoMarulandaB</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
