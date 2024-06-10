// import Tools from './Tools'
// import Learning from './Learning'
// import Technologies from './Technologies'
// import React from 'react'

// const MySkills = () => {
//   return (
//     <div className="mx-auto lg:px-8 max-w-screen-lg px-4 sm:px-6 py-8 sm:py-12  mt-[-97px]">
//       <div className="span-contact-experience-about  flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mr-4 mt-1">
//         <span>My skills</span>
//       </div>
//       <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
//         <Technologies />
//         <Tools />
//         <Learning />
//       </div>
//     </div>
//   )
// }

// export default MySkills


// ! refactor 1

// import Tools from './Tools'
// import Learning from './Learning'
// import Technologies from './Technologies'
// import React from 'react'

// const MySkills: React.FC = () => {
//   return (
//     <div className="mx-auto lg:px-8 max-w-screen-lg px-4 sm:px-6 py-8 sm:py-12  mt-[-102px]">
//       <div className="span-contact-experience-about  flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mr-4 mt-1">
//         <span>My skills</span>
//       </div>
//       <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
//         <Technologies />
//         <Tools />
//         <Learning />
//       </div>
//     </div>
//   )
// }

// export default MySkills


// ! refactor 2

import Tools from './Tools'
import Learning from './Learning'
import Technologies from './Technologies'
import React from 'react'

const MySkills = () => {
  return (
    <div className="w-full pt-28 mt-[-172px]">
      <div className="span-contact-experience-about  flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mr-4 mt-1">
        <span>My skills</span>
      </div>
      <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
        <Technologies />
        <Tools />
        <Learning />
      </div>
    </div>
  )
}

export default MySkills
