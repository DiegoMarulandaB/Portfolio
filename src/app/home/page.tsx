'use client' // this is a client component
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Link from 'next/link';
import { AiOutlineUser, AiOutlineCode, AiOutlineMail } from 'react-icons/ai';

// Define the Button interface and buttons
interface Button {
  label: string;
  route: string;
}

const buttons: Button[] = [
  { label: 'About me', route: '/about' },
  { label: 'My portfolio', route: '/projects' },
  { label: 'Contact me', route: '/contact' },
];

const HomePage = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-32">
        <h1 className="text-2xl text-center font-bold">
          <AnimatedText text="👋🏽Welcome" className="text-left mr-2 mb-2 mt-2 font-bold" />
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-3 md:text-left mt-4">
        <div className="md:w-3/3">
          <Image
            src="/diego.jpg"
            alt="profile image"
            width={290}
            height={290}
            className="h-auto max-w-full rounded-full shadow-2xl mb-10 mx-auto md:mx-2 mt-6 md:mt-0 "
          />
        </div>
        <div className="md:w-3/6">
          <h1 className="text-2xl lg:text-6xl text-center font-semibold">
            <AnimatedText text="Hello, I'm Diego!" className="mr-2 mb-2 mt-2" />
          </h1>
          <p className="text-xl text-center mt-2 font-light">
            <span className="font-bold">Indie frontend developer based in Colombia!</span> Passionate about technology,
            geopolitics, general culture, and science.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center mt-6">
        {buttons.map((button, index) => (
          <Link key={index} href={button.route}>
            <button
              type="button"
              className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center 
              hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
            >
              {index === 0 && <AiOutlineUser className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
              {index === 1 && <AiOutlineCode className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
              {index === 2 && <AiOutlineMail className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
              {button.label}
            </button>
          </Link>
        ))}
      </div>

      {/* Projects Section */}
       <div>
        <div className="flex flex-col text-center items-center justify-center ">
          <Image
            src="/projects.svg"
            alt="projects image"
            width={300}
            height={300}
            className="mx-auto md:mx-2 mt-4"
          />
        </div>
        {/* <div className="md:w-1/2">
          <h1 className="text-2xl lg:text-6xl text-center font-semibold">
            <AnimatedText text="My portfolio" className="mr-2 mb-2 mt-2" />
          </h1>
          <p className="text-xl text-center mt-2 font-light">
            You can find samples of my projects. I hope you enjoy exploring my work as much as I enjoy creating it!
          </p>
        </div> */}
      </div>

      <div>
        {/* <Link href="/projects">
          <button
            type="button"
            className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center 
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
          >
            <AiOutlineCode className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />
            My portfolio
          </button>
        </Link> */}
      </div> 

      {/* Contact Section */}
      {/* <div className="flex flex-col md:flex-row md:space-x-3 md:text-left mt-12">
        <div className="md:w-1/2">
          <Image
            src="/email.svg"
            alt="email image"
            width={300}
            height={300}
            className="mx-auto md:mx-2 mt-4"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl lg:text-6xl text-center font-semibold">
            <AnimatedText text="Contact me" className="mr-2 mb-2 mt-2" />
          </h1>
          <p className="text-xl text-center mt-2 font-light">Get in touch with me!</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center mt-6">
        <Link href="/contact">
          <button
            type="button"
            className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center 
            hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
          >
            <AiOutlineMail className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />
            Contact me
          </button>
        </Link>
      </div> */}
    </section>
  );
};

export default HomePage;