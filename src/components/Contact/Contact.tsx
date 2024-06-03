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
                <div className="paragraph paragraph-dark-theme [&>p]:mb-4 pt-28">
                  <p>Hi! 👋🏽 I&apos;m Diego, a passionate freelancer frontend developer from Colombia 🇨🇴!</p>

                  <div className="flex mt-4">
                    <div className="w-16 h-16 md:w-18 md:h-18">
                      <img
                        loading="lazy"
                        className="img-contact"
                        width={120}
                        height={120}
                        src="/assets/webp/Diego.webp"
                        alt="Profile Picture"
                      />
                    </div>
                    <div className="mx-1 mr-1 mt-2 ml-2">
                      <span className="span-contact"> Freelance programmer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:5/12 lg:w-5/2">
                <div className="heading-2 pt-16 mr-4 mt-2 mb-4 flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
                  <h2>Contact me</h2>
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
