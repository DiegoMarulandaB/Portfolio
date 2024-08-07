import { FaUser } from 'react-icons/fa'
import Studies from './Studies'
import TimeLine from './TimeLine'
import Hobbies from './Hobbies'
import MySkills from '../Skills/MySkills'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="pt-28 mt-[-48px] mr-1 sm:mr-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg mt-[-1px] sm:mt-0">
        <div className="span-contact-experience-about span-underline text-start justify-center mb-4 ml-2">
          <span>About me</span>
        </div>
        <div className="min-h-screen flex flex-col md:flex-row items-start justify-start ml-2">
          <div className="flex flex-col md:flex-row justify-start mt-2 w-full">
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col">
                <div className="flex items-center text-start justify-start mt-2 [&>span]:ml-2">
                  <FaUser className="icons-about" size={24} aria-label="User Icon" />
                  <h3 className="heading-3-user-studies-hobbies ml-2">Diego</h3>
                </div>
                <div className="paragraph paragraph-dark-theme [&>p]:mb-4 mt-7 text-start">
                  <p>
                    My ability to understand technological trends allows me to offer ideas and solutions to different
                    problems.{' '}
                  </p>
                  <p>
                    I am committed to growth and evolution, and I also have an interest in cybersecurity and general
                    culture.
                  </p>
                </div>
                <Studies />
                <TimeLine />
                <Hobbies />
              </div>
            </div>
            <div className="md:w-1/2 w-full mt-4 md:mt-0">
              <MySkills />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
