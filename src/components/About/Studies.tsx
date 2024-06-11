import { FaGraduationCap } from 'react-icons/fa'
import React from 'react'

const Studies = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-start mt-2 [&>span]:ml-2">
        <FaGraduationCap className="icons-about" size={34} aria-label="Graduation Icon" />
        <h3 className="heading-3-user-studies-hobbies  ml-2">Studies</h3>
      </div>
    </div>
  )
}

export default Studies
