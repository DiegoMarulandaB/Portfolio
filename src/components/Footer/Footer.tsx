const Footer = () => {
  return (
    <section id="footer">
      <div className=" mx-auto max-w-full md:max-w-full sm:px-1 bg-slate-100 dark:bg-slate-700">
        <hr className=" dark:border-slate-500 mb-4"/>
        <div className="mx-auto flex flex-col items-center justify-center text-center md:flex-row md:justify-center">
          <div className="flex flex-row space-x-2 mt-2 mb-2">Diego Marulanda. |  All Rights Reserved. | </div>
          <div className="flex flex-row space-x-2 mt-2 mb-2">&copy; 2023-2024</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
