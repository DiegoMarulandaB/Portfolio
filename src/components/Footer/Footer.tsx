import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="footer">
      <div className=" mx-auto max-w-full md:max-w-full px-1 sm:px-1 mt-24  bg-slate-100 dark:bg-slate-700">
        <hr className=" dark:border-slate-500 mb-4"/>
        <div className="mx-auto p-2 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly">
          <div className="flex flex-row space-x-2 mt-2 mb-2">
            &copy; 2023-2024 Diego Marulanda. | All Rights Reserved.
          </div>
          {/* <div className="flex flex-row space-x-2 mt-2 ml-2 mr-2">
            <a
              href="mailto:diegomarulanda87@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail"
              className=" hover:text-purple-950 dark:text-slate-100 dark:hover:text-green-300 transition-transform duration-150 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email"
            >
              <AiOutlineMail className="icon" size={34} />
            </a>
            <a
              href="https://www.linkedin.com/in/diegomarulandabarrientos/"
              className="  hover:text-purple-950 dark:text-slate-100 dark:hover:text-green-300 transition-transform duration-150 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about my profile on Linkedin"
            >
              <AiOutlineLinkedin className="icon " size={34} />
            </a>
            <a
              href="https://github.com/DiegoMarulandaB"
              className=" hover:text-purple-950 dark:text-slate-100 dark:hover:text-green-300 transition-transform duration-150 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about my Github profile"
            >
              <AiOutlineGithub className="icon " size={34} />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Footer
