'use client'

import { usePathname } from 'next/navigation'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import MenuNav from './MenuNav'
import React, { useState } from 'react'

const Navigation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname()
  const [navigation, setNavigation] = useState(false)

  return (
    <header className="w-full mx-auto px-6 sm:px-20 opacity-90 fixed top-0 z-50 shadow ligth-bg-theme dark-bg-theme dark-border-header">
      <div className="justify-center md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-6 md:block">
          <Link href="/#home">
            <div className="container flex items-center space-x-2">
              <h2 className="h2-header cursor-pointer mr-32">Diego Marulanda</h2>
            </div>
          </Link>
          {/* mobile menu */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setNavigation(!navigation)
              }}
              className="p-2 bg-gradient-to-r text-slate-700 hover:text-slate-950 dark:text-slate-50 dark:hover:text-gray-300 cursor-pointer px-2 py-2 text-1xl font-bold"
              aria-label="mobile menu button"
            >
              {navigation ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 cursor-pointer text-1xl text-slate-700 hover:text-slate-950 ${
              navigation ? 'block' : 'hidden'
            }`}
          >
            <MenuNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation

