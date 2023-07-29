import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-8xl px-4 md:max-w-8xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl">
      <hr className="w-full   mx-auto mt-8 bg-gradient-to-r from-cyan-600 border-b border-cyan-500 " />
      <div className="mx-auto p-4 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly mt-2">
        <div className="flex flex-row items-center justify-between space-x-2 mb-2 mt-2 mx-16 mr-16  text-neutral-800 dark:text-neutral-100 ">
          &copy; {new Date().getFullYear()} Diego Marulanda. | All Rights Reserved.
          <a href="/" className="hover:underline" />
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-2 mt-2">
          <a href="https://twitter.com/DAMB1987" target="_blank" rel="noopener">
            <AiOutlineTwitter
              className="icon  text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md "
              size={34}
            />
          </a>
          <a href="https://www.linkedin.com/in/diegomarulandabarrientos/" target="_blank" rel="noopener">
            <AiOutlineLinkedin
              className="icon text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md "
              size={34}
            />
          </a>
          <a href="https://github.com/DiegoMarulandaB" target="_blank" rel="noopener">
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
