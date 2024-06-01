import React, { useState } from 'react'
import ProjectsCardsDescription from './ProjectsCardsDescription'

const MenuButton: React.FC = () => {
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
                  className={`inline-block py-2 px-2 md:py-2 lg:px-1 buttons-projects-hand ${
                    showCard === 'all'
                      ? 'activeClasses text-start cursor-pointer mx-2 mr-2 mt-2 rounded-lg px-2.5 py-2.5 me-1 mb-4 buttons-showCard-projects'
                      : 'inactiveClasses '
                  }`}
                >
                  All Projects
                </button>
              </li>

              <li className="mb-1 pl-5">
                <button
                  onClick={() => handleProject('academic projects')}
                  className={`inline-block py-2 px-2 md:py-2 lg:px-1 buttons-projects-hand ${
                    showCard === 'academic projects'
                      ? 'activeClasses text-start cursor-pointer mx-2 mr-2 mt-2 rounded-lg px-2.5 py-2.5 me-1 mb-4 buttons-showCard-projects'
                      : 'inactiveClasses'
                  }`}
                >
                  Academic Projects
                </button>
              </li>
              <li className="mb-1 pl-5">
                <button
                  onClick={() => handleProject('personal projects')}
                  className={`inline-block py-2 px-2 md:py-2 lg:px-1 buttons-projects-hand ${
                    showCard === 'personal projects'
                      ? 'activeClasses text-start cursor-pointer mx-2 mr-2 mt-2 rounded-lg px-2.5 py-2.5 me-1 mb-4 buttons-showCard-projects'
                      : 'inactiveClasses'
                  }`}
                >
                  Personal Projects
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

export default MenuButton
