import NaviLink from '../../types/NaviLink'
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeButton from './ThemeButton'

const LINKS_NAV: NaviLink[] = [
  { label: 'Home', route: '/#home' },
  { label: 'Experience', route: '/#experience' },
  { label: 'Projects', route: '/#projects' },
  { label: 'About Me', route: '/#about' },
  { label: 'Contact Me', route: '/#contact' },
]

const Menu = () => {
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
      <ThemeButton />
    </div>
  )
}

export default Menu
