'use client' // this is a client component
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineCode, AiOutlineMail } from 'react-icons/ai'

interface Button {
  label: string
  route: string
}

const ButtonAbout: Button[] = [{ label: 'About me', route: '/about' }]
const ButtonProjects: Button[] = [{ label: 'My portfolio', route: '/projects' }]
const ButtonContact: Button[] = [{ label: 'Contact me', route: '/contact' }]

const HomePage = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-32">
        <h1 className="text-1xl text-center font-bold">
          <AnimatedText text="Welcome" className="text-1xl text-left  mr-2 mb-2 mt-2 font-bold " />
        </h1>
      </div>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-1 py-1 sm:py-1 md:py-1 md:flex-row md:space-x-3 md:text-left">
        <div className="md:mt-2 md:w-3/6">
          <Image
            src="/diegoM.jpg"
            alt="profile image"
            width={300}
            height={300}
            className="h-auto max-w-full rounded-full shadow-2xl mb-10  mx-2 mt-6 "
          />
        </div>
        <div className="md:mt-4 md:w-3/6">
          <h1 className="text-base sm:text-1xl md:text-1xl lg:text-1xl xl:text-6xl text-center semibold">
            <AnimatedText text="Hello, I'm Diego!" className=" mr-2 mb-2 mt-2  " />
          </h1>

          <p className="text-1xl text-center  mt-2  font-light">
            <span className="font-bold">Indie frontend developer based in Colombia! </span>passionate about technology,
            geopolitics, general culture and science.
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center items-end justify-center align-bottom space-x-4 mt-6 mr-40 mx-64">
        {ButtonAbout.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center 
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-full px-3 py-3 mb-8 w-40"
            >
              <AiOutlineUser className="icon text-white text-center items-center justify-center  mb-1 mr-2" size={32} />
              About me
            </button>
          </Link>
        ))}
      </div>
      {/* projects */}

      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-1 py-1 sm:py-1 md:py-1 md:flex-row md:space-x-3 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/projects.svg"
            alt="projects image"
            width={300}
            height={300}
            className="mx-2 mt-4 "
          />
        </div>
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-base sm:text-1xl md:text-1xl lg:text-1xl xl:text-6xl text-center semibold">
            <AnimatedText text="My portfolio" className=" mr-2 mb-2 mt-2" />
          </h1>

          <p className="text-1xl text-center mt-2  font-light">
            You can find samples of my projects. I hope you enjoy exploring my work as much as I enjoy creating it!
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center items-end justify-center align-bottom space-x-4 mt-6 mr-40 mx-64">
        {ButtonProjects.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-full px-3 py-3  mb-4 w-40"
            >
              <AiOutlineCode className="icon text-white text-center items-center justify-center  mb-1 mr-2" size={32} />
              My portfolio
            </button>
          </Link>
        ))}
      </div>
      {/* contact */}
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-1 py-1 sm:py-1 md:py-1 md:flex-row md:space-x-3 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/email.svg"
            alt="email image"
            width={300}
            height={300}
            className="mx-2 mt-4 "
          />
        </div>
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-base sm:text-1xl md:text-1xl lg:text-1xl xl:text-6xl text-center semibold">
            <AnimatedText
              text="Contact me"
              className=" mb-2 mt-2"
            />
          </h1>

          <p className="text-1xl text-center mt-2 font-light">Get in touch with me!</p>
        </div>
      </div>

          <div className="flex flex-col text-center items-end justify-center align-bottom space-x-4 mt-6 mr-40 mx-64">
        {ButtonContact.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center 
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-full  px-3 py-3 mb-8  w-40 "
            >
              <AiOutlineMail className="icon text-white text-center items-center justify-center  mb-1 mr-2" size={32} />
              Contact me
            </button>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomePage
