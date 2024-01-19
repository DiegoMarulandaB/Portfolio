import ProjectCardsProps from '../../types/ProjectsCardsProps'
import Slide from '../Animations/Slide/Slide'

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
    id="projects"
    className={`w-full px-4 md:w-1/2 xl:w-3/3 ${
      showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'
    }`}
  >
    <div>
      <Slide offset="-200px 0px -200px 0px">
        <div className="flex flex-col items-center text-center rounded-2xl shadow bg-slate-50 dark:bg-slate-600 dark:border-slate-50 mx-2 mr-2 mt-6">
          <div className="overflow-hidden">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                loading={loading}
                src={ImageHref}
                width={690}
                height={690}
                alt="projects"
                className="rounded-t-lg transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </a>
          </div>
          <div className="mx-auto overflow-hidden">
            <div className="relative z-10 px-2 py-2 mt-2 text-center items-center justify-center mx-2 mr-2 w-26 text-1xl">
              <span className="block mb-2 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-bold">
                {category}
              </span>
              <h2 className="mb-4 mt-2 text-1xl text-blue-800 dark:text-amber-200 font-semibold">{title}</h2>
              <h3 className="mb-4 mt-2 text-1xl dark:text-white">{description}</h3>
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-block text-center transition-transform duration-150 ease-in-out hover:scale-125 cursor-pointer mx-2 mr-2 mt-2 text-1xl text-white bg-slate-600 hover:bg-slate-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-100"
                aria-label="Github button to go to the repository"
              >
                {button}
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  </div>
)

export default ProjectCards
