import ProjectCardsProps from '../../types/ProjectsCardsProps'
import Slide from '../Animations/Slide/Slide'
import React from 'react'

const ProjectCards: React.FC<ProjectCardsProps> = ({
  showCard,
  category,
  ImageHref,
  title,
  description,
  button,
  buttonHref,
  loading,
  href,
}) => (
  <div
    className={`w-full px-4 md:w-1/2 xl:w-3/3 ${
      showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'
    }`}
  >
    <Slide offset="-200px 0px -200px 0px">
      <div className="flex flex-col items-center text-center rounded-lg  bg-slate-50 dark:bg-slate-700 shadow-lg mx-auto mr-2 mt-8">
        <div className="overflow-hidden">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img
              loading={loading}
              src={ImageHref}
              width={690}
              height={690}
              alt="projects"
              className="rounded-t-lg transition-transform duration-150 ease-in-out hover:scale-125 aspect-auto object-cover"
            />
          </a>
        </div>
        <div className="mx-2 mr-2 overflow-hidden">
          <div className="relative z-10 px-2 py-2 mt-2 text-start items-center justify-center mx-2 mr-2 w-26 text-1xl">
            <span className="block mb-2 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-bold">
              {category}
            </span>
            <h2 className="mb-4 mt-4 text-1xl text-blue-800 dark:text-amber-200 font-semibold">{title}</h2>
            <h3 className="mb-4 mt-4 text-1xl dark:text-white">{description}</h3>
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center mr-16 text-white bg-slate-600 hover:bg-slate-950 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-4 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100"
              aria-label="Github button to go to the repository"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </Slide>
  </div>
)

export default ProjectCards
