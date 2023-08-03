import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

const Footer: React.FC = () => (
  <section id="footer" className=" mx-auto max-w-10xl  px-4 sm:px-4 md:max-w-10xl bg-slate-100  dark:bg-slate-700">
    <hr className="bg-slate-200  bg-gradient-to-r from-cyan-600 border-b border-cyan-500 mt-14" />
    <div className="mx-auto p-4 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly mt-1">
      <div className="flex flex-row items-center justify-between space-x-2 mb-2  mt-1 text-neutral-800 dark:text-neutral-100 mx-2 mr-2 ">
        &copy; {new Date().getFullYear()} Diego Marulanda. | 👨🏾‍💻 | All Rights Reserved.
        <a href="/" className="hover:underline" />
      </div>
      <div className="flex flex-row items-center justify-between space-x-2 mb-2  mt-1 ">
        <a href="https://twitter.com/DAMB1987" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter
            className="icon  text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 border-2 rounded-md"
            size={34}
          />
        </a>
        <a href="https://www.linkedin.com/in/diegomarulandabarrientos/" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin
            className="icon text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-2 rounded-md"
            size={34}
          />
        </a>
        <a href="https://github.com/DiegoMarulandaB" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub
            className="icon text-white bg-gradient-to-r from-gray-700 via-gray-700 to-gray-700 border-2 rounded-md"
            size={34}
          />
        </a>
      </div>
    </div>
  </section>
)

export default Footer
