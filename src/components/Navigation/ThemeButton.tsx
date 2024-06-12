import { useTheme } from 'next-themes'
import { PiMoonStarsBold, PiSunHorizonBold } from 'react-icons/pi'
import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <>
      {currentTheme === 'dark' ? (
        <button
          onClick={() => setTheme('light')}
          className="bg-purple-300 hover:bg-purple-400 rounded-lg cursor-pointer px-2 py-2 font-bold sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-2 lg:py-2.5 xl:px-2.5 xl:py-2"
          aria-label="dark mode button"
        >
          <PiMoonStarsBold size={26} color="white" />
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          className="bg-amber-200 hover:bg-amber-300 rounded-lg cursor-pointer px-2 py-2 font-bold sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-2 lg:py-2 xl:px-2 xl:py-2"
          aria-label="light mode button"
        >
          <PiSunHorizonBold size={26} color="black" />
        </button>
      )}
    </>
  )
}

export default ThemeButton




