import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { PiMoonStarsBold, PiSunHorizonBold } from 'react-icons/pi'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { Link } from 'react-scroll/modules'
import NaviLink from '../../types/NaviLink'

const LINKS_NAV: NaviLink[] = [
  { label: 'Home', route: 'home' },
  { label: 'About Me', route: 'about' },
  { label: 'Projects', route: 'projects' },
  { label: 'Contact Me', route: 'contact' },
]

const Navigation = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme === 'dark' ? 'dark' : 'light'
  const pathname = usePathname()
  const [navigation, setNavigation] = useState(false)

  return (
    <header className="w-full mx-auto px-6 sm:px-20 opacity-90 fixed top-0 z-50 shadow bg-slate-100 dark:bg-slate-700 dark:border-slate-500">
      <div className="justify-evenly md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-6 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-1xl font-bold transition-transform duration-150 ease-in-out hover:scale-125  hover:text-purple-950 dark:text-white dark:hover:text-green-300 cursor-pointer mx-2 mr-2">
                  Diego Marulanda
                </h2>
              </div>
            </Link>
            {/* mobile menu */}
            <div className="md:hidden">
              <button
                id="menuButton"
                title="menuButton"
                className="p-2 text-slate-800 bg-gradient-to-r  hover:text-purple-950 dark:text-white dark:hover:text-green-300 cursor-pointer px-2 py-2 text-1xl  font-bold "
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
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 cursor-pointer text-1xl text-slate-800  ${
              navigation ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {LINKS_NAV.map((item, index) => (
                <Link key={index} to={item.route}>
                  <div
                    className="block lg:inline-block text-slate-800 hover:text-purple-950 dark:text-white dark:hover:text-green-300"
                    onClick={() => setNavigation(!navigation)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="bg-gradient-to-r from-purple-800 via-purple-900 to-purple-800  rounded-md cursor-pointer px-2 py-2 font-bold"
                  aria-label="light mode button"
                >
                  <PiMoonStarsBold size={25} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500  rounded-md cursor-pointer px-2 py-2 font-bold"
                  aria-label="dark mode button"
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
