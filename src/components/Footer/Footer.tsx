const Footer = () => {
  return (
    <section id="footer">
      <div className="mx-auto max-w-full md:max-w-full sm:px-1 bg-slate-100 dark:bg-slate-700">
        <hr className="dark:border-slate-500 mb-4"/>
        <div className="mx-auto flex flex-col items-center justify-center text-center md:flex-row md:justify-center">
          <div className="flex flex-row space-x-2 mt-2 mb-2">
            <span className="text-slate-800 dark:text-white">&copy;&nbsp;2023-2024</span>
            <span className="text-blue-800 dark:text-amber-200">Diego Marulanda.</span>
          </div>
          <div className="flex flex-row space-x-2 mt-2 mb-2">
            <span className="text-slate-800 dark:text-white">&nbsp; All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
