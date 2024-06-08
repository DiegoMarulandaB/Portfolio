import { FaUser } from 'react-icons/fa'
import Studies from './Studies'
import TimeLine from './TimeLine'
import Hobbies from './Hobbies'
import MySkills from '../Skills/MySkills'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="pt-28 mt-[-106px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <div className="heading-2 text-start justify-center heading-2-underline mb-4">
          <h2>About me</h2>
        </div>
        <div className="min-h-screen flex flex-col md:flex-row items-start justify-start ml-2">
          <div className="flex flex-col md:flex-row justify-start mt-2 w-full">
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col">
                <div className="flex items-center text-start justify-start mt-2 [&>span]:ml-2">
                  <FaUser className="icons-about" size={24} />
                  <span className="span-about">Diego</span>
                </div>
                <div className="paragraph paragraph-dark-theme [&>p]:mb-4 mt-7 text-start">
                  <p>
                    My fascination for technology is combined with a deep interest for geopolitics, general culture and
                    science, which gives me a different perspective in this industry.
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
