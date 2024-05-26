import { IoMdMenu, IoMdClose } from 'react-icons/io'
import React, { useState } from 'react'

const MobileButton = () => {
  const [navigation, setNavigation] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setNavigation(!navigation)}
        className="p-2 bg-gradient-to-r text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 cursor-pointer px-2 py-2 text-1xl font-bold"
        aria-label="mobile menu button"
      >
        {navigation ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </button>
    </div>
  )
}

export default MobileButton
