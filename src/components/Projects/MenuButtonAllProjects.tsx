import ProjectsCardsDescription from './ProjectsCardsDescription'
import React, { useState } from 'react'

const MenuButtonAllProjects: React.FC = () => {
  const [showCard, setShowCard] = useState<string>('all')

  const handleProject = (category: string) => {
    setShowCard(category)
  }
  return (
    <div className="min-h-screen flex">
      <div className="items-start justify-start">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full flex flex-wrap text-center justify-start -mx-2">
            <ul className="flex flex-wrap justify-start mb-2 space-x-1 mt-4">
              <li className="mb-1 ml-6">
                <button
                  onClick={() => handleProject('all')}
                  className={`inline-block py-2 px-2 md:py-2 lg:px-1 buttons-projects-hand buttons-showCard-projects-allProjects  ${
                    showCard === 'all'
                      ? 'activeClasses text-start cursor-pointer mx-2 mr-2 mt-2 px-2.5 py-2.5 me-1 mb-4 '
                      : 'inactiveClasses '
                  }`}
                >
                  All projects
                </button>
              </li>

              <li className="mb-1 pl-5">
                <button
                  onClick={() => handleProject('academic projects')}
                  className={`inline-block py-2 px-2 md:py-2 lg:px-1 buttons-projects-hand ${
                    showCard === 'academic projects'
                      ? 'activeClasses text-start cursor-pointer mx-2 mr-2 mt-2 px-2.5 py-2.5 me-1 mb-4 '
                      : 'inactiveClasses'
                  }`}
                >
                  Academic projects
                </button>
              </li>
              <li className="mb-1 pl-5">
                <button
                  onClick={() => handleProject('personal projects')}
                  className={`inline-block py-2 px-2 md:py-2 lg:px-1 buttons-projects-hand ${
                    showCard === 'personal projects'
                      ? 'activeClasses text-start cursor-pointer mx-2 mr-2 mt-2 px-2.5 py-2.5 me-1 mb-4 '
                      : 'inactiveClasses'
                  }`}
                >
                  Personal projects
                </button>
              </li>
            </ul>
          </div>
        </div>
        <ProjectsCardsDescription showCard={showCard} />
      </div>
    </div>
  )
}

export default MenuButtonAllProjects
