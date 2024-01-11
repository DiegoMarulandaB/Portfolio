const Footer = () => {
  return (
    <section id="footer">
      <div className="mx-auto max-w-full px-4 sm:px-1 md:max-w-full  mt-24  bg-slate-100 dark:bg-slate-700">
        <hr className="border-slate-500 dark:border-slate-100 mb-1" />
        <div className="mx-auto p-2 flex flex-col items-center justify-center text-center md:flex-row md:justify-between">
          <div className="flex flex-row space-x-2 mt-1 mb-1 ml-28 mr-28">Diego Marulanda.  👨🏽‍💻  All Rights Reserved</div>
          <div className="flex flex-row space-x-2 mt-1 mb-1 mr-28 ml-28">&copy; 2023-2024</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
