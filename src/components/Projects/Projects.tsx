'use client'

import React from 'react'
import MenuButtonAllProjects from './MenuButtonAllProjects'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="pt-28 mt-[-73px]">
      {/* <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
        <div className="text-start justify-start">
          <span className="span-contact-experience-about span-underline ml-2">Projects</span>
        </div>
        <MenuButtonAllProjects />
      </div>
    </section>
  )
}

export default Projects
