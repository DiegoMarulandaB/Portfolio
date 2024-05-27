import Tools from './Tools'
import Learning from './Learning'
import Technologies from './Technologies'
import React from 'react'

const MySkills = () => {
  return (
    <div className="md:w-1/2 mt-[-52px]">
      <div className=" flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mr-4 mt-1 font-extrabold capitalize text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-7xl">
        <h2>My Skills</h2>
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
