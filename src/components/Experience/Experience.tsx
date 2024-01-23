'use client'

const Experience = () => {
  return (
    <section id="experience" className="pt-28">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="ml-2 mx-2 mr-2 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl text-start">
          <h1>Experience</h1>
        </div>
        <div className="flex flex-col ml-2 mt-2 mx-1 mr-1">
          <div className="md:w-4/1">
            <div className="space-y-6 md:flex md:gap-6 lg:items-start lg:gap-1">
              <div className="md:w-7/12">
                <p className="mb-4 mt-2 text-lg text-start">
                  <span className="text-blue-800 dark:text-amber-200 mr-2">
                    I will acquire my experience through various projects.
                  </span>
                </p>
                <p className="mb-4 mt-2  text-lg text-start">
                  Academically and personally, my focus is on innovation and constant growth.
                </p>
              </div>
              <div className="md:w-4/12">
                <img
                  className="mx-auto mt-[-24px] pr-2"
                  src="/developer.svg"
                  alt="image developer"
                  loading="lazy"
                  width="220"
                  height="220"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
