'use client' // this is a client component
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineCode, AiOutlineMail } from 'react-icons/ai'

interface Button {
  label: string
  route: string
}

const ButtonAbout: Button[] = [{ label: 'About', route: '/about' }]
const ButtonProjects: Button[] = [{ label: 'Projects', route: '/projects' }]
const ButtonContact: Button[] = [{ label: 'Contact', route: '/contact' }]

const HomePage = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-32">
        <h1 className="text-2xl text-center sm:text-1xl md:text-2xl lg:text-4xl xl:text-8xl  font-bold">
          <AnimatedText
            text="Welcome"
            className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-2 mb-2 mt-2 font-bold "
          />
        </h1>
      </div>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-1 py-1 sm:py-1 md:py-1 md:flex-row md:space-x-3 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/diegoM.jpg"
            alt="profile image"
            width={300}
            height={300}
            className="h-auto max-w-full rounded-full shadow-2xl mb-10 sm:text-1xl md:text-4xl lg:text-7xl mx-2 mt-6 "
          />
        </div>
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-2xl text-center sm:text-1xl md:text-2xl lg:text-4xl xl:text-8xl  semibold">
            <AnimatedText
              text="Hi, I'm Diego!"
              className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-2 mb-2 mt-2 semibold "
            />
          </h1>

          <p className="text-1xl text-left sm:text-1xl md:text-2xl lg:text-2xl xl:text-8xl mt-2  font-light">
            <span className="font-bold">Freelance frontend developer, </span>passionate about technology, geopolitics,
            general culture and science.
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center items-center justify-center  align-bottom space-x-4 mt-6">
        {ButtonAbout.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg px-3 py-3  sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mb-8"
            >
              <AiOutlineUser className="icon text-white mb-1 mr-1" size={30} />
              About
            </button>
          </Link>
        ))}
      </div>
      {/* projects */}

      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-1 py-1 sm:py-1 md:py-1 md:flex-row md:space-x-3 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/Keyboard.png"
            alt="keywoard image"
            width={300}
            height={300}
            className="animate-bounce animate-infinite animate-duration-[1000ms] animate-delay-0 animate-ease-linear sm:text-1xl md:text-4xl lg:text-7xl mx-2 mt-6 "
          />
        </div>
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-2xl text-center sm:text-1xl md:text-2xl lg:text-4xl xl:text-8xl  semibold">
            <AnimatedText
              text="Projects"
              className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-2 mb-2 mt-2 semibold "
            />
          </h1>

          <p className="text-1xl text-left sm:text-1xl md:text-2xl lg:text-2xl xl:text-8xl mt-2  font-light">
            You can find samples of my projects. I hope you enjoy exploring my work as much as I enjoy creating it!
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center items-center justify-center  align-bottom space-x-4 mt-6 ">
        {ButtonProjects.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg px-3 py-3  sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mb-4"
            >
              <AiOutlineCode className="icon text-white mb-1 mr-1" size={30} />
              Projects
            </button>
          </Link>
        ))}
      </div>
      {/* contact */}
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-1 py-1 sm:py-1 md:py-1 md:flex-row md:space-x-3 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/email.png"
            alt="email image"
            width={300}
            height={300}
            className="animate-bounce animate-infinite animate-duration-[1000ms] animate-delay-0 animate-ease-linear sm:text-1xl md:text-4xl lg:text-7xl mx-2 mt-8 "
          />
        </div>
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-2xl text-center sm:text-1xl md:text-2xl lg:text-4xl xl:text-8xl  semibold">
            <AnimatedText
              text="Contact me"
              className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-12  mb-2 mt-2  semibold "
            />
          </h1>

          <p className="text-1xl text-left sm:text-1xl md:text-2xl lg:text-2xl xl:text-8xl mt-2  font-light">
            Get in touch with me!
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center items-center justify-center  align-bottom space-x-4 mt-6">
        {ButtonContact.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg px-3 py-3 mb-4 mx-2 mt-2 sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl "
            >
              <AiOutlineMail className="icon text-white mb-1 mr-1" size={30} />
              Contact me
            </button>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomePage
