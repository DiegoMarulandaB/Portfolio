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
    <section id="experience" className="pt-28 mt-[-28px] ">
      <div className="heading-2 mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="ml-2 mx-2 mr-2 text-start mb-4 span-contact-experience-about span-underline">
          <span>Experience</span>
        </div>
        <div className="flex flex-col ml-2 mt-2 mx-1 mr-1">
          <div className="space-y-6 md:flex md:gap-6 lg:items-start lg:gap-1">
            <div className="md:w-7/12">
              <div className="mb-4 mt-2 text-lg text-start justify-start">
                <p>
                  <span className="span-experience-1 mr-2">
                    <strong>I will acquire my experience through various projects.</strong>
                  </span>
                </p>
                <p className="paragraph block mt-2">
                  Academically and personally, my focus is on innovation and constant growth.
                </p>
              </div>
            </div>
            <div className="md:5/12 lg:w-5/2">
              <div className="flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center">
                <div className="flex flex-col items-start text-start justify-end md:items-center md:text-center md:justify-center mr-12">
                  {svgLoaded && (
                    <img
                      className="hidden md:block ml-auto mr-28 mt-[-78px] aspect-auto object-cover"
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
