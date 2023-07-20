'use client' // this is a client component
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText/AnimatedText'
import Link from 'next/link'

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
            className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-2 mb-2 font-bold "
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
            className="h-auto max-w-full rounded-full shadow-2xl mb-10 sm:text-1xl md:text-4xl lg:text-7xl  mx-2 "
          />
        </div>
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-2xl text-center sm:text-1xl md:text-2xl lg:text-4xl xl:text-8xl  semibold">
            <AnimatedText
              text="Hi, I'm Diego!"
              className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-2 mb-2 semibold "
            />
          </h1>

          <p className="text-1xl text-left sm:text-1xl md:text-2xl lg:text-2xl xl:text-8xl mt-2  font-light">
            <span className="font-bold">Freelance frontend developer, </span>passionate about technology, geopolitics,
            general culture and science.
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center items-center justify-center  align-bottom space-x-4 mt-4">
        {ButtonAbout.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg px-2 py-2  sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mb-8"
            >
              <svg
                className="w-4 h-4 mr-2 sm:text-1xl md:text-1xl lg:text-2xl xl:text-4xl"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
                  clipRule="evenodd"
                />
              </svg>
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
            className="animate-bounce animate-infinite animate-duration-[1000ms] animate-delay-0 animate-ease-linear sm:text-1xl md:text-4xl lg:text-7xl mx-2 "
          />
        </div>
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-2xl text-center sm:text-1xl md:text-2xl lg:text-4xl xl:text-8xl  semibold">
            <AnimatedText
              text="Projects"
              className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-2 mb-2 semibold "
            />
          </h1>

          <p className="text-1xl text-left sm:text-1xl md:text-2xl lg:text-2xl xl:text-8xl mt-2  font-light">
            You can find samples of my projects. I hope you enjoy exploring my work as much as I enjoy creating it!
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center items-center justify-center  align-bottom space-x-4 mt-4 ">
        {ButtonProjects.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg px-2 py-2  sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mb-4"
            >
              <svg
                className="w-4 h-4 mr-2 sm:text-1xl md:text-1xl lg:text-2xl xl:text-4xl"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.7361611,0.063952038 C13.2551391,0.263360331 13.5227261,0.869148905 13.3338336,1.41701869 L8.54555162,15.3051026 C8.35665911,15.8529724 7.78281676,16.1354563 7.26383885,15.936048 C6.74486095,15.7366397 6.47727387,15.1308511 6.66616638,14.5829813 L11.4544484,0.694897379 C11.6433409,0.147027596 12.2171832,-0.135456255 12.7361611,0.063952038 Z M2.41421356,8.25614867 L5.94974747,11.9885083 C6.34027176,12.4007734 6.34027176,13.0691871 5.94974747,13.4814522 C5.55922318,13.8937173 4.9260582,13.8937173 4.53553391,13.4814522 L0.292893219,9.0026206 C-0.0976310729,8.59035554 -0.0976310729,7.9219418 0.292893219,7.50967674 L4.53553391,3.03084515 C4.9260582,2.61858008 5.55922318,2.61858008 5.94974747,3.03084515 C6.34027176,3.44311021 6.34027176,4.11152395 5.94974747,4.52378901 L2.41421356,8.25614867 Z M17.5857864,8.25614867 L14.0502525,4.52378901 C13.6597282,4.11152395 13.6597282,3.44311021 14.0502525,3.03084515 C14.4407768,2.61858008 15.0739418,2.61858008 15.4644661,3.03084515 L19.7071068,7.50967674 C20.0976311,7.9219418 20.0976311,8.59035554 19.7071068,9.0026206 L15.4644661,13.4814522 C15.0739418,13.8937173 14.4407768,13.8937173 14.0502525,13.4814522 C13.6597282,13.0691871 13.6597282,12.4007734 14.0502525,11.9885083 L17.5857864,8.25614867 Z"
                  clipRule="evenodd"
                />
              </svg>
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
            className="animate-bounce animate-infinite animate-duration-[1000ms] animate-delay-0 animate-ease-linear sm:text-1xl md:text-4xl lg:text-7xl mx-2 mt-6 "
          />
        </div>
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-2xl text-center sm:text-1xl md:text-2xl lg:text-4xl xl:text-8xl semibold">
            <AnimatedText
              text="Contact me"
              className="text-1xl text-left sm:text-1xl md:text-4xl lg:text-7xl xl:text-8xl mr-26 mb-2 semibold "
            />
          </h1>

          <p className="text-1xl text-left sm:text-1xl md:text-2xl lg:text-2xl xl:text-8xl mt-2  font-light">
            Get in touch with me!
          </p>
        </div>
      </div>

      <div className="flex flex-col text-center items-center justify-center  align-bottom space-x-4 mt-4 ">
        {ButtonContact.map((project, index) => (
          <Link key={index} href={project.route}>
            <button
              type="button"
              className="
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300
            //forma boton
            text-center inline-flex items-center
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-r-lg px-2 py-2  sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mb-4"
            >
              <svg
                className="w-4 h-4 mr-2 sm:text-1xl md:text-1xl lg:text-2xl xl:text-4xl"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.844 7.5c-2.481 0-4.438 2.019-4.438 4.5s2.05 4.5 4.531 4.5c.908 0 1.799-.27 2.547-.778.228-.155.295-.466.139-.694-.155-.229-.462-.287-.691-.132-.58.396-1.258.604-1.965.604-1.93 0-3.499-1.57-3.499-3.5s1.446-3.5 3.376-3.5 3.375 1.57 3.375 3.5v.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.75c0-.276-.099-.5-.375-.5-.205 0-.318.124-.396.301-.303-.188-.628-.301-1.01-.301-1.104 0-1.984.896-1.984 2s.904 2 2.008 2c.562 0 1.073-.235 1.438-.609.319.369.664.609 1.192.609.965 0 1.627-.785 1.627-1.75v-.25c0-2.481-1.894-4.5-4.375-4.5zm.125 5.5c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z"
                  clipRule="evenodd"
                />
              </svg>
              Contact me
            </button>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomePage
