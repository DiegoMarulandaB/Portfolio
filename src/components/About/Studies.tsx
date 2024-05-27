import { FaGraduationCap } from 'react-icons/fa'
import React from 'react'

const Studies = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-start mt-2 [&>span]:ml-2">
        <FaGraduationCap className="text-blue-800 dark:text-amber-200 text-2xl mt-1 mb-2" size={34} />
        <span className="text-blue-800 dark:text-amber-200 text-2xl">Studies</span>
      </div>
    </div>
  )
}

export default Studies
