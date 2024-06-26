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
          className="bg-purple-300 hover:bg-purple-400 theme-Button"
          aria-label="dark mode button"
        >
          <PiMoonStarsBold size={26} color="white" />
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          className="bg-amber-200 hover:bg-amber-300 theme-Button"
          aria-label="light mode button"
        >
          <PiSunHorizonBold size={26} color="black" />
        </button>
      )}
    </>
  )
}

export default ThemeButton




