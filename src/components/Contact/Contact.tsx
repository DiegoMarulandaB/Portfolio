import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id="contact" className="pt-20">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="flex items-start justify-between md:items-center">
          <div className="flex flex-col ml-2 mx-1 mr-1">
            <div className="md:w-4/5">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:w-7/12 text-start">
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
                <div className="md:5/12 lg:w-4/12">
                  <h2 className="mx-2 mr-2 ml-4 mb-1 text-center text-3xl font-semibold justify-center">
                    Contact Me
                  </h2>
                  <div className="flex gap-3 mt-1 mr-1 ml-4 mb-8 justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
