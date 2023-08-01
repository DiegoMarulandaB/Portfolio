import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className=" mx-auto max-w-10xl  px-4 sm:px-4 md:max-w-10xl bg-slate-100  dark:bg-slate-700  ">
      <hr className="bg-slate-200  bg-gradient-to-r from-cyan-600 border-b border-cyan-500 mt-14" />
      <div className="mx-auto p-4 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly mt-1">
        <div className="flex flex-row items-center justify-between space-x-2 mb-2  mt-1 text-neutral-800 dark:text-neutral-100 mx-2 mr-2 ">
          &copy; {new Date().getFullYear()} Diego Marulanda. | console.log("All Rights Reserved.")
          <a href="/" className="hover:underline" />
        </div>
        <div className="flex flex-row items-center justify-between space-x-2 mb-2  mt-1 ">
          <a href="https://twitter.com/DAMB1987" target="_blank" rel="noopener noreferrer dns-prefetch">
            <AiOutlineTwitter
              className="icon  text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md "
              size={34}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/diegomarulandabarrientos/"
            target="_blank"
            rel="noopener noreferrer dns-prefetch"
          >
            <AiOutlineLinkedin
              className="icon text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md "
              size={34}
            />
          </a>
          <a href="https://github.com/DiegoMarulandaB" target="_blank" rel="noopener noreferrer dns-prefetch">
            <AiOutlineGithub
              className="icon text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md "
              size={34}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
