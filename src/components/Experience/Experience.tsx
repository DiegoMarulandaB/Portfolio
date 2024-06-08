'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Experience = () => {
  const { resolvedTheme } = useTheme()
  const [theme, setLocalTheme] = useState(resolvedTheme)
  const [svgLoaded, setSvgLoaded] = useState(false)

  useEffect(() => {
    setLocalTheme(resolvedTheme)
  }, [resolvedTheme])

  const svgDarkSrc = '/assets/svg/dev.svg'
  const svgLightSrc = '/assets/svg/devBlue.svg'

  const preloadSVGs = () => {
    const darkImg = new Image()
    darkImg.src = svgDarkSrc
    darkImg.onload = () => setSvgLoaded(true)

    const lightImg = new Image()
    lightImg.src = svgLightSrc
  }

  useEffect(() => {
    preloadSVGs()
  }, [])

  const svgSrc = theme === 'dark' ? svgDarkSrc : svgLightSrc

  return (
    <section id="experience" className="pt-28 mt-[-92px]">
      <div className="heading-2 mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-8">
          <h2 className="tracking-tight heading-2-underline sm:text-4xl ml-2">Experience</h2>
          {/* <div className="mt-2 w-24"></div> */}
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-7/12">
            <div className="text-lg">
              <p className="span-experience mb-4 ml-2 mr-1 ">
                <strong>I will acquire my experience through various projects.</strong>
              </p>
              <p className="paragraph paragraph-dark-theme ml-2 mr-1 mb-4">
                Academically and personally, my focus is on innovation and constant growth.
              </p>
            </div>
          </div>
          <div className="lg:w-5/12 flex justify-center lg:justify-start">
            {svgLoaded && (
              <img
                className=" hidden md:block mt-[-78px] aspect-auto object-cover"
                src={svgSrc}
                alt="image developer"
                loading="lazy"
                width="220"
                height="220"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

