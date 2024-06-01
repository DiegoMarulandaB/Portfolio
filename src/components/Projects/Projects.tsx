'use client'

import React from 'react'
import MenuButton from './MenuButton'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="pt-28">
      <div className="heading-2 mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className=" text-start justify-start ml-2 mx-1 mr-1">
          <h2>Projects</h2>
        </div>
        <MenuButton />
      </div>
    </section>
  )
}

export default Projects
