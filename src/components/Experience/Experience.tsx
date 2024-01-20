'use client'

const Experience = () => {
  return (
    <section id="experience">
      <div className=" text-center justify-center mx-2 mr-2 pt-28 font-extrabold capitalize text-4xl sm:text-7xl md:text-6xl lg:text-6xl xl:text-7xl">
        <h1>Experience</h1>
      </div>
      <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
        <div className="md:w-3/5">
          <div className="flex flex-col items-center justify-center pb-4">
            {/* <span className="mx-2 mr-2 mt-4 text-blue-800 dark:text-amber-200 text-2xl">Experience</span> */}
            <div className="text-center text-1xl dark:text-white mx-2 mr-2 mt-4 mb-4">
              <p className="mb-4 mt-4">
                I will acquire my experience through various projects, both academic and personal, my focus is on
                innovation and constant growth.
              </p>
              <p className="mb-4 mt-4">
                My background reflects my commitment to excellence and creative problem solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience