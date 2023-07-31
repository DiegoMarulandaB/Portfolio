import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { PiMoonStarsBold, PiSunHorizonBold } from 'react-icons/pi'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Link from 'next/link'

interface NaviLink {
  label: string
  route: string
}

const LINKS_NAV: NaviLink[] = [
  { label: 'Home', route: '/' },
  { label: 'About me', route: '/about' },
  { label: 'My portfolio', route: '/projects' },
  { label: 'Contact me', route: '/contact' },
]

export default function Navigation() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navigation, setNavigation] = useState(false)

  // w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow
  return (
    <header className="w-full mx-auto px-4 sm:px-30 fixed top-0 z-50 shadow bg-slate-100 dark:bg-slate-700  ">
      <div className="justify-evenly  md:items-center md:flex  ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block ">
            <Link href="/" rel="dns-prefetch">
              <div className="container flex items-center space-x-2">
                <h2 className="text-1xl font-bold transition-transform cursor-pointer mx-2 mr-2">Diego Marulanda</h2>
              </div>
            </Link>
            {/* mobile menu */}
            <div className="md:hidden">
              <button
                className="p-2 text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 cursor-pointer px-2 py-2 text-1xl  font-bold "
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
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 decoration-cyan-600 transition-transform cursor-pointer text-1xl mx-2 mr-2  text-black  ${
              navigation ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              {LINKS_NAV.map((item, index) => (
                <Link key={index} href={item.route} rel="dns-prefetch">
                  <div
                    className="block lg:inline-block text-neutral-800 hover:text-cyan-500 dark:text-neutral-300 dark:hover:text-cyan-400 transition-transform "
                    onClick={() => setNavigation(!navigation)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              {/* luna */}
              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md  cursor-pointer px-2 py-2 font-bold  transition-transform   "
                >
                  <PiSunHorizonBold size={25} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700  rounded-md cursor-pointer px-2 py-2 font-bold  transition-transform"
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
