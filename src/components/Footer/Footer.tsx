const Footer = () => {
  return (
    <section id="footer">
      <div className=" mx-auto max-w-full md:max-w-full px-1 sm:px-1 mt-34  bg-slate-100 dark:bg-slate-700">
        <hr className=" dark:border-slate-500 mb-4" />
        <div className="mx-auto p-2 flex flex-col items-center justify-center text-center md:flex-row md:justify-evenly">
          <div className="flex flex-row space-x-2 mt-1 mb-1">Diego Marulanda. All Rights Reserved.</div>
          <div className="flex flex-row space-x-2 mt-1 mb-1">&copy; 2023-2024</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
