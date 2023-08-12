import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="footer">
      <div className=" mx-auto max-w-full md:max-w-full px-1 sm:px-1  mt-12">
        <hr className="border border-black dark:border-white" />
        <div className="mx-auto p-2 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly">
          <div className="flex flex-row items-center justify-center space-x-2   mt-2   text-neutral-800 dark:text-neutral-100 mx-18 mr-18">
            &copy; 2023 Diego Marulanda. All Rights Reserved.
          </div>
          <div className="flex flex-row items-center justify- space-x-2 mt-2 mx-18 mr-18">
            <a
              href="https://twitter.com/DAMB1987"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about my Twitter profile"
            >
              <AiOutlineTwitter
                className="icon  text-white bg-gray-700 dark:bg-gray-700 border-2 border-black dark:border-white rounded-md"
                size={34}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/diegomarulandabarrientos/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about my profile on Linkedin"
            >
              <AiOutlineLinkedin
                className="icon text-white bg-gray-700 dark:bg-gray-700 border-2 border-black dark:border-white rounded-md"
                size={34}
              />
            </a>
            <a
              href="https://github.com/DiegoMarulandaB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about my Github profile"
            >
              <AiOutlineGithub
                className="icon text-white bg-gray-700 dark:bg-gray-700 border-2 border-black dark:border-white rounded-md"
                size={34}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
