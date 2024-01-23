import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id="contact" className="pt-20">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="flex items-start justify-between md:items-center">
          <div className="flex flex-col ml-2 mx-1 mr-1">
            <div className="md:w-4/1">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-1">
                <div className="md:w-6/12 text-start">
                  <div className="mb-4 mt-6 text-lg">
                    <p>Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia 🇨🇴!</p>
                    <div className="flex mt-4">
                      <div className="w-16 h-16 mx-2 mr-2 md:w-18 md:h-18">
                        <img
                          loading="lazy"
                          className=" rounded-full"
                          width={120}
                          height={120}
                          src="/Diego.webp"
                          alt="Profile Picture"
                        />
                      </div>
                      <div className="md:text-lg">
                        <p className=" text-md mx-1 mr-1">
                          <span className=" text-blue-800 dark:text-amber-200"> Freelance programmer</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:5/12 lg:w-5/2">
                  <h2 className=" pl-8 mb-2 mx-1 mr-1 text-center text-2xl font-semibold justify-center">
                    Contact Me
                  </h2>
                  <div className="flex pl-8 mb-12 mx-1 mr-1 text-center justify-center">
                    <a
                      href="mailto:%20diegomjobs@gmail.com%20?Subject=Aquí%20el%20asunto%20del%20mail"
                      className=" text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contact me by sending me an email"
                    >
                      <span className="relative text-center cursor-pointer mx-2 mr-2 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2 py-2 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
                        Email →
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/diegomarulandabarrientos/"
                      className="text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Read more about my profile on Linkedin"
                    >
                      <span className="relative text-center cursor-pointer mx-2 mr-2 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2 py-2 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
                        Linkedin →
                      </span>
                    </a>
                    <a
                      href="https://github.com/DiegoMarulandaB"
                      className="text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Read more about my Github profile"
                    >
                      <span className="relative text-center cursor-pointer mx-2 mr-2 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2 py-2 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
                        Github →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
