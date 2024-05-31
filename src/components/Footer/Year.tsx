import React from 'react'

const Year = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className="flex flex-row space-x-2 mb-2 mt-2">
      <span className="text-slate-800 dark:text-white">&copy;&nbsp;2023-{currentYear}</span>
      <span className="text-blue-800 dark:text-amber-200">Diego Marulanda.</span>
    </div>
  )
}

export default Year
