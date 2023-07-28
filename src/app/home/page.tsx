'use client' // this is a client component
// No need for 'use client' in modern React apps
import React from 'react'
import AnimatedText from '@/components/AnimatedText/AnimatedText'

const CircleIcon = () => (
  <svg
    className="absolute -right-7 -bottom-7 z-[-1]"
    width={134}
    height={106}
    viewBox="0 0 134 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* ... SVG circles ... */}
  </svg>
)

const HomePage = () => {
  return (
    <section id="home" className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
      <div className="flex flex-col text-center items-center justify-center">
        <div className="flex flex-col text-center items-center justify-center ">
          <h1 className="text-3xl md:text-4xl font-bold">
            <AnimatedText text="Welcome!" className="text-center mx-2 mr-2 mb-2 mt-18 font-bold" />
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                {/* <div className="py-3 sm:py-4">
                  <img src="https://i.ibb.co/gFb3ns6/image-1.jpg" alt="Image 1" className="w-full rounded-2xl" />
                </div> */}
                <div className=" flex flex-col text-center items-center justify-center py-3 sm:py-4 mt-2">
                  <img src="/diego.jpg" alt="profile image" className="w-64 rounded-full h-64 opacity-90" />
                </div>
              </div>
              {/* <div className="w-full px-3 sm:px-4 xl:w-1/2 relative z-10 my-4">
                <img src="/diego.jpg" alt="Image 3" className="w-full rounded-full" />
                <CircleIcon />
              </div> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              {/* <span className="block mb-2 text-lg font-semibold text-primary">Why Choose Us</span> */}
              <h2 className="text-center mb-8 text-3xl font-bold text-dark sm:text-4xl mt-4 mx-2 mr-2">
                Hello, I'm Diego Marulanda!
              </h2>
              <p className="mb-8 text-base text-body-color text-center mx-2 mr-2">
                <strong>Indie frontend developer based in Colombia!</strong> Passionate about technology, geopolitics,
                general culture, and science.
              </p>
              <div className="flex flex-col text-center items-center justify-center ">
                <a
                  href="/about"
                  className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md  px-3 py-3 mt-2 w-26"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MY PORTFOLIO */}

        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                {/* <div className="py-3 sm:py-4">
                    <img src="https://i.ibb.co/gFb3ns6/image-1.jpg" alt="Image 1" className="w-full rounded-2xl" />
                  </div> */}
                <div className=" flex flex-col text-center items-center justify-center py-3 sm:py-4 mt-2">
                  <img src="/projects.svg" alt="email image" className="w-64 rounded-full h-64 opacity-90" />
                </div>
              </div>
              {/* <div className="w-full px-3 sm:px-4 xl:w-1/2 relative z-10 my-4">
                  <img src="/diego.jpg" alt="Image 3" className="w-full rounded-full" />
                  <CircleIcon />
                </div> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              {/* <span className="block mb-2 text-lg font-semibold text-primary">Why Choose Us</span> */}
              <h2 className="text-center mb-8 text-3xl font-bold text-dark sm:text-4xl mt-4 mx-2 mr-2">My portfolio</h2>
              <p className="mb-8 text-base text-body-color text-center mx-2 mr-2">
                {/* Feel free to contact me to share the details of your project and explore how we can work together to In */}
                In this section my public Github repository, also the different projects that I have carried out. <br />
                I hope you enjoy exploring my work as much as I do.
              </p>
              <div className="flex flex-col text-center items-center justify-center ">
                <a
                  href="/projects"
                  className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md  px-3 py-3 mt-2 w-26"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* contact */}

        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                {/* <div className="py-3 sm:py-4">
                    <img src="https://i.ibb.co/gFb3ns6/image-1.jpg" alt="Image 1" className="w-full rounded-2xl" />
                  </div> */}
                <div className=" flex flex-col text-center items-center justify-center py-3 sm:py-4 mt-2">
                  <img src="/email.svg" alt="email image" className="w-64 rounded-full h-64 opacity-90" />
                </div>
              </div>
              {/* <div className="w-full px-3 sm:px-4 xl:w-1/2 relative z-10 my-4">
                  <img src="/diego.jpg" alt="Image 3" className="w-full rounded-full" />
                  <CircleIcon />
                </div> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              {/* <span className="block mb-2 text-lg font-semibold text-primary">Why Choose Us</span> */}
              <h2 className="text-center mb-8 text-3xl font-bold text-dark sm:text-4xl mt-4 mx-2 mr-2">Contact me</h2>
              <p className="mb-8 text-base text-body-color text-center mx-2 mr-2">
                Feel free to contact me to share the details of your project and explore how we can work together to
                achieve great results!
              </p>
              <div className="flex flex-col text-center items-center justify-center ">
                <a
                  href="/contact"
                  className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md  px-3 py-3 mt-2 w-26"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
