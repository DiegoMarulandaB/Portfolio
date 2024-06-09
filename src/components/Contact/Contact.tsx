import ContactButton from './ContactButton'
import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="pt-28 mt-[-72px]">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="flex items-start md:items-start md:justify-start justify-between text-start">
          <div className="flex flex-col ml-2 mx-1 mr-1">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-1">
              <div className="w-full md:w-6/12">
                <div className="paragraph [&>p]:mb-4">
                  <div className="flex flex-col sm:flex-row mt-4">
                    <div className="flex-shrink-0 w-16 h-16 md:w-18 md:h-18 mb-4 sm:mb-0">
                      <img
                        loading="lazy"
                        className="img-contact w-full h-full object-cover"
                        width={776}
                        height={724}
                        src="/assets/webp/Diego.webp"
                        alt="Profile Picture"
                      />
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <h1 className="heading-1">
                        Hi! 👋🏽 <strong className="description-user heading-1">I&apos;m Diego</strong>, a passionate
                        freelancer frontend developer from Colombia! 🇨🇴
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:5/12 lg:w-5/2">
                <div className="span-contact-experience-about span-underline pt-4 flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
                  <span className="mb-4 mt-[-28px]">Contact me</span>
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
