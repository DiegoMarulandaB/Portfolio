'use client'

const Experience = () => {
  return (
    <section id="experience">
      <div className=" text-center justify-center mx-2 mr-2 pt-24 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
        <h1>Experience</h1>
      </div>
      <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
        <div className="md:w-4/1">
          <div className="container m-auto px-6 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-4/12 mt-2 ml-4">
                <img src="/developer.svg" alt="image developer" loading="lazy" width="300" height="300" />
              </div>
              <div className="md:7/12 lg:w-7/12">
                <p className="mb-4 mt-4">
                  <span className="text-blue-800 dark:text-amber-200">
                    I will acquire my experience through various projects.
                  </span>
                </p>
                <p className="mb-4 mt-4">Academically and personally, my focus is on innovation and constant growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
