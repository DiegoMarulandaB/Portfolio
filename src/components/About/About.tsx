import { FaUser } from 'react-icons/fa'
import MySkills from '../Skills/MySkills'
import Studies from './Studies'
import TimeLine from './TimeLine'
import Hobbies from './Hobbies'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="pt-28">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="text-start justify-center ml-2 mx-1 mr-1 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
          <h2>About me</h2>
        </div>
        <div className="min-h-screen flex items-start justify-start ml-2">
          <div className="flex flex-col md:flex-row justify-start mt-2">
            <div className="md:w-3/6">
              <div className="flex flex-col">
                <div className="flex items-center text-start justify-start mt-2 [&>span]:ml-2">
                  <FaUser className="text-blue-800 dark:text-amber-200 text-2xl mt-1 mb-2" size={24} />
                  <span className="text-blue-800 dark:text-amber-200 text-2xl">Diego</span>
                </div>
                <div className="[&>p]:mb-4 mr-1 mt-7 text-start">
                  <p>
                    {' '}
                    My fascination for technology is combined with a deep interest for geopolitics, general culture and
                    science, which gives me a different perspective in this industry.
                  </p>
                </div>
                <Studies />
                <TimeLine />
                <Hobbies />
              </div>
            </div>
            <MySkills />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
