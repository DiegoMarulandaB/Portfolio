import ProjectCards from '../Projects/ProjectsCards'
import React from 'react'

const ProjectsCardsDescription: React.FC<{ showCard: string }> = ({ showCard }) => {
  return (
    <div className=" mb-[60px] max-w-[794px] ml-2 mx-1 mr-1">
      <div className="flex flex-wrap -mx-4 text-1xl">
        <ProjectCards
          loading="lazy"
          ImageHref="assets/webp/profileGithub.webp"
          category="All Projects"
          title="My repository on Github"
          description="Browse all my repositories on GitHub, where you can see a variety of projects from my academic training in MisionTic, Alura Latam, Digital House, as well as my most relevant personal projects."
          button="Github →"
          buttonHref="https://github.com/DiegoMarulandaB"
          href="https://github.com/DiegoMarulandaB"
          showCard={showCard}
        />
        <ProjectCards
          loading="lazy"
          ImageHref="assets/webp/digitalBooking.webp"
          category="Academic Projects"
          title="Digital booking"
          description="MVP to book tours and different activities in various countries. Technologies: Git, Gitlab, React, Java v. 17, JWT, Gradle, Spring Boot, MySQL, AWS, Jest.JS, Postman, Selenium IDE."
          button="Github →"
          buttonHref="https://github.com/DiegoMarulandaB/Digital-booking"
          href="https://github.com/DiegoMarulandaB/Digital-booking"
          showCard={showCard}
        />
        <ProjectCards
          loading="lazy"
          ImageHref="assets/webp/arkanoidGame.webp"
          category="Personal Projects"
          title="Arkanoid clone game"
          description="Arkanoid is a 1986 block-breaking arcade game developed and published by Taito. Wikipedia source. Clone of this game based on Midudev. Technologies: html, css, javaScript."
          button="Github →"
          buttonHref="https://github.com/DiegoMarulandaB/Arkanoid-clone-with-JavaScript"
          href="https://github.com/DiegoMarulandaB/Arkanoid-clone-with-JavaScript"
          showCard={showCard}
        />
        <ProjectCards
          loading="lazy"
          ImageHref="assets/webp/TheSimpsonsApplication.webp"
          category="Academic Projects"
          title="The simpsons application"
          description="Final project of the frontend 2 subject of the frontend specialization in Digital House. Using The Simpsons API with solid principles, clean code, validations. Technologies: Typescript, unit testing."
          button="Github →"
          buttonHref="https://github.com/DiegoMarulandaB/ctd-fe2-proyecto-final-base"
          href="https://github.com/DiegoMarulandaB/ctd-fe2-proyecto-final-base"
          showCard={showCard}
        />
        <ProjectCards
          loading="lazy"
          ImageHref="assets/webp/calculator.webp"
          category="Personal Projects"
          title="Calculator basic"
          description="Project inspired by the FreeCodeCamp course on basic React. Provides an interactive and functional experience for the user. Technologies: Vite compiler, React library."
          button="Github →"
          buttonHref="https://github.com/DiegoMarulandaB/interactive-calculator-react"
          href="https://github.com/DiegoMarulandaB/interactive-calculator-react"
          showCard={showCard}
        />

        <ProjectCards
          loading="lazy"
          ImageHref="assets/webp/RickAndMortyApplication.webp"
          category="Academic Projects"
          title="Rick and Morty application"
          description="Final project of the frontend subject 1 of the frontend specialization in Digital House. Using the Rick and Morty API with documentation. Technologies: TypeScript, Redux, Thunk."
          button="Github →"
          buttonHref="https://github.com/DiegoMarulandaB/ctd-esp-fe1-final"
          href="https://github.com/DiegoMarulandaB/ctd-esp-fe1-final"
          showCard={showCard}
        />
        <ProjectCards
          loading="lazy"
          ImageHref="assets/webp/counterclick.webp"
          category="Personal Projects"
          title="Counter Click"
          description="Project inspired by the FreeCodeCamp course on basic React. Provides an interactive and functional experience for the user. Technologies: Vite compiler, React library."
          button="Github →"
          buttonHref="https://github.com/DiegoMarulandaB/click-counter-freecodecamp"
          href="https://github.com/DiegoMarulandaB/click-counter-freecodecamp"
          showCard={showCard}
        />
        <ProjectCards
          loading="lazy"
          ImageHref="assets/webp/healthApplication.webp"
          category="Academic Projects"
          title="Health application"
          description="Final project of the Frontend 3 subject, of the Certified Tech Developer career at Digital House. Health application using an API, error validations and submission. Technologies: React, Vite."
          button="Github →"
          buttonHref="https://github.com/DiegoMarulandaB/finalFrontEnd"
          href="https://github.com/DiegoMarulandaB/finalFrontEnd"
          showCard={showCard}
        />
      </div>
    </div>
  )
}

export default ProjectsCardsDescription