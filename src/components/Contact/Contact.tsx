'use client'

import ContactButton from './ContactButton'
import TypeIt from 'typeit-react'
import React from 'react'


const Contact = () => {
  return (
    <div id="contact" className="pt-28 mt-[-24px] py-1">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="flex items-start md:items-start md:justify-start justify-between text-start">
          <div className="flex flex-col ml-2 mx-1 mr-1">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-1">
              <div className="w-full md:w-6/12">
                <div className="paragraph [&>p]:mb-4">
                  <div className="flex flex-col sm:flex-row mt-4">
                    <div className="flex-shrink-0 w-16 h-16 md:w-18 md:h-18 mb-6 sm:mb-0">
                      <img
                        loading="lazy"
                        className="img-contact w-full h-full object-cover"
                        width={776}
                        height={724}
                        src="/assets/webp/Diego.webp"
                        alt="Profile Picture"
                      />
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4 mb-4 sm:mb-0">
                      <h1 className="heading-1">
                        Hi! 👋🏽 {' '}
                        <strong className="description-user">
                          <TypeIt
                            options={{
                              strings: ['I&apos;m Diego Marulanda.'],
                              speed: 40,
                              waitUntilVisible: true,
                            }}
                          />
                        </strong>
                        <br />
                        <span className="block sm:hidden"></span>
                        <br />A passionate frontend developer {''}
                        <span className="block sm:hidden"></span>from Colombia! 🇨🇴
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
