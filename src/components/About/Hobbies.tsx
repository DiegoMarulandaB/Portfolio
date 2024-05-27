import { FaBook } from 'react-icons/fa'
import React from 'react'

const Hobbies = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-start mt-3">
        <FaBook className="text-blue-800 dark:text-amber-200 text-2xl mb-3 mt-1" size={24} />
        <span className="text-blue-800 dark:text-amber-200 text-2xl ml-2">Hobbies</span>
      </div>
      <div className="mr-1 [&>p]:mt-7 text-start">
        <p>
          I am a rock fan, I enjoy immersing myself in the exciting worlds of video games and explore a wide variety of
          topics through books or articles.
        </p>
      </div>
      <div className="mr-1 [&>p]:mb-6 [&>p]:mt-8">
        <p> My favorite writer:</p>
        <span className="block mt-8 mb-20">Brandon Sanderson.</span>
      </div>
    </div>
  )
}

export default Hobbies
