const Contact = () => {
  return (
    <div id="contact">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="flex items-start md:items-start md:justify-start justify-between text-start">
          <div className="flex flex-col ml-2 mx-1 mr-1">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-1">
              <div className="md:w-6/12">
                <div className="[&>p]:mb-4 pt-28 text-lg">
                  <p>Hi! 👋🏽 I'm Diego, a passionate freelancer frontend developer from Colombia 🇨🇴!</p>
                  <div className="flex mt-4">
                    <div className="w-16 h-16 md:w-18 md:h-18">
                      <img
                        loading="lazy"
                        className=" rounded-full"
                        width={120}
                        height={120}
                        src="/Diego.webp"
                        alt="Profile Picture"
                      />
                    </div>
                    <div className="text-md mx-1 mr-1 mt-2 ml-2">
                        <span className=" text-blue-800 dark:text-amber-200"> Freelance programmer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:5/12 lg:w-5/2">
                <div className="pt-12 mr-4 mt-2 mb-4 text-2xl font-semibold flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
                  <h2>Contact Me</h2>
                </div>
                <div className="flex flex-col-row items-start text-start justify-start md:items-center md:text-center md:justify-center">
                  <a
                    href="mailto:%20diegomjobs@gmail.com%20?Subject=Aquí%20el%20asunto%20del%20mail"
                    className=" text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 inline-flex hover:rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact me by sending me an email"
                  >
                    <span className="relative text-center cursor-pointer mr-4 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
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
                    <span className="relative text-center cursor-pointer mr-4 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
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
                    <span className="relative text-center cursor-pointer mr-4 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-1 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100">
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
  )
}

export default Contact
