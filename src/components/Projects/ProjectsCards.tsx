import ProjectCardsProps from '../../types/ProjectsCardsProps'

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
    className={`w-full px-4 md:w-1/2 xl:w-3/3  ${
      showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'
    }`}
  >
    <div className="flex flex-col items-center text-center text-white bg-gradient-to-r bg-white dark:bg-slate-600 rounded-3xl outline outline-offset-2 outline-purple-900 dark:outline-amber-300 opacity-90  px-4 py-4 mx-2 mr-2 mt-5 w-46 h-46">
      <div className="overflow-hidden">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img
            loading={loading}
            src={ImageHref}
            width={690}
            height={690}
            alt="portfolio"
            className="w-full mt-6 transition-transform duration-150 ease-in-out hover:scale-125 rounded-md  border-solid border-2 border-gray-200"
          />
        </a>
      </div>
      <div className="flex flex-col text-center items-center justify-center ">
        <div
          className="relative z-10 px-4 py-4 -mt-2 text-center items-center justify-center  text-blue-800 dark:text-green-400 mx-2 mr-2 w-26 text-1xl
        "
        >
          <span className="block mb-2 text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-bold text-primary">
            {category}
          </span>
          <h3 className="mb-4 text-1xl  text-slate-800 dark:text-slate-100 font-bold text-dark">{title}</h3>
          <h3 className="mb-4 text-1xl  text-slate-800 dark:text-slate-100 font-bold text-dark">{description}</h3>
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer dns-prefetch"
            className=" inline-block text-center  text-slate-800 hover:text-purple-900 dark:text-slate-100 dark:hover:text-amber-200 transition-transform  cursor-pointer text-sm font-bold uppercase rounded-md px-4 py-4 mx-2 mr-2 mt-4 w-26 text-1xl"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCards