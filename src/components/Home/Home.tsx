'use client'

import TextAnimatedGradient from '../Animations/TextAnimatedGradient/TextAnimatedGradient'
import React from 'react'

const HomePage = () => {
  return (
    <section id="home" className="pt-18">
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="flex items-start justify-between md:items-center sm:gap-4">
          <TextAnimatedGradient />
        </div>
      </div>
    </section>
  )
}

export default HomePage
