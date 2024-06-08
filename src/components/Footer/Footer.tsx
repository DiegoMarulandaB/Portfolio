import React from 'react'
import Year from './Year'
import AllRightsReserved from './AllRightsReserved'

const Footer = () => {
  return (
    <footer id="footer" className="py-4 mt-11 md:mt-[-6px]">
      <div className="mx-auto max-w-full md:max-w-full sm:px-1 px-6">
        <div className="border-t border-slate-800 dark:border-slate-50">
          <div className="flex flex-col  md:flex-row justify-start md:items-center md:text-center md:justify-center space-y-2 md:space-y-0 md:space-x-4">
            <Year />
            <AllRightsReserved />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


