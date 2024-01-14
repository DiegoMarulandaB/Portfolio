'use client'

import AnimatedText from '../Animations/AnimatedText/AnimatedText'
import MySkills from '../Skills/MySkills'

const About = () => {
  return (
    <section id="about">
      <h1>
        <AnimatedText text="About me" className=" text-center justify-center mx-2 mr-2 mt-24" />
      </h1>

      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
          <div className="md:w-3/5">
            <div className="flex flex-col items-center justify-center">
              <span className="mx-2 mr-2 mt-4 text-2xl font-bold">About Diego</span>
              <div className="text-center text-1xl mx-2 mr-2 mt-4 mb-4">
                <p className="mb-4 mt-4">
                  {' '}
                  My fascination for technology is combined with a deep interest for geopolitics, general culture and
                  science, which gives me a different perspective in this industry.
                </p>
              </div>
              <span className="mx-2 mr-2 mt-4 text-blue-800 dark:text-amber-200 text-2xl">Experience</span>
              <div className="text-center text-1xl mx-2 mr-2 mt-4 mb-4">
                <p className="mb-4 mt-4">Of course i have experience in some areas.</p>
                <p className="mb-4 mt-4">
                  But at the moment i have not had the opportunity to enter the technology sector. Therefore, i will get
                  my experience through the different projects that i carry out.
                </p>
              </div>
              <span className="mx-2 mr-2 mt-4 text-blue-800 dark:text-amber-200 text-2xl">Studies</span>
              <div className="text-center text-1xl mx-2 mr-2 mt-4 mb-4">
                <p className="mb-4 mt-4">
                  <span>Digital House 2023 - 2024</span>
                </p>
                <p>Frontend specialization at Digital House co-created with Mercado Libre and Globant.</p>
                <p className="mb-4 mt-4">
                  <span>Digital House 2021 - 2023</span>
                </p>
                <p>Certified Tech Developer career at Digital House co-created with Mercado Libre and Globant.</p>
                <p className="mb-4 mt-4">
                  <span>Alura Latam 2022 - 2022</span>
                </p>
                <p>Oracle Next Education Program Certification.</p>
                <p className="mb-4 mt-4">
                  <span>MisionTic 2021 - 2021</span>
                </p>
                <p>
                  {' '}
                  Program of the Government of Colombia together with the MinTic, and the Pontificia Bolivariana
                  university to train programmers.
                </p>
              </div>
              <span className="mx-2 mr-2 mt-4 text-blue-800 dark:text-amber-200 text-2xl">Hobbies</span>
              <div className="text-center text-1xl mx-2 mr-2 mt-4 mb-4">
                <p className="mb-4 mt-4">
                  My hobbies are listening to rock music, video games, books on different themes.
                </p>
                <p className="mb-4 mt-4"> My favorite writer is Brandon Sanderson.</p>
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
