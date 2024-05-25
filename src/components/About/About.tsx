import React from 'react'
import { FaUser, FaGraduationCap, FaBook } from 'react-icons/fa'
import MySkills from '../Skills/MySkills'

const About = () => {
  return (
    <section id="about" className="pt-28">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="text-start justify-center ml-2 mx-1 mr-1 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
          <h2>About me</h2>
        </div>
        <div className="min-h-screen flex items-start justify-start ml-2">
          <div className="flex flex-col md:flex-row justify-start mt-2">
            <div className="md:w-3/5">
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
                <div className="flex items-center text-center justify-start mt-2 [&>span]:ml-2">
                  <FaGraduationCap className="text-blue-800 dark:text-amber-200 text-2xl mt-1 mb-2" size={34} />
                  <span className="text-blue-800 dark:text-amber-200 text-2xl">Studies</span>
                </div>
                <div className="mr-1 [&>p]:mb-4 [&>p]:mt-8 [&>span]:mb-4 text-start">
                  <span className="block mt-6">Digital House 2023 - 2024</span>
                  <p>Frontend specialization at Digital House co-created with Mercado Libre and Globant.</p>
                  <span className="block mt-8">Digital House 2021 - 2023</span>
                  <p>Certified Tech Developer career at Digital House co-created with Mercado Libre and Globant.</p>
                  <span className="block mt-8">Alura Latam 2022 - 2022</span>
                  <span className="block mt-8">Oracle Next Education Program Certification.</span>
                  <span className="block mt-8">MisionTic 2021 - 2021</span>
                  <p>
                    {' '}
                    Program of the Government of Colombia together with the MinTic, and the Pontificia Bolivariana
                    university to train programmers.
                  </p>
                </div>
                <div className="flex items-center text-center justify-start mt-3">
                  <FaBook className="text-blue-800 dark:text-amber-200 text-2xl mb-3 mt-1" size={24} />
                  <span className="text-blue-800 dark:text-amber-200 text-2xl ml-2">Hobbies</span>
                </div>
                <div className="mr-1 [&>p]:mt-7 text-start">
                  <p>
                    I am a rock fan, I enjoy immersing myself in the exciting worlds of video games and explore a wide
                    variety of topics through books or articles.
                  </p>
                </div>
                <div className="mr-1 [&>p]:mb-6 [&>p]:mt-8">
                  <p> My favorite writer:</p>
                  <span className="block mt-8 mb-20">Brandon Sanderson.</span>
                </div>
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
