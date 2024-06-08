import Tools from './Tools'
import Learning from './Learning'
import Technologies from './Technologies'
import React from 'react'

const MySkills = () => {
  return (
    <div className="w-full pt-28 mt-[-176px]">
      <div className="heading-2 flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mr-4 mt-1">
        <h2>My skills</h2>
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
