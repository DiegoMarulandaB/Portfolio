import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeButton from './ThemeButton'
import MobileButton from './MobileButton'
import React from 'react'

const Navigation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname()

  return (
    <header className="w-full mx-auto px-6 sm:px-20 opacity-90 fixed top-0 z-50 shadow bg-slate-100 dark:bg-slate-700 dark:border-slate-500">
      <div className="justify-center md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-6 md:block">
          <Link href="/#home">
            <div className="container flex items-center space-x-2">
              <h2 className="text-1xl font-bold text-slate-700 hover:text-slate-950 dark:text-white dark:hover:text-blue-100 cursor-pointer mr-32">
                Diego Marulanda
              </h2>
            </div>
          </Link>
          <MobileButton />
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>
    </header>
  )
}

export default Navigation
