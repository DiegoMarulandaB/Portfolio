import React from 'react'

const TimeLine = () => {
  return (
    <div className="w-3/2  mx-auto relative mb-1 ml-2">
      <div className="border-l-2 border-l-gray-400 dark:border-l-white mt-4">
        {/* Card 1 */}
        <div className="transform transition ml-10 relative flex items-center px-2 py-1 text-slate-800 dark:text-white mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* Dot Follwing the Left Vertical Line */}
          <div className="w-5 h-5 bg-slate-800 dark:bg-slate-50  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-1 md:mt-0"></div>
          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-10 h-1 bg-slate-800 dark:bg-slate-50  absolute -left-10 z-0"></div>
          {/* Content that showing in the box */}
          <div className="flex-auto">
            <h4 className="heading-4-studies-timeline mb-1">Digital House 2023 - 2024</h4>
            <p className="paragraph-description-studies-timeline">
              Frontend specialization at Digital House co-created with Mercado Libre and Globant.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="transform transition ml-10 relative flex items-center px-2 py-1  text-slate-800 dark:text-white mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* Dot Follwing the Left Vertical Line*/}
          <div className="w-5 h-5 bg-slate-800 dark:bg-slate-50   absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-1 md:mt-0"></div>

          {/* Line that connecting the box with the vertical line */}
          <div className="w-10 h-1 bg-slate-800 dark:bg-slate-50  absolute -left-10 z-0"></div>
          {/*Content that showing in the box*/}
          <div className="flex-auto">
            <h4 className="heading-4-studies-timeline mb-1">Digital House 2021 - 2023</h4>
            <p className="paragraph-description-studies-timeline">
              Certified Tech Developer career at Digital House co-created with Mercado Libre and Globant.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="transform transition ml-10 relative flex items-center px-2 py-1  text-slate-800 dark:text-white mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* Dot Follwing the Left Vertical Line*/}
          <div className="w-5 h-5 bg-slate-800 dark:bg-slate-50   absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-1 md:mt-0"></div>
          {/* Line that connecting the box with the vertical line */}
          <div className="w-10 h-1 bg-slate-800 dark:bg-slate-50   absolute -left-10 z-0"></div>
          {/* Content that showing in the box*/}
          <div className="flex-auto">
            <h4 className="heading-4-studies-timeline mb-1">Alura Latam 2022 - 2022</h4>
            <p className="paragraph-description-studies-timeline">
              Oracle Next Education Certification is an education and employability program.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="transform transition ml-10 relative flex items-center px-2 py-1 text-slate-800 dark:text-white mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* Dot Follwing the Left Vertical Line */}
          <div className="w-5 h-5 bg-slate-800 dark:bg-slate-50  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-1 md:mt-0"></div>
          {/*  Line that connecting the box with the vertical line */}
          <div className="w-10 h-1 bg-slate-800 dark:bg-slate-50  absolute -left-10 z-0"></div>
          {/* Content that showing in the box  */}
          <div className="flex-auto">
            <h4 className="heading-4-studies-timeline mb-1">MisionTic 2021 - 2021</h4>
            <p className="paragraph-description-studies-timeline">
              Program of the Government of Colombia together with the MinTic, and the Pontificia Bolivariana university
              to train programmers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
