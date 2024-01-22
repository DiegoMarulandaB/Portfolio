import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {
  return (
      <div id="contact">
        <div className="container mx-auto px-4 mt-24">
          <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
            <div className="md:w-4/1">
              <div className="container m-auto px-6 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-4/12 mt-2 mb-10">
                    <h2 className="mx-auto text-center text-3xl dark:text-white font-semibold mr-2 ml-2">Contact Me</h2>
                    <div className="flex gap-3 mt-2 justify-center">
                      <a
                        href="mailto:%20diegomjobs@gmail.com%20?Subject=Aquí%20el%20asunto%20del%20mail"
                        className=" text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact me by sending me an email"
                      >
                        <span className="relative group-hover:bg-opacity-0 mt-1">
                          <AiOutlineMail className="icon mx-auto" size={34} />
                          Email
                        </span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/diegomarulandabarrientos/"
                        className="text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read more about my profile on Linkedin"
                      >
                        <span className="relative group-hover:bg-opacity-0 mt-1">
                          <AiOutlineLinkedin className="icon mx-auto" size={34} />
                          Linkedin
                        </span>
                      </a>
                      <a
                        href="https://github.com/DiegoMarulandaB"
                        className="text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read more about my Github profile"
                      >
                        <span className="relative group-hover:bg-opacity-0 mt-1">
                          <AiOutlineGithub className="icon mx-auto" size={34} />
                          Github
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="md:7/12 lg:w-7/12">
                    <div className="mb-4 mt-4 text-lg">
                      <p>Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia 🇨🇴!</p>
                      <div className="flex mt-4 justify-end">
                        <div className="w-16 h-16 mr-4 md:w-18 md:h-18">
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
                          <p className=" text-md">
                            <span className=" text-blue-800 dark:text-amber-200"> Freelance programmer</span>
                          </p>
                        </div>
                      </div>
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
