import ContactButton from './ContactButton'
import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="flex items-start md:items-start md:justify-start justify-between text-start">
          <div className="flex flex-col ml-2 mx-1 mr-1">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-1">
              <div className="md:w-6/12">
                <div className="[&>p]:mb-4 pt-28 text-lg">
                  <p>Hi! 👋🏽 I&apos;m Diego, a passionate freelancer frontend developer from Colombia 🇨🇴!</p>

                  <div className="flex mt-4">
                    <div className="w-16 h-16 md:w-18 md:h-18">
                      <img
                        loading="lazy"
                        className=" rounded-full aspect-auto object-cover"
                        width={120}
                        height={120}
                        src="/assets/webp/Diego.webp"
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
                <div className="pt-16 mr-4 mt-2 mb-4 ml-4 text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl font-extrabold capitalize flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
                  <h2>Contact Me</h2>
                </div>
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
