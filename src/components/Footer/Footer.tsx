import Year from './Year'
import AllRightsReserved from './AllRightsReserved'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="mx-auto max-w-full md:max-w-full sm:px-1">
      <div className="border-t border-slate-800 dark:border-slate-50">
        <div className="mx-auto flex flex-col md:flex-row justify-start md:items-center md:text-center md:justify-center space-x-2">
          <Year />
          <AllRightsReserved />
        </div>
      </div>
    </footer>
  )
}

export default Footer
