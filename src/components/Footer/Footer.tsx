import React from 'react'
import Year from './Year'
import FrontEnd from './FrontEnd'

const Footer = () => {
  return (
    <footer id="footer" className="py-4 mt-5 md:mt-[-38px]">
      <div className="mx-auto max-w-full md:max-w-full sm:px-1 px-6">
        <div className="border-t border-slate-800 dark:border-slate-50">
          <div className="flex flex-col  md:flex-row justify-start md:items-center md:text-center md:justify-center space-y-2 md:space-y-0 md:space-x-4">
            <Year />
            <FrontEnd />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


