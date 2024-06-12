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
    <div className=" items-start justify-center md:flex space-y-2 md:space-y-0 md:space-x-4 mr-28 flex flex-col md:flex-row">
      {LINKS_NAV.map((item, index) => (
        <Link key={index} href={item.route} rel="dns-prefetch">
          <div className="menuNav menu-underline block lg:inline-block mt-2" onClick={() => setNavigation(!navigation)}>
            {item.label}
          </div>
        </Link>
      ))}
      <div className="mb-4 sm:mb-0 pt-3 sm:pt-0">
        <ThemeButton />
      </div>
    </div>
  )
}

export default MenuNav







