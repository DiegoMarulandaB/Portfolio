import { useTheme } from 'next-themes'
import { PiMoonStarsBold, PiSunHorizonBold } from 'react-icons/pi'
import NaviLink from '../../types/NaviLink'
import Link from 'next/link'
import React, { useState } from 'react'

const LINKS_NAV: NaviLink[] = [
  { label: 'Home', route: '/#home' },
  { label: 'Experience', route: '/#experience' },
  { label: 'Projects', route: '/#projects' },
  { label: 'About Me', route: '/#about' },
  { label: 'Contact Me', route: '/#contact' },
]

const ThemeMenu = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme === 'dark' ? 'dark' : 'light'
  const [navigation, setNavigation] = useState(false)
  return (
    <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 mr-28">
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
          className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-full cursor-pointer px-2 py-2 font-bold"
          aria-label="dark mode button"
        >
          <PiSunHorizonBold size={25} color="white" />
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          className="bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 rounded-full cursor-pointer px-2 py-2 font-bold"
          aria-label="light mode button"
        >
          <PiMoonStarsBold size={25} color="black" />
        </button>
      )}
    </div>
  )
}

export default ThemeMenu
