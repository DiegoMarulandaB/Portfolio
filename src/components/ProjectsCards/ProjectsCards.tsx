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
  <div id="projects">
    <div className={` ${showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'}`}>
      <Slide offset="-200px 0px -200px 0px">
        <div className="border border-gray-800 rounded-2xl shadow bg-slate-50 dark:bg-slate-600 dark:border-slate-50 px-1 py-1 mx-2 mr-2 mt-6">
          <div className="overflow-hidden">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                loading={loading}
                src={ImageHref}
                width={690}
                height={690}
                alt="projects"
                className="rounded-t-lg border-slate-800 dark:border-slate-100 transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </a>
          </div>
          <div className="bg-slate-50 dark:bg-slate-600 rounded-b-lg shadow-xl overflow-hidden">
            <span className="block mb-2 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-bold">
              {category}
            </span>
            <h2 className="mb-4 text-1xl font-medium text-blue-800 dark:text-amber-200">{title}</h2>
            <h3 className="mb-4 text-1xl text-slate-800 dark:text-slate-50">{description}</h3>
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-block text-center text-slate-800 hover:text-purple-900 dark:text-slate-100 dark:hover:text-green-300 transition-transform duration-150 ease-in-out hover:scale-125 cursor-pointer text-sm font-bold px-4 py-4 mx-2 mr-2 mt-2 text-1xl"
            >
              {button}
            </a>
          </div>
        </div>
      </Slide>
    </div>
  </div>
)

export default ProjectCards
