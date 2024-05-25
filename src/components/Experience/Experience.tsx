import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="pt-28">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="ml-2 mx-2 mr-2 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl text-start">
          <h2>Experience</h2>
        </div>
        <div className="flex flex-col ml-2 mt-2 mx-1 mr-1">
          <div className="space-y-6 md:flex md:gap-6 lg:items-start lg:gap-1">
            <div className="md:w-7/12">
              <div className="[&>p]:mb-4 mt-2 text-lg text-start justify-start">
                <p>
                  <span className="[&>p>strong] text-blue-800 dark:text-amber-200 [&>p>strong] mr-2">
                    <strong>I will acquire my experience through various projects.</strong>
                  </span>
                </p>
                <p>Academically and personally, my focus is on innovation and constant growth.</p>
              </div>
            </div>
            <div className="md:w-4/12">
              <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mr-12">
                <img
                  className="mt-[-24px] aspect-auto object-cover"
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
