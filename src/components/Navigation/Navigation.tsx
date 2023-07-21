import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
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
    <header className="w-full mx-auto px-4 sm:px-30 fixed top-0 z-50 shadow bg-white dark:bg-slate-800 dark:border-b dark:border-sky-500 ">
      <div className="justify-between  md:items-center md:flex  ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block  ">
            <Link href="/">
              <div className="container flex items-center space-x-2">
                <h2 className="text-1xl font-bold transition-transform cursor-pointer  sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl">
                  Diego Marulanda
                </h2>
              </div>
            </Link>
            {/* mobile menu */}
            <div className="md:hidden">
              <button
                className="p-2 text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br rounded-r-lg cursor-pointer px-2 py-2 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl font-bold"
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
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 decoration-sky-600 transition-transform cursor-pointer sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl ${
              navigation ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              {LINKS_NAV.map((item, index) => (
                <Link key={index} href={item.route}>
                  <div
                    className="block lg:inline-block text-neutral-800 hover:text-sky-500 dark:text-neutral-300 dark:hover:text-sky-400 hover:-translate-y-1 transition-transform    "
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
                  className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br rounded-r-lg cursor-pointer px-2 py-2 font-bold hover:-translate-y-1 transition-transform   "
                >
                  <RiSunLine size={25} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br rounded-r-lg cursor-pointer px-2 py-2 font-bold hover:-translate-y-1 transition-transform"
                >
                  <RiMoonFill size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
