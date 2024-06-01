import { FaGraduationCap } from 'react-icons/fa'
import React from 'react'

const Studies = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-start mt-2 [&>span]:ml-2">
        <FaGraduationCap className="icons-about" size={34} />
        <span className="span-about">Studies</span>
      </div>
    </div>
  )
}

export default Studies
