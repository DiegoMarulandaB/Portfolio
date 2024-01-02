import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { PiMoonStarsBold, PiSunHorizonBold } from 'react-icons/pi'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { Link } from 'react-scroll/modules'

interface NaviLink {
  label: string
  route: string
}

const LINKS_NAV: NaviLink[] = [
  { label: 'Home', route: 'home' },
  { label: 'About Me', route: 'about' },
  { label: 'Projects', route: 'projects' },
  { label: 'Contact Me', route: 'contact' },
]

export default function Navigation() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const pathname = usePathname()
  const [navigation, setNavigation] = useState(false)

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-slate-100 dark:bg-slate-700  dark:border-slate-600 ">
      <div className="justify-evenly  md:items-center md:flex  ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block ">
            <Link to="home" rel="noopener noreferrer dns-prefetch">
              <div className="container flex items-center space-x-2">
                <h2 className="text-1xl font-bold transition-transform cursor-pointer mx-2 mr-2">Diego Marulanda</h2>
              </div>
            </Link>
            {/* mobile menu */}
            <div className="md:hidden">
              <button
                id="menuButton"
                title="menuButton"
                className="p-2 text-slate-800 bg-gradient-to-r  hover:text-purple-800 dark:text-slate-100 dark:hover:text-amber-300 cursor-pointer px-2 py-2 text-1xl  font-bold "
                onClick={() => setNavigation(!navigation)}
              >
                {navigation ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            // menu
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 decoration-purple-800 transition-transform cursor-pointer text-1xl mx-2 mr-2  text-slate-800  ${
              navigation ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              {LINKS_NAV.map((item, index) => (
                <Link key={index} to={item.route} rel="dns-prefetch">
                  <div
                    className="block lg:inline-block text-slate-800 hover:text-purple-800 dark:text-slate-50 dark:hover:text-amber-300 transition-transform "
                    onClick={() => setNavigation(!navigation)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="text-slate-50 bg-gradient-to-r from-purple-800 via-purple-800 to-purple-800  rounded-md  cursor-pointer px-2 py-2 font-bold  transition-transform   "
                >
                  <PiSunHorizonBold size={25} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="text-slate-50 bg-gradient-to-r from-amber-300 via-amber-300 to-amber-300  rounded-md cursor-pointer px-2 py-2 font-bold  transition-transform"
                >
                  <PiMoonStarsBold size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
