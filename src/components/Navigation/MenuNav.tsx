import NaviLink from '../../types/NaviLink.types.'
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeButton from './ThemeButton'

const LINKS_NAV: NaviLink[] = [
  { label: 'Home', route: '/#home' },
  { label: 'Experience', route: '/#experience' },
  { label: 'Projects', route: '/#projects' },
  { label: 'About me', route: '/#about' },
  { label: 'Contact me', route: '/#contact' },
]

const MenuNav = () => {
  const [navigation, setNavigation] = useState(false)
  return (
    <div className="flex flex-col md:flex-row items-start justify-center space-y-4 md:space-y-0 md:space-x-6 md:mr-28">
      {LINKS_NAV.map((item, index) => (
        <Link key={index} href={item.route} rel="dns-prefetch">
          <div className="menuNav menu-underline block lg:inline-block" onClick={() => setNavigation(!navigation)}>
            {item.label}
          </div>
        </Link>
      ))}
      <ThemeButton />
    </div>
  )
}

export default MenuNav
