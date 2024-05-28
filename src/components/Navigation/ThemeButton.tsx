import { useTheme } from 'next-themes'
import { PiMoonStarsBold, PiSunHorizonBold } from 'react-icons/pi'
import React from 'react'

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme === 'dark' ? 'dark' : 'light'
  return (
    <>
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
    </>
  )
}

export default ThemeButton
