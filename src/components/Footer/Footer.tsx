import React from 'react'
import Year from './Year'
import FrontEnd from './FrontEnd'




const Footer = () => {
  return (
    <footer id="footer" className="py-4 mt-5 md:mt-[-36px] ml-4 sm:ml-0">
      <div className="mx-auto max-w-full md:max-w-4xl sm:px-1 px-6">
        <div className="border-t border-slate-200 dark:border-slate-700 mx-auto max-w-full md:max-w-full">
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <Year />
            <FrontEnd />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

