import { FaBook } from 'react-icons/fa'
import React from 'react'

const Hobbies = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-start mt-3">
        <FaBook className="icons-about" size={24} />
        <span className="span-about ml-2">Hobbies</span>
      </div>
      <div className=" paragraph paragraph-dark-theme mr-1 [&>p]:mt-7 text-start">
        <p>
          I am a rock fan, I enjoy immersing myself in the exciting worlds of video games and explore a wide variety of
          topics through books or articles.
        </p>
      </div>
      <div className=" paragraph paragraph-dark-theme mr-1 [&>p]:mb-6 [&>p]:mt-6">
        <p> My favorite writer:</p>
        <span className="block mb-16">Brandon Sanderson.</span>
      </div>
    </div>
  )
}

export default Hobbies
