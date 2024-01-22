'use client'

const Experience = () => {
  return (
    <section id="experience" className="pt-28">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="ml-2 mx-2 mr-2 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl text-start">
          <h1>Experience</h1>
        </div>
        <div className="flex flex-col ml-2 mt-2 mx-1 mr-1">
          <div className="md:w-4/5">
            <div className="space-y-6 md:flex md:gap-6 lg:items-start lg:gap-12">
              <div className="md:w-7/12">
                <p className="mb-4 mt-2 text-lg text-start">
                  <span className="text-blue-800 dark:text-amber-200">
                    I will acquire my experience through various projects.
                  </span>
                </p>
                <p className="mb-4 mt-2  text-lg text-start">
                  Academically and personally, my focus is on innovation and constant growth.
                </p>
              </div>
              {/* <div className="md:w-3/12">
              <img
                className="mx-auto ml-24 mr-24"
                src="/developer.svg"
                alt="image developer"
                loading="lazy"
                width="150"
                height="150"
              />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
