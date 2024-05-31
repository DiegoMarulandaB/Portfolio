import React from 'react'
import Year from './Year'
import AllRightsReserved from './AllRightsReserved'
const Footer = () => {

  return (
    <footer id="footer" className="mx-auto max-w-full md:max-w-full sm:px-1">
      <div className="border-t border-slate-800 dark:border-slate-50 mt-8">
        <div className="mx-auto flex flex-col md:flex-row justify-start md:items-center md:text-center md:justify-center space-x-2 ml-6 mr-6">
          <Year />
          <AllRightsReserved />
        </div>
      </div>
    </footer>
  )
}

export default Footer

// import React from 'react'
// import Year from './Year'
// import AllRightsReserved from './AllRightsReserved'

// const Footer = () => {
//   return (
//     <footer id="footer" className="mx-auto max-w-full sm:px-4">
//       <div className="border-t border-slate-800 dark:border-slate-50 sm:border-t-0">
//         <div className="mx-auto flex flex-col md:flex-row justify-start md:items-center md:text-center md:justify-center space-x-2 ml-6 mr-6">
//           <Year />
//           <AllRightsReserved />
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
