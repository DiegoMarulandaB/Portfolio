import React from 'react'

const ContactButton = () => {
  return (
    <div className="md:5/12 lg:w-5/2">
      <div className="span-contact-experience-about span-underline pt-4 flex flex-col items-start text-start justify-start md:items-center md:text-center md:justify-center mb-1 sm:mb-0">
        <span className="mb-4 mt-[-28px]">Contact me</span>
      </div>
      <div className="flex flex-col-row items-start text-start justify-start md:items-center md:text-center md:justify-center">
        <a
          href="mailto:%20diegomjobs@gmail.com%20?Subject=Aquí%20el%20asunto%20del%20mail"
          className="text-buttons "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact me by email"
        >
          <span className="buttons buttons-email">Email →</span>
        </a>
        <a
          href="https://www.linkedin.com/in/diegomarulandabarrientos/"
          className="text-buttons "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <span className="buttons">Linkedin →</span>
        </a>
        <a
          href="https://github.com/DiegoMarulandaB"
          className="text-buttons "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <span className="buttons">Github →</span>
        </a>
      </div>
    </div>
  )
}

export default ContactButton
