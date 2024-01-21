'use client'
import { FaUser, FaGraduationCap, FaBook } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'
import MySkills from '../Skills/MySkills'

const About = () => {
  return (
    <section id="about">
      <div className=" text-center justify-center mx-2 mr-2 pt-24 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
        <h1>About me</h1>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
          <div className="md:w-3/5">
            <div className="flex flex-col mx-2 mr-2">
              <div className="flex items-center">
                <FaUser className="text-blue-800 dark:text-amber-200 text-2xl mt-1 mb-4" size={34} />
                <span className="text-blue-800 dark:text-amber-200 text-2xl ml-2">About Diego</span>
              </div>
              <div className="[&>p]:mb-4">
                <p>
                  {' '}
                  My fascination for technology is combined with a deep interest for geopolitics, general culture and
                  science, which gives me a different perspective in this industry.
                </p>
              </div>
              <div className="flex items-center">
                <FaGraduationCap className="text-blue-800 dark:text-amber-200 text-2xl mt-1 mb-2" size={34} />
                <span className="text-blue-800 dark:text-amber-200 text-2xl ml-2">Studies</span>
              </div>
              <div className="[&>p]:mb-4">
                <p>
                  <span>Digital House 2023 - 2024</span>
                </p>
                <p>Frontend specialization at Digital House co-created with Mercado Libre and Globant.</p>
                <p>
                  <span>Digital House 2021 - 2023</span>
                </p>
                <p>Certified Tech Developer career at Digital House co-created with Mercado Libre and Globant.</p>
                <p>
                  <span>Alura Latam 2022 - 2022</span>
                </p>
                <p>Oracle Next Education Program Certification.</p>
                <p>
                  <span>MisionTic 2021 - 2021</span>
                </p>
                <p>
                  {' '}
                  Program of the Government of Colombia together with the MinTic, and the Pontificia Bolivariana
                  university to train programmers.
                </p>
              </div>
              <div className="flex items-center">
                <FaBook className="text-blue-800 dark:text-amber-200 text-2xl mb-3" size={34} />
                <span className="text-blue-800 dark:text-amber-200 text-2xl ml-2">Hobbies</span>
              </div>
              <div className="[&>p]:mb-4">
                <p>My hobbies are listening to rock music, video games, books on different themes.</p>
                <p> My favorite writer is Brandon Sanderson.</p>
              </div>
            </div>
          </div>
          <MySkills />
        </div>
      </div>
    </section>
  )
}

export default About
