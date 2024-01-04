import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <section id="footer">
      <div className=" mx-auto max-w-full md:max-w-full  px-1 sm:px-1  mt-24  bg-slate-100 dark:bg-slate-700 ">
        <hr className=" dark:border-slate-600 " />
        <div className="mx-auto p-2 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly">
          <div className="flex flex-row items-center justify-evenly space-x-2   mt-2 mx-4 mr-4 ">
            &copy; 2023-2024 Diego Marulanda. All Rights Reserved.
          </div>
          <div className="flex flex-row items-center justify-evenly space-x-2 mt-2 mx-18 mr-18">
            <a
              href="https://twitter.com/DAMB1987"
              className=" hover:text-purple-900 dark:text-slate-100 dark:hover:text-amber-200 transition-transform duration-150 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about my Twitter profile"
            >
              <RiTwitterXFill className="icon" size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/diegomarulandabarrientos/"
              className="  hover:text-purple-900 dark:text-slate-100 dark:hover:text-amber-200 transition-transform duration-150 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about my profile on Linkedin"
            >
              <AiOutlineLinkedin className="icon " size={34} />
            </a>
            <a
              href="https://github.com/DiegoMarulandaB"
              className=" hover:text-purple-900 dark:text-slate-100 dark:hover:text-amber-200 transition-transform duration-150 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about my Github profile"
            >
              <AiOutlineGithub className="icon " size={34} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
