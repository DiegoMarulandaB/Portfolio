import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { PiMoonStarsBold, PiSunHorizonBold } from 'react-icons/pi'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import NaviLink from '../../types/NaviLink'

const LINKS_NAV: NaviLink[] = [
  { label: 'Home', route: '/#home' },
  { label: 'Experience', route: '/#experience' },
  { label: 'Projects', route: '/#projects' },
  { label: 'About Me', route: '/#about' },
  { label: 'Contact Me', route: '/#contact' },
]

const Navigation = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme === 'dark' ? 'dark' : 'light'
  const pathname = usePathname()
  const [navigation, setNavigation] = useState(false)

  return (
    <header className="w-full mx-auto px-6 sm:px-20 opacity-90 fixed top-0 z-50 shadow bg-slate-100 dark:bg-slate-700 dark:border-slate-500">
      <div className="justify-evenly md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-6 md:block">
          <Link href="/#home">
            <div className="container flex items-center space-x-2">
              <h2 className="text-1xl font-bold text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 cursor-pointer mx-2 mr-2">
                Diego Marulanda
              </h2>
            </div>
          </Link>
          {/* mobile menu */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setNavigation(!navigation)
              }}
              className="p-2 bg-gradient-to-r text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 cursor-pointer px-2 py-2 text-1xl  font-bold "
              aria-label="mobile menu button"
            >
              {navigation ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
        <div>
          <div
            // menu
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 cursor-pointer text-1xl text-slate-700 hover:text-slate-950  ${
              navigation ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {LINKS_NAV.map((item, index) => (
                <Link key={index} href={item.route} rel="dns-prefetch">
                  <div
                    className="block lg:inline-block text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 "
                    onClick={() => setNavigation(!navigation)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500  rounded-full cursor-pointer px-2 py-2 font-bold"
                  aria-label="dark mode button"
                >
                  <PiMoonStarsBold size={25} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500  rounded-full cursor-pointer px-2 py-2 font-bold"
                  aria-label="light mode button"
                >
                  <PiSunHorizonBold size={25} color="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
