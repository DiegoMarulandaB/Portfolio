// import { FaUser } from 'react-icons/fa'
// import Studies from './Studies'
// import TimeLine from './TimeLine'
// import Hobbies from './Hobbies'
// import MySkills from '../Skills/MySkills'
// import React from 'react'

// const About = () => {
//   return (
//     <section id="about" className="pt-28 mt-[-158px]">
//       <div className="mx-auto lg:px-8 max-w-screen-lg px-4 sm:px-6 py-8 sm:py-12">
//         <div className="span-contact-experience-about span-underline text-start justify-center mb-4 ml-2">
//           <span>About me</span>
//         </div>
//         <div className="min-h-screen flex flex-col md:flex-row items-start justify-start ml-2">
//           <div className="flex flex-col md:flex-row justify-start mt-2 w-full">
//             <div className="md:w-1/2 w-full">
//               <div className="flex flex-col">
//                 <div className="flex items-center text-start justify-start mt-2 [&>span]:ml-2">
//                   <FaUser className="icons-about" size={24} />
//                   <h3 className="heading-3-user-studies-hobbies ml-2">Diego</h3>
//                 </div>
//                 <div className="paragraph paragraph-dark-theme [&>p]:mb-4 mt-7 text-start">
//                   <p>
//                     My fascination for technology is combined with a deep interest for geopolitics, general culture and
//                     science, which gives me a different perspective in this industry.
//                   </p>
//                 </div>
//                 <Studies />
//                 <TimeLine />
//                 <Hobbies />
//               </div>
//             </div>
//             <div className="md:w-1/2 w-full mt-4 md:mt-0">
//               <MySkills />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


// ! refactor

// import { FaUser } from 'react-icons/fa'
// import Studies from './Studies'
// import TimeLine from './TimeLine'
// import Hobbies from './Hobbies'
// import MySkills from '../Skills/MySkills'
// import React from 'react'

// const About: React.FC = () => {
//   return (
//     <section id="about" className="pt-28 -mt-[158px]">
//       <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 xl:max-w-screen-xl">
//         <div className="text-start justify-center mb-4 ml-2">
//           <span className="span-contact-experience-about span-underline">About me</span>
//         </div>
//         <div className="flex flex-col md:flex-row items-start justify-start min-h-screen ml-2">
//           <div className="flex flex-col md:flex-row justify-start w-full">
//             <div className="md:w-1/2 w-full">
//               <div className="flex flex-col">
//                 <div className="flex items-center justify-start mt-2">
//                   <FaUser className="icons-about" size={24} aria-label="User Icon" />
//                   <h3 className="heading-3-user-studies-hobbies ml-2">Diego</h3>
//                 </div>
//                 <div className="paragraph paragraph-dark-theme mt-7 text-start">
//                   <p className="mb-4">
//                     My fascination for technology is combined with a deep interest for geopolitics, general culture and
//                     science, which gives me a different perspective in this industry.
//                   </p>
//                 </div>
//                 <Studies />
//                 <TimeLine />
//                 <Hobbies />
//               </div>
//             </div>
//             <div className="md:w-1/2 xl:w-3/3 w-full mt-4 md:mt-0">
//               <MySkills />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About

// ! refactor 2

// import { FaUser } from 'react-icons/fa'
// import Studies from './Studies'
// import TimeLine from './TimeLine'
// import Hobbies from './Hobbies'
// import MySkills from '../Skills/MySkills'
// import React from 'react'

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-8 sm:py-10 mt-[-126px]">
//       <div className="container mx-auto lg:px-8 max-w-screen-lg px-4 sm:px-6 py-8 sm:py-12 ml-5">
//         <div className="text-start justify-center mb-4">
//           <span className="span-contact-experience-about span-underline">About me</span>
//         </div>
//         <div className="flex flex-col md:flex-row items-start justify-start">
//           <div className="md:w-2/2 w-full">
//             <div className="flex flex-col">
//               <div className="flex items-center justify-start mt-2">
//                 <FaUser className="icons-about" size={24} aria-label="User Icon" />
//                 <h3 className="heading-3-user-studies-hobbies ml-2">Diego</h3>
//               </div>
//               <div className="paragraph paragraph-dark-theme mt-7 text-start">
//                 <p className="mb-4">
//                   My fascination for technology is combined with a deep interest for geopolitics, general culture and
//                   science, which gives me a different perspective in this industry.
//                 </p>
//               </div>
//               <Studies />
//               <TimeLine />
//               <Hobbies />
//             </div>
//           </div>
//           <div className="md:w-1/2 w-full mt-4 md:mt-0">
//             <MySkills />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


// ! refactor 3

import { FaUser } from 'react-icons/fa'
import Studies from './Studies'
import TimeLine from './TimeLine'
import Hobbies from './Hobbies'
import MySkills from '../Skills/MySkills'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="pt-28 mt-[-144px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg ml-3">
        <div className="span-contact-experience-about span-underline text-start justify-center mb-4 ml-2">
          <span>About me</span>
        </div>
        <div className="min-h-screen flex flex-col md:flex-row items-start justify-start ml-2">
          <div className="flex flex-col md:flex-row justify-start mt-2 w-full">
            <div className="md:w-2/2 w-full">
              <div className="flex flex-col">
                <div className="flex items-center text-start justify-start mt-2 [&>span]:ml-2">
                  <FaUser className="icons-about" size={24} />
                  <h3 className="heading-3-user-studies-hobbies ml-2">Diego</h3>
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
