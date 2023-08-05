import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="footer" className=" mx-auto max-w-full md:max-w-full  px-1 sm:px-1  bg-slate-100  dark:bg-slate-700 mt-12">
      <hr className="border border-black dark:border-white" />
      <div className="mx-auto p-4 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly mt-1">
        <div className="flex flex-row items-center justify-between space-x-2 mb-2 mt-1 mx-14 mr-14 text-neutral-800 dark:text-neutral-100 ">
          &copy; {new Date().getFullYear()} Diego Marulanda.  All Rights Reserved.
          <a href="/" className="hover:underline" />
        </div>
        <div className="flex flex-row items-center justify-between space-x-2 mb-2 mt-1 mx-1 mr-1">
          <a href="https://twitter.com/DAMB1987" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter
              className="icon  text-white bg-gray-700 dark:bg-gray-700 border-2 border-black dark:border-white rounded-md"
              size={34}
            />
          </a>
          <a href="https://www.linkedin.com/in/diegomarulandabarrientos/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin
              className="icon text-white bg-gray-700 dark:bg-gray-700 border-2 border-black dark:border-white rounded-md"
              size={34}
            />
          </a>
          <a href="https://github.com/DiegoMarulandaB" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub
              className="icon text-white bg-gray-700 dark:bg-gray-700 border-2 border-black dark:border-white rounded-md"
              size={34}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
