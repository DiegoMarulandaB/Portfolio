// import ProjectCardsProps from '../../types/ProjectsCardsProps.types'
// import Slide from '../Animations/Slide/Slide'
// import { BsArrowUpRightSquare } from 'react-icons/bs'
// import React from 'react'
// import Link from 'next/link'

// function capitalize(str: string): string {
//   if (!str) return str
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// }

// const ProjectsCardsCategoryTitle: React.FC<ProjectCardsProps> = ({
//   showCard,
//   category,
//   ImageHref,
//   title,
//   description,
//   button,
//   buttonHref,
//   loading,
//   href,
//   // link,
//   LinkHref,
// }) => (
//   <div
//     className={`w-full px-4 md:w-1/2 xl:w-3/3 ${
//       showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'
//     }`}
//   >
//     <Slide offset="-200px 0px -200px 0px">
//       <div className="flex flex-col items-center text-center rounded-lg bg-slate-50 dark:bg-[#2b2d39] shadow-lg mx-auto mr-2 mt-8">
//         <div className="overflow-hidden">
//           <a href={href} target="_blank" rel="noopener noreferrer">
//             <img
//               loading={loading}
//               src={ImageHref}
//               width={690}
//               height={690}
//               alt="projects"
//               className="img-projects-cards"
//             />
//           </a>
//         </div>
//         <div className="mx-2 mr-2 overflow-hidden">
//           <div className="relative z-10 px-2 py-2 mt-2 text-start items-center justify-center mx-2 mr-2 w-26">
//             <span className="projects-category">{capitalize(category)}</span>
//             <h2 className="projects-title">{title}</h2>
//             <p className="project-description">{description}</p>
//             <a
//               href={buttonHref}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="buttons button-card-projects-github inline-block text-center mr-16 px-2.5 py-2.5 me-1 mb-4"
//               aria-label="Github button to go to the repository"
//             >
//               {button}
//             </a>
//             <Link href={LinkHref} target="_blank" rel="noopener noreferrer">
//               <BsArrowUpRightSquare size={30} className="inline-block text-center cursor-pointer mt-3 mr-28" />
//               {/* {Link} */}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Slide>
//   </div>
// )

// export default ProjectsCardsCategoryTitle

import ProjectCardsProps from '../../types/ProjectsCardsProps.types'
import Slide from '../Animations/Slide/Slide'
import React from 'react'

function capitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const ProjectsCardsCategoryTitle: React.FC<ProjectCardsProps> = ({
  showCard,
  category,
  ImageHref,
  title,
  description,
  button,
  buttonHref,
  href,
  loading,
  // buttonDemo,
  // buttonHrefDemo,
}) => (
  <div
    className={`w-full px-4 md:w-1/2 xl:w-3/3 ${
      showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'
    }`}
  >
    <Slide offset="-200px 0px -200px 0px">
      <div className="flex flex-col items-center text-center rounded-lg bg-slate-50 dark:bg-[#2b2d39] shadow-lg mx-auto mr-2 mt-8">
        <div className="overflow-hidden">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img
              loading={loading}
              src={ImageHref}
              width={690}
              height={690}
              alt="projects"
              className="img-projects-cards"
            />
          </a>
        </div>
        <div className="mx-2 mr-2 overflow-hidden">
          <div className="relative z-10 px-2 py-2 mt-2 text-start items-center justify-center mx-2 mr-2 w-26">
            <span className="projects-category">{capitalize(category)}</span>
            <h2 className="projects-title">{title}</h2>
            <p className="project-description">{description}</p>
            {/* <a
              href={buttonHrefDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="buttons-card-projects-demo buttons inline-block text-center mr-16 rounded-lg  px-2.5 py-2.5 me-1 mb-4"
              aria-label="Github button to go to the repository"
            >
              {buttonDemo}
            </a> */}
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button-card-projects-github buttons inline-block text-center mr-16 rounded-lg  px-2.5 py-2.5 me-1 mb-4"
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

export default ProjectsCardsCategoryTitle