const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="mt-10">
      <div className="mx-auto max-w-full md:max-w-full sm:px-1">
        <div className="mb-4">
          <hr />
        </div>
        <div className="mx-auto flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center space-x-2 ml-6 mr-6">
          <div className="flex flex-row space-x-2 mt-2 mb-2">
            <span className="text-slate-800 dark:text-white">&copy;&nbsp;2023-{currentYear} &nbsp;</span>
            <span className="text-blue-800 dark:text-amber-200">Diego Marulanda.</span>
          </div>
          <div className="flex flex-row space-x-2 mt-2 mb-2">
            <span className="text-slate-800 dark:text-white">All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
