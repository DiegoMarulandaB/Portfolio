import { FaBook } from 'react-icons/fa'
import React from 'react'

const Hobbies = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-start mt-5">
        <FaBook className="icons-about" size={24} aria-label="Book Icon" />
        <h3 className="heading-3-user-studies-hobbies ml-2">Hobbies</h3>
      </div>
      <div className=" paragraph paragraph-dark-theme [&>p]:mt-7 text-start mb-4">
        <p>
          I am a rock fan, I enjoy immersing myself in the exciting worlds of video games and explore a wide variety of
          topics through books or articles.
        </p>
      </div>
      <div className=" paragraph paragraph-dark-theme [&>p]:mb-4 [&>p]:mt-4 mb-4">
        {/* <p>
          <span> My favorite writer:</span>
        </p> */}
        <span className="block mb-16 pt-16 sm:pt-0"></span>
      </div>
    </div>
  )
}

export default Hobbies
