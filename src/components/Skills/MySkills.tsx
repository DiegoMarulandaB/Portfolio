import Tools from './Tools'
import Learning from './Learning'
import Technologies from './Technologies'
import React from 'react'

const MySkills = () => {
  return (
    <div className="w-full pt-28 mt-[-176px]">
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
