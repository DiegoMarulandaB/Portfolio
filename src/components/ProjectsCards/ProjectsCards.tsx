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
        <div className="flex flex-col items-center text-center border border-gray-800 rounded-2xl shadow bg-slate-50 dark:bg-slate-600 dark:border-slate-50 px-2 py-2 mx-2 mr-2 mt-6">
          <div className="overflow-hidden">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                loading={loading}
                src={ImageHref}
                width={690}
                height={690}
                alt="projects"
                className="rounded-t-lg border-solid border-2 border-slate-500 dark:border-slate-50 transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </a>
          </div>
          <div className="mx-auto shadow-xl overflow-hidden rounded-b-lg">
            <div className="relative z-10 px-2 py-2 -mt-2 text-center items-center justify-center mx-2 mr-2 w-26 text-1xl">
              <span className="block mb-2 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-bold">
                {category}
              </span>
              <h2 className="mb-4 text-1xl text-blue-800 dark:text-amber-200 font-semibold">{title}</h2>
              <h3 className="mb-4 text-1xl dark:text-white">{description}</h3>
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer dns-prefetch"
                className=" inline-block text-center text-slate-700 hover:text-slate-950  dark:text-white dark:hover:text-blue-200 transition-transform duration-150 ease-in-out hover:scale-125 cursor-pointer text-sm font-bold  px-4 py-4 mx-2 mr-2 mt-2 text-1xl"
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
